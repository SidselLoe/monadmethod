import { Link } from "react-router-dom";

const cards = [
  {
    heading: "10× Energy Activations",
    body: "Shift your state. Restore coherence. Expand the capacity that pressure has been compressing.",
  },
  {
    heading: "4× Workbooks & Reflection",
    body: "Surface the beliefs running your decisions. Turn vague pressure into clear truth.",
  },
  {
    heading: "4× Private Coaching (44 min)",
    body: "High-trust 1:1 sessions that turn insight into clean priorities, boundaries, and follow-through.",
  },
  {
    heading: "30 Days Accountability",
    body: "Private WhatsApp support so nothing drifts between sessions. Check-ins, quick questions, real momentum.",
  },
];

const CeoOs = () => {
  return (
    <section className="bg-foreground py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-background leading-[1.15]">
          CEO OS
        </h2>
        <p className="mt-5 text-lg text-white/70 max-w-[640px] mx-auto leading-[1.6]">
          30 days. Three modalities. One recalibration. Everything you need to shift how you operate as a founder.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-white/5 border border-white/10 rounded-xl p-7 sm:p-8 text-left"
            >
              <h3 className="text-lg sm:text-xl font-medium text-background">
                {c.heading}
              </h3>
              <p className="mt-3 text-base text-white/70 leading-[1.5]">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/apply"
          className="inline-flex mt-12 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default CeoOs;
