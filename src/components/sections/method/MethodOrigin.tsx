const MethodOrigin = () => {
  return (
    <section className="bg-secondary py-24 sm:py-28 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-center">
        {/* Left — Photo placeholder */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full max-w-[400px] aspect-[3/4] bg-muted rounded-md flex items-center justify-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Sidsel headshot
            </span>
          </div>
        </div>

        {/* Right — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-semibold text-foreground leading-[1.18]">
            Working with Sidsel.
          </h2>

          <div className="mt-6 space-y-5 text-base text-foreground/70 leading-[1.82]">
            <p>
              The Monad Method draws on two decades at the intersection of disciplines rarely found together. Rigorous operational precision from years in product and project management. Deep psychological inquiry through NLP. Formal energetic training under lineaged teachers in India and Bali. A master's in organisational innovation and entrepreneurship.
            </p>
            <p>
              These are not credentials. They are the architecture of what happens in a session.
            </p>
            <p className="font-medium text-foreground">
              Working with Sidsel is precise, direct, and deeply human. Not a coaching formula. A calibrated response to what is actually happening for the founder in front of her.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodOrigin;
