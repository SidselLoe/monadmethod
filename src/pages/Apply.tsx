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
import alexandraPhoto from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import brandonPhoto from "@/assets/testimonials/brandon-hadwin-founder-healingwithbrandon.png";
import biancaPhoto from "@/assets/testimonials/bianca-polizzi-founder-polizzi-media.png";
import jessicaPhoto from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";

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
    quote: "You have a session with a coach and plan some things out, and you feel very motivated in that moment. Then the next day you're not motivated to execute on that plan. With this program, it's the opposite effect.",
    name: "Alexandra Feldman",
    photo: alexandraPhoto,
  },
  {
    quote: "She's one of those people who's not going to let you sleep on yourself. She's not going to coddle you or baby you, but it's in the best way possible.",
    name: "Jessica Rainey",
    photo: jessicaPhoto,
  },
  {
    quote: "I thought about the types of clients I wanted in my life. Within the following week, three came to me.",
    name: "Bianca Polizzi",
    photo: biancaPhoto,
  },
] as const;

const osItems = [
  ["Energy activations", "Guided, music-driven sessions that shift your state directly. Nothing to learn. You just show up."],
  ["Voice-note self-inquiry", "Structured questions you answer out loud, so you say what's true instead of what sounds good on paper."],
  ["Strategic sessions", "Partner-level sessions where the clarity turns into structure, decisions and aligned action."],
] as const;

const fitItems = [
  "You are the business.",
  "You know there's more.",
  "No one is coming to save you.",
] as const;

const faqs = [
  ["Do I need to know my purpose?", "No. That's usually something the work surfaces, not something you bring to it."],
  ["What's an energy activation?", "A guided, music-driven session of about an hour, done lying down from home. Nothing to learn. You just show up."],
  ["How much time does it take?", "About three to four hours a week."],
  ["Is it group or private?", "A small group of founders, with private time with me built in. A fully private version is available on request."],
  ["What happens after I apply?", "If it looks like a fit, you book a call with me. We talk about where you are, what you're building and whether Monad OS is right for you. No pressure, no pitch."],
] as const;

const absenceOptions = ["It would run fine", "It would slow down", "It would stall without me", "It would fall apart"] as const;
const investmentOptions = ["Yes", "Not right now"] as const;

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
  { key: "whatsapp_number", label: "WhatsApp number", type: "tel", placeholder: "include country code" },
  { key: "business", label: "What do you do, and what's your business?", type: "text" },
  { key: "absence_impact", label: "If you stepped away for a month, what would happen to the business?", type: "choice", options: absenceOptions },
  { key: "recurring_pattern", label: "What's the pattern you keep running into that strategy hasn't fixed?", type: "textarea" },
  { key: "desired_outcome", label: "If the next 30 days went really well, what would be different?", type: "textarea" },
  { key: "investment_readiness", label: "Monad OS is a paid 30-day program. If it's the right fit, are you ready to invest in yourself now?", type: "choice", options: investmentOptions },
  { key: "referral_source", label: "How did you find me? (optional)", type: "text", optional: true },
];

const PageNav = () => (
  <nav className="absolute inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 sm:py-7">
    <div className="mx-auto flex max-w-[1100px] justify-end">
      <Button asChild className="h-auto rounded-full bg-accent px-7 py-3.5 text-[16px] font-semibold text-accent-foreground hover:bg-accent/90">
        <a href="#apply">Apply</a>
      </Button>
    </div>
  </nav>
);

const MinimalFooter = ({ dark = false }: { dark?: boolean }) => (
  <footer className={`${dark ? "bg-ink text-ink-foreground" : "bg-warm text-foreground"} px-6 py-8 font-sans`}>
    <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-3 text-center text-[12px] sm:flex-row sm:gap-5">
      <span>© Monad Studios Ltd 2026</span>
      <div className="flex gap-5">
        <a href="/privacy-policy" className="hover:underline">Privacy</a>
        <a href="/terms-of-service" className="hover:underline">Terms</a>
      </div>
    </div>
  </footer>
);

const ApplyButton = () => (
  <Button asChild className="h-auto w-full rounded-full bg-accent px-10 py-[18px] text-[16px] font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
    <a href="#apply">Apply</a>
  </Button>
);

const Apply = () => {
  usePageMeta(
    "Monad OS | Sidsel Løschenkohl",
    "A 30-day program for founders who are the business. Watch the video, then apply.",
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

  if (!current) return null;

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
    <div className="min-h-screen bg-warm font-sans text-foreground">
      <PageNav />
      <main>
        <section className="bg-ink px-5 pb-24 pt-32 text-center sm:px-8 sm:pb-32 sm:pt-40">
          <div className="mx-auto max-w-[1100px]">
            <h1 className="mx-auto max-w-[940px] text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-foreground sm:text-[56px] lg:text-[70px]">
              The business runs because you run it.
            </h1>
            <p className="mx-auto mt-7 max-w-[640px] text-[19px] leading-[1.6] text-ink-foreground/70 sm:text-[20px]">
              Watch this first. If it sounds like you, apply below.
            </p>
            <div className="relative mx-auto mt-12 aspect-video w-full max-w-[960px] overflow-hidden rounded-2xl bg-ink-border sm:mt-16">
              {VSL_EMBED_URL ? (
                <iframe src={VSL_EMBED_URL} title="Monad OS" className="absolute inset-0 h-full w-full border-0" allow="autoplay; fullscreen" allowFullScreen />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="ml-2 block h-0 w-0 border-b-[18px] border-l-[28px] border-t-[18px] border-b-transparent border-l-ink-foreground border-t-transparent" aria-hidden="true" />
                </div>
              )}
            </div>
            <div className="mx-auto mt-10 max-w-[400px]"><ApplyButton /></div>
          </div>
        </section>

        <section className="bg-warm px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">In their words</h2>
            <div className="mt-14 grid gap-x-16 gap-y-16 md:grid-cols-2 md:gap-y-20">
              {TESTIMONIALS.map((testimonial) => (
                <article key={testimonial.name}>
                  <blockquote className="text-[22px] font-normal leading-[1.55]">“{testimonial.quote}”</blockquote>
                  <div className="mt-7 flex items-center gap-3">
                    <img src={testimonial.photo} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover" />
                    <p className="text-[15px] font-semibold">{testimonial.name}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="max-w-[640px]">
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">Nothing is wrong with you.</h2>
              <div className="mt-9 space-y-6 text-[19px] leading-[1.6] sm:text-[20px]">
                <p>You hired senior people. You tightened the systems. You brought in a sharper strategy and joined another mastermind. Some of it helped. None of it touched the thing actually holding you back.</p>
                <p>The way you've been operating got you here. It can't take you where you're going.</p>
                <p>You've just outgrown it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="max-w-[760px]">
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">Monad OS</h2>
              <p className="mt-7 max-w-[640px] text-[19px] leading-[1.6] sm:text-[20px]">30 days. A small group of founders. Three practices working as one.</p>
              <div className="mt-14 space-y-12">
                {osItems.map(([title, body]) => (
                  <div key={title}>
                    <h3 className="text-[22px] font-semibold leading-[1.3]">{title}</h3>
                    <p className="mt-3 max-w-[640px] text-[19px] leading-[1.6] sm:text-[20px]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="max-w-[760px]">
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">This is for you if three things are true.</h2>
              <div className="mt-12 space-y-7">
                {fitItems.map((item) => <p key={item} className="text-[24px] font-normal leading-[1.4]">{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="scroll-mt-20 bg-warm px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[640px]">
            <div className="text-center">
              <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">Apply</h2>
              <p className="mt-6 text-[19px] leading-[1.6] sm:text-[20px]">A few questions, one at a time. It takes about three minutes.</p>
            </div>

            <div className="mt-14">
              <div className="h-[2px] overflow-hidden rounded-full bg-foreground/15">
                <div className="h-full bg-foreground transition-[width] duration-300" style={{ width: `${progress}%` }} />
              </div>

              {result === "form" && (
                <div className="mt-12">
                  <label htmlFor={`question-${current.key}`} className="block text-[28px] font-semibold leading-[1.2] tracking-[-0.02em]">
                    {current.label}
                  </label>
                  <div className="mt-8">
                    {current.type === "choice" ? (
                      <div className="grid gap-3">
                        {current.options?.map((option) => {
                          const selected = answers[current.key] === option;
                          return (
                            <Button key={option} type="button" variant="outline" onClick={() => setAnswer(current.key, option)} className={`h-auto min-h-14 w-full justify-start whitespace-normal rounded-lg px-5 py-4 text-left text-[16px] font-medium ${selected ? "border-foreground bg-foreground text-background hover:bg-foreground/90 hover:text-background" : "border-foreground/20 bg-background text-foreground hover:bg-foreground/5 hover:text-foreground"}`}>
                              {option}
                            </Button>
                          );
                        })}
                      </div>
                    ) : current.type === "textarea" ? (
                      <Textarea id={`question-${current.key}`} autoFocus rows={5} maxLength={2000} value={(answers[current.key] as string | undefined) ?? ""} onChange={(event) => setAnswer(current.key, event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void goNext(); } }} className="min-h-36 rounded-lg border-foreground/20 bg-background px-5 py-4 text-[17px] text-foreground placeholder:text-foreground/45 focus-visible:ring-foreground" />
                    ) : (
                      <Input id={`question-${current.key}`} autoFocus type={current.type} maxLength={current.key === "business" || current.key === "referral_source" ? 300 : 255} placeholder={current.placeholder} value={(answers[current.key] as string | undefined) ?? ""} onChange={(event) => setAnswer(current.key, event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); void goNext(); } }} className="h-16 rounded-lg border-foreground/20 bg-background px-5 text-[17px] text-foreground placeholder:text-foreground/45 focus-visible:ring-foreground" />
                    )}
                  </div>
                  {error && <p role="alert" className="mt-5 text-[15px] font-medium text-accent">{error}</p>}
                  <div className="mt-10 flex flex-col-reverse items-stretch gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="button" variant="link" disabled={step === 0 || saving} onClick={() => { setStep((value) => Math.max(0, value - 1)); setError(""); }} className="h-auto px-0 text-[16px] font-medium text-foreground disabled:opacity-30">Back</Button>
                    <Button type="button" disabled={saving} onClick={() => void goNext()} className="h-auto w-full rounded-full bg-accent px-10 py-[18px] text-[16px] font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">Next</Button>
                  </div>
                </div>
              )}

              {result === "ready" && (
                <div className="mt-12 text-center">
                  <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em]">Thank you. Choose a time for your call.</h3>
                  <iframe title="Choose a time for your call" src={calendlyEmbedUrl} className="mt-9 h-[720px] w-full rounded-lg border-0 bg-background" />
                </div>
              )}

              {result === "activation" && (
                <div className="mt-12 text-center">
                  <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em]">Thank you. The best place to start is an energy activation.</h3>
                  <Button asChild className="mt-9 h-auto w-full rounded-full bg-accent px-10 py-[18px] text-[16px] font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    <a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer">Join an activation</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-warm px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[48px]">Questions</h2>
            <Accordion type="single" collapsible className="mt-10 space-y-2">
              {faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`faq-${index}`} className="border-0">
                  <AccordionTrigger className="py-5 text-left text-[20px] font-semibold leading-[1.4] text-foreground hover:no-underline">{question}</AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 text-[17px] leading-[1.7] text-foreground">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-warm px-5 py-28 text-center sm:px-8 sm:py-40">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[56px] lg:text-[70px]">You are the upgrade.</h2>
            <div className="mx-auto mt-10 max-w-[400px]"><ApplyButton /></div>
          </div>
        </section>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default Apply;
