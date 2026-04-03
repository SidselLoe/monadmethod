import { Link } from "react-router-dom";

const inclusions = [
  "Monthly 1:1 strategic coaching sessions",
  "Ongoing WhatsApp access between sessions",
  "Merkaba Energy Activations included",
  "Quarterly operating system reviews",
  "Priority access to new formats and live sessions",
];

const MethodLTS = () => {
  return (
    <section className="bg-secondary py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[72px] items-start">
        {/* Left column */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Monad LTS
          </h2>

          <p className="mt-4 text-xl font-light italic text-foreground leading-[1.5]">
            Long-Term Support. Invitation only. No fixed end date.
          </p>

          <p className="mt-6 text-base text-foreground leading-[1.5]">
            Monad OS is a 30-day container. Monad LTS is what comes after, for the founders who know they are not done. A high-trust, embedded partnership as the company evolves, the stakes rise, and the identity work deepens. Not a programme. A relationship.
          </p>

          <p className="mt-4 text-base italic text-muted-foreground leading-[1.5]">
            For founders scaling from seven to eight figures, or eight to nine, who are ready to treat leadership as a design problem.
          </p>

          <ul className="mt-7 space-y-0">
            {inclusions.map((item) => (
              <li
                key={item}
                className="text-base text-foreground py-2 border-b border-border leading-[1.5]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Link
              to="/apply"
              className="inline-flex bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
            >
              Request a Conversation
            </Link>
            <p className="mt-2.5 text-sm italic text-muted-foreground">
              Monad LTS is invitation only. It follows completion of Monad OS.
            </p>
          </div>
        </div>

        {/* Right column — Quote card */}
        <div className="bg-card border border-border rounded-xl p-8 sm:p-9">
          <div className="w-[72px] h-[72px] rounded-full bg-muted overflow-hidden mb-5">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Regan Bradfield"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="block text-[60px] text-border font-serif leading-[0.7] mb-3.5">"</span>
          <p className="text-base italic text-foreground leading-[1.5] mb-5">
            It is very rare to see someone who truly cares about the company and actually gives a shit. I feel grateful to be working with Sidsel on this. It makes me feel excited to do this every day.
          </p>
          <span className="block text-sm font-medium text-muted-foreground">Regan Bradfield</span>
          <span className="block text-sm text-muted-foreground mt-0.5">CEO, Coastline Creatives · Monad LTS</span>
        </div>
      </div>
    </section>
  );
};

export default MethodLTS;
