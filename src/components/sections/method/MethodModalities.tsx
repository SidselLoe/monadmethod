const modalities = [
  {
    step: "01",
    title: "Merkaba Energy Activation",
    body: "These are not meditations or breathwork classes. They are precision interventions designed to expand capacity, release stored tension, and restore coherence. The activation moves what strategy alone cannot.",
  },
  {
    step: "02",
    title: "Voice-Note Self-Inquiry",
    body: "A structured reflective practice using voice notes. The founder speaks into a pattern — and the pattern reveals itself. This modality surfaces the beliefs, identity structures, and emotional drivers shaping how you lead. The fastest route to self-knowledge that actually changes behaviour.",
  },
  {
    step: "03",
    title: "Strategic Coaching",
    body: "Every session moves from inner clarity to outer execution. Real decisions. Real problems. Translated into action. Priorities reprioritised. Delegation designed. Communication clarified. The work is not complete until it changes something in the business.",
  },
];

const MethodModalities = () => {
  return (
    <section className="bg-background py-24 sm:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center leading-[1.15]">
          Three modalities. One integrated method.
        </h2>

        <p className="mt-4 text-base text-muted-foreground text-center max-w-[640px] mx-auto leading-[1.6]">
          The Monad OS installs all three. Each works on a different layer of the founder's internal operating system. Together, they compound.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {modalities.map((m) => (
            <div
              key={m.step}
              className="bg-background border border-border rounded-xl p-7 sm:p-8 flex flex-col"
            >
              <span className="text-[13px] font-medium text-accent tracking-[1px]">
                {m.step}
              </span>
              <h3 className="mt-3 text-lg sm:text-xl font-medium text-foreground">
                {m.title}
              </h3>
              <p className="mt-3 text-base text-foreground leading-[1.6]">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodModalities;
