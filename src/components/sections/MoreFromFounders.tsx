import { useState } from "react";
import biancaCover from "@/assets/bianca-cover.jpg";
import brandonCover from "@/assets/brandon-cover.jpg";
import jessicaCover from "@/assets/jessica-cover.jpg";

const videoCards = [
  { name: "Bianca\nPolizzi", company: "Polizzi Media", vimeoId: "148414050", cover: biancaCover },
  { name: "Brandon\nHadwin", company: "HealingwithBrandon", vimeoId: "148414050", cover: brandonCover },
  { name: "Jessica\nRainey", company: "Wildflower Woman", vimeoId: "148414050", cover: jessicaCover },
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
    quote: "I stopped firefighting every day and started actually leading. The business did not fall apart. It got better. I just needed someone to show me I was the thing in the way.",
  },
  {
    name: "Annie Reardon",
    company: "LUDO",
    quote: "For the first time I am building the company around the life I want, not the other way around. That distinction sounds small. It changed everything.",
  },
  {
    name: "Ilya Paveliev",
    company: "Hologram",
    quote: "I have done executive coaching before. This is not that. Something shifted in how I relate to pressure and it changed how I show up with my team. Quietly. Permanently.",
  },
];

const VideoCard = ({ name, company, vimeoId, cover }: { name: string; company: string; vimeoId: string; cover: string }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden relative cursor-pointer"
      style={{ aspectRatio: "3/4" }}
      onClick={() => !playing && setPlaying(true)}
      data-vimeo={vimeoId}
    >
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen"
          title={`${name} testimonial`}
        />
      ) : (
        <>
          <img src={cover} alt={name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 z-[2] flex items-end justify-between p-5" style={{ background: "linear-gradient(transparent 0%, rgba(0,0,0,0.55) 100%)" }}>
            {/* Play icon */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><polygon points="0,0 12,7 0,14" fill="white" /></svg>
            </div>
            {/* Name & company */}
            <div className="text-right">
              <p className="text-lg font-semibold text-white leading-[1.2] whitespace-pre-line">{name}</p>
              <p className="text-xs text-white/70">{company}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const QuoteCard = ({ name, company, quote }: { name: string; company: string; quote: string }) => (
  <div className="rounded-xl p-7 bg-secondary">
    <div className="w-10 h-10 rounded-full mb-3 bg-border" />
    <p className="text-sm font-medium text-foreground">{name}</p>
    <p className="text-xs text-muted-foreground">{company}</p>
    <p className="mt-4 text-[17px] text-foreground leading-[1.55]">{quote}</p>
  </div>
);

const MoreFromFounders = () => {
  return (
    <section className="bg-background py-[60px] sm:py-[100px] md:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center mb-10 leading-[1.15]">
          What founders are saying.
        </h2>

        {/* Desktop: 3-column masonry */}
        <div className="hidden md:block" style={{ columns: 3, columnGap: "18px" }}>
          {/* Col 1: Bianca video, Max quote */}
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[0]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[1]} /></div>
          {/* Col 2: Brandon video, Annie quote */}
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[1]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[2]} /></div>
          {/* Col 3: Rudi quote, Jessica video, Ilya quote */}
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[0]} /></div>
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[2]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[3]} /></div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-[18px]">
          <VideoCard {...videoCards[0]} />
          <QuoteCard {...quoteCards[0]} />
          <VideoCard {...videoCards[1]} />
          <QuoteCard {...quoteCards[1]} />
          <VideoCard {...videoCards[2]} />
          <QuoteCard {...quoteCards[2]} />
          <QuoteCard {...quoteCards[3]} />
        </div>

        {/* Mobile: single column, alternating */}
        <div className="sm:hidden flex flex-col gap-[18px]">
          <VideoCard {...videoCards[0]} />
          <QuoteCard {...quoteCards[0]} />
          <VideoCard {...videoCards[1]} />
          <QuoteCard {...quoteCards[1]} />
          <VideoCard {...videoCards[2]} />
          <QuoteCard {...quoteCards[2]} />
          <QuoteCard {...quoteCards[3]} />
        </div>
      </div>
    </section>
  );
};

export default MoreFromFounders;
