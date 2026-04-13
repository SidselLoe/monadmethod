import { Link } from "react-router-dom";

const DeltaSection = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-4">
          What Comes Next
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
          Monad LTS
        </h2>
        <p className="mt-3 text-[18px] text-body max-w-[700px] mx-auto leading-[1.7]">
          Invitation only. You've installed the operating system. This is what comes next.
        </p>

        <div className="mt-10 max-w-[720px] mx-auto bg-background border border-border rounded-xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-5 text-left">
            <div className="flex-shrink-0 sm:hidden">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="18" cy="18" r="3" fill="currentColor" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-[28px] font-bold text-foreground leading-[1.3]">Monad LTS</h3>
              <p className="mt-2 text-[16px] text-body leading-[1.75]">
                Continued access to activations, inquiry, and strategic partnership that keeps the shift compounding. Not a programme. A private, ongoing relationship for founders who refuse to go back.
              </p>
              <Link
                to="/the-method"
                className="inline-flex mt-6 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="flex-shrink-0 hidden sm:block">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="18" cy="18" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeltaSection;
