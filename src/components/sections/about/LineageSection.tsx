const columns = [
  {
    heading: "Earned strategically.",
    body: "I've spent my whole career in the tech founder space. I've worked across companies of every size, but startups and the founder seat have always been the throughline. I understand what it's like to run a business where the business is you.",
  },
  {
    heading: "Trained energetically.",
    body: "The Monad Activations are my own, built on formal training in Integrated Kundalini Activation and a direct Usui Reiki lineage that traces back to Dr. Mikao Usui in Japan. I carry these Eastern traditions into the Western founder context.",
  },
];

const LineageSection = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] text-center">
          Lineage.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {columns.map((col) => (
            <div key={col.heading} className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-mint flex-shrink-0 mt-[7px]" />
              <div>
                <p className="text-[16px] leading-[1.75] text-body">
                  <strong className="font-bold text-foreground">{col.heading}</strong>{" "}
                  {col.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineageSection;
