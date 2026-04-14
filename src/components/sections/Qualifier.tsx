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
  "Placeholder bullet point one for the left column.",
  "Placeholder bullet point two for the left column.",
  "Placeholder bullet point three for the left column.",
  "Placeholder bullet point four for the left column.",
  "Placeholder bullet point five for the left column.",
  "Placeholder bullet point six for the left column.",
];

const notForYou = [
  "Placeholder bullet point one for the right column.",
  "Placeholder bullet point two for the right column.",
  "Placeholder bullet point three for the right column.",
  "Placeholder bullet point four for the right column.",
];

const Qualifier = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center mb-14 leading-[1.15]">
          Placeholder section headline
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left column — for you */}
          <div>
            <h3 className="text-[20px] font-semibold text-foreground mb-6">
              Placeholder left column heading
            </h3>
            <ul className="space-y-5">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <MonadSymbol color="#7ec8c8" />
                  <p className="text-[15px] text-body leading-[1.75]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — not for you */}
          <div>
            <h3 className="text-[20px] font-semibold text-foreground mb-6">
              Placeholder right column heading
            </h3>
            <ul className="space-y-5">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <MonadSymbol color="#ff3131" />
                  <p className="text-[15px] text-body leading-[1.75]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-[15px]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Qualifier;
