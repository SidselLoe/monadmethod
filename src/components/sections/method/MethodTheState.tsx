import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    name: "Nikola Tesla",
    descriptor: "Inventor",
    anchor: "My brain is only a receiver.",
    body: "He claimed his inventions arrived already complete, through visions. He worked as a receiver, not an inventor.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
  },
  {
    name: "Elizabeth Gilbert",
    descriptor: "Author",
    anchor: "Inspiration is always trying to work with you.",
    body: "She describes creativity as something that visits you, not something you produce. The artist's job is to stay available for it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Elizabeth_Gilbert_%281%29.jpg/640px-Elizabeth_Gilbert_%281%29.jpg",
  },
  {
    name: "Albert Einstein",
    descriptor: "Physicist",
    anchor: "Imagination is more important than knowledge.",
    body: "He credited intuition over analysis for his breakthroughs. Relativity began as a thought experiment, not a calculation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
  },
  {
    name: "Isabel Allende",
    descriptor: "Author",
    anchor: "I don't choose the subject. It chooses me.",
    body: "She writes her first drafts in a trance-like state. She begins every book on January 8th, a ritual she has kept for decades.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Isabel_Allende_-_20180913_-_FM_%281%29.jpg/640px-Isabel_Allende_-_20180913_-_FM_%281%29.jpg",
  },
  {
    name: "Paul McCartney",
    descriptor: "Songwriter",
    anchor: "Let it be.",
    body: "He received the song through a dream of his late mother. Her words became the anthem.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Paul_McCartney_2021_%28cropped%29.jpg",
  },
  {
    name: "J.K. Rowling",
    descriptor: "Novelist",
    anchor: "Harry just strolled into my head fully formed.",
    body: "The idea arrived on a delayed train to London in 1990. She spent the rest of the journey building the world in her head, unable to write it down.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/640px-J._K._Rowling_2010.jpg",
  },
  {
    name: "Rick Rubin",
    descriptor: "Producer",
    anchor: "We are antennae for creative thought.",
    body: "He describes the artist's task as receiving. The job is to stay open enough to let it through.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rick_Rubin_in_1988_%28cropped%29.jpg",
  },
];

const MethodTheState = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Eyebrow */}
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint text-center mb-4">
          The state.
        </p>

        {/* H2 */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15] mb-5">
          Your best ideas have never come from thinking harder.
        </h2>

        {/* Short paragraph */}
        <p className="text-[16px] text-body text-center max-w-[640px] mx-auto leading-[1.75] mb-14">
          They arrived when you stopped. In the shower. On a walk. At 3 AM. Already complete. You know this state exists. You just cannot reach it on demand. Every great mind you admire has described the same thing. The work did not come from effort. It came from access.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-5">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 pl-5"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col">
                    {/* Teal accent line */}
                    <div className="h-[3px] bg-mint" />

                    {/* Portrait - reduced to ~70% of previous height (4/5 → 4/3 is actually taller, let's use 3/4 or smaller) */}
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <p className="text-[16px] font-medium text-foreground">
                        {card.name}
                      </p>
                      <p className="text-[14px] text-body mb-4">
                        {card.descriptor}
                      </p>
                      <p className="text-[18px] font-bold text-foreground leading-snug mb-3">
                        "{card.anchor}"
                      </p>
                      <p className="text-[15px] text-body leading-[1.7]">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 transition-opacity hover:bg-surface"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground disabled:opacity-30 transition-opacity hover:bg-surface"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-[16px] text-foreground text-center mt-12 leading-[1.75]">
          The state they knew is available to you.
        </p>
      </div>
    </section>
  );
};

export default MethodTheState;
