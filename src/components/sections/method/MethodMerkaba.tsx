import { Play } from "lucide-react";

const references = [
  {
    name: "Nikola Tesla",
    line: "Sat in silence every night. Received complete machine designs that did not yet exist.",
  },
  {
    name: "Wolfgang Amadeus Mozart",
    line: "Heard entire symphonies before writing a single note.",
  },
  {
    name: "Rick Rubin",
    line: "Has spoken about this place his whole career. The source. Where everything worth making comes from.",
  },
];

const expectations = [
  "A short opening at the beginning",
  "The main session is experienced lying down, eyes closed",
  "Guided by music throughout",
  "No need to speak during the activation itself",
  "Intimate group with space for sharing at the end",
  "Full preparation details shared once you book",
];

const MethodMerkaba = () => {
  return (
    <section className="bg-foreground text-background py-28 sm:py-36 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Part A — Opening hook */}
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-[36px] font-editorial italic leading-[1.35]">
            "Your best ideas have never come from thinking harder."
          </p>
          <p className="mt-8 text-base sm:text-lg text-background/70 leading-[1.7] max-w-[600px] mx-auto">
            They arrived when you stopped. In the shower. On a walk. At 3 AM. Fully formed. Without effort. You already know this state exists. You just do not know how to access it on purpose. And the more you have going on, the further away it feels.
          </p>
        </div>

        {/* Part B — The State (two-column) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium leading-[1.3]">
              There is a state your nervous system can enter where the noise stops.
            </h3>
            <div className="mt-5 space-y-4 text-base text-background/80 leading-[1.7]">
              <p>
                Brain and heart come into coherence. The static clears. What remains is signal. Clarity that does not require effort. Knowing that does not require analysis.
              </p>
              <p>
                The activation is transmitted through the quantum field. Physical proximity is not required. Your system receives wherever you are. Many people find that being in their own space allows the work to land even deeper.
              </p>
            </div>
          </div>

          {/* Video placeholder */}
          <div>
            <div className="aspect-video bg-background/10 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-background/20 flex items-center justify-center">
                <Play size={28} className="text-background ml-1" />
              </div>
            </div>
            <p className="mt-3 text-sm text-background/50 text-center">
              Energy Activation — Watch Overview
            </p>
          </div>
        </div>

        {/* Part C — References */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {references.map((ref) => (
            <div key={ref.name} className="text-center md:text-left border-t border-background/15 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[2px] text-background/60">
                {ref.name}
              </p>
              <p className="mt-3 text-base text-background/80 leading-[1.6]">
                {ref.line}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-background/40 text-center italic">
          They were not thinking their way there. They were getting out of the way.
        </p>

        {/* Part D — What it is */}
        <div className="mt-24 max-w-[600px] mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-medium">
            Merkaba Energy Activation
          </h3>
          <div className="mt-6 space-y-4 text-base text-background/80 leading-[1.7]">
            <p>
              A 60-minute guided, music-driven process that takes you into that state. Not a meditation. Not a sound bath. A precision intervention that works directly with your nervous system. The music is not background. It is part of the work.
            </p>
            <p>
              You lie down. You close your eyes. You receive.
            </p>
            <p>
              The group is small. The experience is intimate. Every session lands differently. Some shifts happen during the session itself. Much of the work happens afterwards — in the hours, days, and months to come.
            </p>
          </div>
        </div>

        {/* Part E — What to expect */}
        <div className="mt-20 max-w-[640px] mx-auto">
          <span className="block text-[11px] font-semibold uppercase tracking-[3px] text-background/50 text-center mb-6">
            What to expect
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expectations.map((item) => (
              <div key={item} className="flex items-start gap-3 text-base text-background/80">
                <span className="text-background/40 mt-0.5">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part F — Access statement */}
        <p className="mt-24 text-2xl sm:text-3xl md:text-[40px] font-medium text-center leading-[1.2]">
          10 sessions per month. Online.<br />
          Unlimited access when you work with me.
        </p>
      </div>
    </section>
  );
};

export default MethodMerkaba;
