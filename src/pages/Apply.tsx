import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import usePageMeta from "@/hooks/usePageMeta";
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";
import brandonPhoto from "@/assets/testimonials/brandon-hadwin-founder-healingwithbrandon.png";
import alexandraPhoto from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import biancaPhoto from "@/assets/testimonials/bianca-polizzi-founder-polizzi-media.png";
import jessicaPhoto from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import antonPhoto from "@/assets/testimonials/anton-rytter-founder.png";

const VSL_EMBED_URL = "https://fast.wistia.net/embed/iframe/zzzwlio10p?videoFoam=true&playerColor=111111";
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";
const ACTIVATION_URL = "https://luma.com/monadmethod";

const founders = [
  { name: "Brandon Hadwin", photo: brandonPhoto },
  { name: "Alexandra Feldman", business: "Of The Islands", photo: alexandraPhoto },
  { name: "Jessica Rainey", business: "Wildflower Woman", photo: jessicaPhoto },
  { name: "Bianca Polizzi", business: "Polizzi Media", photo: biancaPhoto },
  { name: "Anton Rytter", business: "Kintsugi Studio", photo: antonPhoto },
];

const withItems = [
  "Your state shifts first, directly, through live energy activations",
  "What's been running you gets named, out loud, in voice-note self-inquiry",
  "Clarity turns into decisions, delegation and structure in strategic sessions",
  "A small group of founders doing the same work alongside you",
  "Nobody telling you what to do. The answers come from you",
  "Complete discretion",
];
const withoutItems = [
  "You keep managing symptoms: another app, another retreat, more willpower",
  "Strategy that never touches what's driving your decisions",
  "The same patterns recycling. Different year, same ceiling",
  "Performing well while quietly paying for it with your health, relationships or sense of meaning",
];
const process = [
  ["Apply", "A few short questions. If it looks like a fit, you book a call."],
  ["A call with me", "We talk about where you are, what you're building and whether Monad OS is right for you. No pressure, no pitch."],
  ["Your 30 days", "Live energy activations, weekly voice-note self-inquiry and strategic sessions, in a small group of up to eight founders, with private time with me built in."],
  ["Compounding", "Each round goes deeper than the last. Founders who want to keep going are invited into long-term support."],
];
const cases: { headline: string; quote?: string; name?: string; photo?: string; attribution?: string; wide?: boolean }[] = [
  { headline: "How a talent agency CEO stopped being the bottleneck, and had the best quarter in the business's history the quarter she gave birth.", attribution: "CEO, talent management agency" },
  { headline: "How a founder finally launched the platform she'd been sitting on for eight years.", attribution: "Founder" },
  { headline: "How Brandon realized he was the business, and cleared what was holding it back.", quote: "I didn't realize that it was me. I was the business. And in order for the business to work, I needed to clear things inside of me.", name: "Brandon Hadwin", photo: brandonPhoto },
  { headline: "How Alexandra moved work that had stalled for reasons that had nothing to do with skill.", quote: "It wasn't anything technical. I knew how to do all these things, but it wasn't moving because it was really me.", name: "Alexandra Feldman", photo: alexandraPhoto },
  { headline: "Why a somatic practitioner calls it support she hasn't felt anywhere else.", quote: "I work with somatic practices as part of my job. But there's such a gentle, receiving, energetic support in these energy activations that I just haven't felt anywhere else.", name: "Jessica Rainey", photo: jessicaPhoto, wide: true },
];
const forItems = [
  "You're the business, and every decision, client and problem still comes back to you",
  "You can't switch off, and you're running on empty more often than you'd admit",
  "You've hit the targets and it doesn't feel the way you thought it would",
  "You've tried coaching, retreats or frameworks and found them helpful but incomplete",
  "You're open to energy work as a real mechanism for change",
];
const notForItems = [
  "You want a quick fix or a motivational boost",
  "You want someone to tell you what to do",
  "You're not willing to be honest about what's really going on",
  "You're in crisis and need clinical mental health support",
];
const faqs = [
  ["Do I need to know my purpose?", "No. That's usually something the work surfaces, not something you bring to it."],
  ["Will you tell me what to do?", "No. I won't hand you a playbook. The work is getting you back to your own judgment, so the decisions come from you, and they hold."],
  ["What's an energy activation?", "A guided, music-driven session of about an hour, done lying down from home. Nothing to learn. You just show up."],
  ["How much time does it take?", "About three to four hours a week."],
  ["Is it group or private?", "A small group of up to eight founders, with private time with me built in. A fully private version is available on request."],
  ["Is this confidential?", "Completely. What you share stays between us and the group, and the group agrees to the same."],
  ["What's the investment?", "Monad OS is a premium program. We go through it on your call, once we know where you are and whether it's the right fit."],
];
const absenceOptions = ["It would run fine", "It would slow down", "It would stall without me", "It would fall apart"] as const;
const investmentOptions = ["Yes", "Not right now"] as const;
const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your first name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  whatsapp_number: z.string().trim().min(7, "Please enter your WhatsApp number, including country code.").max(40).regex(/^\+?[0-9 ()-]+$/, "Please enter a valid phone number."),
});
const answerSchema = z.object({
  business: z.string().trim().min(1, "Please tell me what you do.").max(300),
  absence_impact: z.enum(absenceOptions, { required_error: "Please choose an answer." }),
  recurring_pattern: z.string().trim().min(1, "Please share the pattern you keep running into.").max(2000),
  desired_outcome: z.string().trim().min(1, "Please share what would be different.").max(2000),
  investment_readiness: z.enum(investmentOptions, { required_error: "Please choose an answer." }),
  referral_source: z.string().trim().max(300).optional(),
});
type AnswerKey = keyof z.infer<typeof answerSchema>;
type Answers = Partial<Record<AnswerKey, string>>;
const questions: { key: AnswerKey; label: string; type: "text" | "textarea" | "choice"; options?: readonly string[]; optional?: boolean }[] = [
  { key: "business", label: "What do you do, and what's your business?", type: "text" },
  { key: "absence_impact", label: "If you stepped away for a month, what would happen to the business?", type: "choice", options: absenceOptions },
  { key: "recurring_pattern", label: "What's the pattern you keep running into that strategy hasn't fixed?", type: "textarea" },
  { key: "desired_outcome", label: "If the next 30 days went really well, what would be different?", type: "textarea" },
  { key: "investment_readiness", label: "Monad OS is a paid 30-day program. If it's the right fit, are you ready to invest in yourself now?", type: "choice", options: investmentOptions },
  { key: "referral_source", label: "How did you find me? (optional)", type: "text", optional: true },
];

const cardClass = "rounded-2xl border border-funnel-border bg-card p-7 shadow-funnel sm:p-8";
const buttonClass = "h-auto w-full rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3px] text-accent-foreground hover:bg-accent/90 sm:w-auto";
const headingClass = "text-center text-[32px] font-bold leading-[1.1] tracking-normal text-foreground sm:text-[48px]";
const bodyClass = "text-[18px] font-normal leading-[1.7] text-foreground";
const sectionClass = "px-4 py-[72px] sm:py-28";

function Badge({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className="mb-6 text-center"><span className={`inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[0.06em] ${light ? "bg-card text-foreground" : "bg-ink text-ink-foreground"}`}><span className="h-2 w-2 rounded-full bg-accent" />{children}</span></div>;
}
function ApplyLink({ children }: { children: React.ReactNode }) {
  return <Button asChild className={buttonClass}><a href="#apply">{children}</a></Button>;
}
function ItemList({ items, positive }: { items: string[]; positive: boolean }) {
  return <ul className="mt-7 space-y-5">{items.map((item) => <li key={item} className={`flex items-start gap-3 text-[18px] font-normal leading-[1.7] ${positive ? "text-foreground" : "text-foreground/70"}`}><span aria-hidden="true" className={`mt-[1px] shrink-0 text-[18px] font-bold ${positive ? "text-accent" : "text-foreground/70"}`}>{positive ? "✓" : "×"}</span><span>{item}</span></li>)}</ul>;
}

const Apply = () => {
  usePageMeta("Monad OS | Sidsel Løschenkohl", "A 30-day program for founders who are the business. Watch the video, then apply.", { canonical: "https://www.monadmethod.com/apply", ogType: "website" });
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: "", email: "", whatsapp_number: "" });
  const [lead, setLead] = useState<{ id: string; token: string } | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<"form" | "ready" | "activation">("form");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const current = questions[step];

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://fast.wistia.net/assets/external/E-v1.js"]');
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://fast.wistia.net/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);
  useEffect(() => {
    if (result !== "ready") return;
    const handleEvent = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      if ((event.data as { event?: string } | null)?.event === "calendly.event_scheduled") navigate("/apply/booked");
    };
    window.addEventListener("message", handleEvent);
    return () => window.removeEventListener("message", handleEvent);
  }, [navigate, result]);

  const calendlyEmbedUrl = useMemo(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", window.location.hostname);
    if (contact.name) url.searchParams.set("name", contact.name);
    if (contact.email) url.searchParams.set("email", contact.email);
    return url.toString();
  }, [contact.email, contact.name]);

  const start = async () => {
    const parsed = contactSchema.safeParse(contact);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your details."); return; }
    setSaving(true); setError("");
    const id = crypto.randomUUID();
    const token = crypto.randomUUID();
    const payload: TablesInsert<"applications"> = { id, edit_token: token, name: parsed.data.name, email: parsed.data.email, whatsapp_number: parsed.data.whatsapp_number, status: "started" };
    const { error: saveError } = await supabase.from("applications").insert(payload);
    setSaving(false);
    if (saveError) { setError("Your application could not be saved. Please try again."); return; }
    setLead({ id, token });
  };
  const next = async () => {
    if (!lead || !current) return;
    const value = answers[current.key] ?? "";
    const parsed = answerSchema.shape[current.key].safeParse(current.optional && !value.trim() ? undefined : value);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please complete this question."); return; }
    setSaving(true); setError("");
    const { error: saveError } = await supabase.rpc("save_application_answer", {
      p_application_id: lead.id, p_application_token: lead.token, p_field: current.key,
      p_answer: value.trim(), p_complete: step === questions.length - 1,
    });
    setSaving(false);
    if (saveError) { setError("Your answer could not be saved. Please try again."); return; }
    if (step === questions.length - 1) setResult(answers.investment_readiness === "Not right now" ? "activation" : "ready");
    else setStep((previous) => previous + 1);
  };

  return <div className="min-h-screen bg-funnel-warm font-sans text-foreground">
    <main>
      <section className={`${sectionClass} bg-funnel-warm pt-16 sm:pt-24`}>
        <div className="mx-auto max-w-[1000px] text-center">
          <h1 className="mx-auto max-w-[900px] text-[40px] font-bold leading-none tracking-[-0.5px] text-foreground md:text-[72px]">The meaning ceiling:<br />why the founder who built the business becomes what's holding it back.</h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[20px] font-normal leading-[1.7] text-foreground">You've outgrown the way you've been operating. Here's what changes when you clear it.</p>
          <div className="mt-14 flex items-center justify-center gap-3 text-[20px] font-semibold leading-[1.35]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[20px] text-accent-foreground">1</span>Watch the video</div>
          <div className="mx-auto mt-6 aspect-video w-full max-w-[800px] overflow-hidden rounded-2xl bg-ink shadow-funnel-video">
            {VSL_EMBED_URL ? <iframe src={VSL_EMBED_URL} title="Monad OS" className="h-full w-full border-0" allow="autoplay; fullscreen" allowFullScreen /> : <div className="flex h-full items-center justify-center"><span className="h-0 w-0 border-b-[16px] border-l-[26px] border-t-[16px] border-b-transparent border-l-ink-foreground border-t-transparent" /></div>}
          </div>
          <div id="apply" className="mt-16 scroll-mt-6">
            <div className="flex items-center justify-center gap-3 text-[20px] font-semibold leading-[1.35]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[20px] text-accent-foreground">2</span>Apply here</div>
            <div className={`${cardClass} mx-auto mt-6 max-w-[640px] text-left`}>
              {result === "form" && !lead && <form onSubmit={(event) => { event.preventDefault(); void start(); }} className="space-y-5">
                 <label className="block text-[14px] font-normal text-foreground">First name<Input autoComplete="given-name" maxLength={100} value={contact.name} onChange={(event) => { setContact({ ...contact, name: event.target.value }); setError(""); }} className="mt-2 h-12 border-funnel-border bg-card text-[18px]" /></label>
                 <label className="block text-[14px] font-normal text-foreground">Email<Input type="email" autoComplete="email" maxLength={255} value={contact.email} onChange={(event) => { setContact({ ...contact, email: event.target.value }); setError(""); }} className="mt-2 h-12 border-funnel-border bg-card text-[18px]" /></label>
                 <label className="block text-[14px] font-normal text-foreground">WhatsApp number<Input type="tel" autoComplete="tel" placeholder="include country code" maxLength={40} value={contact.whatsapp_number} onChange={(event) => { setContact({ ...contact, whatsapp_number: event.target.value }); setError(""); }} className="mt-2 h-12 border-funnel-border bg-card text-[18px]" /></label>
                {error && <p role="alert" className="text-[14px] text-accent">{error}</p>}
                <Button type="submit" disabled={saving} className={buttonClass}>Continue</Button>
                 <p className="text-center text-[14px] font-normal leading-[1.7] text-foreground/70">By continuing you agree to be contacted about your application. <a href="/privacy-policy" className="underline">Privacy</a> · <a href="/terms-of-service" className="underline">Terms</a></p>
              </form>}
              {result === "form" && lead && current && <div>
                <div className="mb-8 h-1 overflow-hidden rounded-full bg-funnel-border"><div className="h-full bg-accent transition-[width]" style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
                 <label htmlFor={`answer-${current.key}`} className="block text-[20px] font-semibold leading-[1.35] text-foreground">{current.label}</label>
                <div className="mt-5">
                   {current.type === "choice" ? <div className="grid gap-3">{current.options?.map((option) => <Button key={option} type="button" variant="outline" onClick={() => { setAnswers({ ...answers, [current.key]: option }); setError(""); }} className={`h-auto min-h-12 w-full justify-start whitespace-normal rounded-lg border-funnel-border px-4 py-3 text-left text-[18px] font-normal leading-[1.7] ${answers[current.key] === option ? "border-foreground bg-funnel-warm text-foreground" : "bg-card text-foreground"}`}>{option}</Button>)}</div> : current.type === "textarea" ? <Textarea id={`answer-${current.key}`} rows={4} maxLength={2000} value={answers[current.key] ?? ""} onChange={(event) => { setAnswers({ ...answers, [current.key]: event.target.value }); setError(""); }} className="border-funnel-border bg-card text-[18px]" /> : <Input id={`answer-${current.key}`} maxLength={current.key === "business" || current.key === "referral_source" ? 300 : 2000} value={answers[current.key] ?? ""} onChange={(event) => { setAnswers({ ...answers, [current.key]: event.target.value }); setError(""); }} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); void next(); } }} className="h-12 border-funnel-border bg-card text-[18px]" />}
                </div>
                {error && <p role="alert" className="mt-4 text-[14px] text-accent">{error}</p>}
                 <div className="mt-8 flex flex-col-reverse items-center justify-between gap-5 sm:flex-row"><Button variant="link" disabled={saving} onClick={() => { if (step === 0) setLead(null); else setStep(step - 1); setError(""); }} className="px-0 text-[14px] font-normal text-foreground">Back</Button><Button disabled={saving} onClick={() => void next()} className={buttonClass}>Next</Button></div>
              </div>}
              {result === "ready" && <div className="text-center"><h3 className="text-[20px] font-semibold leading-[1.35]">Thank you. Choose a time for your call.</h3><iframe title="Choose a time for your call" src={calendlyEmbedUrl} className="mt-8 h-[720px] w-full border-0" /></div>}
              {result === "activation" && <div className="text-center"><h3 className="text-[20px] font-semibold leading-[1.35]">Thank you. The best place to start is an energy activation.</h3><Button asChild className={`${buttonClass} mt-8`}><a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer">Join an activation</a></Button></div>}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-funnel-border bg-funnel-warm px-4 py-14 text-center">
        <div className="mx-auto max-w-[1000px]"><p className="text-[14px] font-normal uppercase text-foreground">Trusted by founders and creators</p><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{founders.map((founder) => <div key={founder.name} className={`${cardClass} flex min-h-[116px] flex-col items-center justify-center gap-2 p-3`}><img src={founder.photo} alt="" className="h-11 w-11 rounded-full object-cover" loading="lazy" /><div><p className="text-[14px] font-semibold leading-[1.35]">{founder.name}</p>{founder.business && <p className="mt-1 text-[14px] font-normal text-foreground/70">{founder.business}</p>}</div></div>)}</div><p className="mt-7 text-[14px] font-normal text-foreground/70">200+ founders, leaders and creators have experienced the work.</p></div>
      </section>

      <section className={`${sectionClass} bg-funnel-alt`}><div className="mx-auto max-w-[720px]"><Badge>Sound familiar?</Badge><h2 className={headingClass}>The ceiling<br />nobody sees.</h2><div className={`${cardClass} ${bodyClass} mt-10 space-y-5`}><p>You've built something real. Revenue, clients, results. People trust you and rely on you. From the outside, it's working.</p><p className="font-semibold text-foreground">But something isn't matching.</p><p>You hit the number you spent years chasing and barely felt it. The drive that built the business has turned into pressure you can't switch off. Some days you can't stop working. Other days you can't make yourself open your laptop.</p><p>Every decision still runs through you. You've hired senior people, tightened the systems, brought in a sharper strategy and joined another mastermind. Some of it helped. None of it touched the thing actually holding you back.</p><p className="font-semibold text-foreground">The ceiling is internal. It's the operating system you built the business on, installed long before the business existed.</p></div></div></section>

      <section className={`${sectionClass} bg-funnel-warm`}><div className="mx-auto max-w-[720px] text-center"><Badge>What changes</Badge><h2 className={headingClass}>When your state shifts,<br />everything downstream shifts with it.</h2><div className={`${bodyClass} mx-auto mt-9 max-w-[640px] space-y-5`}><p>The second-guessing stops. Your boundaries hold. Delegation starts to feel natural.</p><p>You stop looking outside for the answer. Your own judgment comes back online, and decisions come from a place you trust.</p><p>You keep building, without it costing you your health, your peace or your relationships.</p><p className="font-semibold text-foreground">That's the work.</p></div></div></section>

      <section className={`${sectionClass} bg-funnel-alt`}><div className="mx-auto max-w-[1000px]"><h2 className={headingClass}>Same system,<br />or a new one.</h2><div className="mt-10 grid gap-5 md:grid-cols-2"><article className={cardClass}><h3 className="text-[20px] font-semibold leading-[1.35]">Change the state you operate from</h3><ItemList items={withItems} positive /></article><article className={cardClass}><h3 className="text-[20px] font-semibold leading-[1.35]">Keep running the same system</h3><ItemList items={withoutItems} positive={false} /></article></div></div></section>

      <section className={`${sectionClass} bg-funnel-warm`}><div className="mx-auto max-w-[720px]"><Badge>How it works</Badge><h2 className={headingClass}>The process.</h2><div className="mt-10 space-y-4">{process.map(([title, description], index) => <article key={title} className={`${cardClass} flex items-start gap-5`}><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-funnel-redsoft text-[14px] font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-[20px] font-semibold leading-[1.35]">{title}</h3><p className={`${bodyClass} mt-2`}>{description}</p></div></article>)}</div></div></section>

      <section className={`${sectionClass} bg-funnel-alt`}><div className="mx-auto max-w-[1000px]"><Badge>Results</Badge><h2 className={headingClass}>What founders experience.</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{cases.map((story) => <article key={story.headline} className={`${cardClass} flex flex-col ${story.wide ? "md:col-span-2" : ""}`}><h3 className="text-[20px] font-semibold leading-[1.35]">{story.headline}</h3>{story.quote && <blockquote className="mt-5 text-[18px] font-normal italic leading-[1.7] text-foreground">“{story.quote}”</blockquote>}{story.name && story.photo ? <div className="mt-auto flex items-center gap-3 pt-6"><img src={story.photo} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" /><span className="text-[14px] font-normal">{story.name}</span></div> : <p className="mt-auto pt-6 text-[14px] font-normal text-foreground/70">{story.attribution}</p>}</article>)}</div><div className="mt-10 text-center"><ApplyLink>APPLY NOW</ApplyLink></div></div></section>

      <section className={`${sectionClass} bg-funnel-warm`}><div className="mx-auto max-w-[1000px]"><Badge>Not for everyone</Badge><h2 className={headingClass}>This is deliberately small.</h2><p className={`${bodyClass} mx-auto mt-6 max-w-[640px] text-center`}>I work with a small number of founders at a time, so the work can go deep.</p><div className="mt-10 grid gap-5 md:grid-cols-2"><article className={cardClass}><h3 className="text-[20px] font-semibold leading-[1.35]">This is for you if.</h3><ItemList items={forItems} positive /></article><article className={cardClass}><h3 className="text-[20px] font-semibold leading-[1.35]">This isn't for you if.</h3><ItemList items={notForItems} positive={false} /></article></div></div></section>

      <section className={`${sectionClass} bg-funnel-alt`}><div className="mx-auto max-w-[720px]"><Badge>Questions</Badge><h2 className={headingClass}>Everything you need to know.</h2><Accordion type="single" collapsible className="mt-10 space-y-3">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className={`${cardClass} px-6 py-0`}><AccordionTrigger className="group py-5 text-left text-[20px] font-semibold leading-[1.35] text-foreground hover:no-underline [&>svg]:hidden">{question}<span aria-hidden="true" className="ml-4 shrink-0 text-[24px] font-normal leading-none group-data-[state=open]:hidden">+</span><span aria-hidden="true" className="ml-4 hidden shrink-0 text-[24px] font-normal leading-none group-data-[state=open]:block">−</span></AccordionTrigger><AccordionContent className={`${bodyClass} pb-5`}>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className={`${sectionClass} bg-ink text-center`}><div className="mx-auto max-w-[800px]"><Badge light>Limited availability</Badge><h2 className={`${headingClass} text-ink-foreground`}>The drive that got you here<br />can't take you where you're going.</h2><p className="mx-auto mt-7 max-w-[600px] text-[18px] font-normal leading-[1.7] text-ink-foreground/70">Monad OS runs in small groups of up to eight founders. The next group starts in November. If this resonates, apply now.</p><div className="mt-9"><ApplyLink>APPLY NOW</ApplyLink></div></div></section>
    </main>
    <footer className="bg-funnel-warm px-4 py-8 text-center text-[14px] font-normal text-foreground/70">© Monad Studios Ltd 2026 · <a href="/privacy-policy" className="hover:underline">Privacy</a> · <a href="/terms-of-service" className="hover:underline">Terms</a></footer>
  </div>;
};

export default Apply;
