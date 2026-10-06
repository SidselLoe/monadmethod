import rudiAvatar from "@/assets/testimonials/rudi-adigbli-founder-reethink.png";
import jessicaAvatar from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import ilyaAvatar from "@/assets/testimonials/ilya-paveliev-founder-hologram.png";
import ellaAvatar from "@/assets/testimonials/ella-cane-founder.png";
import alexandraAvatar from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import AnimatedFounderCount from "@/components/AnimatedFounderCount";
import SplitHeading from "@/components/SplitHeading";

const APPLY_URL = "/apply";

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
        <SplitHeading as="h1" first="You know how to do it." rest={<> <br />So why isn't it moving?</>} className="text-4xl sm:text-5xl md:text-[72px] text-foreground" />

        <p className="mt-8 text-[20px] text-foreground font-normal max-w-[700px] mx-auto leading-[1.7]">
          It was never the strategy. It's the pattern running underneath. Monad OS clears it in thirty days.
        </p>

        <a
          href={APPLY_URL}
          className="inline-flex mt-10 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Apply Now
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex shrink-0">
            {avatars.map((avatar, i) => (
              <img
                key={i}
                src={avatar.src}
                alt={avatar.alt}
                className="w-8 h-8 rounded-full object-cover border-2 border-background shadow-sm"
                style={{ marginLeft: i > 0 ? "-10px" : "0" }}
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-[14px] text-foreground"><AnimatedFounderCount /> people have experienced the work.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
