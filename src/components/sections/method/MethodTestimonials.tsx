import { Play } from "lucide-react";

const testimonials = [
  {
    type: "photo" as const,
    name: "Jenil Thakker",
    role: "Founder and CEO, Coinvise and EarnKit",
    quote: "Sidsel was pivotal to EarnKit's launch, bringing clarity, precision, and systems we still use today. The work felt co-founder level and truly invaluable.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    type: "photo" as const,
    name: "Sarah Montgomery",
    role: "Co-Founder and CEO, Infyos",
    quote: "This program connected my vision with my actions. I now feel empowered, not overwhelmed.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    type: "video" as const,
    name: "Alexandra Feldman",
    role: "Founder and Creative Director, Of The Islands",
    quote: "",
    img: "",
  },
];

const MethodTestimonials = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15] mb-14">
          What founders say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Photo or video placeholder */}
              {t.type === "photo" ? (
                <div className="w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-full aspect-square bg-muted flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-muted-foreground/40 flex items-center justify-center">
                    <Play size={22} className="text-muted-foreground/60 ml-1" />
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-6 pb-7">
                <p className="text-base font-medium text-foreground mb-0.5">{t.name}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.role}</p>
                {t.quote ? (
                  <p className="text-base italic text-foreground leading-[1.5]">
                    "{t.quote}"
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Square video testimonial
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodTestimonials;
