const APPLY_URL = "/apply";

const cards = [
  {
    heading: "10 live Monad Activations",
    body: "Join as many as you like; most people do four to six. Small groups: mostly you, receiving, with a few minutes to share at the end.",
  },
  {
    heading: "Four weeks of voice-note self-inquiry",
    body: "A workbook each week, answered out loud.",
  },
  {
    heading: "Four private sessions",
    body: "One to one with me, once a week.",
  },
  {
    heading: "WhatsApp support",
    body: "For when something comes up mid-week.",
  },
];

const CeoOs = () => {
  return (
    <section id="monad-os" className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground mb-4">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
          <span className="font-extrabold">Thirty days.</span>{" "}A new operating system.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-card border border-border rounded-xl p-8 text-left"
            >
              <h3 className="text-[20px] font-extrabold text-foreground">
                {c.heading}
              </h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[18px] text-body leading-[1.7]">
          Now taking applications for November.
        </p>

        <a
          href={APPLY_URL}
          className="inline-flex mt-6 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          APPLY NOW
        </a>
      </div>
    </section>
  );
};

export default CeoOs;
