const columns = [
  {
    heading: "Strategic.",
    body: "I've spent my whole career in the tech founder space. I've worked across companies of every size, but startups and the founder seat have always been the throughline. I know what it's like to run a business where the business is you.",
  },
  {
    heading: "Energetic.",
    body: "The Monad Activations are my own, built on formal training in Integrated Kundalini Activation and a direct Usui lineage of Reiki that traces back to Dr. Mikao Usui in Japan. I carry these Eastern traditions into the Western founder context.",
  },
];

const LineageSection = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] text-center">
          Lineage.
        </h2>

        <p className="mt-6 text-[22px] font-medium text-foreground text-center">
          Trained on both sides.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[24px] font-bold text-foreground mb-5">
                {col.heading}
              </h3>
              <p className="text-[16px] leading-[1.75] text-body">
                {col.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LineageSection;
