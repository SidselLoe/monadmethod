import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MethodTheState from "@/components/sections/method/MethodTheState";
import MethodTestimonials from "@/components/sections/method/MethodTestimonials";
import Footer from "@/components/sections/Footer";
import MonadMark from "@/components/MonadMark";
import usePageMeta from "@/hooks/usePageMeta";

const stories = ["If I stop, it falls apart.", "I'll be enough when.", "I have to earn it.", "I have to hold it all together."];

const parts = [
  {
    step: "01",
    label: "Workbooks and voice notes",
    title: "See what's installed",
    body: "You answer my questions out loud, as voice notes. Talking gets past the overthinking mind and calms your nervous system while you process. I take everything you tell me and turn it into the next questions, so each workbook goes a layer deeper than the last. You tell me what you believe about yourself, and your answers show me what you actually believe.",
  },
  {
    step: "02",
    label: "Monad Activations",
    title: "Install the new version",
    body: "Guided energy sessions where your thinking mind steps aside. Your brainwaves slow, your heart and brain come into coherence, and you get to feel the next version of you before it has happened. That's where the update happens, below your thinking mind.",
    link: { to: "/activations", label: "What happens in an activation" },
  },
  {
    step: "03",
    label: "Strategic sessions",
    title: "Run it",
    body: "Private sessions with me that turn the new version into decisions and action, in your work, your money, your relationships and how you live. What you say in week one comes back in week three. There's no getting around your own words.",
  },
];

const offers = [
  {
    eyebrow: "Monad Activations",
    title: "Start here",
    body: "Live group energy sessions online, 90 minutes each. Book one on Luma and feel it for yourself.",
    cta: { href: "/activations", label: "Learn more", internal: true },
  },
  {
    eyebrow: "Monad OS",
    title: "The full method, in 30 days",
    body: "Four private sessions with me, a workbook made for you every week, 10 Monad Activations a month and WhatsApp support.",
    cta: { href: "/", label: "See Monad OS", internal: true },
    featured: true,
  },
  {
    eyebrow: "Monad LTS",
    title: "Long-term work",
    body: "For founders who've done Monad OS and want me in their corner as the business and the stakes grow. By invitation.",
    cta: { href: "/monad-lts", label: "Learn more", internal: true },
  },
];

const TheMethod = () => {
  usePageMeta(
    "The Monad Method | Sidsel Løschenkohl",
    "Some things won't run until you update. The Monad Method updates the operating system you run on, through workbooks, energy activations and strategic sessions working together.",
    { canonical: "https://www.monadmethod.com/the-method", ogType: "website" }
  );
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-background pt-[170px] pb-[100px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground mb-6">The Monad Method</p>
          <h1 className="text-4xl sm:text-5xl md:text-[72px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
            <span className="font-extrabold">Some things won't run</span>
            <br />
            until you update
          </h1>
          <p className="mt-8 text-[20px] text-foreground max-w-[760px] mx-auto leading-[1.7]">
            You're trying to run the life or business you want on an operating system that was never built for it, like new apps on an old version of your phone. The Monad Method is how you update it: three parts working together, at the level below strategy.
          </p>
        </div>
      </section>

      {/* What's running you */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
            <span className="font-extrabold">The stories</span> running in the background
          </h2>
          <p className="mt-6 text-[18px] text-body text-center max-w-[760px] mx-auto leading-[1.7]">
            Everyone runs on a few lines they learned long before any of this began. You rarely hear them out loud, but they decide what you allow yourself to want, to receive and to build.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stories.map((s) => (
              <div key={s} className="bg-card border border-border rounded-xl p-7 flex items-center">
                <p className="font-editorial italic text-[20px] text-foreground leading-[1.45]">“{s}”</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[18px] text-body text-center max-w-[820px] mx-auto leading-[1.7]">
            Software is just the easiest way to explain it. You're not a machine. What's running you lives in every layer of you, in your stories, your memories, your body and your energy, so the work happens in all of them, not just in your head.
          </p>
        </div>
      </section>

      {/* Three parts */}
      <section className="bg-background py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
            <span className="font-extrabold">Three parts,</span> working together
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {parts.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-8 flex flex-col">
                <span className="text-[34px] font-extrabold leading-none text-mint">{p.step}</span>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/70">{p.label}</p>
                <h3 className="mt-2 text-[22px] font-extrabold text-foreground leading-[1.3]">{p.title}</h3>
                <p className="mt-3 text-[15px] text-body leading-[1.7] flex-1">{p.body}</p>
                {p.link && (
                  <Link to={p.link.to} className="mt-5 text-[14px] font-semibold text-foreground underline underline-offset-4 decoration-[#7ec8c8] hover:decoration-2">
                    {p.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 text-[18px] text-body text-center max-w-[820px] mx-auto leading-[1.7]">
            They run at the same time, and they go round in a circle rather than a straight line. The activation shifts your state, so the next workbook goes deeper, so the next session starts further in. You come back to the same themes, and each time you're a little further down.
          </p>
        </div>
      </section>

      {/* The name */}
      <section className="bg-ink text-ink-foreground py-[100px] px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <MonadMark className="mx-auto h-12 w-12 text-mint" />
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-[48px] font-normal tracking-[-0.025em]">
            <span className="font-extrabold">Why it's called</span> the Monad
          </h2>
          <div className="mt-8 space-y-5 text-[18px] leading-[1.7] text-ink-foreground/85">
            <p>
              The monad is one of the oldest symbols there is. Pythagoras called it the source of all numbers, the one indivisible point everything else unfolds from. For Leibniz, every monad mirrors the whole universe from its own point of view.
            </p>
            <p>
              In this work it stands for you, the self that's left when the noise is removed. Somewhere along the way you learned that what you need lives outside you: safety, worth, answers, love. So you try to earn it, prove it or buy it, and every time you place something outside you, you place yourself outside of it.
            </p>
            <p className="text-ink-foreground font-semibold">
              The work removes what keeps that separation in place. What comes back isn't obtained. It's recovered. It was never missing.
            </p>
          </div>
        </div>
      </section>

      <MethodTheState />

      {/* Ways in */}
      <section className="bg-background py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
            <span className="font-extrabold">Three ways</span> to work with me
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {offers.map((o) => (
              <div key={o.eyebrow} className={`rounded-xl p-8 flex flex-col ${o.featured ? "bg-ink text-ink-foreground" : "bg-card border border-border"}`}>
                <p className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${o.featured ? "text-mint" : "text-foreground/70"}`}>{o.eyebrow}</p>
                <h3 className="mt-3 text-[22px] font-extrabold leading-[1.3]">{o.title}</h3>
                <p className={`mt-3 text-[15px] leading-[1.7] flex-1 ${o.featured ? "text-ink-foreground/85" : "text-body"}`}>{o.body}</p>
                <Link
                  to={o.cta.href}
                  className={`mt-6 self-start inline-flex text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full transition-colors ${o.featured ? "bg-accent text-accent-foreground hover:bg-accent/90" : "border border-mint-border text-foreground hover:bg-surface"}`}
                >
                  {o.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MethodTestimonials />

      {/* Close */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
            <span className="font-extrabold">Same you,</span> same results
          </h2>
          <p className="mt-5 text-[18px] text-body leading-[1.7]">A new result needs a new you. Still you, at a different frequency.</p>
          <Link to="/" className="inline-flex mt-9 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors">
            See Monad OS
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheMethod;
