import { Play } from "lucide-react";
import jenilPhoto from "@/assets/testimonials/jenil-thakker-founder-coinvise-earnkit.png";
import sarahPhoto from "@/assets/testimonials/sarah-montgomery-founder-infyos.png";
import alexandraPhoto from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";

const testimonials = [
  {
    type: "photo" as const,
    name: "Jenil Thakker",
    role: "Founder and CEO, Coinvise and EarnKit",
    quote: "Sidsel was pivotal to EarnKit's launch, bringing clarity, precision, and systems we still use today. The work felt co-founder level and truly invaluable.",
    img: jenilPhoto,
  },
  {
    type: "photo" as const,
    name: "Sarah Montgomery",
    role: "Co-Founder and CEO, Infyos",
    quote: "This program connected my vision with my actions. I now feel empowered, not overwhelmed.",
    img: sarahPhoto,
  },
  {
    type: "photo" as const,
    name: "Alexandra Feldman",
    role: "Founder and Creative Director, Of The Islands",
    quote: "",
    img: alexandraPhoto,
  },
];

const MethodTestimonials = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15] mb-14">
          What founders say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="w-full aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="p-6 pb-7">
                <p className="text-[16px] font-medium text-foreground mb-0.5">{t.name}</p>
                <p className="text-[14px] text-body mb-4 leading-[1.7]">{t.role}</p>
                {t.quote ? (
                  <p className="font-editorial italic text-[16px] text-foreground leading-[1.55]">
                    "{t.quote}"
                  </p>
                ) : (
                  <p className="text-[14px] text-body">
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
