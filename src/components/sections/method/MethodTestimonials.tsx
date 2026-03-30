import { Play } from "lucide-react";

const testimonials = [
  {
    type: "text" as const,
    initials: "JT",
    quote:
      "Sidsel was pivotal to EarnKit's launch, bringing clarity, precision, and systems we still use today. Her work felt co-founder level and truly invaluable.",
    name: "Jenil Thakker",
    role: "Founder and CEO, Coinvise and EarnKit",
  },
  {
    type: "text" as const,
    initials: "SM",
    quote:
      "This program connected my vision with my actions. I now feel empowered, not overwhelmed.",
    name: "Sarah Montgomery",
    role: "Co-Founder and CEO, Infyos",
  },
  {
    type: "video" as const,
    initials: "AF",
    quote: "",
    name: "Alexandra Feldman",
    role: "Founder and Creative Director, Of The Islands",
  },
];

const MethodTestimonials = () => {
  return (
    <section className="bg-background py-24 sm:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center leading-[1.15]">
          What founders say.
        </h2>
        <p className="mt-3 text-base text-muted-foreground text-center">
          All Monad LTS clients.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background border border-border rounded-xl p-7 sm:p-8 flex flex-col min-h-[320px]"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>

              {/* Monad LTS tag */}
              <span className="self-start mt-4 text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground bg-secondary px-2.5 py-1 rounded">
                Monad LTS
              </span>

              {t.type === "text" ? (
                <p className="mt-5 text-base text-foreground leading-[1.6] flex-1">
                  "{t.quote}"
                </p>
              ) : (
                /* Video placeholder */
                <div className="mt-5 flex-1 bg-secondary rounded-lg flex items-center justify-center aspect-square md:aspect-auto">
                  <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center">
                    <Play size={24} className="text-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodTestimonials;
