import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import usePageMeta from "@/hooks/usePageMeta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import monadSymbol from "@/assets/monad-symbol.png";

// ⚠️ Placeholder — replace when the VSL is ready.
const VSL_VIDEO_URL = ""; // e.g. "https://www.youtube.com/embed/VIDEO_ID"
// Existing Calendly link, revealed only after the questionnaire is completed.
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const BOOK_HREF = "#apply";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-mint">
    {children}
  </p>
);

const ScrollToApply = ({
  label = "Book a Call",
  className = "",
}: {
  label?: string;
  className?: string;
}) => (
  <a
    href={BOOK_HREF}
    className={`inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-7 py-3 rounded-full hover:bg-accent/90 transition-colors ${className}`}
  >
    {label}
  </a>
);

const MintDivider = () => (
  <div className="px-8">
    <div className="max-w-[1100px] mx-auto">
      <div className="border-t border-mint/60" />
    </div>
  </div>
);

const whatThisIs = [
  {
    title: "Not a course",
    body: "There is no module to complete. No framework that magically rearranges your business. The work happens in your nervous system, your identity, and your real-time decisions — not in a content library.",
  },
  {
    title: "Not coaching",
    body: "Sidsel is not here to motivate you, hold you accountable to someone else's plan, or teach you what to think. Monad OS reveals what has been running you, so the next decision comes from a different place.",
  },
  {
    title: "Not a mastermind",
    body: "You do not need another room of founders to compare yourself to. This is private, one-to-one, and built around what is actually in the way for you.",
  },
];

const testimonials = [
  {
    name: "Ilya Paveliev",
    role: "Hologram",
    quote:
      "I have done executive advisory work before. This is not that. Something shifted in how I relate to pressure and it changed how I show up with my team. Quietly. Permanently.",
  },
  {
    name: "Annie Reardon",
    role: "LUDO",
    quote:
      "For the first time I am building the company around the life I want, not the other way around. That distinction sounds small. It changed everything.",
  },
  {
    name: "Rudi Adigbli",
    role: "ReeThink",
    quote:
      "Very few work with your energy the way Sidsel does, and that's what makes it so effective.",
  },
];

const faqs = [
  {
    q: "What actually happens on the call?",
    a: "Thirty minutes, one-to-one with Sidsel. We look at where you are, what is actually in the way, and whether Monad OS is the right next step. No pitch. If it is not a fit, you will know.",
  },
  {
    q: "What's the investment?",
    a: "Monad OS is a premium engagement. The figure is shared on your call, once there is a clear mutual fit. No pressure, no surprises.",
  },
  {
    q: "How many people do you take?",
    a: "Capacity is kept intentionally small — a maximum of ten active clients at any one time. Starts are rolling, on Mondays.",
  },
  {
    q: "Is there a guarantee?",
    a: "No. This is for founders who back themselves. What is guaranteed is the depth of the work and the attention. What happens with it is yours.",
  },
];

// -----------------------------
// Application questionnaire
// -----------------------------
type QuestionType = "single" | "text" | "email";
interface Question {
  id: string;
  prompt: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
}

const questions: Question[] = [
  {
    id: "stage",
    prompt: "Which best describes where your business is right now?",
    type: "single",
    options: [
      "I have traction, real revenue, and a company that works",
      "I'm scaling and the way I'm operating is no longer sustainable",
      "I've plateaued and more strategy is not moving the ceiling",
      "I'm in early days, still finding traction",
    ],
  },
  {
    id: "challenge",
    prompt: "What is the real constraint right now?",
    type: "single",
    options: [
      "I am the bottleneck — the business depends on me",
      "My identity is fused with the company and I can feel the cost",
      "I keep making decisions from pressure, not clarity",
      "I know there is more, but I cannot fully name it yet",
      "Something else",
    ],
  },
  {
    id: "openness",
    prompt:
      "Are you open to working with state, identity, and energy — not only strategy?",
    type: "single",
    options: [
      "Yes — that is exactly what I am looking for",
      "Curious and open, even if I do not fully understand it yet",
      "Only if it is grounded in real outcomes",
      "No, I am looking for tactical advice",
    ],
  },
  {
    id: "why_now",
    prompt: "Why now? What has shifted that brought you to this page?",
    type: "text",
    placeholder: "A few sentences is enough.",
  },
  {
    id: "name",
    prompt: "What's your full name?",
    type: "text",
    placeholder: "First and last name",
  },
  {
    id: "email",
    prompt: "What's the best email to reach you on?",
    type: "email",
    placeholder: "you@company.com",
  },
];

const Apply = () => {
  usePageMeta(
    "Monad OS — Apply",
    "Watch the video. Answer a few questions. If it's a fit, book a 30-minute call with Sidsel."
  );

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = questions.length;
  const current = questions[step];
  const progress = useMemo(
    () => Math.round(((submitted ? total : step) / total) * 100),
    [step, submitted, total]
  );

  const validate = (q: Question, value: string | undefined) => {
    if (!value || !value.trim()) return "Please complete this question to continue.";
    if (q.type === "email") {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      if (!ok) return "Please enter a valid email address.";
    }
    if (q.type === "text" && value.trim().length > 1000) {
      return "Please keep your answer under 1000 characters.";
    }
    return null;
  };

  const handleNext = () => {
    const value = answers[current.id];
    const err = validate(current, value);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setError(null);
    if (step > 0) setStep(step - 1);
  };

  const setAnswer = (id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    if (error) setError(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="h-16" />

      {/* HERO — VSL + single CTA */}
      <section className="pt-[80px] pb-[80px] px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <Eyebrow>Apply to work with Sidsel</Eyebrow>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-[64px] font-extrabold text-foreground leading-[1.05] tracking-[-0.5px] max-w-[860px] mx-auto">
            Watch the video. Then, if it lands, book your call.
          </h1>
          <p className="mt-6 text-[18px] text-body leading-[1.6] max-w-[640px] mx-auto">
            What Monad OS is, who it is for, and how the work moves the ceiling that strategy cannot.
          </p>

          {/* VSL */}
          <div className="mt-12 max-w-[920px] mx-auto">
            <div
              className="relative w-full rounded-xl overflow-hidden bg-foreground"
              style={{ aspectRatio: "16 / 9" }}
            >
              {VSL_VIDEO_URL ? (
                <iframe
                  src={VSL_VIDEO_URL}
                  title="Monad OS — Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-mint flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-mint" />
                  </div>
                  <p className="text-mint text-[12px] uppercase tracking-[0.22em] font-semibold">
                    Video coming soon
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10">
            <ScrollToApply label="Book your call" />
            <p className="mt-4 text-[14px] text-body">
              Takes 2 minutes · Reviewed personally by Sidsel
            </p>
          </div>

          <p className="mt-10 text-[13px] text-body/70">
            150+ founders, leaders, and creators have experienced the work.
          </p>
        </div>
      </section>

      <MintDivider />

      {/* WHAT THIS IS NOT */}
      <section className="py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center">
            <Eyebrow>What this is</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2] max-w-[760px] mx-auto">
              Not a course. Not coaching. Not a mastermind.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatThisIs.map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-[20px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-[15px] text-body leading-[1.75]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MintDivider />

      {/* TESTIMONIALS — short */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2]">
            What founders say after the work
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-xl p-8 flex flex-col"
              >
                <p className="text-[15px] text-body leading-[1.75] flex-1">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="text-[15px] font-semibold text-foreground">{t.name}</p>
                  <p className="text-[13px] text-body/70 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[100px] px-8">
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2]">
            Before you apply
          </h2>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-mint/40">
                <AccordionTrigger className="text-left text-[17px] font-semibold text-foreground py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-body leading-[1.75] pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <MintDivider />

      {/* APPLICATION QUESTIONNAIRE */}
      <section id="apply" className="py-[120px] px-8 scroll-mt-24 bg-surface">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center">
            <Eyebrow>Apply now</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2]">
              See if you're the right fit.
            </h2>
            <p className="mt-5 text-[16px] text-body leading-[1.7] max-w-[560px] mx-auto">
              A short application. Sidsel reads every one personally. If it's a fit, you'll be invited to book a 30-minute call.
            </p>
          </div>

          <div className="mt-12 bg-card border border-border rounded-xl p-8 sm:p-12">
            {/* Progress */}
            <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.16em] text-mint">
              <span>{submitted ? "Complete" : `Step ${step + 1} / ${total}`}</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-3 h-[3px] bg-mint/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-mint transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Body */}
            {!submitted ? (
              <div className="mt-10">
                <h3 className="text-[22px] sm:text-[24px] font-semibold text-foreground leading-[1.35]">
                  {current.prompt}
                </h3>

                <div className="mt-8 space-y-3">
                  {current.type === "single" &&
                    current.options?.map((opt) => {
                      const selected = answers[current.id] === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setAnswer(current.id, opt)}
                          className={`w-full text-left rounded-xl border px-5 py-4 text-[15px] leading-[1.5] transition-colors ${
                            selected
                              ? "bg-mint/30 border-mint text-foreground"
                              : "bg-background border-border text-foreground hover:bg-mint/10"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}

                  {current.type === "text" && (
                    <textarea
                      value={answers[current.id] ?? ""}
                      onChange={(e) => setAnswer(current.id, e.target.value)}
                      placeholder={current.placeholder}
                      rows={5}
                      maxLength={1000}
                      className="w-full rounded-xl border border-border bg-background px-5 py-4 text-[15px] text-foreground placeholder:text-body/50 focus:outline-none focus:border-mint resize-none"
                    />
                  )}

                  {current.type === "email" && (
                    <input
                      type="email"
                      value={answers[current.id] ?? ""}
                      onChange={(e) => setAnswer(current.id, e.target.value)}
                      placeholder={current.placeholder}
                      maxLength={255}
                      className="w-full rounded-xl border border-border bg-background px-5 py-4 text-[15px] text-foreground placeholder:text-body/50 focus:outline-none focus:border-mint"
                    />
                  )}
                </div>

                {error && (
                  <p className="mt-4 text-[13px] text-accent font-medium">{error}</p>
                )}

                {/* Controls */}
                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="text-[13px] font-semibold uppercase tracking-[0.16em] text-body/70 hover:text-foreground disabled:opacity-30 disabled:hover:text-body/70 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-7 py-3 rounded-full hover:bg-accent/90 transition-colors"
                  >
                    {step === total - 1 ? "Book my call" : "Next"}
                  </button>
                </div>
              </div>
            ) : (
              // Completion state — reveal Calendly link
              <div className="mt-10 text-center">
                <h3 className="text-[26px] sm:text-[30px] font-bold text-foreground leading-[1.25]">
                  Thank you{answers.name ? `, ${answers.name.split(" ")[0]}` : ""}.
                </h3>
                <p className="mt-5 text-[16px] text-body leading-[1.75] max-w-[480px] mx-auto">
                  Your application has been received. Choose a time below for a 30-minute call with Sidsel. No pitch.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-8 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
                >
                  Book your call
                </a>
                <p className="mt-5 text-[13px] text-body/70">
                  Applications are reviewed personally.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
