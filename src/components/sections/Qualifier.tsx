const CALENDLY_URL = "https://calendly.com/sidsel-loschenkohl/";

const MonadSymbol = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width="20"
    height="20"
    className="flex-shrink-0 mt-[3px]"
  >
    <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="8" />
    <circle cx="60" cy="60" r="12" fill={color} />
  </svg>
);

const forYou = [
  "You are the business. If you disappeared tomorrow, the company would not persist. You have traction. You are not in survival mode. But how you have been operating is no longer sustainable.",
  "You know there is more. You cannot fully name it yet, but the pull is there. What got you here is not what will get you there, and you can feel it.",
  "You have taken your destiny into your own hands. No one is coming to save you. Not a cofounder, not a hire, not the next framework. The responsibility for what happens next sits with you.",
  "You want to be pointed inward, not told what to do. You do not trust people who hand you formulas. What draws you to this work is that it reveals rather than prescribes.",
  "You are open to energy work as a real mechanism for change. You do not need to fully understand it. You are willing to experience it, and you hold, or are open to holding, the belief that we are more than this physical 3D reality.",
  "You are ready to look at what is underneath. The patterns, the identity fusion, the drive that built the company and is now the ceiling. You are open to something that works at a different layer than strategy.",
];

const notForYou = [
  "You want someone to hand you a system or tell you what to do. This work does not prescribe. It reveals. If you are looking for a tactical roadmap or a revenue formula, you will be frustrated here.",
  "You have not yet built anything. You are still in ideation, still in employment, or still in survival mode. This work assumes you have traction and the weight that comes with it.",
  "You do not believe that internal state shapes external results. If that premise sounds like a metaphor to you rather than a mechanism, this is not the work you are looking for.",
  "You are not willing to be honest with yourself. The work surfaces what has been running you. If you are here to perform self-awareness rather than actually do it, nothing will shift.",
];

const Qualifier = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center mb-16 ">
          Is Monad OS for you?
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
          <span className="bg-[#ff3131] text-white px-1.5 py-0.5 rounded-sm">is not for</span>{" "}
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
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#ff3131] text-white font-semibold rounded-full hover:bg-[#ff3131]/90 transition-colors text-[15px] uppercase tracking-wide"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Qualifier;
