import AnimatedFounderCount from "@/components/AnimatedFounderCount";
import MonadMark from "@/components/MonadMark";

const APPLY_URL = "/apply";

const ConversionBanner = () => {
  return (
    <section className="bg-surface py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-mint-light rounded-xl px-10 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center gap-8">
          {/* Icon */}
          <div className="flex-shrink-0">
            <MonadMark />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
              <AnimatedFounderCount /> people have experienced the work.
            </h3>
            <p className="mt-3 text-[16px] text-foreground leading-[1.75]">
              Same you, same results. Monad OS is how you change the one creating them.
            </p>
          </div>

          {/* CTA */}
          <a
            href={APPLY_URL}
            className="flex-shrink-0 inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConversionBanner;
