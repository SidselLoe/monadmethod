import { useState, useRef } from "react";
import biancaCover from "@/assets/testimonials/bianca-polizzi-founder-polizzi-media.png";
import brandonCover from "@/assets/testimonials/brandon-cover.jpg";
import jessicaCover from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import sarahPhoto from "@/assets/testimonials/sarah-montgomery-founder-infyos.png";
import rudiPhoto from "@/assets/testimonials/rudi-adigbli-founder-reethink.png";
import alexandraCover from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import sabrinaCover from "@/assets/testimonials/sabrina-cover.jpg";
import giacomoCover from "@/assets/testimonials/giacomo-cover.jpg";
import galeenCover from "@/assets/testimonials/galeen-cover.jpg";
import philipCover from "@/assets/testimonials/philip-cover.jpg";
import sabrinaAvatar from "@/assets/testimonials/sabrina-avatar.jpg";
import giacomoAvatar from "@/assets/testimonials/giacomo-avatar.jpg";
import galeenAvatar from "@/assets/testimonials/galeen-avatar.jpg";
import philipAvatar from "@/assets/testimonials/philip-avatar.jpg";

export const videoCards = [
  { name: "Sabrina\nKennedy", company: "Singer, songwriter and actress", localVideo: "/videos/sabrina-testimonial-v2.mp4", poster: "/videos/sabrina-testimonial-poster.jpg", cover: sabrinaCover },
  { name: "Giacomo\nGallazzi", company: "Education podcast host", localVideo: "/videos/giacomo-testimonial-v2.mp4", poster: "/videos/giacomo-testimonial-poster.jpg", cover: giacomoCover },
  { name: "Galeen\nMegerditchian", company: "Paid media and brand marketing manager, London", localVideo: "/videos/galeen-testimonial-v2.mp4", poster: "/videos/galeen-testimonial-v2-poster.jpg", cover: galeenCover },
  { name: "Philip\nChristiansen", company: "Hypnotist, Copenhagen", localVideo: "/videos/philip-testimonial-v3.mp4", poster: "/videos/philip-testimonial-v3-poster.jpg", cover: philipCover },
  { name: "Bianca\nPolizzi", company: "Polizzi Media", localVideo: "/videos/bianca-testimonial.mp4", poster: "/videos/bianca-testimonial-poster.jpg", cover: biancaCover },
  { name: "Brandon\nHadwin", company: "HealingwithBrandon", localVideo: "/videos/brandon-testimonial.mp4", poster: "/videos/brandon-testimonial-v3-poster.jpg", cover: brandonCover },
  { name: "Jessica\nRainey", company: "Wildflower Woman", localVideo: "/videos/jessica-testimonial.mp4", poster: "/videos/jessica-testimonial-poster.jpg", cover: jessicaCover },
  { name: "Alexandra\nFeldman", company: "Of The Islands", localVideo: "/videos/alexandra-testimonial.mp4", poster: "/videos/alexandra-testimonial-poster.jpg", cover: alexandraCover },
];

const quoteCards = [
  {
    name: "Sabrina Kennedy",
    company: "Singer, songwriter and actress",
    photo: sabrinaAvatar,
    quote: "I was choosing a familiar hell over an unfamiliar peace. One month of Monad OS shifted this perspective.",
  },
  {
    name: "Giacomo Gallazzi",
    company: "Education podcast host",
    photo: giacomoAvatar,
    quote: "I'd done six months of coaching before, but one month of Monad OS was more impactful. I saw a change week by week.",
  },
  {
    name: "Galeen Megerditchian",
    company: "Paid media and brand marketing manager, London",
    photo: galeenAvatar,
    quote: "In 30 days my energy went from 1 to 9. I'm kinder to myself, and I've found my voice.",
  },
  {
    name: "Philip Christiansen",
    company: "Hypnotist, Copenhagen",
    photo: philipAvatar,
    quote: "Monad OS helped me realize it's safe to be seen. There's still some fear, but I don't let it control my actions.",
  },
  {
    name: "Rudi Adigbli",
    company: "ReeThink",
    photo: rudiPhoto,
    quote: "Working with Sidsel was the first truly holistic experience I've had. A lot of work focuses on strategy. Some goes deeper, into beliefs and how to change them. Very few work with your energy the way Sidsel does, and that's what makes it so effective.",
  },
  {
    name: "Alexandra Feldman",
    company: "Of The Islands",
    photo: alexandraCover,
    quote: "Fix your energy, and then use your powerhouse drive to do everything else.",
  },
  {
    name: "Bianca Polizzi",
    company: "Polizzi Media",
    photo: biancaCover,
    quote: "I am the most stable mentally I've ever been, and also the most clear I've ever been on where I want to be going.",
  },
  {
    name: "Sarah Montgomery",
    company: "Co-founder and CEO, Infyos",
    photo: sarahPhoto,
    quote: "Bringing people to us rather than us chasing them.",
  },
];

export const VideoCard = ({ name, company, vimeoId, localVideo, poster, cover, compact = false }: { name: string; company: string; vimeoId?: string; localVideo?: string; poster?: string; cover: string; compact?: boolean }) => {
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
      className="group rounded-xl border border-border overflow-hidden relative cursor-pointer"
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
          <img src={cover} alt={`${name.replace('\n', ' ')} — ${company} — Monad Method testimonial`} className="testimonial-media absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 z-[2] flex items-end justify-end p-5" style={{ background: "linear-gradient(transparent 0%, rgba(0,0,0,0.55) 100%)" }}>
            <div className="text-right">
              <p className="text-lg font-semibold text-white leading-[1.2] whitespace-pre-line">{name}</p>
              <p className="text-xs text-white/70">{company}</p>
            </div>
          </div>
          {/* Large centered Monad-style play button */}
          <div className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none">
            <div className={`relative ${compact ? "w-14 h-14 md:w-16 md:h-16" : "w-20 h-20 md:w-24 md:h-24"} transition-transform duration-300 group-hover:scale-110`}>
              <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
                <circle cx="60" cy="60" r="50" fill="rgba(255,255,255,0.18)" stroke="white" strokeWidth="3.5" />
                <polygon points="50,42 82,60 50,78" fill="white" />
              </svg>
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

// Indexes: videoCards 0 Sabrina, 1 Giacomo, 2 Galeen, 3 Philip, 4 Bianca, 5 Brandon, 6 Jessica, 7 Alexandra.
// quoteCards 0 Sabrina, 1 Giacomo, 2 Galeen, 3 Philip, 4 Rudi, 5 Alexandra, 6 Bianca, 7 Sarah.
// Arranged so nobody's quote sits right next to their own video.
type Slot = ["v" | "q", number];
const toNode = ([type, i]: Slot) => ({
  key: `${type}${i}`,
  node: type === "v" ? <VideoCard {...videoCards[i]} /> : <QuoteCard {...quoteCards[i]} />,
});

const desktopColumns: Slot[][] = [
  [["v", 0], ["q", 1], ["v", 4], ["q", 4], ["v", 3]],
  [["q", 2], ["v", 5], ["q", 3], ["v", 6], ["q", 0]],
  [["v", 1], ["q", 5], ["v", 2], ["q", 6], ["v", 7], ["q", 7]],
];

const wall = ([
  ["v", 0], ["q", 2], ["v", 1], ["q", 3], ["v", 4], ["q", 4], ["v", 2], ["q", 0],
  ["v", 5], ["q", 1], ["v", 3], ["q", 5], ["v", 6], ["q", 6], ["v", 7], ["q", 7],
] as Slot[]).map(toNode);

const MoreFromFounders = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em] mb-10">
          <span className="font-extrabold">In their</span> words
        </h2>

        {/* Desktop: three hand-placed columns */}
        <div className="hidden md:grid grid-cols-3 gap-[18px] items-start">
          {desktopColumns.map((col, c) => (
            <div key={c} className="flex flex-col gap-[18px]">
              {col.map(toNode).map((item) => <div key={item.key}>{item.node}</div>)}
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-[18px]">
          {wall.map((item) => <div key={item.key}>{item.node}</div>)}
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-col gap-[18px]">
          {wall.map((item) => <div key={item.key}>{item.node}</div>)}
        </div>
      </div>
    </section>
  );
};

export default MoreFromFounders;
