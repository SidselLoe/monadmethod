import { Link } from "react-router-dom";

const DeltaSection = () => {
  return (
    <section className="bg-secondary py-[60px] sm:py-[100px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-[2px] text-muted-foreground mb-4">
          What Comes Next
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
          Monad LTS
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
          Invitation only. You've installed the operating system. This is what comes next.
        </p>

        <div className="mt-10 max-w-[720px] mx-auto bg-background border border-border rounded-xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-5 text-left">
            {/* Symbol on top for mobile */}
            <div className="flex-shrink-0 sm:hidden">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,2 34,34 2,34" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground">Monad LTS</h3>
              <p className="mt-2 text-base sm:text-lg text-foreground leading-[1.5]">
                Continued access to activations, inquiry, and strategic partnership that keeps the shift compounding. Not a programme. A private, ongoing relationship for founders who refuse to go back.
              </p>
              <Link
                to="/monad-method"
                className="inline-flex mt-6 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Symbol on right for desktop */}
            <div className="flex-shrink-0 hidden sm:block">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="18,2 34,34 2,34" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeltaSection;
