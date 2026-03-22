import coastlineCreatives from "@/assets/logo-coastline-creatives.png";
import coinvise from "@/assets/logo-coinvise.png";
import cultureDrivers from "@/assets/logo-culture-drivers.png";
import earnkit from "@/assets/logo-earnkit.png";
import helixMarkets from "@/assets/logo-helix-markets.png";
import infosys from "@/assets/logo-infosys.png";
import pwrHouse from "@/assets/logo-pwr-house.png";

const logos = [
  { src: coastlineCreatives, alt: "Coastline Creatives", height: 48 },
  { src: coinvise, alt: "Coinvise", height: 32 },
  { src: cultureDrivers, alt: "CultureDrivers", height: 28 },
  { src: earnkit, alt: "Earnkit", height: 40 },
  { src: helixMarkets, alt: "Helix Markets", height: 40 },
  { src: infosys, alt: "Infosys", height: 32 },
  { src: pwrHouse, alt: "PWR House", height: 36 },
];

const LogoMarquee = () => {
  return (
    <section className="bg-secondary py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-foreground text-center leading-[1.1] mb-16">
          Join founder-CEOs who operate differently.
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-16 sm:gap-20 animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="flex-shrink-0 opacity-50 grayscale"
              style={{ height: logo.height }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
