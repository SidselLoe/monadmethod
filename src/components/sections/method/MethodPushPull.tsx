const pushBullets = [
  "You are running on willpower, pressure, and the fear of what happens if you stop. The engine works, but the fuel is cortisol.",
  "Every win raises the bar instead of landing. The goalpost moves the moment you reach it, and you are already scanning for the next thing to prove.",
  "You oscillate between all-in and completely checked out. There is no middle gear, because the only way you know how to work is at the edge.",
  "Your strategy is sharp, but you are making decisions from a part of you that has something to prove. The output looks right and feels wrong.",
  "You have hit a ceiling that more effort will not break. You already know this, because you have tried.",
  "The business runs on you. If you stopped, it would stop. And you cannot remember the last time you actually stopped.",
];

const pullBullets = [
  "You are moving toward something that calls you, not away from something that scares you. The direction comes from inside, not from the market.",
  "Your nervous system has a baseline you can return to. Growth does not require you to abandon yourself to get it.",
  "You can feel the difference between a real yes and a performance yes, and you trust the read. Decisions get faster because there is less to filter through.",
  "Strategy becomes an expression of who you are, not a defence against what you fear. Execution feels clean because nothing internal is fighting it.",
  "You can hold success without it costing your health, your relationships, or your sense of self. The more the business grows, the more you come home to yourself.",
  "The business still runs on you. But now you are the signal, not the sacrifice.",
];

const MethodPushPull = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* H2 */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15]">
          Most founders build from push. Very few know it.
        </h2>

        {/* Subhead */}
        <p className="mt-6 text-[18px] text-body font-normal max-w-[700px] mx-auto leading-[1.7] text-center">
          The shift from push to pull is an identity change, not a mindset tweak.
        </p>

        {/* Two-column grid */}
        <div className="mt-14 grid grid-cols-1 gap-16">
          {/* Push column */}
          <div>
            <h3 className="text-[20px] font-semibold text-foreground mb-6">
              You are building from push if...
            </h3>
            <ul className="space-y-5">
              {pushBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[10px] w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-[16px] leading-[1.75] text-body">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pull column */}
          <div>
            <h3 className="text-[20px] font-semibold text-foreground mb-6">
              You are building from pull if...
            </h3>
            <ul className="space-y-5">
              {pullBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[10px] w-2 h-2 rounded-full bg-mint flex-shrink-0" />
                  <span className="text-[16px] leading-[1.75] text-body">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing line */}
        <p className="mt-16 text-center text-[20px] font-semibold text-foreground leading-[1.4] max-w-[700px] mx-auto">
          The Monad Method is how you make the shift. Not in theory. In your nervous system.
        </p>
      </div>
    </section>
  );
};

export default MethodPushPull;
