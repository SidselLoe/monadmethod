const APPLY_URL = "/apply";

const MonadSymbol = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width="20"
    height="20"
    className="flex-shrink-0 mt-[3px]"
  >
    <circle cx="60" cy="60" r="46" fill="none" stroke={color} strokeWidth="13" />
    <circle cx="60" cy="60" r="11" fill={color} />
  </svg>
);

const forYou = [
  "What you build comes from you",
  "You can feel there's more, even if you can't name it yet",
  "You've taken your life into your own hands. No one is coming to save you.",
  "You're open to energy work and you'll show up fully in the sessions",
  "You believe you can build something real and have a life",
];

const notForYou = [
  "You want a formula handed to you",
  "You're not willing to be honest with yourself",
  "Internal state sounds like a metaphor to you. Here it's the mechanism.",
];

const Qualifier = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em] mb-16">
          <span className="font-extrabold">Is Monad OS</span> for you?
        </h2>

        {/* FOR YOU block */}
        <h3 className="text-[22px] sm:text-[26px] font-semibold text-foreground text-center mb-10">
          Monad OS{" "}
          <span className="bg-mint px-1.5 py-0.5 rounded-sm text-foreground">is for</span>{" "}
          you if...
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-20">
          {forYou.map((item, i) => (
            <div key={i} className="flex gap-3">
              <MonadSymbol color="#7ec8c8" />
              <p className="text-[15px] text-body leading-[1.75]">{item}</p>
            </div>
          ))}
        </div>

        {/* NOT FOR YOU block */}
        <h3 className="text-[22px] sm:text-[26px] font-semibold text-foreground text-center mb-10">
          Monad OS{" "}
          <span className="bg-accent text-accent-foreground px-1.5 py-0.5 rounded-sm">is not for</span>{" "}
          you if...
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {notForYou.map((item, i) => (
            <div key={i} className="flex gap-3">
              <MonadSymbol color="#ff3131" />
              <p className="text-[15px] text-body leading-[1.75]">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href={APPLY_URL}
            className="inline-flex items-center justify-center bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Qualifier;
