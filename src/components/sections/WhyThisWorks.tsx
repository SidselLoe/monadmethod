const cards = [
  {
    heading: "State shifts first",
    body: "You have tried other approaches. They gave you language for the problem, but not relief from it. This starts somewhere else. Your nervous system has been running on pressure so long you have forgotten what clear thinking actually feels like. When that resets, you do not need more strategy. The clarity is already there.",
  },
  {
    heading: "Patterns become visible",
    body: "The belief that if you step back, things fall apart. The habit of saying yes when the honest answer is no. The quiet fusion between your worth and the company's performance. These are not character flaws. They are patterns installed long before the business existed. They have been running your decisions without your permission. Once you see them, they stop running you.",
  },
  {
    heading: "Direction gets honest",
    body: "Most founders are building toward a version of success they have never questioned. When the noise quiets down, what surfaces is not always what you expected. What do you actually want from this company? What would it feel like to build from purpose instead of pressure? When those answers get honest, everything you do becomes more precise.",
  },
  {
    heading: "A new way of operating takes hold",
    body: "You stop leading from patterns that were never yours to begin with. How you delegate, decide, and hold pressure starts to match where you are going, not where you have been. The internal shift leads. The external results follow.",
  },
];

const MonadSymbol = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="20" height="20" className="text-mint">
    <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="3.5"/>
    <circle cx="60" cy="60" r="8" fill="currentColor"/>
  </svg>
);

const WhyThisWorks = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15]">
          The mechanism.
        </h2>

        <p className="mt-6 text-[18px] text-body text-center max-w-[700px] mx-auto leading-[1.7]">
          The Monad Method is a spiral, not a sequence. These four things happen together and deepen with each revolution.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-background border border-border rounded-xl p-8"
            >
              <MonadSymbol />
              <h3 className="mt-3 text-[20px] font-semibold text-foreground">
                {c.heading}
              </h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
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
