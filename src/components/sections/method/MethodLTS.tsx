const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const inclusions = [
  "Monthly 1:1 strategic sessions",
  "Ongoing WhatsApp access between sessions",
  "Merkaba Energy Activations included",
  "Quarterly operating system reviews",
  "Priority access to new formats and live sessions",
];

const MethodLTS = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[50px] items-start">
        {/* Left column */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground ">
            Monad LTS
          </h2>

          <p className="mt-4 font-editorial italic text-[22px] text-foreground leading-[1.55]">
            Long-Term Support. Invitation only. No fixed end date.
          </p>

          <p className="mt-6 text-[16px] text-body leading-[1.75]">
            Monad OS is a 30-day container. Monad LTS is what comes after, for the founders who know they are not done. A high-trust, embedded partnership as the company evolves, the stakes rise, and the identity work deepens. Not a programme. A relationship.
          </p>

          <p className="mt-4 font-editorial italic text-[16px] text-body leading-[1.75]">
            For founders scaling from seven to eight figures, or eight to nine, who are ready to treat leadership as a design problem.
          </p>

          <ul className="mt-7 space-y-0">
            {inclusions.map((item) => (
              <li
                key={item}
                className="text-[16px] text-body py-2 border-b border-border leading-[1.75]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
            >
              Request a Conversation
            </a>
            <p className="mt-2.5 text-[14px] font-editorial italic text-body">
              Monad LTS is invitation only. It follows completion of Monad OS.
            </p>
          </div>
        </div>

        {/* Right column — Quote card */}
        <div className="bg-card border border-border rounded-xl p-8 sm:p-9">
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-5">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Regan Bradfield"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="block text-[60px] text-mint font-serif leading-[0.7] mb-3.5">"</span>
          <p className="font-editorial italic text-[16px] text-foreground leading-[1.55] mb-5">
            It is very rare to see someone who truly cares about the company and actually gives a shit. I feel grateful to be working with Sidsel on this. It makes me feel excited to do this every day.
          </p>
          <span className="block text-[14px] font-medium text-foreground">Regan Bradfield</span>
          <span className="block text-[14px] text-body mt-0.5">CEO, Coastline Creatives · Monad LTS</span>
        </div>
      </div>
    </section>
  );
};

export default MethodLTS;
