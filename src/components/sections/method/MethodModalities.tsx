import MethodName from "./MethodName";

const modalities = [
  {
    step: "01",
    title: "Merkaba Energy Activation",
    body: "Precision interventions that shift state at the nervous system level. Expanding capacity, releasing stored tension, restoring coherence. The activation moves what strategy alone cannot.",
  },
  {
    step: "02",
    title: "Voice-Note Self-Inquiry",
    body: "A structured reflective practice that surfaces the beliefs, identity structures, and shadows shaping how a founder leads. Speak into a pattern. The pattern reveals itself.",
  },
  {
    step: "03",
    title: "Strategic Coaching",
    body: "Every session moves from inner clarity to aligned action. Real decisions, real problems, translated into execution. The work is not complete until it changes something in the business.",
  },
];

const MethodModalities = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <MethodName />

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Three modalities. One integrated method.
          </h2>
          <p className="mt-3 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
            These three are not interchangeable or optional. They are a triangulation. Designed to be used together. Designed to go deep and move fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {modalities.map((m) => (
            <div
              key={m.step}
              className="bg-background border border-border rounded-xl p-8 flex flex-col"
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint">
                {m.step} · {m.title.toUpperCase().split(" ")[0]}
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
