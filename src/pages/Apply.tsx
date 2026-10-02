import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import usePageMeta from "@/hooks/usePageMeta";
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";
import sidselPhoto from "@/assets/sidsel-photo.jpg";
import ilyaPhoto from "@/assets/testimonials/ilya-paveliev-founder-hologram.png";
import rudiPhoto from "@/assets/testimonials/rudi-adigbli-founder-reethink.png";
import jessicaPhoto from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import ellaPhoto from "@/assets/testimonials/ella-cane-founder.png";
import alexandraPhoto from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import brandonPhoto from "@/assets/testimonials/brandon-hadwin-founder-healingwithbrandon.png";
import biancaPhoto from "@/assets/testimonials/bianca-polizzi-founder-polizzi-media.png";

const VSL_EMBED_URL = "";
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";
const ACTIVATION_URL = "https://luma.com/monadmethod";

const TESTIMONIALS = [
  {
    quote: "I didn't realize that it was me. I was the business. And in order for the business to work, I needed to clear things inside of me.",
    name: "Brandon Hadwin",
    photo: brandonPhoto,
  },
  {
    quote: "It wasn't anything technical. I knew how to do all these things, but it wasn't moving because it was really me.",
    name: "Alexandra Feldman",
    photo: alexandraPhoto,
  },
  {
    quote: "She's one of those people who's not going to let you sleep on yourself. She's not going to coddle you or baby you, but it's in the best way possible.",
    name: "Jessica Rainey",
    photo: jessicaPhoto,
  },
  {
    quote: "You have a session with a coach and plan some things out, and you feel very motivated in that moment. Then the next day you're not motivated to execute on that plan. With this program, it's the opposite effect.",
    name: "Alexandra Feldman",
    photo: alexandraPhoto,
  },
  {
    quote: "Before the program I wasn't really making decisions because I was scared to make decisions. Now when an idea comes into my head, I just execute it.",
    name: "Brandon Hadwin",
    photo: brandonPhoto,
  },
  {
    quote: "I thought about the types of clients I wanted in my life. Within the following week, three came to me.",
    name: "Bianca Polizzi",
    photo: biancaPhoto,
  },
  {
    quote: "I work with somatic practices as part of my job. But there's such a gentle, receiving, energetic support in these energy activations that I just haven't felt anywhere else.",
    name: "Jessica Rainey",
    photo: jessicaPhoto,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) => (
  <article className="flex min-h-[330px] flex-col rounded-xl border border-border bg-card p-7 sm:p-8">
    {testimonial.photo && <img src={testimonial.photo} alt={testimonial.name} className="mb-7 h-14 w-14 rounded-full object-cover" />}
    <blockquote className="flex-1 text-[17px] font-medium leading-[1.65] text-foreground">“{testimonial.quote}”</blockquote>
    <div className="mt-7 border-t border-mint pt-5">
      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
    </div>
  </article>
);

const avatars = [ilyaPhoto, rudiPhoto, jessicaPhoto, ellaPhoto, alexandraPhoto];

const osItems = [
  ["Monad Activations", "Full access to my live activation schedule for 30 days, about 10 to 12 sessions. Guided, music-driven, experienced lying down. The state shifts first."],
  ["Voice-note self-inquiry", "Weekly workbooks you answer out loud. Speaking gets past the editor. What's been running you gets named."],
  ["Strategic sessions", "Weekly sessions with the cohort, plus a private 1:1 with me. Clarity turns into decisions, delegation and structure."],
  ["Support", "A private WhatsApp group for the 30 days."],
] as const;

const cohorts = [
  { name: "Cohort 1", date: "November 2026", price: "£1,500", open: true },
  { name: "Cohort 2", date: "January 2027", price: "£2,000", open: false },
  { name: "Cohort 3", date: "February 2027", price: "£2,500", open: false },
];

const fitItems = [
  ["You are the business.", "If you stepped away for a month, it wouldn't run without you."],
  ["You know there's more.", "You've hit the targets and something is still missing."],
  ["No one is coming to save you.", "You're ready to do the work, with a partner who sees you clearly."],
] as const;

const faqs = [
  ["Do I need to know my purpose?", "No. Purpose is usually something the work surfaces."],
  ["What's a Monad Activation?", "A guided, music-driven session of about 60 minutes, done lying down at home. Nothing to learn. You just show up."],
  ["How much time does it take?", "About 3 to 4 hours a week: one or two activations, the workbook and the session."],
  ["Is it group or private?", "Cohort by default, plus your own private 1:1. A fully private version is available on request."],
  ["What's the investment?", "Cohort 1 is £1,500 (about $2,000), in full or two instalments. Each new cohort costs more."],
  ["What happens on the call?", "We talk about where you are, what you're building and whether Monad OS fits. No pressure, no pitch."],
  ["I'm not in the UK.", "Sessions run across UK mornings and evenings, so they work from Europe and the US."],
] as const;

const absenceOptions = ["It would run fine", "It would slow down", "It would stall without me", "It would fall apart"] as const;
const investmentOptions = ["Yes, in full", "Yes, with instalments", "Not right now"] as const;

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  whatsapp_number: z.string().trim().min(7, "Please enter your WhatsApp number, including country code.").max(40).regex(/^\+?[0-9 ()-]+$/, "Please enter a valid phone number."),
  business: z.string().trim().min(1, "Please tell me what you do.").max(300),
  absence_impact: z.enum(absenceOptions, { required_error: "Please choose an answer." }),
  recurring_pattern: z.string().trim().min(1, "Please share the pattern you keep running into.").max(2000),
  desired_outcome: z.string().trim().min(1, "Please share what would be different.").max(2000),
  investment_readiness: z.enum(investmentOptions, { required_error: "Please choose an answer." }),
  referral_source: z.string().trim().max(300).optional(),
});

type ApplicationAnswers = Partial<z.infer<typeof applicationSchema>>;
type QuestionKey = keyof z.infer<typeof applicationSchema>;
type Question = {
  key: QuestionKey;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "choice";
  placeholder?: string;
  options?: readonly string[];
  optional?: boolean;
};

const questions: Question[] = [
  { key: "name", label: "Your name", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "whatsapp_number", label: "WhatsApp number", type: "tel", placeholder: "Include country code" },
  { key: "business", label: "What do you do, and what's your business?", type: "text" },
  { key: "absence_impact", label: "If you stepped away for a month, what would happen to the business?", type: "choice", options: absenceOptions },
  { key: "recurring_pattern", label: "What's the pattern you keep running into that strategy hasn't fixed?", type: "textarea" },
  { key: "desired_outcome", label: "If the next 30 days went really well, what would be different?", type: "textarea" },
  { key: "investment_readiness", label: "Cohort 1 is £1,500, in full or two instalments. Is that an investment you're ready to make now?", type: "choice", options: investmentOptions },
  { key: "referral_source", label: "How did you find me?", type: "text", optional: true },
];

const SectionLabel = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-ink-muted" : "text-foreground"}`}>{children}</p>
);

const ApplyCta = ({ children = "Apply for Cohort 1" }: { children?: React.ReactNode }) => (
  <Button asChild className="h-auto rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase text-accent-foreground hover:bg-accent/90">
    <a href="#apply">{children}</a>
  </Button>
);

const Apply = () => {
  usePageMeta(
    "Monad OS · Apply for Cohort 1 | Sidsel Løschenkohl",
    "A 30-day cohort for founders who are the business. Watch the video, then apply for Cohort 1.",
    { canonical: "https://www.monadmethod.com/apply", ogType: "website" },
  );

  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ApplicationAnswers>({});
  const [result, setResult] = useState<"form" | "ready" | "activation">("form");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const current = questions[step];
  const progress = useMemo(() => result === "form" ? ((step + 1) / questions.length) * 100 : 100, [result, step]);

  useEffect(() => {
    if (result !== "ready") return;
    const handleCalendlyEvent = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      const payload = event.data as { event?: string } | null;
      if (payload?.event === "calendly.event_scheduled") navigate("/apply/booked");
    };
    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, [navigate, result]);

  const setAnswer = (key: QuestionKey, value: string) => {
    setAnswers((previous) => ({ ...previous, [key]: value }));
    setError("");
  };

  const validateCurrent = () => {
    const value = answers[current.key];
    if (current.optional && (!value || !value.trim())) return true;
    const shape = applicationSchema.shape[current.key];
    const parsed = shape.safeParse(value);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please complete this question.");
      return false;
    }
    return true;
  };

  const submitApplication = async () => {
    const parsed = applicationSchema.safeParse(answers);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your answers.");
      return;
    }
    setSaving(true);
    setError("");
    const application: TablesInsert<"applications"> = {
      name: parsed.data.name,
      email: parsed.data.email,
      whatsapp_number: parsed.data.whatsapp_number,
      business: parsed.data.business,
      absence_impact: parsed.data.absence_impact,
      recurring_pattern: parsed.data.recurring_pattern,
      desired_outcome: parsed.data.desired_outcome,
      investment_readiness: parsed.data.investment_readiness,
      referral_source: parsed.data.referral_source || null,
    };
    const { error: insertError } = await supabase.from("applications").insert(application);
    setSaving(false);
    if (insertError) {
      setError("Your application could not be saved. Please try again.");
      return;
    }
    setResult(parsed.data.investment_readiness === "Not right now" ? "activation" : "ready");
  };

  const goNext = async () => {
    if (!validateCurrent()) return;
    if (step < questions.length - 1) setStep((value) => value + 1);
    else await submitApplication();
  };

  const calendlyEmbedUrl = useMemo(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", window.location.hostname);
    if (answers.name) url.searchParams.set("name", answers.name);
    if (answers.email) url.searchParams.set("email", answers.email);
    return url.toString();
  }, [answers.email, answers.name]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation ctaLabel="Apply" ctaHref="#apply" ctaExternal={false} />

      <main>
        <section className="bg-ink px-6 pb-24 pt-40 sm:px-8 sm:pb-32 sm:pt-48">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[900px]">
              <SectionLabel dark>Monad OS · Cohort 1 · November</SectionLabel>
              <h1 className="mt-7 text-4xl font-bold leading-[1.06] text-ink-foreground sm:text-6xl md:text-[76px]">
                You built something real. Now it runs through <span className="text-mint">you.</span>
              </h1>
              <p className="mt-8 max-w-[760px] text-[18px] leading-[1.7] text-ink-foreground sm:text-[20px]">
                Nine minutes on why the ceiling is internal, and what changes when you clear it. Watch first. Then apply below.
              </p>
            </div>

            <div className="mt-16">
              <SectionLabel dark>Step 1 · Watch</SectionLabel>
              <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-xl border border-ink-border bg-ink">
                {VSL_EMBED_URL ? (
                  <iframe src={VSL_EMBED_URL} title="Monad OS" className="absolute inset-0 h-full w-full border-0" allow="autoplay; fullscreen" allowFullScreen />
                ) : (
                  <div className="absolute inset-0 overflow-hidden">
                    <img src={sidselPhoto} alt="Sidsel Løschenkohl" className="h-full w-full object-cover opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-ink/40">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-foreground/70" aria-hidden="true">
                        <span className="ml-1 block h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-ink-foreground border-t-transparent" />
                      </div>
                      <p className="text-sm font-semibold text-ink-foreground">Video coming soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 text-center">
              <SectionLabel dark>Step 2 · Apply</SectionLabel>
              <div className="mt-5"><ApplyCta /></div>
              <p className="mt-3 text-xs text-ink-muted">Takes about 3 minutes.</p>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <div className="flex">
                  {avatars.map((avatar, index) => (
                    <img key={avatar} src={avatar} alt="" className={`h-9 w-9 rounded-full border-2 border-ink object-cover ${index > 0 ? "-ml-2.5" : ""}`} />
                  ))}
                </div>
                <p className="text-sm font-medium text-ink-foreground">200+ founders, leaders and creators have experienced the work.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm px-6 py-24 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[980px]">
            <h2 className="text-4xl font-bold leading-[1.1] text-ink-foreground sm:text-5xl md:text-[64px]">You've hit the targets. The business works. And it still runs through you.</h2>
            <div className="mt-10 h-px w-20 bg-mint" />
            <p className="mt-10 max-w-[820px] text-[18px] leading-[1.8] text-ink-foreground sm:text-[20px]">You can't switch off. You swing between all in and checked out. The next milestone doesn't feel the way you thought it would. That's the meaning ceiling. More strategy won't move it. What moves it is the operating system underneath.</p>
          </div>
        </section>

        <section className="bg-background px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid items-end gap-12 md:grid-cols-[1fr_0.72fr]">
              <div>
                <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-[64px]">Monad OS</h2>
                <p className="mt-5 text-[20px] text-foreground">30 days, with a small cohort of founders.</p>
              </div>
              <img src={sidselPhoto} alt="Sidsel Løschenkohl" className="aspect-[16/9] w-full rounded-xl object-cover" />
            </div>
            <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
              {osItems.map(([title, body], index) => (
                <article key={title} className="border-t border-mint pt-6">
                  <div className="flex gap-5">
                    <span className="text-sm font-semibold text-mint">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-[22px] font-bold text-foreground">{title}</h3>
                      <p className="mt-3 text-[16px] leading-[1.75] text-foreground">{body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-4xl font-bold text-ink-foreground sm:text-5xl md:text-[60px]">Cohorts and investment</h2>
            <p className="mt-6 max-w-[720px] text-[18px] leading-[1.7] text-ink-foreground">Monad OS runs in small cohorts of up to 8 founders. The price rises with every cohort.</p>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {cohorts.map((cohort) => (
                <article key={cohort.name} className={`rounded-xl border p-7 ${cohort.open ? "border-mint bg-ink" : "border-ink-border bg-ink/80"}`}>
                  <div className="flex min-h-7 items-center justify-between gap-4">
                    <p className={`text-sm font-semibold ${cohort.open ? "text-ink-foreground" : "text-ink-muted"}`}>{cohort.name}</p>
                    {cohort.open && <span className="rounded-full border border-mint px-3 py-1 text-[10px] font-semibold uppercase text-mint">Open</span>}
                  </div>
                  <p className={`mt-8 text-[16px] ${cohort.open ? "text-ink-foreground" : "text-ink-muted"}`}>{cohort.date}</p>
                  <p className={`mt-2 text-4xl font-bold ${cohort.open ? "text-ink-foreground" : "text-ink-muted"}`}>{cohort.price}</p>
                  {cohort.open && <div className="mt-8"><ApplyCta /></div>}
                </article>
              ))}
            </div>
            <p className="mt-7 text-sm leading-[1.7] text-ink-muted">Pay in full or in two instalments. A private 1:1 version is available on request.</p>
          </div>
        </section>

        <section className="bg-warm px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-[60px]">This is for you if</h2>
            <div className="mt-14 divide-y divide-mint border-y border-mint">
              {fitItems.map(([title, body], index) => (
                <article key={title} className="grid gap-4 py-9 sm:grid-cols-[72px_1fr] sm:items-start">
                  <span className="text-sm font-semibold text-mint">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-[20px] leading-[1.6] text-foreground sm:text-[24px]"><strong>{title}</strong> {body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-24 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-center text-4xl font-bold text-foreground sm:text-5xl">How it works</h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[["1", "Apply", "3 minutes"], ["2", "A 30-minute call with me", ""], ["3", "Your cohort starts", ""]].map(([number, title, detail]) => (
                <div key={number} className="border-t border-mint pt-6">
                  <span className="text-sm font-semibold text-mint">{number}</span>
                  <h3 className="mt-5 text-[22px] font-bold text-foreground">{title}</h3>
                  {detail && <p className="mt-2 text-sm text-foreground">{detail}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-[60px]">In their words</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {TESTIMONIALS.slice(3).map((testimonial) => (
                <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="scroll-mt-24 bg-ink px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[860px]">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-ink-foreground sm:text-5xl md:text-[60px]">Apply for Cohort 1</h2>
              <p className="mt-5 text-[18px] text-ink-foreground">Nine short questions. One at a time.</p>
            </div>

            <div className="mt-14 rounded-xl border border-ink-border bg-ink p-6 sm:p-10">
              <div className="flex items-center justify-between text-xs font-semibold uppercase text-ink-muted">
                <span>{result === "form" ? `${step + 1} / ${questions.length}` : "Complete"}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink-border">
                <div className="h-full bg-mint transition-[width] duration-300" style={{ width: `${progress}%` }} />
              </div>

              {result === "form" && (
                <div className="mt-10">
                  <label htmlFor={`question-${current.key}`} className="block text-[22px] font-bold leading-[1.4] text-ink-foreground sm:text-[28px]">
                    {current.label}{current.optional && <span className="ml-2 text-sm font-normal text-ink-muted">Optional</span>}
                  </label>

                  <div className="mt-7">
                    {current.type === "choice" ? (
                      <div className="grid gap-3">
                        {current.options?.map((option) => {
                          const selected = answers[current.key] === option;
                          return (
                            <Button key={option} type="button" variant="outline" onClick={() => setAnswer(current.key, option)} className={`h-auto min-h-14 w-full justify-start whitespace-normal rounded-lg border px-5 py-4 text-left text-[15px] ${selected ? "border-mint bg-mint text-foreground hover:bg-mint/90" : "border-ink-border bg-ink text-ink-foreground hover:bg-ink-border hover:text-ink-foreground"}`}>
                              {option}
                            </Button>
                          );
                        })}
                      </div>
                    ) : current.type === "textarea" ? (
                      <Textarea id={`question-${current.key}`} autoFocus rows={6} maxLength={2000} value={(answers[current.key] as string | undefined) ?? ""} onChange={(event) => setAnswer(current.key, event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void goNext(); } }} className="min-h-40 rounded-lg border-ink-border bg-ink px-5 py-4 text-base text-ink-foreground placeholder:text-ink-muted focus-visible:ring-mint" />
                    ) : (
                      <Input id={`question-${current.key}`} autoFocus type={current.type} maxLength={current.key === "business" || current.key === "referral_source" ? 300 : 255} placeholder={current.placeholder} value={(answers[current.key] as string | undefined) ?? ""} onChange={(event) => setAnswer(current.key, event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); void goNext(); } }} className="h-14 rounded-lg border-ink-border bg-ink px-5 text-base text-ink-foreground placeholder:text-ink-muted focus-visible:ring-mint" />
                    )}
                  </div>

                  {error && <p role="alert" className="mt-5 text-sm font-medium text-accent">{error}</p>}
                  <div className="mt-9 flex items-center justify-between gap-4">
                    <Button type="button" variant="ghost" disabled={step === 0 || saving} onClick={() => { setStep((value) => Math.max(0, value - 1)); setError(""); }} className="text-ink-foreground hover:bg-ink-border hover:text-ink-foreground">Back</Button>
                    <Button type="button" disabled={saving} onClick={() => void goNext()} className="h-auto rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase text-accent-foreground hover:bg-accent/90">
                      {saving ? "Saving" : step === questions.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </div>
              )}

              {result === "ready" && (
                <div className="mt-10 text-center">
                  <h3 className="text-3xl font-bold text-ink-foreground">Thank you. Choose a time for your call.</h3>
                  <iframe title="Choose a time for your call" src={calendlyEmbedUrl} className="mt-8 h-[720px] w-full rounded-lg border-0 bg-background" />
                </div>
              )}

              {result === "activation" && (
                <div className="mt-10 text-center">
                  <h3 className="text-3xl font-bold leading-[1.3] text-ink-foreground">Thank you. The best place to start is a Monad Activation.</h3>
                  <Button asChild className="mt-8 h-auto rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase text-accent-foreground hover:bg-accent/90">
                    <a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer">Join an Activation</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-warm px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[860px]">
            <h2 className="text-center text-4xl font-bold text-foreground sm:text-5xl">FAQ</h2>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`faq-${index}`} className="border-mint">
                  <AccordionTrigger className="py-6 text-left text-[18px] font-semibold text-foreground hover:no-underline">{question}</AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 text-[16px] leading-[1.75] text-foreground">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-ink px-6 py-24 text-center sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-4xl font-bold text-ink-foreground sm:text-5xl md:text-[68px]">You are the <span className="text-mint">upgrade.</span></h2>
            <div className="mt-9"><ApplyCta /></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;