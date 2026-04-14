import { Link } from "react-router-dom";

const cards = [
  {
    label: "Monad OS",
    heading: "The 30-day container.",
    body: "The flagship offer. Installs the Monad Method into your daily operating rhythm. Weekly Monad Activations, weekly 1:1 strategic sessions, voice-note self-inquiry, WhatsApp accountability, and strategic frameworks. Weekly rolling starts.",
    cta: "Explore Monad OS",
    to: "/monad-os",
  },
  {
    label: "Monad LTS",
    heading: "Long-term support.",
    body: "The continuation, for founders who have made the shift and want to build from it. Ongoing activations, strategic sessions, and inquiry. Systems and AI integration enter the partnership here. This is where the work compounds. Invitation only, for Monad OS graduates.",
    cta: "Request an Introduction",
    to: "/apply",
  },
];

const MethodOfferings = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Two ways to work together.
          </h2>
          <p className="mt-4 text-[18px] text-body leading-[1.7]">
            One door in. One way to continue.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.label}
              className="border border-border rounded-xl overflow-hidden"
            >
              <div className="h-[3px] bg-mint" />
              <div className="p-8 sm:p-10">
                <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-3">
                  {card.label}
                </p>
                <h3 className="text-[24px] font-bold text-foreground leading-[1.3]">
                  {card.heading}
                </h3>
                <p className="mt-3 text-[16px] text-body leading-[1.75]">
                  {card.body}
                </p>
                <Link
                  to={card.to}
                  className="inline-flex mt-6 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodOfferings;
