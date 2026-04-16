import MethodName from "./MethodName";

const modalities = [
  {
    title: "Monad Activations.",
    body: "Guided, music-driven energy sessions that shift your internal state directly. You lie down, you receive, your nervous system recalibrates. You leave with access to a state you cannot think your way into.",
  },
  {
    title: "Guided Inquiry.",
    body: "Structured workbook questions, answered by voice note. The workbooks provide the frame, the voice notes provide the truth. Patterns become visible because they can finally be heard.",
  },
  {
    title: "Strategic Sessions.",
    body: "Private 1:1 sessions that turn state and clarity into decisions, priorities, and execution. Partner-level sparring, not prescription. This is where the inner work meets the outer company and reshapes how you lead.",
  },
];

const MethodModalities = () => {
  return (
    <section className="bg-surface pt-8 pb-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <MethodName />

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground ">
            Three modalities. One integrated method.
          </h2>
          <p className="mt-3 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
            Not a sequence. A spiral, like the Monad. Each revolution deeper than the last.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {modalities.map((m) => (
            <div
              key={m.title}
              className="bg-background border border-border rounded-xl p-8 flex flex-col"
            >
              <h3 className="text-[20px] font-semibold text-foreground leading-[1.3]">
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
