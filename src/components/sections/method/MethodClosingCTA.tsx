const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const MethodClosingCTA = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[500px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground ">
          Ready to operate differently?
        </h2>

        <p className="mt-5 text-[16px] text-body leading-[1.75]">
          Every engagement starts with a discovery conversation. Thirty minutes to understand where you are, what is getting in the way, and whether this is the right fit.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-9 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
};

export default MethodClosingCTA;
