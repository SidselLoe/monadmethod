const videoCards = [
  { name: "Bianca Polizzi", company: "Polizzi Media", vimeoId: "148414050" },
  { name: "Brandon Hadwin", company: "HealingwithBrandon", vimeoId: "148414050" },
  { name: "Jessica Rainey", company: "Wildflower Woman", vimeoId: "148414050" },
];

const quoteCards = [
  {
    name: "Rudi Adigbli",
    company: "ReeThink",
    quote: "I came in thinking I needed a better strategy. Within two weeks I realised the strategy was never the problem. The way I was holding everything was. I make decisions faster now, and they actually stick.",
  },
  {
    name: "Max Lange",
    company: "SunnyClouds",
    quote: "[Testimonial quote placeholder — to be replaced with real quote]",
  },
  {
    name: "Ilya Paveliev",
    company: "Hologram",
    quote: "I have done executive coaching before. This is not that. Something shifted in how I relate to pressure and it changed how I show up with my team. Quietly. Permanently.",
  },
];

const VideoCard = ({ name, company, vimeoId }: { name: string; company: string; vimeoId: string }) => (
  <div className="rounded-xl overflow-hidden relative" style={{ aspectRatio: "1/1" }}>
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=0`}
      className="absolute inset-0 w-full h-full border-0"
      allow="autoplay; fullscreen"
      title={`${name} testimonial`}
    />
    <div className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none bg-gradient-to-t from-black/70 to-transparent p-5">
      <p className="text-base font-semibold text-white">{name}</p>
      <p className="text-[13px] text-white/70">{company}</p>
    </div>
  </div>
);

const QuoteCard = ({ name, company, quote }: { name: string; company: string; quote: string }) => (
  <div className="bg-secondary rounded-xl p-7">
    <div className="w-10 h-10 rounded-full bg-muted-foreground/20 mb-3" />
    <p className="text-sm font-medium text-foreground">{name}</p>
    <p className="text-xs text-muted-foreground">{company}</p>
    <p className="mt-4 text-[17px] text-foreground leading-[1.55]">{quote}</p>
  </div>
);

const MoreFromFounders = () => {
  return (
    <section className="bg-background py-[60px] sm:py-[100px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground text-center mb-10 leading-[1.15]">
          What founders are saying.
        </h2>

        {/* Desktop: 3-column masonry via CSS columns */}
        <div className="hidden md:block" style={{ columns: 3, columnGap: "20px" }}>
          {/* Col 1 order: Bianca video, Max quote */}
          <div className="mb-5 break-inside-avoid"><VideoCard {...videoCards[0]} /></div>
          <div className="mb-5 break-inside-avoid"><QuoteCard {...quoteCards[1]} /></div>
          {/* Col 2 order: Brandon video, Jessica video */}
          <div className="mb-5 break-inside-avoid"><VideoCard {...videoCards[1]} /></div>
          <div className="mb-5 break-inside-avoid"><VideoCard {...videoCards[2]} /></div>
          {/* Col 3 order: Rudi quote, Ilya quote */}
          <div className="mb-5 break-inside-avoid"><QuoteCard {...quoteCards[0]} /></div>
          <div className="mb-5 break-inside-avoid"><QuoteCard {...quoteCards[2]} /></div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-5">
          <VideoCard {...videoCards[0]} />
          <QuoteCard {...quoteCards[0]} />
          <VideoCard {...videoCards[1]} />
          <QuoteCard {...quoteCards[1]} />
          <VideoCard {...videoCards[2]} />
          <QuoteCard {...quoteCards[2]} />
        </div>

        {/* Mobile: single column, alternating */}
        <div className="sm:hidden flex flex-col gap-5">
          <VideoCard {...videoCards[0]} />
          <QuoteCard {...quoteCards[0]} />
          <VideoCard {...videoCards[1]} />
          <QuoteCard {...quoteCards[1]} />
          <VideoCard {...videoCards[2]} />
          <QuoteCard {...quoteCards[2]} />
        </div>
      </div>
    </section>
  );
};

export default MoreFromFounders;
