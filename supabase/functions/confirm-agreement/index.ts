import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

// Monad OS onboarding pages (public/welcome/<slug>.html) post here when a client signs.
// Only known slugs are accepted, and the agreement wording comes from the server, never the browser.
const CLIENTS: Record<string, { first: string; date: string }> = {
  philip: { first: 'Philip', date: '8 October 2026' },
  nils: { first: 'Nils', date: '8 October 2026' },
  ryan: { first: 'Ryan', date: '8 October 2026' },
  anders: { first: 'Anders', date: '8 October 2026' },
  sabrina: { first: 'Sabrina', date: '10 October 2026' },
}

const COMMITMENTS = [
  "I'll attend all four strategic sessions within my 30 days, each booked at least 24 hours ahead, and I'm happy for them to be recorded with Fireflies.",
  "I'll join at least four Monad Activations, ideally as many as I can, booked in advance.",
  "I'll complete each workbook at least 24 hours before its strategic session.",
  "I'll join a recorded final conversation within a week of our last session, and Sidsel can use my words, video and picture from it in her marketing and tag me, once I've seen it.",
  "I've read the agreement and accept it.",
]

// Sabrina's agreement uses the updated booking rhythm: sessions a week ahead, activations 24 hours ahead.
const COMMITMENTS_BY_CLIENT: Record<string, string[]> = {
  sabrina: [
    "I'll attend all four strategic sessions within my 30 days, each booked at least one week ahead, and I'm happy for them to be recorded with Fireflies.",
    "I'll join at least four Monad Activations, ideally as many as I can, each booked at least 24 hours in advance.",
    COMMITMENTS[2], COMMITMENTS[3], COMMITMENTS[4],
  ],
}

const Body = z.object({
  slug: z.string().regex(/^[a-z0-9-]{1,40}$/),
  name: z.string().trim().min(3).max(100),
  email: z.string().trim().email().max(200),
})

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const parsed = Body.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return json({ error: 'Invalid request' }, 400)
  const { slug, name, email } = parsed.data
  const client = CLIENTS[slug]
  if (!client) return json({ error: 'Not available' }, 404)

  const time = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/London',
  }).format(new Date()) + ' (London)'
  const templateData = {
    first: client.first, agreementDate: client.date, name, email, time, commitments: COMMITMENTS_BY_CLIENT[slug] ?? COMMITMENTS,
    pageUrl: `https://monadmethod.com/welcome/${slug}`,
  }
  const key = `agreement-${slug}-${email.toLowerCase()}`

  try {
    const owner = await sendTemplateEmail('agreement-signed-owner', 'sidsel@loschenkohl.com', {
      templateData, idempotencyKey: `${key}-owner`, fromName: 'Monad OS', replyTo: email,
    })
    const clientCopy = await sendTemplateEmail('agreement-signed', email, {
      templateData, idempotencyKey: `${key}-client`, fromName: 'Sidsel Løschenkohl', replyTo: 'sidsel@loschenkohl.com',
    })
    return json({ owner: owner.sent, client: clientCopy.sent })
  } catch (e) {
    console.error('send failed', (e as any)?.code ?? (e as Error).message)
    return json({ error: 'Send failed' }, 500)
  }
})
