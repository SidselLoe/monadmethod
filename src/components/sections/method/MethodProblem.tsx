const MethodProblem = () => {
  return (
    <section className="bg-secondary py-[100px] px-8">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
          Beneath every ceiling is a belief.
        </h2>

        <p className="mt-5 text-[18px] text-body max-w-[600px] mx-auto leading-[1.7]">
          The way you operate is upstream of everything the company does. Change the operating system and the outputs change on their own.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-card rounded-xl p-8 sm:p-10">
          <h3 className="text-[20px] sm:text-[22px] font-bold text-foreground leading-[1.3]">
            Not a strategy problem.
          </h3>
          <p className="mt-3 text-[15px] text-body leading-[1.7]">
            Most founders who hit a ceiling try to solve it with more strategy. More discipline. A new framework. It rarely works, because the ceiling isn't strategic. It is internal.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 sm:p-10">
          <h3 className="text-[20px] sm:text-[22px] font-bold text-foreground leading-[1.3]">
            Not a mindset problem.
          </h3>
          <p className="mt-3 text-[15px] text-body leading-[1.7]">
            The patterns running your decisions were installed before you built the company. They do not respond to affirmations or accountability. They respond to a shift in state.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodProblem;
