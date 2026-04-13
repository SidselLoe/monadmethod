const LineageSection = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] text-center mb-16">
          Lineage.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left column */}
          <div className="bg-white border border-border rounded-xl p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-mint" />
              <h3 className="text-[22px] font-bold text-foreground">
                Earned strategically.
              </h3>
            </div>
            <p className="text-[16px] leading-[1.75] text-body">
              I've spent my whole career in the tech founder space. I've worked across companies of every size, but startups and the founder seat have always been the throughline. I understand what it's like to run a business where the business is you.
            </p>
          </div>

          {/* Right column */}
          <div className="bg-white border border-border rounded-xl p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-mint" />
              <h3 className="text-[22px] font-bold text-foreground">
                Trained energetically.
              </h3>
            </div>
            <p className="text-[16px] leading-[1.75] text-body">
              The Monad Activations are my own, built on formal training in Integrated Kundalini Activation and a direct Usui Reiki lineage that traces back to Dr. Mikao Usui in Japan. I carry these Eastern traditions into the Western founder context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineageSection;
