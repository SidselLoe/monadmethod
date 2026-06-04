import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import MoreFromFounders from "@/components/sections/MoreFromFounders";
import usePageMeta from "@/hooks/usePageMeta";
import monadSymbol from "@/assets/monad-symbol.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ⚠️ Placeholder — replace when the VSL is ready.
const VSL_VIDEO_URL = ""; // e.g. "https://www.youtube.com/embed/VIDEO_ID"
// Existing Calendly link, revealed only after the questionnaire is completed.
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const BOOK_HREF = "#apply";

// Small mint caption — matches brand caption usage across the site.
const Caption = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint">
    {children}
  </p>
);

const PillCta = ({
  label = "Book your call",
  href = BOOK_HREF,
  external = false,
}: {
  label?: string;
  href?: string;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
  >
    {label}
  </a>
);

// Underline an accent phrase inside a headline (mint thick underline).
const Underlined = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{children}</span>
    <span
      aria-hidden
      className="absolute left-0 right-0 bottom-[0.08em] h-[10px] bg-mint/70 z-0"
    />
  </span>
);

// -----------------------------
// Content
// -----------------------------
const journey = [
  {
    label: "The foundation",
    title: "10× Monad Activations",
    body: "A guided, music-driven process that takes you into the state where your clearest decisions live. You show up, lie down, and let the static clear. Each session goes deeper than the last.",
  },
  {
    label: "The depth",
    title: "4× Private 1:1 Sessions",
    body: "Forty-four minutes, one-to-one with Sidsel. Priorities, delegation, decisions, communication — built from the new state, not the old one.",
  },
  {
    label: "The clarity",
    title: "4× Guided Inquiry",
    body: "Structured self-inquiry between sessions surfaces the patterns shaping your leadership. What was invisible becomes specific.",
  },
  {
    label: "The follow-through",
    title: "30 Days Private Support",
    body: "Private voice-note access for when something comes up mid-week and you need clarity now. Real follow-through. Accountability that does not drift.",
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
      "Very few work with your energy the way Sidsel does, and that is what makes it so effective.",
  },
];

const whatThisIs = [
  {
    heading: "Not a course",
    body: "There is no module to complete. No framework that magically rearranges your business. The work happens in your nervous system, your identity, and your real-time decisions — not in a content library.",
  },
  {
    heading: "Not coaching",
    body: "Sidsel is not here to motivate you, hold you accountable to someone else's plan, or teach you what to think. Monad OS reveals what has been running you, so the next decision comes from a different place.",
  },
  {
    heading: "Not a mastermind",
    body: "You do not need another room of founders to compare yourself to. This is private, one-to-one, and built around what is actually in the way for you.",
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
    q: "I have done executive advisory work or therapy before. How is this different?",
    a: "This works on your state and identity directly, through the nervous system, not only through insight or talking. People who have done other work consistently say this reaches a layer those did not.",
  },
  {
    q: "Is there a guarantee?",
    a: "No. This is for founders who back themselves. What is guaranteed is the depth of the work and the attention. What happens with it is yours.",
  },
];

// -----------------------------
// Questionnaire
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
    "Watch the video. Answer a few questions. Book a 30-minute call with Sidsel."
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
    if (!value || !value.trim())
      return "Please complete this question to continue.";
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

      {/* HERO */}
      <section className="pt-[80px] pb-[60px] px-6 sm:px-8">
        <div className="max-w-[1080px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
            Watch the video. <br className="hidden sm:block" />
            Then, if it lands, <Underlined>book your call</Underlined>.
          </h1>

          <p className="mt-8 text-[18px] sm:text-[20px] text-body leading-[1.6] max-w-[680px] mx-auto">
            What Monad OS is, who it is for, and how the work moves the ceiling that strategy cannot.
          </p>

          {/* VSL */}
          <div className="mt-14 max-w-[960px] mx-auto">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  <img
                    src={monadSymbol}
                    alt="Monad"
                    className="w-16 h-16 object-contain"
                  />
                  <Caption>Video coming soon</Caption>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <PillCta />
            <Caption>Free · Takes 2 minutes</Caption>
          </div>

          <p className="mt-12 text-[15px] font-semibold text-foreground">
            150+ founders, leaders and creators have experienced the work.
          </p>
        </div>
      </section>

      {/* YOUR JOURNEY — what you actually get */}
      <section className="bg-surface py-[120px] px-6 sm:px-8 mt-20">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center">
            <Caption>Your journey</Caption>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
              What you <Underlined>actually get</Underlined>.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {journey.map((item, i) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-8 flex gap-6"
              >
                <div className="text-mint text-[36px] font-bold leading-none flex-shrink-0 w-12 tracking-[-0.02em]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-mint">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-[22px] font-bold text-foreground leading-[1.25]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-body leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col items-center gap-4">
            <PillCta />
            <Caption>30 minutes · One-to-one with Sidsel</Caption>
          </div>
        </div>
      </section>

      {/* RESULTS — testimonials */}
      <section className="py-[120px] px-6 sm:px-8">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center">
            <Caption>Results</Caption>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
              What <Underlined>founders</Underlined> are saying.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-xl p-8 flex flex-col"
              >
                <p className="font-editorial italic text-[22px] text-foreground leading-[1.55] flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-mint/40">
                  <p className="text-[16px] font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[14px] text-body mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="bg-surface py-[120px] px-6 sm:px-8">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center">
            <Caption>What this is</Caption>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
              Not a course. Not coaching. <br className="hidden md:block" />
              Not a <Underlined>mastermind</Underlined>.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatThisIs.map((c) => (
              <div
                key={c.heading}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="text-[22px] font-bold text-foreground">
                  {c.heading}
                </h3>
                <p className="mt-4 text-[15px] text-body leading-[1.75]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[120px] px-6 sm:px-8">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center">
            <Caption>Questions answered</Caption>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
              Everything you <Underlined>need to know</Underlined>.
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-16">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-mint/40"
              >
                <AccordionTrigger className="text-left text-[18px] font-semibold text-foreground py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-body leading-[1.75] pb-6 pr-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* APPLY NOW — questionnaire */}
      <section
        id="apply"
        className="bg-surface py-[120px] px-6 sm:px-8 scroll-mt-24"
      >
        <div className="max-w-[820px] mx-auto">
          <div className="text-center">
            <Caption>Book your call</Caption>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
              A few <Underlined>quick questions</Underlined>.
            </h2>
            <p className="mt-6 text-[16px] text-body leading-[1.7] max-w-[560px] mx-auto">
              Answer a few questions so Sidsel has context before your call. You'll be able to book your 30-minute call at the end.
            </p>
          </div>

          <div className="mt-14 bg-card border border-border rounded-xl p-8 sm:p-12">
            {/* Progress header */}
            <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground">
              <span>
                {submitted ? "Complete" : (
                  <>
                    Step <span className="text-mint">{step + 1}</span> / {total}
                  </>
                )}
              </span>
              <span className="text-mint">{progress}%</span>
            </div>
            <div className="mt-3 h-[3px] bg-mint/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-mint transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {!submitted ? (
              <div className="mt-12">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-foreground leading-[1.3]">
                  {step + 1}. {current.prompt}
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
                          className={`w-full text-left rounded-xl border px-6 py-5 text-[15px] leading-[1.5] transition-colors ${
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
                      className="w-full rounded-xl border border-border bg-background px-6 py-5 text-[15px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-mint resize-none"
                    />
                  )}

                  {current.type === "email" && (
                    <input
                      type="email"
                      value={answers[current.id] ?? ""}
                      onChange={(e) => setAnswer(current.id, e.target.value)}
                      placeholder={current.placeholder}
                      maxLength={255}
                      className="w-full rounded-xl border border-border bg-background px-6 py-5 text-[15px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-mint"
                    />
                  )}
                </div>

                {error && (
                  <p className="mt-5 text-[13px] text-accent font-semibold">
                    {error}
                  </p>
                )}

                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground hover:text-mint disabled:opacity-30 disabled:hover:text-foreground transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex bg-accent text-accent-foreground text-[13px] font-semibold uppercase tracking-[0.16em] px-8 py-4 rounded-full hover:bg-accent/90 transition-colors"
                  >
                    {step === total - 1 ? "Book my call" : "Next"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-12 text-center">
                <h3 className="text-[28px] sm:text-[36px] font-bold text-foreground leading-[1.2]">
                  Thank you
                  {answers.name ? `, ${answers.name.split(" ")[0]}` : ""}.
                </h3>
                <p className="mt-6 text-[16px] text-body leading-[1.75] max-w-[480px] mx-auto">
                  Choose a time below for your 30-minute call with Sidsel. No pitch.
                </p>
                <div className="mt-10">
                  <PillCta label="Book your call" href={CALENDLY_URL} external />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <MoreFromFounders />

      <Footer />
    </div>
  );
};

export default Apply;
