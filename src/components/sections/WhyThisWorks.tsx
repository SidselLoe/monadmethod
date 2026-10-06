const cards = [
  {
    heading: "The fog lifts.",
    body: "\"It's almost like a fog has been lifted away. It's just now it's me.\"",
    name: "Jessica",
  },
  {
    heading: "You trust yourself.",
    body: "\"I'm not second guessing myself as much.\"",
    name: "Jessica",
  },
  {
    heading: "The fuel comes back.",
    body: "\"Ten times more motivated. Before, I was completely directionless.\"",
    name: "Brandon",
  },
  {
    heading: "It comes to you.",
    body: "\"Within that following week, three came to me. It wasn't like I had to do outreach.\"",
    name: "Bianca",
  },
];

const MonadSymbol = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="20" height="20" className="text-mint">
    <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="13"/>
    <circle cx="60" cy="60" r="11" fill="currentColor"/>
  </svg>
);

const WhyThisWorks = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">When the pattern clears,</span>{" "}the path was there all along.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="relative bg-background border border-border rounded-xl p-8"
            >
              <div className="absolute top-8 right-8">
                <MonadSymbol />
              </div>
              <h3 className="text-[20px] font-extrabold text-foreground pr-8">
                {c.heading}
              </h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                {c.body}
              </p>
              <p className="mt-4 text-[13px] font-semibold text-foreground">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
