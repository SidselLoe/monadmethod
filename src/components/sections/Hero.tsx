import rudiAvatar from "@/assets/testimonials/rudi-adigbli-founder-reethink.png";
import jessicaAvatar from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import brandonAvatar from "@/assets/testimonials/brandon-hadwin-founder-healingwithbrandon.png";
import ellaAvatar from "@/assets/testimonials/ella-cane-founder.png";
import alexandraAvatar from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import AnimatedFounderCount from "@/components/AnimatedFounderCount";
import SplitHeading from "@/components/SplitHeading";
import { FOUNDING_PLACES, bonusOpen, currentStep, formatPrice, isFoundingRound } from "@/data/monadOs";

const APPLY_URL = "/apply";

const avatars = [
  { src: rudiAvatar, alt: "Rudi Adigbli" },
  { src: jessicaAvatar, alt: "Jessica Rainey" },
  { src: brandonAvatar, alt: "Brandon Hadwin" },
  { src: ellaAvatar, alt: "Ella Cane" },
  { src: alexandraAvatar, alt: "Alexandra Feldman" },
];

const Hero = () => {
  return (
    <section className="bg-background pt-[170px] pb-[120px] px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        {isFoundingRound() && (
          <a
            href="#offer"
            className="inline-flex items-center gap-2 mb-10 rounded-full border border-border bg-mint-light px-4 py-1.5 text-[13px] text-foreground hover:border-[#7ec8c8] transition-colors"
          >
            <span className="font-extrabold">{FOUNDING_PLACES} places at {formatPrice(currentStep().price)}</span>
            <span>for anyone starting in 2026{bonusOpen() ? ", plus a bonus until 11 November" : ""}</span>
          </a>
        )}

        <SplitHeading as="h1" first="You know how to do it." rest={<> <br />So why isn't it moving?</>} className="text-4xl sm:text-5xl md:text-[72px] text-foreground" />

        <p className="mt-8 text-[20px] text-foreground font-normal max-w-[720px] mx-auto leading-[1.7]">
          It was never the strategy. It's the pattern running underneath, and it shows up in your work, your money, your health and your relationships. Monad OS clears it in 30 days, one to one with me.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#offer"
            className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            Join Monad OS
          </a>
          <a href={APPLY_URL} className="text-[14px] font-semibold text-foreground underline underline-offset-4 decoration-[#7ec8c8] hover:decoration-2">
            Talk to me first
          </a>
        </div>

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
