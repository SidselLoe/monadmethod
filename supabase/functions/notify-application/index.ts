import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3.23.8'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const Body = z.object({
  applicationId: z.string().uuid(),
  token: z.string().uuid(),
  stage: z.enum(['started', 'complete']),
})

const QUESTIONS: [string, string][] = [
  ['name', 'First name'],
  ['email', 'Email'],
  ['whatsapp_number', 'WhatsApp number'],
  ['business', "What do you do, and what's your business?"],
  ['absence_impact', 'If you stepped away for a month, what would happen to the business?'],
  ['recurring_pattern', "What's the pattern you keep running into that strategy hasn't fixed?"],
  ['desired_outcome', 'If the next 30 days went really well, what would be different?'],
  ['investment_readiness', "Monad OS is a paid 30-day program. If it's the right fit, are you ready to invest in yourself now?"],
  ['referral_source', 'How did you find me?'],
]

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const parsed = Body.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return json({ error: 'Invalid request' }, 400)
  const { applicationId, token, stage } = parsed.data

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
  const { data: app, error } = await admin.from('applications').select('*').eq('id', applicationId).maybeSingle()
  if (error) { console.error('lookup failed', error.code); return json({ error: 'Lookup failed' }, 500) }
  // Only the visitor holding the private token can trigger, and only for the matching stage.
  if (!app || app.edit_token !== token || app.status !== stage) return json({ error: 'Not available' }, 404)

  const digits = String(app.whatsapp_number ?? '').replace(/\D/g, '')
  const when = stage === 'complete' ? app.updated_at : app.created_at
  const time = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/London',
  }).format(new Date(when)) + ' (London)'

  const base = {
    name: app.name, email: app.email, whatsapp: app.whatsapp_number,
    whatsappLink: digits ? `https://wa.me/${digits}` : '', time,
  }
  const templateData = stage === 'started' ? base : {
    ...base,
    readiness: app.investment_readiness,
    answers: QUESTIONS.map(([key, question]) => ({ question, answer: String(app[key] ?? '') })),
  }

  try {
    const result = await sendTemplateEmail(`application-${stage}`, 'sidsel@loschenkohl.com', {
      templateData,
      idempotencyKey: `application-${stage}-${applicationId}`,
      fromName: 'Monad OS applications',
      replyTo: app.email,
    })
    return json(result)
  } catch (e) {
    console.error('send failed', (e as any)?.code ?? (e as Error).message)
    return json({ error: 'Send failed' }, 500)
  }
})
