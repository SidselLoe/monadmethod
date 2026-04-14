import coastlineCreatives from "@/assets/logo-coastline-creatives.png";
import coinvise from "@/assets/logo-coinvise.png";
import cultureDrivers from "@/assets/logo-culture-drivers.png";
import earnkit from "@/assets/logo-earnkit.png";
import helixMarkets from "@/assets/logo-helix-markets.png";
import infosys from "@/assets/logo-infosys.png";
import pwrHouse from "@/assets/logo-pwr-house.png";

const logos = [
  { src: coastlineCreatives, alt: "Coastline Creatives" },
  { src: coinvise, alt: "Coinvise" },
  { src: cultureDrivers, alt: "CultureDrivers" },
  { src: earnkit, alt: "Earnkit" },
  { src: helixMarkets, alt: "Helix Markets" },
  { src: infosys, alt: "Infosys" },
  { src: pwrHouse, alt: "PWR House" },
];

const LogoMarquee = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15] mb-10">
          Become the upgrade.
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="flex-shrink-0 opacity-50"
              style={{ height: 36 }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
