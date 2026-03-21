const testimonials = [
  {
    name: "Bianca Polizzi",
    title: "Founder & CEO",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    quoteHeading: "I finally stopped carrying everything alone.",
    quoteBody:
      "Working with Sidsel gave me the clarity and capacity I had been trying to force through willpower. The shift was not just strategic — it was foundational. I lead differently now.",
  },
  {
    name: "Brandon Hadwin",
    title: "Founder & CEO",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quoteHeading: "The bottleneck was me. Now it is not.",
    quoteBody:
      "I came in thinking I needed better systems. What I actually needed was to change how I was holding the company. Sidsel helped me see that and then do something about it.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-24 sm:py-28 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground text-center mb-14">
          What founders are saying
        </h2>

        <div className="flex flex-col gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
            >
              {/* Photo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-secondary flex-shrink-0 overflow-hidden">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Name tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-md">
                    {t.name}
                  </span>
                  <span className="inline-flex px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-md">
                    {t.title}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-foreground leading-snug">
                  {t.quoteHeading}
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {t.quoteBody}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
