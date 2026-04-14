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
    name: "Albert Einstein",
    descriptor: "Physicist",
    anchor: "Imagination is more important than knowledge.",
    body: "He credited intuition over analysis for his breakthroughs. Relativity began as a thought experiment, not a calculation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
  },
  {
    name: "Paul McCartney",
    descriptor: "Songwriter",
    anchor: "Let it be.",
    body: "He received the song through a dream of his late mother. Her words became the anthem.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Paul_McCartney_2021_%28cropped%29.jpg",
  },
  {
    name: "Rick Rubin",
    descriptor: "Producer",
    anchor: "We are antennae for creative thought.",
    body: "He describes the artist's task as receiving. His job is to stay open enough to let what wants to come through arrive.",
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

        {/* Subhead */}
        <p className="text-[18px] font-medium text-foreground text-center mb-4">
          There is a state your nervous system can enter where the noise stops.
        </p>

        {/* Short paragraph */}
        <p className="text-[16px] text-body text-center max-w-[640px] mx-auto leading-[1.75] mb-14">
          Every great mind you admire has described it. The work did not come from effort. It came from access.
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

                    {/* Portrait */}
                    <div className="w-full aspect-[4/5] overflow-hidden">
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
