
const ProblemProgram = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Problem statement */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">Different ceilings.</span> Same root.
        </h2>

        {/* Asymmetric bento grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big card - left, spans full height */}
          <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
            <div className="p-7 sm:p-8">
              <h3 className="text-[20px] font-extrabold text-foreground">The plateau.</h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">
                Same effort. Same results. Same ceiling.
              </p>
            </div>
          </div>

          {/* Top right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8">
              <h3 className="text-[20px] font-extrabold text-foreground">The pattern.</h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                New people, same problem. Someone joins, someone leaves.
              </p>
          </div>

          {/* Bottom right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8">
              <h3 className="text-[20px] font-extrabold text-foreground">The weight.</h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                Everything runs through you, and there's more you want to build.
              </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-7 sm:p-8">
              <h3 className="text-[20px] font-extrabold text-foreground">The pull.</h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                It's working, and you can feel there's more.
              </p>
          </div>
        </div>

        <p className="mt-10 text-[18px] text-body text-center max-w-[820px] mx-auto leading-[1.7]">
          It's the old operating system: the patterns, beliefs and stored stress that got you here. It built what you have. It also sets the ceiling. You can't think your way out of what your body has learned, so the work starts with your state.
        </p>
      </div>
    </section>
  );
};

export default ProblemProgram;
