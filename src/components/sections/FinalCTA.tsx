const APPLY_URL = "/apply";

const FinalCTA = () => {
  return (
    <section className="bg-surface py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-mint-light rounded-xl px-10 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center gap-8 text-foreground">
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="22" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M2 28c0-4.4 3.6-8 8-8h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M21 20h1c4.4 0 8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="16" cy="14" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
              You are the business. You are also the upgrade.
            </h3>
            <p className="mt-3 text-[16px] text-foreground leading-[1.75]">
              Monad OS is how you make the shift. Thirty days. Three modalities. A different internal operating system.
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

export default FinalCTA;
