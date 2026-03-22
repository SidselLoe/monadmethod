import { Link } from "react-router-dom";

const DeltaSection = () => {
  return (
    <section className="bg-secondary py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
          For founder-CEOs who want sustained, private, partner-level support beyond the CEO OS container.
        </p>

        <div className="mt-10 max-w-[720px] mx-auto bg-background border border-border rounded-xl p-8 sm:p-10 text-left">
          <h3 className="text-2xl font-medium text-foreground">Delta™</h3>
          <p className="mt-4 text-base sm:text-lg text-foreground leading-[1.5]">
            A private, ongoing coaching relationship for selected founder-CEOs. Not a programme. A thinking partner at your side as the company grows.
          </p>
          <Link
            to="/monad-method"
            className="inline-flex mt-8 border border-foreground text-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-foreground hover:text-background transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeltaSection;
