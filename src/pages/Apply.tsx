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

// ⚠️ Replace these two placeholders when ready to go live.
const VSL_VIDEO_URL = ""; // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const BOOKING_EMBED_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const BOOK_HREF = "#book";

const MintDivider = () => (
  <div className="px-8">
    <div className="max-w-[1100px] mx-auto">
      <div className="border-t border-mint/60" />
    </div>
  </div>
);

const BookButton = ({ className = "" }: { className?: string }) => (
  <a
    href={BOOK_HREF}
    className={`inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-7 py-3 rounded-full hover:bg-accent/90 transition-colors ${className}`}
  >
    Book a Call
  </a>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-mint">
    {children}
  </p>
);

const modalities = [
  {
    title: "Get out of your head",
    body: "Your best thinking has never arrived through effort. Activations clear what has been preventing it and take you into the state where clarity, creative power, and sharp decisions actually live. Guided, music-driven, experienced lying down. No technique. No performance. Each session compounds. What becomes available in that state is not something you find. It finds you.",
  },
  {
    title: "Reveal what's been running you",
    body: "You can't see the patterns running your leadership from inside them. Structured self-inquiry surfaces them. Every reflection becomes the foundation for the next session. What has been making your decisions without your permission gets named.",
  },
  {
    title: "Take aligned action",
    body: "The activations shift your state. The inquiry names what's been running underneath you. The sessions bring both into action. Priorities, delegation, decisions, communication. They move differently now. Not because the strategy is better. Because you have changed.",
  },
];

const included = [
  {
    title: "10× Monad Activations",
    body: "A guided, music-driven process that takes you into the state where your clearest decisions live. No technique. No performance. You show up, lie down, and let the static clear. The effect compounds. Each session goes deeper than the last.",
  },
  {
    title: "4× Guided Inquiry",
    body: "Your leadership is being shaped by patterns you have never examined. Structured self-inquiry surfaces them. Every reflection becomes the foundation for your next session. What was invisible becomes specific.",
  },
  {
    title: "4× Private 1:1 Sessions (44 min)",
    body: "The activations shift your state. The inquiry names what's been running underneath you. The sessions bring both into action. Priorities, delegation, decisions, communication. Built from the new state, not the old one.",
  },
  {
    title: "30 Days Private Support",
    body: "The shift does not pause between sessions. Private voice-note access for when something comes up mid-week and you need clarity now. Real follow-through. Accountability that does not drift.",
  },
];

const mechanism = [
  {
    title: "State shifts first",
    body: "You have tried other approaches. They gave you language for the problem, not relief from it. Your nervous system has been running on pressure so long you have forgotten what clear thinking feels like. When that resets, the clarity is already there.",
  },
  {
    title: "Patterns become visible",
    body: "The belief that if you step back, things fall apart. The habit of saying yes when the honest answer is no. The fusion between your worth and the company's performance. Not character flaws. Patterns making your decisions without your permission. Once you see them, they stop running you.",
  },
  {
    title: "Direction gets honest",
    body: "Most founders build toward a version of success they have never questioned. When the noise quiets, what surfaces is not what you expected. What do you actually want from this company? What would it feel like to build from purpose instead of pressure?",
  },
  {
    title: "A new way of operating",
    body: "You stop leading from patterns that were never yours. How you delegate, decide, and hold pressure starts to match where you are going, not where you have been. The internal shift leads. The external results follow.",
  },
];

const forYou = [
  "You are the business. If you disappeared tomorrow, the company would not persist. You have traction. You are not in survival mode. But how you have been operating is no longer sustainable.",
  "You know there is more. You cannot fully name it yet, but the pull is there. What got you here is not what will get you there, and you can feel it.",
  "You have taken your destiny into your own hands. No one is coming to save you. Not a cofounder, not a hire, not the next framework. The responsibility for what happens next sits with you.",
  "You want to be pointed inward, not told what to do. You do not trust people who hand you formulas. What draws you to this work is that it reveals rather than prescribes.",
  "You are open to energy work as a real mechanism for change. You do not need to fully understand it. You are willing to experience it, and you hold, or are open to holding, the belief that we are more than this physical 3D reality.",
  "You are ready to look at what is underneath. The patterns, the identity fusion, the drive that built the company and is now the ceiling. You are open to something that works at a different layer than strategy.",
];

const notForYou = [
  "You want someone to hand you a system or tell you what to do. This work does not prescribe. It reveals. If you are looking for a tactical roadmap or a revenue formula, you will be frustrated here.",
  "You have not yet built anything. You are still in ideation, still in employment, or still in survival mode. This work assumes you have traction and the weight that comes with it.",
  "You do not believe that internal state shapes external results. If that premise sounds like a metaphor to you rather than a mechanism, this is not the work you are looking for.",
  "You are not willing to be honest with yourself. The work surfaces what has been running you. If you are here to perform self-awareness rather than actually do it, nothing will shift.",
];

const testimonials = [
  {
    name: "Bianca Polizzi",
    role: "Founder, Polizzi Media",
    quote:
      "I reclaimed my sense of self-worth. I've shed so much and become such a different version of myself.",
  },
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
      "Working with Sidsel was the first truly holistic experience I've had. A lot of work focuses on strategy. Some goes deeper, into beliefs and how to change them. Very few work with your energy the way Sidsel does, and that's what makes it so effective.",
  },
  {
    name: "Ella Cane",
    role: "Business Owner, Live Your Truth",
    quote:
      "I needed someone who could help me structure everything — not just give me more ideas. Regular check-ins, accountability, strategic guidance. That's what I actually needed.",
  },
  {
    name: "Ieva Urenceva",
    role: "@catchagypsea",
    quote:
      "Sidsel appeared in my life at exactly the right time. The sessions helped me reconnect with myself after years of running on stress. Every session left me clearer and more centred than the last.",
  },
];

const faqs = [
  {
    q: "Do I need to know my purpose before I start?",
    a: "No. Most people arrive having built from push for years without ever naming it. The thirty days clears the interference and surfaces what has been underneath. Purpose clarity is usually something the work produces, not something you bring to it.",
  },
  {
    q: "What actually happens over the thirty days?",
    a: "Weekly Monad Activations, weekly private 1:1 sessions, guided voice-note inquiry between sessions, and private support throughout. Your state shifts first, the patterns running underneath become visible, your direction gets honest, and a new way of operating takes hold.",
  },
  {
    q: "Is this strategy or inner work?",
    a: "Both, in that order. The activations shift your state, the inquiry names what has been running underneath, and the sessions turn that into decisions, delegation, and structure. The internal shift leads. The external results follow.",
  },
  {
    q: "I've done executive advisory work or therapy before. How is this different?",
    a: "This works on your state and identity directly, through the nervous system, not only through insight or talking. People who have done other work consistently say this reaches a layer those did not.",
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

const Apply = () => {
  usePageMeta(
    "Monad OS — Apply",
    "The ceiling is internal. The work is how you move it. Three modalities. Thirty days. Apply to Monad OS."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="h-16" />

      {/* HERO */}
      <section className="pt-[80px] pb-[60px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <Eyebrow>For founders who are the business</Eyebrow>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-[68px] font-extrabold text-foreground leading-[1.05] tracking-[-0.5px] max-w-[900px] mx-auto">
            You are the business. That's not a compliment.
          </h1>
          <p className="mt-6 text-[18px] sm:text-[20px] text-body leading-[1.6] max-w-[680px] mx-auto">
            The ceiling is internal. The work is how you move it. Three modalities. Thirty days.
          </p>

          {/* VSL video */}
          <div className="mt-12 max-w-[920px] mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden bg-foreground" style={{ aspectRatio: "16 / 9" }}>
              {VSL_VIDEO_URL ? (
                <iframe
                  src={VSL_VIDEO_URL}
                  title="Monad OS — Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={monadSymbol} alt="Monad" className="w-20 h-20 opacity-90 invert" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-10">
            <BookButton />
            <p className="mt-4 text-[14px] text-body">No pressure. No pitch.</p>
            <p className="mt-2 text-[13px] text-body/70">
              150+ founders, leaders, and creators have experienced the work.
            </p>
          </div>
        </div>
      </section>

      <MintDivider />

      {/* THE CEILING */}
      <section className="py-[100px] px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            You found the ceiling.
          </h2>
          <p className="mt-6 text-[18px] text-body leading-[1.75]">
            The revenue is real. The recognition. The company that actually works. And the feeling you were climbing toward never arrived. More strategy will not raise the ceiling. What needs to change is underneath it.
          </p>
        </div>
      </section>

      <MintDivider />

      {/* THREE MODALITIES */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-center text-[18px] text-body max-w-[780px] mx-auto leading-[1.7]">
            The Monad Method operates through three modalities that work together. Monad OS is how you install it.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalities.map((m) => (
              <div key={m.title} className="bg-card border border-border rounded-xl p-8 text-left">
                <h3 className="text-[20px] font-semibold text-foreground">{m.title}</h3>
                <p className="mt-4 text-[15px] text-body leading-[1.75]">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2] max-w-[820px] mx-auto">
            Thirty days. Three modalities. A different internal operating system.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            {included.map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-[20px] font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-[15px] text-body leading-[1.7]">{c.body}</p>
              </div>
            ))}
          </div>

          <BookButton className="mt-12" />
        </div>
      </section>

      {/* THE MECHANISM — dark section */}
      <section className="bg-foreground py-[120px] px-8">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-background leading-[1.15]">
              The mechanism.
            </h2>
            <p className="mt-6 text-[18px] text-background/80 leading-[1.75] max-w-[720px] mx-auto">
              The Monad Method is a spiral, not a sequence. These four things happen together and deepen with each revolution.
            </p>
          </div>

          <div className="mt-14 space-y-10">
            {mechanism.map((m, i) => (
              <div key={m.title} className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="flex-shrink-0 text-mint font-editorial text-[28px] leading-none sm:pt-1 w-12">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-background">{m.title}</h3>
                  <p className="mt-3 text-[16px] text-background/80 leading-[1.75]">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-[100px] px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-editorial italic font-bold text-[28px] sm:text-[36px] text-foreground leading-[1.3]">
            "You are the business. You are also the upgrade."
          </p>
        </div>
      </section>

      <MintDivider />

      {/* WHO MONAD OS IS FOR */}
      <section className="py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2]">
            Is Monad OS for you?
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For you */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-[18px] font-semibold text-foreground">Monad OS is for you if…</h3>
              <ul className="mt-6 space-y-5">
                {forYou.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-body leading-[1.7]">
                    <span className="flex-shrink-0 text-mint mt-1" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div className="bg-surface rounded-xl p-8">
              <h3 className="text-[18px] font-semibold text-foreground/80">Monad OS is not for you if…</h3>
              <ul className="mt-6 space-y-5">
                {notForYou.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-body/70 leading-[1.7]">
                    <span className="flex-shrink-0 mt-1" aria-hidden>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.2]">
            What founders are saying
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-8 flex flex-col">
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
            Before you book
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

      {/* FINAL CTA / BOOKING */}
      <section id="book" className="py-[120px] px-8 scroll-mt-24">
        <div className="max-w-[820px] mx-auto text-center">
          <Eyebrow>Become the upgrade</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            You are the business. You are also the upgrade.
          </h2>
          <p className="mt-6 text-[18px] text-body leading-[1.75]">
            Monad OS is how you make the shift. Thirty days. Three modalities. A different internal operating system.
          </p>
          <p className="mt-4 text-[14px] text-body/70">
            Applications are reviewed personally. The call is 30 minutes. No pitch.
          </p>

          <div className="mt-12">
            {BOOKING_EMBED_URL ? (
              <div className="rounded-xl overflow-hidden border border-border bg-card">
                <iframe
                  src={BOOKING_EMBED_URL}
                  title="Book a call"
                  className="w-full"
                  style={{ height: "720px", border: 0 }}
                />
              </div>
            ) : (
              <BookButton />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
