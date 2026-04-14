const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const ConversionBanner = () => {
  return (
    <section className="bg-surface py-[60px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-accent rounded-xl p-10 sm:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="22" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
              <path d="M2 28c0-4.4 3.6-8 8-8h1" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M21 20h1c4.4 0 8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="16" cy="14" r="5" stroke="white" strokeWidth="2" fill="none" />
              <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-accent-foreground">
              150+ founders have already done this work.
            </h3>
            <p className="mt-3 text-[16px] text-accent-foreground/85 leading-[1.75]">
              The way you have been operating has a ceiling. More strategy will not raise it. The Monad OS is how founder-CEOs shift what is underneath.
            </p>
          </div>

          {/* CTA */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex bg-background text-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-background/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConversionBanner;
