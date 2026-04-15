import rudiAvatar from "@/assets/testimonials/rudi-adigbli-founder-reethink.png";
import jessicaAvatar from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import ilyaAvatar from "@/assets/testimonials/ilya-paveliev-founder-hologram.png";
import ellaAvatar from "@/assets/testimonials/ella-cane-founder.png";
import alexandraAvatar from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";

const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const avatars = [
  { src: rudiAvatar, alt: "Rudi Adigbli" },
  { src: jessicaAvatar, alt: "Jessica Rainey" },
  { src: ilyaAvatar, alt: "Ilya Paveliev" },
  { src: ellaAvatar, alt: "Ella Cane" },
  { src: alexandraAvatar, alt: "Alexandra Feldman" },
];

const Hero = () => {
  return (
    <section className="bg-background pt-[200px] pb-[120px] px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-8">
          For founders who are the business.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-[72px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
          You are the business.<br />That's not a compliment.
        </h1>

        <p className="mt-8 text-[20px] text-body font-normal max-w-[700px] mx-auto leading-[1.7]">
          The ceiling is internal. The work is how you move it. Three modalities. Thirty days.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-12 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Book a Call
        </a>

        {/* Avatar stack + social proof */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex">
            {avatarUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Founder"
                className="w-8 h-8 rounded-full object-cover border-2 border-background shadow-sm"
                style={{ marginLeft: i > 0 ? "-10px" : "0" }}
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-[14px] text-body">150+ founders, leaders, and creators have experienced the work.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
