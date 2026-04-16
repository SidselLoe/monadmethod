const MonadIcon = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="20" height="20" className="flex-shrink-0 mt-[3px]">
    <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="8"/>
    <circle cx="60" cy="60" r="12" fill={color}/>
  </svg>
);

const columns = [
  {
    heading: "Strategic.",
    color: "hsl(var(--accent))",
    bullets: [
      "I've spent my whole career in the tech founder space, as founder, operator, and strategist.",
      "I've worked across every company size, but startups and the founder seat are the throughline.",
      "I know what it's like to run a business where the business is you.",
    ],
  },
  {
    heading: "Energetic.",
    color: "hsl(var(--mint))",
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
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground  text-center">
          Lineage.
        </h2>

        <p className="mt-6 text-[18px] text-body font-normal max-w-[700px] mx-auto leading-[1.7] text-center">
          Trained on both sides.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[24px] font-bold text-foreground mb-6">
                {col.heading}
              </h3>
              <ul className="space-y-4">
                {col.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <MonadIcon color={col.color} />
                    <span className="text-[16px] leading-[1.75] text-body">{bullet}</span>
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
