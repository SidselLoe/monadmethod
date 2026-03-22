import { Link } from "react-router-dom";

const cards = [
  {
    heading: "10× Energy Activations",
    body: "A guided, music-driven process that gives you access to the state where your clearest decisions live. No technique. No performance. You show up, lie down, and let your system reset. The effect compounds over time. Most founders feel the shift after the first session.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" stroke="#161616" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    heading: "4× Guided Voice-Note Reflection",
    body: "Your leadership is being shaped by beliefs you have never examined. This is not journaling. It is a structured form of self-inquiry designed to surface what is actually driving your decisions. Your coach reads every reflection before your next session. What was invisible becomes specific.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6" y1="22" x2="6" y2="14" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="26" x2="12" y2="10" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="18" y2="12" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="28" x2="24" y2="8" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="22" x2="30" y2="14" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: "4× Private 1:1 Sessions (44 min)",
    body: "Your sessions are not starting from scratch each week. They are built on everything your reflections have already surfaced. That is why the progress compounds. Priorities, delegation, boundaries, communication. Your real situation, sharpened. Every session accelerates what is already in motion.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="18" r="10" stroke="#161616" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="18" r="10" stroke="#161616" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    heading: "30 Days Private Support",
    body: "The shift does not pause between sessions. Private voice-note support for when something comes up on a Wednesday morning and you need clarity now. Check-ins, real follow-through, and the kind of support that keeps momentum from drifting.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 16C4 9.373 9.373 4 16 4h4c6.627 0 12 5.373 12 12v0c0 6.627-5.373 12-12 12h-4c-1.5 0-2.95-.275-4.286-.778L4 30l2.5-5.5A11.94 11.94 0 0 1 4 16Z" stroke="#161616" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

const CeoOs = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground leading-[1.15]">
          CEO OS
        </h2>
        <p className="mt-5 text-lg text-[#999999] max-w-[640px] mx-auto leading-[1.6]">
          The Monad Method is built on three modalities that work together. The CEO OS is how you install it. In 30 days, with a few hours a week, founders consistently reach what would have taken years of coaching, therapy, or retreats to arrive at. If they ever did.
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
                <h3 className="text-lg sm:text-xl font-medium text-foreground">
                  {c.heading}
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-[1.5]">
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
          className="inline-flex mt-12 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
        >
          Install the Upgrade
        </Link>
      </div>
    </section>
  );
};

export default CeoOs;
