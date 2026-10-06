const APPLY_URL = "/apply";

const cards = [
  {
    heading: "Clear the backlog",
    body: "Most of what holds you back is stored below thought. Monad Activations clear it while you lie down and receive. Guided, music-driven, nothing to do.",
  },
  {
    heading: "Name what's been running you",
    body: "Hidden beliefs show up the moment you grow. Voice-note self-inquiry catches them as they surface, in your own words.",
  },
  {
    heading: "Move from the new state",
    body: "Private sessions turn what has opened up into real moves: hiring, delegating, selling, deciding.",
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
          <span className="font-extrabold">The Monad Method operates through three modalities that work together.</span>{" "}Monad OS is how you install it.
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
              <h3 className="text-[20px] font-extrabold text-foreground">
                {c.heading}
              </h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <a
          href={APPLY_URL}
          className="inline-flex mt-12 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default CeoOs;
