const MethodOrigin = () => {
  return (
    <section className="bg-secondary py-24 sm:py-28 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left — Photo placeholder */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-[280px] sm:w-[320px] aspect-[3/4] bg-muted rounded-xl flex items-center justify-center">
            <span className="text-4xl font-medium text-muted-foreground/40">SL</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center md:text-left">
            Sidsel Rytter Løschenkohl
          </p>
        </div>

        {/* Right — Text */}
        <div>
          <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[3px] text-muted-foreground">
            Built from practice
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[44px] font-medium text-foreground leading-[1.15]">
            I built this. From what actually worked.
          </h2>

          <div className="mt-6 space-y-5 text-base text-foreground leading-[1.7]">
            <p>
              The Monad Method is not a framework I found in a book or trained in. Over the last 18 months, I developed it through direct client work — refining what produced real results and discarding what did not. Every element of this method has been stress-tested across founders at different stages, different industries, different ceilings.
            </p>
            <p>
              What emerged is something genuinely new. A way of working that combines state-level nervous system work, deep identity inquiry, and precise strategic coaching — in a sequence that compounds. It moves things faster than anything else I have seen.
            </p>
            <p className="font-medium">
              This method is for people who want to move fast and go deep. Not one or the other. Both.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodOrigin;
