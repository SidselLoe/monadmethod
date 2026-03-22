import EnergyActivationGraphic from "./EnergyActivationGraphic";
import CoachingCallGraphic from "./CoachingCallGraphic";
import VoiceMemosGraphic from "./VoiceMemosGraphic";

const ProblemProgram = () => {
  return (
    <section className="bg-surface py-24 sm:py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Problem statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground text-center leading-tight">
          Your company is growing.
          <br />
          Too much still depends on you.
        </h2>

        {/* Solution bridge */}
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-[640px] mx-auto">
          The CEO OS is your internal operating system upgrade.
        </p>

        {/* Asymmetric bento grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big card - left, spans full height */}
          <div className="md:row-span-2 bg-card border border-border rounded-xl overflow-hidden flex flex-col">
            {/* Graphic area */}
            <div className="flex-1 min-h-[200px] flex items-center justify-center p-6 sm:p-8">
              <div className="w-[88%]">
                <EnergyActivationGraphic />
              </div>
            </div>
            {/* Text area */}
            <div className="p-7 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-medium text-foreground">Expand your capacity</h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Your nervous system is running on overdrive. Energy activations shift your state, restore coherence, and expand the capacity that pressure has been compressing. You stop leading from survival mode and start leading from signal.
              </p>
            </div>
          </div>

          {/* Top right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8 flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-medium text-foreground">Make clearer decisions</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Insights without aligned action are useless. Weekly private coaching turns what you uncover into real decisions, delegation, and follow-through. Not just another good idea.
              </p>
            </div>
            <div className="flex-shrink-0 py-2">
              <CoachingCallGraphic />
            </div>
          </div>

          {/* Bottom right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8 flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-medium text-foreground">Compress years into weeks</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Voice reflection regulates your thinking, organises what is underneath, and surfaces what most people take years to see. Your coach receives every reflection before your sessions. Together you go deeper, faster.
              </p>
            </div>
            <div className="w-16 h-16 rounded-lg bg-secondary border border-border flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemProgram;
