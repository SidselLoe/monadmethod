import { useState, useRef } from "react";
import biancaCover from "@/assets/testimonials/bianca-polizzi-founder-polizzi-media.png";
import brandonCover from "@/assets/testimonials/brandon-hadwin-founder-healingwithbrandon.png";
import jessicaCover from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import rudiPhoto from "@/assets/testimonials/rudi-adigbli-founder-reethink.png";
import ilyaPhoto from "@/assets/testimonials/ilya-paveliev-founder-hologram.png";
import alexandraCover from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";

const videoCards = [
  { name: "Bianca\nPolizzi", company: "Polizzi Media", localVideo: "/videos/bianca-testimonial.mp4", poster: "/videos/bianca-testimonial-poster.jpg", cover: biancaCover },
  { name: "Brandon\nHadwin", company: "HealingwithBrandon", localVideo: "/videos/brandon-testimonial.mp4", poster: "/videos/brandon-testimonial-poster.jpg", cover: brandonCover },
  { name: "Jessica\nRainey", company: "Wildflower Woman", localVideo: "/videos/jessica-testimonial.mp4", poster: "/videos/jessica-testimonial-poster.jpg", cover: jessicaCover },
  { name: "Alexandra\nFeldman", company: "Of The Islands", localVideo: "/videos/alexandra-testimonial.mp4", poster: "/videos/alexandra-testimonial-poster.jpg", cover: alexandraCover },
];

const quoteCards = [
  {
    name: "Rudi Adigbli",
    company: "ReeThink",
    photo: rudiPhoto,
    quote: "Working with Sidsel was the first truly holistic experience I've had. A lot of work focuses on strategy. Some goes deeper, into beliefs and how to change them. Very few work with your energy the way Sidsel does, and that's what makes it so effective.",
  },
  {
    name: "Annie Reardon",
    company: "LUDO",
    photo: null,
    quote: "For the first time I am building the company around the life I want, not the other way around. That distinction sounds small. It changed everything.",
  },
  {
    name: "Ilya Paveliev",
    company: "Hologram",
    photo: ilyaPhoto,
    quote: "I have done executive coaching before. This is not that. Something shifted in how I relate to pressure and it changed how I show up with my team. Quietly. Permanently.",
  },
  {
    name: "Ieva Urenceva",
    company: "@catchagypsea",
    photo: null,
    quote: "Placeholder — quote coming soon.",
  },
];

const VideoCard = ({ name, company, vimeoId, localVideo, poster, cover }: { name: string; company: string; vimeoId?: string; localVideo?: string; poster?: string; cover: string }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (playing) return;
    setPlaying(true);
    if (localVideo && videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      className="rounded-xl overflow-hidden relative cursor-pointer"
      style={{ aspectRatio: "3/4" }}
      onClick={handlePlay}
    >
      {playing && localVideo ? (
        <video
          ref={videoRef}
          src={localVideo}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          title={`${name.replace('\n', ' ')} testimonial`}
        />
      ) : playing && vimeoId ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen"
          title={`${name.replace('\n', ' ')} testimonial`}
        />
      ) : (
        <>
          <img src={cover} alt={`${name.replace('\n', ' ')} — ${company} — Monad Method testimonial`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 z-[2] flex items-end justify-between p-5" style={{ background: "linear-gradient(transparent 0%, rgba(0,0,0,0.55) 100%)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><polygon points="0,0 12,7 0,14" fill="white" /></svg>
            </div>
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

const QuoteCard = ({ name, company, quote, photo }: { name: string; company: string; quote: string; photo: string | null }) => (
  <div className="rounded-xl p-7 bg-card border border-border">
    {photo ? (
      <div className="w-10 h-10 rounded-full mb-3 overflow-hidden">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
    ) : (
      <div className="w-10 h-10 rounded-full mb-3 bg-mint" />
    )}
    <p className="text-[14px] font-medium text-foreground">{name}</p>
    <p className="text-[14px] text-body">{company}</p>
    <p className="mt-4 text-[16px] text-body leading-[1.75]">{quote}</p>
  </div>
);

const MoreFromFounders = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center mb-10 leading-[1.15]">
          Join founders who operate differently.
        </h2>

        {/* Desktop: 3-column masonry */}
        <div className="hidden md:block" style={{ columns: 3, columnGap: "18px" }}>
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[0]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[1]} /></div>
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[1]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[0]} /></div>
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[2]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[2]} /></div>
          <div className="mb-[18px] break-inside-avoid"><VideoCard {...videoCards[3]} /></div>
          <div className="mb-[18px] break-inside-avoid"><QuoteCard {...quoteCards[3]} /></div>
        </div>

        {/* Tablet */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-[18px]">
          <VideoCard {...videoCards[0]} />
          <QuoteCard {...quoteCards[0]} />
          <VideoCard {...videoCards[1]} />
          <QuoteCard {...quoteCards[1]} />
          <VideoCard {...videoCards[2]} />
          <QuoteCard {...quoteCards[2]} />
          <VideoCard {...videoCards[3]} />
          <QuoteCard {...quoteCards[3]} />
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-col gap-[18px]">
          <VideoCard {...videoCards[0]} />
          <QuoteCard {...quoteCards[0]} />
          <VideoCard {...videoCards[1]} />
          <QuoteCard {...quoteCards[1]} />
          <VideoCard {...videoCards[2]} />
          <QuoteCard {...quoteCards[2]} />
          <VideoCard {...videoCards[3]} />
          <QuoteCard {...quoteCards[3]} />
        </div>
      </div>
    </section>
  );
};

export default MoreFromFounders;
