import { Play } from "lucide-react";
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const cells = [
  {
    heading: "Direct transmission",
    body: "Energy moves through, and your state changes.",
  },
  {
    heading: "Nothing to perform",
    body: "You lie down. You receive. The work happens on its own.",
  },
  {
    heading: "Music-scored",
    body: "Sound designed to carry the body through the shift.",
  },
  {
    heading: "Nervous system coherence",
    body: "Regulation at the level the body actually holds.",
  },
  {
    heading: "Pattern release",
    body: "What has been stored begins to move, without talking it through.",
  },
  {
    heading: "A new operating state",
    body: "You leave from a frequency you cannot think your way into.",
  },
];

const MethodActivations = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-4">
            Monad Activations
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Access the state your thinking mind cannot reach.
          </h2>
          <p className="mt-5 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
            Sixty-minute energy sessions, scored to music. They work through direct transmission — shifting your state, clearing what has been stored, recalibrating your nervous system. All you have to do is show up.
          </p>
        </div>

        {/* Video placeholder */}
        <div className="mt-12 aspect-video bg-surface rounded-xl flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full border-2 border-mint flex items-center justify-center">
            <Play size={22} className="text-mint ml-1" />
          </div>
          <span className="text-[14px] text-body tracking-wide text-center">
            Monad Activation<br />Watch Overview
          </span>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          {cells.map((c) => (
            <div key={c.heading}>
              <h3 className="text-[17px] font-semibold text-foreground leading-[1.3]">
                {c.heading}
              </h3>
              <p className="mt-1.5 text-[15px] text-body leading-[1.7]">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a Monad Activation
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodActivations;
