const videoTestimonials = [
  { name: "Jess Rainey" },
  { name: "Alexandra Feldman" },
];

const quoteTestimonials = [
  {
    quote: "[Testimonial quote from founder]",
    name: "Founder Name",
    company: "Company",
  },
  {
    quote: "[Testimonial quote from founder]",
    name: "Founder Name",
    company: "Company",
  },
  {
    quote: "[Testimonial quote from founder]",
    name: "Founder Name",
    company: "Company",
  },
];

const MoreFromFounders = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center mb-14 leading-[1.15]">
          More from founders
        </h2>

        {/* Video row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {videoTestimonials.map((t) => (
            <div
              key={t.name}
              className="aspect-square bg-foreground rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:opacity-90 transition-opacity"
            >
              {/* Play icon */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <polygon points="14,8 34,20 14,32" fill="white" />
              </svg>
              <span className="text-sm font-medium text-background">
                {t.name}
              </span>
            </div>
          ))}
        </div>

        {/* Quote row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {quoteTestimonials.map((q, i) => (
            <div
              key={i}
              className={`bg-secondary rounded-xl p-8 ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <p className="font-editorial italic text-xl text-foreground leading-[1.5]">
                "{q.quote}"
              </p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                — {q.name}, {q.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreFromFounders;
