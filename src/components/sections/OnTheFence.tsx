import { VideoCard } from "@/components/sections/MoreFromFounders";
import sabrinaCover from "@/assets/testimonials/sabrina-cover.jpg";
import giacomoCover from "@/assets/testimonials/giacomo-cover.jpg";
import galeenCover from "@/assets/testimonials/galeen-cover.jpg";
import philipCover from "@/assets/testimonials/philip-cover.jpg";

// Short clips where clients answer the same question: what would you say to someone on the fence?
const fenceCards = [
  { name: "Sabrina\nKennedy", company: "Singer, songwriter and actress", localVideo: "/videos/sabrina-on-the-fence-v2.mp4", poster: "/videos/sabrina-on-the-fence-v2-poster.jpg", cover: sabrinaCover },
  { name: "Giacomo\nGallazzi", company: "Education podcast host", localVideo: "/videos/giacomo-on-the-fence.mp4", poster: "/videos/giacomo-on-the-fence-poster.jpg", cover: giacomoCover },
  { name: "Galeen\nMegerditchian", company: "Paid media and brand marketing manager, London", localVideo: "/videos/galeen-on-the-fence-v2.mp4", poster: "/videos/galeen-on-the-fence-v2-poster.jpg", cover: galeenCover },
  { name: "Philip\nChristiansen", company: "Hypnotist, Copenhagen", localVideo: "/videos/philip-on-the-fence-v2.mp4", poster: "/videos/philip-on-the-fence-poster.jpg", cover: philipCover },
];

const OnTheFence = () => (
  <section className="bg-background py-[100px] px-8">
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
        <span className="font-extrabold">On the fence?</span> Hear it from them
      </h2>
      <p className="mt-4 text-[16px] text-body text-center">
        We asked every client what they'd say to someone who isn't sure yet.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {fenceCards.map((c) => (
          <VideoCard key={c.localVideo} {...c} compact />
        ))}
      </div>
    </div>
  </section>
);

export default OnTheFence;
