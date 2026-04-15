import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import nikolaTesla from "@/assets/the-state/nikola-tesla.jpg";
import elizabethGilbert from "@/assets/the-state/elizabeth-gilbert.jpg";
import albertEinstein from "@/assets/the-state/albert-einstein.jpg";
import isabelAllende from "@/assets/the-state/isabel-allende.jpg";
import paulMcCartney from "@/assets/the-state/paul-mccartney.jpg";
import jkRowling from "@/assets/the-state/jk-rowling.jpg";
import rickRubin from "@/assets/the-state/rick-rubin.jpg";

const cards = [
  {
    name: "Nikola Tesla",
    descriptor: "Inventor",
    anchor: "My brain is only a receiver.",
    body: "He claimed his inventions arrived already complete, through visions. He worked as a receiver, not an inventor.",
    img: nikolaTesla,
  },
  {
    name: "Rick Rubin",
    descriptor: "Producer",
    anchor: "We are antennae for creative thought.",
    body: "He describes the artist's task as receiving. The job is to stay open enough to let it through.",
    img: rickRubin,
  },
  {
    name: "Elizabeth Gilbert",
    descriptor: "Author",
    anchor: "Inspiration is always trying to work with you.",
    body: "She describes creativity as something that visits you, not something you produce. The artist's job is to stay available for it.",
    img: elizabethGilbert,
  },
  {
    name: "Albert Einstein",
    descriptor: "Physicist",
    anchor: "Imagination is more important than knowledge.",
    body: "He credited intuition over analysis for his breakthroughs. Relativity began as a thought experiment, not a calculation.",
    img: albertEinstein,
  },
  {
    name: "Isabel Allende",
    descriptor: "Author",
    anchor: "I don't choose the subject. It chooses me.",
    body: "She writes her first drafts in a trance-like state. She begins every book on January 8th, a ritual she has kept for decades.",
    img: isabelAllende,
  },
  {
    name: "Paul McCartney",
    descriptor: "Songwriter",
    anchor: "Let it be.",
    body: "He received the song through a dream of his late mother. Her words became the anthem.",
    img: paulMcCartney,
  },
  {
    name: "J.K. Rowling",
    descriptor: "Novelist",
    anchor: "Harry just strolled into my head fully formed.",
    body: "The idea arrived on a delayed train to London in 1990. She spent the rest of the journey building the world in her head, unable to write it down.",
    img: jkRowling,
  },
];

const MethodTheState = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
  });



  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint text-center mb-4">
          The state.
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15] mb-5">
          Your best ideas have never come from thinking harder.
        </h2>

        <p className="text-[16px] text-body text-center max-w-[640px] mx-auto leading-[1.75] mb-14">
          They arrived when you stopped. In the shower. On a walk. At 3 AM. Already complete. You know this state exists. You just cannot reach it on demand. Every great mind you admire has described the same thing. The work did not come from effort. It came from access.
        </p>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-5">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 pl-5"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col">
                    <div className="h-[3px] bg-accent" />

                    <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                      <div className="w-full aspect-square overflow-hidden rounded-xl">
                        <img
                          src={card.img}
                          alt={card.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                      <p className="text-[16px] font-medium text-foreground">
                        {card.name}
                      </p>
                      <p className="text-[14px] text-accent font-medium mb-4">
                        {card.descriptor}
                      </p>
                      <p className="font-editorial italic text-[18px] text-foreground leading-snug mb-3">
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

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground transition-opacity hover:bg-surface"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground transition-opacity hover:bg-surface"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodTheState;

