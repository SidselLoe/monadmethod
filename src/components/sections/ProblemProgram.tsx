import EnergyActivationGraphic from "./EnergyActivationGraphic";
import CoachingCallGraphic from "./CoachingCallGraphic";
import VoiceMemosGraphic from "./VoiceMemosGraphic";

const ProblemProgram = () => {
  return (
    <section className="bg-surface py-24 sm:py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Problem statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center leading-tight">
          You found the ceiling.
        </h2>

        {/* Solution bridge */}
        <p className="mt-6 text-lg text-foreground text-center max-w-[640px] mx-auto">
          The results are real. The revenue, the recognition, the company that actually works. And the feeling you were climbing toward never arrived.
        </p>

        {/* Asymmetric bento grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big card - left, spans full height */}
          <div className="md:row-span-2 bg-card border border-border rounded-xl overflow-hidden flex flex-col">
            {/* Graphic area */}
            <div className="p-6 sm:p-8">
              <EnergyActivationGraphic />
            </div>
            {/* Text area */}
            <div className="p-7 sm:p-8">
              <h3 className="text-lg sm:text-xl font-medium text-foreground">Get out of your head</h3>
              <p className="mt-3 text-base text-foreground leading-relaxed">
                Your best thinking has never arrived through effort. Activations clear what has been preventing it and take you into the state where clarity, creative power, and sharp decisions actually live. Guided, music-driven, experienced lying down. No technique. No performance. Each session compounds. What becomes available in that state is not something you find. It finds you.
              </p>
            </div>
          </div>

          {/* Top right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8 flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-medium text-foreground">Reveal what's been running you</h3>
              <p className="mt-2 text-sm text-foreground leading-relaxed">
                You can't see the patterns running your leadership from inside them. Structured self-inquiry surfaces them. Every reflection becomes the foundation for the next session. What has been making your decisions without your permission gets named.
              </p>
            </div>
            <div className="flex-shrink-0 py-2">
              <CoachingCallGraphic />
            </div>
          </div>

          {/* Bottom right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8 flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-medium text-foreground">Take aligned action</h3>
              <p className="mt-2 text-sm text-foreground leading-relaxed">
                The activations shift your state. The inquiry names what's been running underneath you. The sessions bring both into action. Priorities, delegation, decisions. They move differently now. Not because the strategy is better. Because you have changed.
              </p>
            </div>
            <div className="flex-shrink-0 py-2">
              <VoiceMemosGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemProgram;
