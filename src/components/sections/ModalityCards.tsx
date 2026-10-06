const cards = [
  {
    title: "Clear the backlog",
    body: "Most of what holds you back is stored below thought. Monad Activations clear it while you lie down and receive. Guided, music-driven, nothing to do.",
  },
  {
    title: "Name what's been running you",
    body: "Hidden beliefs show up the moment you grow. Voice-note self-inquiry catches them as they surface, in your own words.",
  },
  {
    title: "Move from the new state",
    body: "Private sessions turn what has opened up into real moves: hiring, delegating, selling, deciding.",
  },
];

const ModalityCards = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
            >
              <h3 className="text-[20px] font-extrabold text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalityCards;
