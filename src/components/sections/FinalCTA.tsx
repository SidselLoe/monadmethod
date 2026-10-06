import MonadMark from "@/components/MonadMark";

const APPLY_URL = "/apply";

const FinalCTA = () => {
  return (
    <section className="bg-surface py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-mint-light rounded-xl px-10 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center gap-8 text-foreground">
          {/* Icon */}
          <div className="flex-shrink-0">
            <MonadMark />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
              Build from who you're becoming.
            </h3>
            <p className="mt-3 text-[16px] text-foreground leading-[1.75]">
              You are the upgrade. £1,500 if you start in November. From 1 December, £2,500.
            </p>
          </div>

          {/* CTA */}
          <a
            href={APPLY_URL}
            className="flex-shrink-0 inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
