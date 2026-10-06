const MethodProblem = () => {
  return (
    <section className="bg-secondary py-[100px] px-8">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
          <span className="font-extrabold">Beneath every ceiling</span> is a belief.
        </h2>

        <p className="mt-5 text-[18px] text-body max-w-[600px] mx-auto leading-[1.7]">
          The way you operate is upstream of everything the company does. Change the operating system and the outputs change on their own.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
          <h3 className="text-[20px] sm:text-[22px] font-extrabold text-foreground leading-[1.3]">
            Underneath strategy.
          </h3>
          <p className="mt-3 text-[15px] text-body leading-[1.7]">
            More strategy, more discipline, a new framework. They all run on the same old system.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
          <h3 className="text-[20px] sm:text-[22px] font-extrabold text-foreground leading-[1.3]">
            Underneath mindset.
          </h3>
          <p className="mt-3 text-[15px] text-body leading-[1.7]">
            You can't think your way into a new state. The way you operate sits upstream of everything you make.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodProblem;
