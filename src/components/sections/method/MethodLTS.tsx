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
    <section className="bg-secondary py-24 sm:py-28 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Eyebrow */}
        <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[3px] text-muted-foreground text-center">
          For founders who want a different kind of partnership
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center leading-[1.15]">
          Monad LTS
        </h2>

        <p className="mt-4 text-lg sm:text-xl font-medium text-foreground text-center">
          Long-Term Support. Invitation only. No fixed end date.
        </p>

        <p className="mt-6 text-base text-foreground leading-[1.6] text-center max-w-[640px] mx-auto">
          Monad OS is a 30-day container. Monad LTS is what comes after — for the founders who know they are not done. A high-trust, embedded partnership as the company evolves, the stakes rise, and the identity work deepens. Not a programme. A relationship.
        </p>

        {/* Inclusions */}
        <ul className="mt-8 space-y-3 max-w-[440px] mx-auto">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-foreground">
              <span className="text-accent mt-0.5">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Who it is for */}
        <p className="mt-8 text-sm text-muted-foreground text-center italic max-w-[540px] mx-auto leading-[1.6]">
          For founders generating $500k+ who have outgrown willpower as a growth strategy and are ready to treat leadership as a design problem.
        </p>

        {/* Pull quote */}
        <blockquote className="mt-12 border-l-4 border-accent pl-6 sm:pl-8 max-w-[600px] mx-auto">
          <p className="text-xl sm:text-2xl font-editorial italic text-foreground leading-[1.4]">
            "It is very rare to see someone who truly cares about the company and actually gives a shit. I feel grateful I get to work with you on this. It makes me feel excited to do this every day."
          </p>
          <footer className="mt-4">
            <span className="text-sm font-medium text-foreground">Regan Bradfield</span>
            <span className="text-sm text-muted-foreground">, CEO, Coastline Creatives</span>
            <br />
            <span className="text-xs text-muted-foreground uppercase tracking-[1px]">Monad LTS client</span>
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/apply"
            className="inline-flex bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
          >
            Request a Conversation
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            Monad LTS is invitation only. It follows completion of Monad OS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodLTS;
