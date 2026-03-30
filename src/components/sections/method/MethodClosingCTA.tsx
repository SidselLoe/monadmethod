import { Link } from "react-router-dom";

const MethodClosingCTA = () => {
  return (
    <section className="bg-background py-24 sm:py-28 px-6">
      <div className="max-w-[500px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[36px] font-semibold text-foreground leading-[1.18]">
          Ready to operate differently?
        </h2>

        <p className="mt-5 text-base text-foreground/70 font-light leading-[1.78]">
          Every engagement starts with a discovery conversation. Thirty minutes to understand where you are, what is getting in the way, and whether this is the right fit.
        </p>

        <Link
          to="/apply"
          className="inline-flex mt-9 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded hover:bg-accent/90 transition-colors"
        >
          Book a Discovery Call
        </Link>
      </div>
    </section>
  );
};

export default MethodClosingCTA;
