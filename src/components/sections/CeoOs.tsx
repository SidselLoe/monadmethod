import { Link } from "react-router-dom";

const cards = [
  {
    heading: "10× Monad Activations",
    body: "A guided, music-driven process that takes you into the state where your clearest decisions live. No technique. No performance. You show up, lie down, and let the static clear. The effect compounds. Each session goes deeper than the last.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="18" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    heading: "4× Guided Voice-Note Self-Inquiry",
    body: "Your leadership is being shaped by patterns you have never examined. Structured self-inquiry surfaces them. Every reflection becomes the foundation for your next session. What was invisible becomes specific.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6" y1="22" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="26" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="28" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="22" x2="30" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: "4× Private 1:1 Sessions (44 min)",
    body: "The activations shift your state. The inquiry names what's been running underneath you. The sessions bring both into action. Priorities, delegation, decisions, communication. Built from the new state, not the old one.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    heading: "30 Days Private Support",
    body: "The shift does not pause between sessions. Private voice-note access for when something comes up mid-week and you need clarity now. Real follow-through. Accountability that does not drift.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16C4 9.373 9.373 4 16 4h4c6.627 0 12 5.373 12 12v0c0 6.627-5.373 12-12 12h-4c-1.5 0-2.95-.275-4.286-.778L4 30l2.5-5.5A11.94 11.94 0 0 1 4 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

const CeoOs = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-muted-foreground mb-4">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
          The Monad Method operates through three modalities that work together. Monad OS is how you install it.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
          Thirty days. Three modalities. A different internal operating system.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-secondary border border-border rounded-xl p-7 sm:p-8 flex flex-col sm:flex-row items-start gap-5 text-left"
            >
              <div className="flex-shrink-0 sm:hidden">
                {c.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {c.heading}
                </h3>
                <p className="mt-3 text-base text-foreground leading-[1.5]">
                  {c.body}
                </p>
              </div>
              <div className="flex-shrink-0 hidden sm:block">
                {c.icon}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/apply"
          className="inline-flex mt-12 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded-full hover:bg-accent/90 transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
};

export default CeoOs;
