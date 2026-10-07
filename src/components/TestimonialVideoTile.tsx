import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function TestimonialVideoTile({ name, src, poster }: { name: string; src: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (playing) void videoRef.current?.play().catch(() => {});
  }, [playing]);
  return playing ? <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
    <video ref={videoRef} src={src} poster={poster} controls autoPlay playsInline preload="none" className="absolute inset-0 h-full w-full object-cover" aria-label={`${name} testimonial`} />
  </div> : <Button type="button" variant="ghost" onClick={() => setPlaying(true)} className="group relative block h-auto aspect-[3/4] w-full overflow-hidden rounded-xl p-0 text-left hover:bg-transparent" aria-label={`Play ${name} testimonial`}>
    <img src={poster} alt="" className="testimonial-media absolute inset-0 h-full w-full object-cover" loading="lazy" />
    <span className="absolute inset-0 bg-image-overlay" />
    <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-card text-foreground transition-transform group-hover:scale-105"><span className="ml-1 h-0 w-0 border-b-[9px] border-l-[15px] border-t-[9px] border-b-transparent border-l-foreground border-t-transparent" /></span></span>
  </Button>;
}