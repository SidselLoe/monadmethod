import MethodName from "./MethodName";

const modalities = [
  {
    step: "01",
    label: "Monad Activations",
    title: "The state shift.",
    body: "Guided, music-driven energy sessions that change your internal state directly. It works through direct transmission and coherence, not through technique or effort. You lie down, you receive, your nervous system recalibrates. You leave with access to a state you cannot think your way into.",
  },
  {
    step: "02",
    label: "Guided Inquiry",
    title: "The honesty.",
    body: "Structured workbook questions, answered by voice note. Speaking bypasses the internal editor. The workbooks provide the frame, the voice notes provide the truth. Patterns become visible because they can finally be heard.",
  },
  {
    step: "03",
    label: "Strategic Sessions",
    title: "The translation.",
    body: "Private 1:1 sessions that turn state and clarity into decisions, priorities, and execution. Partner-level sparring, not prescription. This is where the work meets the company.",
  },
];

const MethodModalities = () => {
  return (
    <section className="bg-surface pt-8 pb-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <MethodName />

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Three modalities. One integrated method.
          </h2>
          <p className="mt-3 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
            A spiral, like the Monad. Each revolution deeper than the last.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {modalities.map((m) => (
            <div
              key={m.step}
              className="bg-background border border-border rounded-xl p-8 flex flex-col"
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint">
                {m.step} · {m.label.toUpperCase()}
              </span>
              <h3 className="mt-3 text-[20px] font-semibold text-foreground leading-[1.3]">
                {m.title}
              </h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
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
