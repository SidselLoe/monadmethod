const cards = [
  {
    heading: "State shifts first.",
    body: "Activations reset your baseline. Inner coherence returns, your signal clears, and your frequency shifts. You stop operating from pressure.",
  },
  {
    heading: "Underlying patterns surface.",
    body: "Guided reflection reveals the unconscious beliefs shaping your decisions. What was invisible becomes visible, so it can shift.",
  },
  {
    heading: "Direction clarifies.",
    body: "Your purpose and what you actually want become clear. The identity patterns keeping you from it become visible.",
  },
  {
    heading: "Next-level identity stabilizes.",
    body: "A new internal operating system takes shape. Decisions, boundaries, delegation, and standards that match who you are becoming.",
  },
];

const WhyThisWorks = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center leading-[1.15]">
          Why this works when nothing else has stuck
        </h2>
        <p className="mt-5 text-lg text-muted-foreground text-center max-w-[640px] mx-auto leading-[1.6]">
          Not a course. Not group coaching. A recalibration built from hundreds of hours working with founders.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-background border border-border rounded-xl p-7 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-medium text-foreground">
                {c.heading}
              </h3>
              <p className="mt-3 text-base text-foreground leading-[1.5]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
