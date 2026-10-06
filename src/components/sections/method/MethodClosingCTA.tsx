const APPLY_URL = "/apply";

const MethodClosingCTA = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[500px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
          <span className="font-extrabold">Ready to change</span> the state you create from?
        </h2>

        <p className="mt-5 text-[16px] text-body leading-[1.75]">
          Every engagement starts with an application and a short call.
        </p>

        <a
          href={APPLY_URL}
          className="inline-flex mt-9 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          APPLY NOW
        </a>
      </div>
    </section>
  );
};

export default MethodClosingCTA;
