const MethodAI = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            AI is woven through all three modalities.
          </h2>
          <p className="mt-4 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
            As an amplification tool. Never as a replacement for the work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <h3 className="text-[20px] font-semibold text-foreground mb-5">
              What AI does here.
            </h3>
            <ul className="space-y-4 text-[15px] text-body leading-[1.7]">
              <li>Synthesis of voice-note patterns across sessions.</li>
              <li>Frameworks translated into implementation.</li>
              <li>Reflection made legible at scale.</li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-[20px] font-semibold text-foreground mb-5">
              Why it works.
            </h3>
            <ul className="space-y-4 text-[15px] text-body leading-[1.7]">
              <li>AI amplifies whatever signal you bring.</li>
              <li>Developing authentic human intelligence is the highest-leverage AI strategy available.</li>
              <li>Heart-brain coherence is the prerequisite. AI has no heart.</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center font-editorial italic text-[20px] sm:text-[22px] text-foreground leading-[1.4]">
          Your heart is the portal. AI is the amplifier.
        </p>
      </div>
    </section>
  );
};

export default MethodAI;
