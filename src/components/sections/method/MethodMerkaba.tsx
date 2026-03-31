import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const visionaries = [
  {
    name: "Nikola Tesla",
    desc: "Sat in silence every night and received complete designs of machines that did not yet exist.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/640px-N.Tesla.JPG",
  },
  {
    name: "Wolfgang Amadeus Mozart",
    desc: "Heard entire symphonies before writing a single note.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Croce-Mozart-Detail.jpg/640px-Croce-Mozart-Detail.jpg",
  },
  {
    name: "Rick Rubin",
    desc: "Has spoken about this place his whole career. The source. Where everything worth making comes from.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rick_Rubin_2009.jpg/640px-Rick_Rubin_2009.jpg",
  },
];

const expectations = [
  "90 minutes total",
  "No need to speak during the activation itself",
  "30-minute opening and integration at beginning and end",
  "Small, intimate group with space for sharing at the end",
  "60 minutes experienced lying down, eyes closed, guided by music",
  "Full preparation details shared once booked",
];

const MethodMerkaba = () => {
  return (
    <section className="bg-secondary py-[60px] sm:py-[80px] px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-5">

        {/* 5A: Opening hook */}
        <div className="bg-card border border-border rounded-xl p-10 sm:p-16 text-center">
          <p className="text-2xl sm:text-3xl md:text-[34px] font-light italic text-foreground leading-[1.38] max-w-[680px] mx-auto">
            "Your best ideas have never come from thinking harder."
          </p>
          <p className="mt-7 text-base text-foreground leading-[1.5] max-w-[540px] mx-auto">
            They arrived when you stopped. In the shower. On a walk. At 3 AM. Fully formed. Already complete. You know this state exists. You just cannot access it on demand. And the further you push, the further it retreats.
          </p>
        </div>

        {/* 5B: State + video */}
        <div className="bg-card border border-border rounded-xl p-10 sm:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-foreground leading-[1.25]">
                There is a state your nervous system can enter where the noise stops.
              </h3>
              <div className="mt-5 space-y-5 text-base text-foreground leading-[1.5]">
                <p>
                  Brain and heart come into coherence. The static clears. What remains is signal. Clarity without effort. Knowing without analysis.
                </p>
                <p>
                  The activation is transmitted through the quantum field. Physical proximity is not required. The system receives wherever the founder is. Many find that being in their own space allows the work to land deeper.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-video bg-muted rounded-xl flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-muted-foreground/40 flex items-center justify-center">
                  <Play size={22} className="text-muted-foreground/60 ml-1" />
                </div>
                <span className="text-sm text-muted-foreground tracking-wide text-center">
                  Merkaba Energy Activation<br />Watch Overview
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5C: Visionaries */}
        <div className="bg-card border border-border rounded-xl p-10 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {visionaries.map((v) => (
              <div key={v.name} className="text-center">
                <div className="w-[140px] h-[140px] mx-auto mb-4 rounded-xl overflow-hidden bg-muted">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-base font-medium text-foreground mb-2">{v.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5D: What it is */}
        <div className="bg-card border border-border rounded-xl p-10 sm:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-foreground leading-[1.25]">
                Merkaba Energy Activation
              </h3>
              <p className="mt-5 text-base text-foreground leading-[1.5]">
                A 90-minute session. Not a meditation. Not a sound bath. A guided, music-driven process that works directly with the nervous system. The music is not background. It is part of the work.
              </p>
              <p className="mt-6 text-lg font-medium text-foreground leading-[1.4]">
                Lie down. Close your eyes. Receive.
              </p>
            </div>
            <div className="space-y-5 text-base text-foreground leading-[1.5]">
              <p>
                The group is small. The experience is intimate. Every session lands differently.
              </p>
              <p>
                Some shifts happen during the session itself. Much of the work continues in the hours, days, and months that follow.
              </p>
              <p className="font-medium text-foreground">
                The experience requires nothing from you but presence. There is no right way to receive it.
              </p>
            </div>
          </div>
        </div>

        {/* 5E: What to expect */}
        <div className="bg-card border border-border rounded-xl p-10 sm:p-12">
          <span className="block text-[13px] font-medium uppercase tracking-[1px] text-muted-foreground mb-6">
            What to expect
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 list-disc pl-5">
            {expectations.map((item) => (
              <li key={item} className="text-base text-foreground py-2 leading-[1.5]">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5F: Access strip */}
        <div className="bg-accent rounded-xl p-10 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-lg sm:text-xl font-medium text-accent-foreground leading-[1.5] text-center sm:text-left">
            10 Merkaba Energy Activations every month, online.<br />
            Included in Monad OS and every engagement that follows.
          </p>
          <Link
            to="/apply"
            className="flex-shrink-0 inline-flex bg-background text-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-background/90 transition-colors"
          >
            View Upcoming Sessions
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MethodMerkaba;
