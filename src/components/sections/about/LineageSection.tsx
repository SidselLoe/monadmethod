import MonadMark from "@/components/MonadMark";

const columns = [
  {
    heading: "Strategic.",
    bullets: [
      "I've spent my whole career in the tech founder space, as founder, operator, and strategist.",
      "I've worked across every company size, but startups and the founder seat are the throughline.",
      "I know what it's like to run a business where the business is you.",
    ],
  },
  {
    heading: "Energetic.",
    bullets: [
      "I carry a direct Usui lineage of Reiki that traces back to Dr. Mikao Usui in Japan.",
      "I've trained in Integrated Kundalini Activation.",
      "I work through Shaktipat, direct energy transmission.",
      "The Monad Activations are my own, built on these foundations.",
    ],
  },
];

const LineageSection = () => {
  return (
    <section className="bg-surface py-16 md:py-[100px] px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">Lineage.</span>
        </h2>

        <p className="mt-6 text-[18px] text-body font-normal max-w-[700px] mx-auto leading-[1.7] text-center">
          Trained on both sides.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {columns.map((col) => (
            <div key={col.heading} className="bg-card border border-border rounded-2xl p-7 sm:p-8">
              <h3 className="text-[24px] font-extrabold text-foreground mb-6">
                {col.heading}
              </h3>
              <ul className="space-y-4">
                {col.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <MonadMark className="h-5 w-5 mt-1 text-mint" />
                    <span className="text-[18px] leading-[1.7] text-body">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LineageSection;
