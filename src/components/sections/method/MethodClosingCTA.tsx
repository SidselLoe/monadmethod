import { Link } from "react-router-dom";

const MethodClosingCTA = () => {
  return (
    <section className="bg-secondary py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[500px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground leading-[1.15]">
          Ready to operate differently?
        </h2>

        <p className="mt-5 text-base text-foreground leading-[1.5]">
          Every engagement starts with a discovery conversation. Thirty minutes to understand where you are, what is getting in the way, and whether this is the right fit.
        </p>

        <Link
          to="/apply"
          className="inline-flex mt-9 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
        >
          Book a Discovery Call
        </Link>
      </div>
    </section>
  );
};

export default MethodClosingCTA;
