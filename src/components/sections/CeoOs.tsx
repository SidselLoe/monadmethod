const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const cards = [
  {
    heading: "10× Monad Activations",
    body: "A guided, music-driven process that takes you into the state where your clearest decisions live. No technique. No performance. You show up, lie down, and let the static clear. The effect compounds. Each session goes deeper than the last.",
  },
  {
    heading: "4× Guided Inquiry",
    body: "Your leadership is being shaped by patterns you have never examined. Structured self-inquiry surfaces them. Every reflection becomes the foundation for your next session. What was invisible becomes specific.",
  },
  {
    heading: "4× Private 1:1 Sessions (44 min)",
    body: "The activations shift your state. The inquiry names what's been running underneath you. The sessions bring both into action. Priorities, delegation, decisions, communication. Built from the new state, not the old one.",
  },
  {
    heading: "30 Days Private Support",
    body: "The shift does not pause between sessions. Private voice-note access for when something comes up mid-week and you need clarity now. Real follow-through. Accountability that does not drift.",
  },
];

const CeoOs = () => {
  return (
    <section id="monad-os" className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-4">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground ">
          The Monad Method operates through three modalities that work together. Monad OS is how you install it.
        </h2>
        <p className="mt-5 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
          Thirty days. Three modalities. A different internal operating system.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-card border border-border rounded-xl p-8 text-left"
            >
              <h3 className="text-[20px] font-semibold text-foreground">
                {c.heading}
              </h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-12 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
};

export default CeoOs;
