import antonPhoto from "@/assets/testimonials/anton-rytter-founder.png";
import biancaPhoto from "@/assets/testimonials/bianca-polizzi-founder-polizzi-media.png";
import ellaPhoto from "@/assets/testimonials/ella-cane-founder.png";

const testimonials = [
  {
    name: "Anton Rytter",
    title: "Founder, Kintsugi Studio",
    photo: antonPhoto,
    quoteHeading: "",
    quoteBody:
      "She turns my messy potential into a clear direction. I'm pursuing four times as many leads now — and actually following them through.",
  },
  {
    name: "Bianca Polizzi",
    title: "Founder, Polizzi Media",
    photo: biancaPhoto,
    quoteHeading: "",
    quoteBody:
      "I reclaimed my sense of self-worth. I've shed so much and become such a different version of myself.",
  },
  {
    name: "Ella Cane",
    title: "Business Owner, Live Your Truth",
    photo: ellaPhoto,
    quoteHeading: "",
    quoteBody:
      "I needed someone who could help me structure everything — not just give me more ideas. Regular check-ins, accountability, strategic guidance. That's what I actually needed.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center mb-14 leading-[1.15]">
          What founders are saying
        </h2>

        <div className="flex flex-col gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
            >
              {/* Photo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex px-3 py-1 bg-surface text-foreground text-xs font-medium rounded-md">
                    {t.name}
                  </span>
                  <span className="inline-flex px-3 py-1 bg-surface text-body text-xs font-medium rounded-md">
                    {t.title}
                  </span>
                </div>

                {t.quoteHeading && (
                  <h3 className="text-[20px] font-semibold text-foreground leading-snug">
                    {t.quoteHeading}
                  </h3>
                )}
                <p className={`${t.quoteHeading ? 'mt-3' : ''} text-[16px] text-body leading-[1.75]`}>
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
