import { Link } from "react-router-dom";

const ConversionBanner = () => {
  return (
    <section className="bg-secondary py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-accent rounded-xl sm:rounded-2xl p-10 sm:p-12 flex flex-col md:flex-row items-center gap-8">
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
            <p className="mt-3 text-base text-accent-foreground/85 leading-[1.5]">
              The way you have been operating has a ceiling. More strategy will not raise it. The Monad OS is how founder-CEOs shift what is underneath.
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/apply"
            className="flex-shrink-0 inline-flex bg-background text-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-background/90 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConversionBanner;
