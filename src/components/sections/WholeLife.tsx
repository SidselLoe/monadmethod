const areas = [
  {
    title: "Health",
    body: "A nervous system that can rest, and energy that stays with you.",
  },
  {
    title: "Wealth",
    body: "Receiving without guilt. Decisions from steadiness, not fear. Worth that doesn't depend on the number.",
  },
  {
    title: "Relationships",
    body: "Letting people in. Not over-giving to be chosen. Being fully seen, and staying.",
  },
];

const WholeLife = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">Health, wealth, relationships.</span> One root.
        </h2>

        <p className="mt-8 text-[18px] text-body text-center max-w-[820px] mx-auto leading-[1.7]">
          It's the same you showing up in all three. The pattern that keeps your income at the same ceiling is often the one that keeps you tired, and the one that keeps you choosing the same kind of love.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {areas.map((a) => (
            <div
              key={a.title}
              className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ec8c8]"
            >
              <h3 className="text-[20px] font-extrabold text-foreground">{a.title}</h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">{a.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[18px] text-body text-center max-w-[820px] mx-auto leading-[1.7]">
          Monad OS goes to the root they share. Same you, same results, and when the one living it changes, all three move with it.
        </p>
      </div>
    </section>
  );
};

export default WholeLife;
