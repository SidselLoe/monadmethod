import { useEffect, useMemo, useRef, useState } from "react";
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
import AnimatedFounderCount from "@/components/AnimatedFounderCount";
import MonadMark from "@/components/MonadMark";
import sidselPhoto from "@/assets/sidsel-photo.jpg";
import closingSea from "@/assets/apply-closing-sea.jpg";
import TestimonialVideoTile from "@/components/TestimonialVideoTile";

const VSL_EMBED_URL = "https://fast.wistia.net/embed/iframe/zzzwlio10p?videoFoam=true&playerColor=111111";
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";
const ACTIVATION_URL = "https://luma.com/monadmethod";

const founders = [
  { name: "Brandon Hadwin", business: "Healing with Brandon", photo: brandonPhoto },
  { name: "Alexandra Feldman", business: "Of The Islands", photo: alexandraPhoto },
  { name: "Jessica Rainey", business: "Wildflower Woman", photo: jessicaPhoto },
  { name: "Bianca Polizzi", business: "Polizzi Media", photo: biancaPhoto },
  { name: "Anton Rytter", business: "Kintsugi Studio", photo: antonPhoto },
];

const withItems = [
  "Your state shifts first, directly, through live energy activations",
  "What's been running you gets named, out loud, in voice-note self-inquiry",
  "Clarity turns into decisions, delegation and structure in strategic sessions",
  "A small community receiving alongside you in the live activations",
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
  ["Your 30 days", "10 live energy activations, four weeks of voice-note self-inquiry, four private sessions with me and WhatsApp support."],
  ["Compounding", "Each round goes deeper than the last. If you want to keep going, you're invited into long-term support."],
];
const cases: { headline: string; quote?: string; name?: string; photo?: string; attribution?: string; wide?: boolean }[] = [
  { headline: "How a talent agency CEO stopped being the bottleneck, and had the best quarter in the business's history the quarter she gave birth.", attribution: "CEO, talent management agency" },
  { headline: "How a founder finally launched the platform she'd been sitting on for eight years.", attribution: "Founder" },
  { headline: "How Brandon realized he was the business, and cleared what was holding it back.", quote: "I didn't realize that it was me. I was the business. And in order for the business to work, I needed to clear things inside of me.", name: "Brandon Hadwin", photo: brandonPhoto },
  { headline: "How Alexandra moved work that had stalled for reasons that had nothing to do with skill.", quote: "It wasn't anything technical. I knew how to do all these things, but it wasn't moving because it was really me.", name: "Alexandra Feldman", photo: alexandraPhoto },
  { headline: "Why a somatic practitioner calls it support she hasn't felt anywhere else.", quote: "I work with somatic practices as part of my job. But there's such a gentle, receiving, energetic support in these energy activations that I just haven't felt anywhere else.", name: "Jessica Rainey", photo: jessicaPhoto, wide: true },
];
const forItems = [
  "Everything comes back to you: every decision, every client, every problem",
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
  ["Is it group or private?", "The activations run live in small groups. They are mostly you, receiving, with a few minutes to share at the end if you want to. Everything else is one to one: your voice notes, your four sessions and WhatsApp."],
  ["I'm not keen on groups. Is this still for me?", "Yes. You don't need to speak in the activations. Most people simply lie down and receive. All the strategic work is private."],
  ["Does this work online?", "Yes. You do the activations lying down at home, in your own space, with nothing to perform. That's part of why they work. Strategic sessions run on video."],
  ["Is this confidential?", "Yes. Your private sessions stay between us. In the group, sharing is optional and you choose what you bring. What's shared stays in the group."],
  ["What's the investment?", "£1,500 if you start in November, in full or in two installments. From 1 December it is £2,500."],
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

const cardClass = "rounded-xl border border-border bg-card p-7 sm:p-8";
const buttonClass = "h-auto w-full rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3px] text-accent-foreground hover:bg-accent/90 sm:w-auto";
const headingClass = "text-center text-[32px] font-normal leading-[1.1] tracking-[-0.025em] text-foreground sm:text-[48px]";
const bodyClass = "text-[18px] font-normal leading-[1.7] text-foreground";
const sectionClass = "px-4 py-[72px] sm:px-8 sm:py-28";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">{children}</p>;
}
function ApplyLink({ children }: { children: React.ReactNode }) {
  return <Button asChild className={buttonClass}><a href="#apply">{children}</a></Button>;
}
function ItemList({ items, positive, negativeRed = false }: { items: string[]; positive: boolean; negativeRed?: boolean }) {
  return <ul className="mt-7 space-y-5">{items.map((item) => <li key={item} className={`flex items-start gap-3 text-[18px] font-normal leading-[1.7] ${positive ? "text-foreground" : "text-foreground/60"}`}>{positive ? <MonadMark className="mt-1 h-5 w-5 text-mint" /> : negativeRed ? <MonadMark className="mt-1 h-5 w-5 text-accent" /> : <span aria-hidden="true" className="mt-[-2px] w-5 shrink-0 text-center text-[24px] font-normal text-foreground/50">×</span>}<span>{item}</span></li>)}</ul>;
}

const videoStories = cases.filter((story) => story.photo);
const textStories = cases.filter((story) => !story.photo);
const testimonialVideos: Record<string, { src: string; poster: string }> = {
  "Brandon Hadwin": { src: "/videos/brandon-testimonial.mp4", poster: "/videos/brandon-testimonial-poster.jpg" },
  "Alexandra Feldman": { src: "/videos/alexandra-testimonial.mp4", poster: "/videos/alexandra-testimonial-poster.jpg" },
  "Jessica Rainey": { src: "/videos/jessica-testimonial.mp4", poster: "/videos/jessica-testimonial-poster.jpg" },
};

function ResultVideo({ story }: { story: (typeof cases)[number] }) {
  if (!story.name) return null;
  const media = testimonialVideos[story.name];
  if (!media) return null;
  return <article>
    <TestimonialVideoTile name={story.name} {...media} />
    <h3 className="mt-6 text-[20px] font-extrabold leading-[1.35] text-foreground">{story.headline}</h3>
    {story.quote && <blockquote className="mt-4 text-[18px] font-normal leading-[1.7] text-foreground">“{story.quote}”</blockquote>}
    <p className="mt-4 text-[14px] font-semibold text-foreground">{story.name}</p>
  </article>;
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
    void supabase.functions.invoke("notify-application", { body: { applicationId: id, token, stage: "started" } });
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
    if (step === questions.length - 1) {
      void supabase.functions.invoke("notify-application", { body: { applicationId: lead.id, token: lead.token, stage: "complete" } });
      setResult(answers.investment_readiness === "Not right now" ? "activation" : "ready");
    }
    else setStep((previous) => previous + 1);
  };

  return <div className="min-h-screen bg-background font-sans text-foreground">
    <main>
      <section className={`${sectionClass} bg-background pt-10 sm:pt-14`}>
        <div className="mx-auto max-w-[1100px] text-center">
          <MonadMark className="mx-auto h-12 w-12 text-mint" />
          <h1 className="mx-auto mt-14 max-w-[1100px] text-[40px] font-normal leading-none tracking-[-0.025em] text-foreground md:text-[72px]"><span className="font-extrabold">The meaning ceiling:</span><br />why the founder who built the business becomes what's holding it back.</h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[20px] font-normal leading-[1.7] text-foreground">You've outgrown the way you've been operating. Here's what changes when you clear it.</p>
          <div className="mt-14 text-center text-[22px] leading-[1.35] text-foreground"><span className="font-extrabold">01</span> <span className="font-normal">Watch the video</span></div>
          <div className="mx-auto mt-6 aspect-video w-full max-w-[800px] overflow-hidden rounded-2xl bg-ink">
            {VSL_EMBED_URL ? <iframe src={VSL_EMBED_URL} title="Monad OS" className="h-full w-full border-0" allow="autoplay; fullscreen" allowFullScreen /> : <div className="flex h-full items-center justify-center"><span className="h-0 w-0 border-b-[16px] border-l-[26px] border-t-[16px] border-b-transparent border-l-ink-foreground border-t-transparent" /></div>}
          </div>
          <div id="apply" className="mt-16 scroll-mt-6">
            <div className="text-center text-[22px] leading-[1.35] text-foreground"><span className="font-extrabold">02</span> <span className="font-normal">Apply here</span></div>
            <div className={`${cardClass} mx-auto mt-6 max-w-[640px] text-left`}>
              {result === "form" && !lead && <form onSubmit={(event) => { event.preventDefault(); void start(); }} className="space-y-5">
                <label className="block text-[14px] font-normal text-foreground">First name<Input autoComplete="given-name" maxLength={100} value={contact.name} onChange={(event) => { setContact({ ...contact, name: event.target.value }); setError(""); }} className="mt-2 h-12 rounded-xl border-border bg-card text-[18px]" /></label>
                <label className="block text-[14px] font-normal text-foreground">Email<Input type="email" autoComplete="email" maxLength={255} value={contact.email} onChange={(event) => { setContact({ ...contact, email: event.target.value }); setError(""); }} className="mt-2 h-12 rounded-xl border-border bg-card text-[18px]" /></label>
                <label className="block text-[14px] font-normal text-foreground">WhatsApp number<Input type="tel" autoComplete="tel" placeholder="include country code" maxLength={40} value={contact.whatsapp_number} onChange={(event) => { setContact({ ...contact, whatsapp_number: event.target.value }); setError(""); }} className="mt-2 h-12 rounded-xl border-border bg-card text-[18px]" /></label>
                {error && <p role="alert" className="text-[14px] text-foreground">{error}</p>}
                <Button type="submit" disabled={saving} className={`${buttonClass} sm:w-full`}>Continue</Button>
                <p className="text-center text-[14px] font-normal leading-[1.7] text-foreground/70">By continuing you agree to be contacted about your application. <a href="/privacy-policy" className="underline">Privacy</a> · <a href="/terms-of-service" className="underline">Terms</a></p>
              </form>}
              {result === "form" && lead && current && <div>
                <div className="mb-8 h-1 overflow-hidden rounded-full bg-border"><div className="h-full bg-mint transition-[width]" style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
                <label htmlFor={`answer-${current.key}`} className="block text-[20px] font-extrabold leading-[1.35] text-foreground">{current.label}</label>
                <div className="mt-5">
                  {current.type === "choice" ? <div className="grid gap-3">{current.options?.map((option) => <Button key={option} type="button" variant="outline" onClick={() => { setAnswers({ ...answers, [current.key]: option }); setError(""); }} className={`h-auto min-h-12 w-full justify-start whitespace-normal rounded-xl border-border px-4 py-3 text-left text-[18px] font-normal leading-[1.7] ${answers[current.key] === option ? "border-accent bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground" : "bg-card text-foreground hover:bg-secondary hover:text-foreground"}`}>{option}</Button>)}</div> : current.type === "textarea" ? <Textarea id={`answer-${current.key}`} rows={4} maxLength={2000} value={answers[current.key] ?? ""} onChange={(event) => { setAnswers({ ...answers, [current.key]: event.target.value }); setError(""); }} className="rounded-xl border-border bg-card text-[18px]" /> : <Input id={`answer-${current.key}`} maxLength={current.key === "business" || current.key === "referral_source" ? 300 : 2000} value={answers[current.key] ?? ""} onChange={(event) => { setAnswers({ ...answers, [current.key]: event.target.value }); setError(""); }} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); void next(); } }} className="h-12 rounded-xl border-border bg-card text-[18px]" />}
                </div>
                {error && <p role="alert" className="mt-4 text-[14px] text-foreground">{error}</p>}
                <div className="mt-8 flex flex-col-reverse items-center justify-between gap-5 sm:flex-row"><Button variant="link" disabled={saving} onClick={() => { if (step === 0) setLead(null); else setStep(step - 1); setError(""); }} className="px-0 text-[14px] font-normal text-foreground">Back</Button><Button disabled={saving} onClick={() => void next()} className={buttonClass}>{step === questions.length - 1 ? "Submit" : "Next"}</Button></div>
              </div>}
              {result === "ready" && <div className="text-center"><h3 className="text-[20px] font-extrabold leading-[1.35]">Thank you. Choose a time for your call.</h3><iframe title="Choose a time for your call" src={calendlyEmbedUrl} className="mt-8 h-[720px] w-full border-0" /></div>}
              {result === "activation" && <div className="text-center"><h3 className="text-[20px] font-extrabold leading-[1.35]">Thank you. The best place to start is an energy activation.</h3><Button asChild className={`${buttonClass} mt-8`}><a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer">Join an activation</a></Button></div>}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-secondary`}>
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-foreground">TRUSTED BY 200+ PEOPLE</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{founders.map((founder) => <article key={founder.name} className="group relative aspect-[3/4] overflow-hidden rounded-xl"><img src={founder.photo} alt="" className="testimonial-media h-full w-full object-cover" loading="lazy" /><span className="absolute inset-0 bg-image-overlay" /><div className="absolute inset-x-0 bottom-0 p-4 text-left text-ink-foreground"><h3 className="text-[16px] font-extrabold leading-[1.25]">{founder.name}</h3>{founder.business && <p className="mt-1 text-[12px] font-normal text-ink-foreground/80">{founder.business}</p>}</div></article>)}</div>
          <p className="mt-8 text-[18px] font-normal text-foreground"><AnimatedFounderCount /> people have experienced the work.</p>
        </div>
      </section>

      <section className={`${sectionClass} bg-background`}><div className="mx-auto max-w-[1000px]"><SectionLabel>Sound familiar?</SectionLabel><h2 className={headingClass}><span className="font-extrabold">The ceiling</span><br />nobody sees.</h2><div className="mt-12 grid items-center gap-10 md:grid-cols-2 md:gap-14"><img src={sidselPhoto} alt="Sidsel Løschenkohl" className="aspect-[4/5] w-full rounded-xl object-cover" loading="lazy" /><div className={`${bodyClass} space-y-5`}><p>You've built something real. Revenue, clients, results. People trust you and rely on you. From the outside, it's working.</p><p className="font-extrabold">But something isn't matching.</p><p>You hit the number you spent years chasing and barely felt it. The drive that built the business has turned into pressure you can't switch off. Some days you can't stop working. Other days you can't make yourself open your laptop.</p><p>Every decision still runs through you. You've hired senior people, tightened the systems, brought in a sharper strategy and joined another mastermind. Some of it helped. None of it touched the thing actually holding you back.</p><p className="font-extrabold">The ceiling is internal. It's the operating system you built the business on, installed long before the business existed.</p></div></div></div></section>

      <section className={`${sectionClass} bg-secondary`}><div className="mx-auto max-w-[1000px] text-center"><SectionLabel>What changes</SectionLabel><h2 className={headingClass}><span className="font-extrabold">When your state shifts,</span><br />everything downstream shifts with it.</h2><div className="mt-10 grid gap-5 md:grid-cols-3"><article className={`${cardClass} ${bodyClass}`}>The second-guessing stops. Your boundaries hold. Delegation starts to feel natural.</article><article className={`${cardClass} ${bodyClass}`}>You stop looking outside for the answer. Your own judgment comes back online, and decisions come from a place you trust.</article><article className={`${cardClass} ${bodyClass}`}>You keep building, without it costing you your health, your peace or your relationships.</article></div><p className="mt-10 text-[28px] font-extrabold leading-[1.2] text-foreground sm:text-[34px]">That's the work.</p></div></section>

      <section className={`${sectionClass} bg-background`}><div className="mx-auto max-w-[1000px]"><h2 className={headingClass}><span className="font-extrabold">Same system,</span><br />or a new one.</h2><div className="mt-10 grid gap-5 md:grid-cols-2"><article className={`${cardClass} border-mint`}><h3 className="text-[20px] font-extrabold leading-[1.35]">Change the state you operate from</h3><ItemList items={withItems} positive /></article><article className="rounded-xl bg-secondary p-7 sm:p-8"><h3 className="text-[20px] font-extrabold leading-[1.35] text-foreground/60">Keep running the same system</h3><ItemList items={withoutItems} positive={false} /></article></div></div></section>

      <section className={`${sectionClass} bg-secondary`}><div className="mx-auto max-w-[1100px]"><SectionLabel>How it works</SectionLabel><h2 className={headingClass}><span className="font-extrabold">The</span> process.</h2><div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{process.map(([title, description], index) => <article key={title} className={cardClass}><span className="text-[42px] font-extrabold leading-none text-foreground">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-6 text-[20px] font-extrabold leading-[1.35]">{title}</h3><p className={`${bodyClass} mt-3`}>{description}</p></article>)}</div></div></section>

      <section className={`${sectionClass} bg-background`}><div className="mx-auto max-w-[1100px]"><SectionLabel>Results</SectionLabel><h2 className={headingClass}><span className="font-extrabold">What people</span> experience.</h2><div className="mt-12 grid gap-8 md:grid-cols-3">{videoStories.map((story) => <ResultVideo key={story.headline} story={story} />)}</div><div className="mx-auto mt-12 grid max-w-[900px] gap-5 md:grid-cols-2">{textStories.map((story) => <article key={story.headline} className={cardClass}><h3 className="text-[20px] font-extrabold leading-[1.35]">{story.headline}</h3><p className="mt-6 text-[14px] font-normal text-foreground/70">{story.attribution}</p></article>)}</div><div className="mt-10 text-center"><ApplyLink>APPLY NOW</ApplyLink></div></div></section>

      <section className={`${sectionClass} bg-secondary`}><div className="mx-auto max-w-[1000px]"><SectionLabel>Not for everyone</SectionLabel><h2 className={headingClass}><span className="font-extrabold">This is</span> deliberately small.</h2><p className={`${bodyClass} mx-auto mt-6 max-w-[640px] text-center`}>I work with a small number of people at a time, so the work can go deep.</p><div className="mt-10 grid gap-5 md:grid-cols-2"><article className={cardClass}><h3 className="text-[20px] font-extrabold leading-[1.35]">This <span className="rounded-sm bg-mint px-2 py-1">is for</span> you if.</h3><ItemList items={forItems} positive /></article><article className={cardClass}><h3 className="text-[20px] font-extrabold leading-[1.35]">This <span className="rounded-sm bg-accent px-2 py-1 text-accent-foreground">isn't for</span> you if.</h3><ItemList items={notForItems} positive={false} negativeRed /></article></div></div></section>

      <section className={`${sectionClass} bg-background`}><div className="mx-auto max-w-[760px]"><SectionLabel>Questions</SectionLabel><h2 className={headingClass}><span className="font-extrabold">Everything you need</span> to know.</h2><Accordion type="single" collapsible className="mt-10 border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="border-b border-border"><AccordionTrigger className="group py-6 text-left text-[20px] font-semibold leading-[1.35] text-foreground hover:no-underline [&>svg]:hidden">{question}<span aria-hidden="true" className="ml-4 shrink-0 text-[28px] font-normal leading-none text-mint group-data-[state=open]:hidden">+</span><span aria-hidden="true" className="ml-4 hidden shrink-0 text-[28px] font-normal leading-none text-mint group-data-[state=open]:block">−</span></AccordionTrigger><AccordionContent className={`${bodyClass} pb-6`}>{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className={`${sectionClass} relative min-h-[680px] overflow-hidden text-center`}><img src={closingSea} alt="Calm sea at dawn" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1920} height={1080} /><span className="absolute inset-0 bg-image-overlay-strong" /><div className="relative mx-auto flex min-h-[536px] max-w-[800px] flex-col items-center justify-center"><p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-foreground">Limited availability</p><h2 className="text-center text-[32px] font-normal leading-[1.1] tracking-[-0.025em] text-ink-foreground sm:text-[48px]"><span className="font-extrabold">The drive that got you here</span><br />can't take you where you're going.</h2><p className="mx-auto mt-7 max-w-[600px] text-[18px] font-normal leading-[1.7] text-ink-foreground">Monad OS works with a small number of people at a time. Now taking applications for November. If this resonates, apply now.</p><div className="mt-9"><ApplyLink>APPLY NOW</ApplyLink></div></div></section>
    </main>
    <footer className="bg-background px-4 py-8 text-center text-[14px] font-normal text-foreground/70">© Monad Studios Ltd 2026 · <a href="/privacy-policy" className="hover:underline">Privacy</a> · <a href="/terms-of-service" className="hover:underline">Terms</a></footer>
  </div>;
};

export default Apply;
