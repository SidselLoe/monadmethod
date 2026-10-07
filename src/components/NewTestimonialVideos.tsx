import TestimonialVideoTile from "@/components/TestimonialVideoTile";
import jessicaVideo from "../../public/videos/jessica-now-its-me.mp4.asset.json";
import jessicaPoster from "../../public/videos/jessica-now-its-me-poster.jpg.asset.json";
import alexandraVideo from "../../public/videos/alexandra-slow-down.mp4.asset.json";
import alexandraPoster from "../../public/videos/alexandra-slow-down-poster.jpg.asset.json";
import biancaVideo from "../../public/videos/bianca-worlds-apart.mp4.asset.json";
import biancaPoster from "../../public/videos/bianca-worlds-apart-poster.jpg.asset.json";
import brandonVideo from "../../public/videos/brandon-stop-pushing.mp4.asset.json";
import brandonPoster from "../../public/videos/brandon-stop-pushing-poster.jpg.asset.json";

const testimonials = [
  { name: "Jessica Rainey", label: "Why a somatic practitioner calls it support she hasn't felt anywhere else.", src: jessicaVideo.url, poster: jessicaPoster.url },
  { name: "Alexandra Feldman", label: "How Alexandra moved work that had stalled for reasons that had nothing to do with skill.", src: alexandraVideo.url, poster: alexandraPoster.url },
  { name: "Bianca Polizzi", label: "Polizzi Media", src: biancaVideo.url, poster: biancaPoster.url },
  { name: "Brandon Hadwin", label: "How Brandon realized he was the business, and cleared what was holding it back.", src: brandonVideo.url, poster: brandonPoster.url },
];

function LabeledTile({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return <article>
    <TestimonialVideoTile {...testimonial} />
    <h3 className="mt-6 text-[20px] font-extrabold leading-[1.35] text-foreground">{testimonial.label}</h3>
    <p className="mt-4 text-[14px] font-semibold text-foreground">{testimonial.name}</p>
  </article>;
}

export function BrandonTestimonial() {
  return <div className="mx-auto mt-12 w-full max-w-[345.34px] text-left"><LabeledTile testimonial={testimonials[3]} /></div>;
}

export default function NewTestimonialVideos() {
  return <section className="bg-background px-4 py-[72px] sm:px-8 sm:py-28">
    <div className="mx-auto max-w-[1100px]">
      <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">IN THEIR WORDS</p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">{testimonials.map((testimonial) => <LabeledTile key={testimonial.name} testimonial={testimonial} />)}</div>
    </div>
  </section>;
}