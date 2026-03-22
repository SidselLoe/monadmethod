const placeholderLogos = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  width: 80 + (i % 4) * 20,
}));

const LogoMarquee = () => {
  return (
    <section className="bg-secondary py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-foreground text-center leading-[1.1] mb-16">
          Join founder-CEOs who operate differently.
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-12 sm:gap-16 animate-marquee">
          {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-8 rounded bg-foreground/10 flex items-center justify-center px-4"
              style={{ width: logo.width }}
            >
              <span className="text-xs text-muted-foreground">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
