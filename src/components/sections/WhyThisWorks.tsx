const cards = [
  {
    step: "01",
    heading: "State shifts first.",
    body: "You have tried coaching. Retreats. Therapy. Maybe even plant medicine. They gave you language for the problem, but not relief from it. This starts somewhere else. Your nervous system has been running on pressure so long you have forgotten what clear thinking actually feels like. When that resets, you do not need more strategy. The clarity is already there.",
  },
  {
    step: "02",
    heading: "Patterns become visible.",
    body: "The belief that if you step back, things fall apart. The habit of saying yes when the honest answer is no. The quiet fusion between your worth and the company's performance. These are not character flaws. They are patterns that were installed long before the business existed. They have been running your decisions without your permission. Once you see them, they stop running you.",
  },
  {
    step: "03",
    heading: "Direction gets honest.",
    body: "Most founders are building toward a version of success they have never questioned. When the noise quiets down, what surfaces is not always what you expected. What do you actually want from this company? What would it feel like to build from purpose instead of pressure? When those answers get honest, everything you do becomes more precise.",
  },
  {
    step: "04",
    heading: "A new operating system takes hold.",
    body: "You stop leading from patterns that were never yours to begin with. How you delegate, decide, and hold pressure starts to match where you are going, not where you have been. The internal shift leads. The external results follow.",
  },
];

const WhyThisWorks = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center leading-[1.15]">
          Why this works.
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {cards.map((c) => (
            <div
              key={c.step}
              className="bg-background border border-border rounded-xl p-7 sm:p-8"
            >
              <span className="text-[13px] font-medium text-accent tracking-[1px]">
                {c.step}
              </span>
              <h3 className="mt-3 text-lg sm:text-xl font-medium text-foreground">
                {c.heading}
              </h3>
              <p className="mt-2 text-base text-foreground leading-[1.5]">
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
