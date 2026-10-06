import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import brandonCover from "@/assets/testimonials/brandon-hadwin-founder-healingwithbrandon.png";
import jessicaCover from "@/assets/testimonials/jessica-rainey-founder-wildflower-woman.png";
import backstoryPhoto from "@/assets/backstory-sidsel.jpg";
import LineageSection from "@/components/sections/about/LineageSection";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import speakerPhoto from "@/assets/sidsel-loschenkohl-living-from-the-heart-speaker.png";
import bookCover from "@/assets/the-power-of-unwavering-belief-book-cover-sidsel-loschenkohl.png";
import alexandraCover from "@/assets/testimonials/alexandra-feldman-founder-of-the-islands.png";
import MonadMark from "@/components/MonadMark";
import { Button } from "@/components/ui/button";

const socialProofQuotes = [
  { quote: "Once you see it, you can't unsee it.", name: "Alexandra", role: "Founder & Creative Director, Of The Islands", avatar: alexandraCover },
  { quote: "It's not about the actions we're taking, but where the action's coming from.", name: "Brandon", role: "Business Owner, Healing with Brandon", avatar: brandonCover },
  { quote: "She doesn't coddle, but she's uniquely supportive in helping you carve an authentic path that actually fits you.", name: "Jessica", role: "Founder and CEO, Wildflower Women", avatar: jessicaCover },
];

const values = [
  { title: "Alignment over everything", description: "I do not optimize for short-term gains at the expense of long-term integrity." },
  { title: "Clarity is power", description: "Clear vision, clear systems, and clear communication change what becomes possible." },
  { title: "Sovereign leadership", description: "You are not here to follow someone else's blueprint. You are here to trust yourself, think clearly, and lead from your own signal." },
  { title: "Structure as liberation", description: "Freedom comes from the right systems, frameworks, and simplicity. Structure should create spaciousness, not constraint." },
];


const About = () => {
  usePageMeta(
    "About Sidsel Løschenkohl — The Monad Method",
    "Sidsel Løschenkohl is a strategic partner to founders. Learn about the lineage, backstory, and philosophy behind The Monad Method.",
    { canonical: "https://www.monadmethod.com/about", ogType: "website" }
  );
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />

      {/* Hero */}
      <section className="bg-background py-16 md:py-24 px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          <div>
            <p className="text-[13px] uppercase font-semibold text-foreground mb-5">ABOUT</p>
            <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
              <span className="font-extrabold">Everything I teach,</span>{" "}<span className="font-normal">I lived first.</span>
            </h1>
            <p className="mt-7 text-[20px] text-body font-normal leading-[1.7]">
              I help people stop building from push and start building from pull.
            </p>
            <Button asChild className="mt-8 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 h-auto rounded-full hover:bg-accent/90">
              <Link to="/apply">APPLY NOW</Link>
            </Button>
          </div>
          <img src="https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%202.jpg" alt="Sidsel Løschenkohl" className="w-full aspect-[4/5] rounded-2xl object-cover object-top" />
        </div>
      </section>

      {/* 5. BACKSTORY */}
      <section className="bg-surface py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[50px] items-start">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
                <span className="font-extrabold">The back</span> story.
              </h2>
              <div className="mt-7 space-y-5 text-[18px] text-body leading-[1.7]">
                <p>
                  This work came out of a period that broke my life open.
                </p>
                <p>
                  I had been building the way many high performers do. Full intensity. Always onto the next thing. Always on. I was producing, performing, and succeeding by every external measure, while becoming increasingly disconnected from myself.
                </p>
                <p>
                  Then a serious head injury, a broken eye, and retinal detachment forced the stop I was not willing to choose. What followed was not a pause. It was a collapse. Physical, emotional, and existential. The life I had built was deeply out of alignment, and the injury forced me to see how far I had drifted from my authentic self.
                </p>
                <p>
                  What came after was not abstract growth. It was a rebuilding. When everything was stripped away, I was left with the question most driven people avoid: who am I? That question became the beginning of my life's work.
                </p>
                <p>
                  That experience changed how I work, what I value, and what I am willing to build. Everything I offer now is rooted in what I have lived first.
                </p>
              </div>
            </div>
            <div className="md:mt-[calc(48px*1.15+28px)]">
              <img
                src={backstoryPhoto}
                alt="Sidsel Løschenkohl"
                className="w-full aspect-[4/5] rounded-2xl object-cover object-top"
                
              />
            </div>
          </div>

          {/* Quote strip — Component E */}
          <div className="mt-14 bg-mint-light rounded-2xl py-[52px] px-8 sm:px-14 text-center">
            <p className="font-normal text-[24px] md:text-[32px] text-foreground max-w-[900px] mx-auto leading-[1.55]">
              "Building a business is a spiritual act. It asks you to become the person who can hold what you are here to create."
            </p>
            <span className="block mt-5 text-[14px] font-normal text-foreground/70">
              Sidsel Løschenkohl
            </span>
          </div>
        </div>
      </section>

      {/* What I do now */}
      <section className="bg-surface py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em] text-center">
            <span className="font-extrabold">My mission:</span>{" "}<span className="font-normal">help people return to the clearest expression of who they are.</span>
          </h2>
          <div className="mt-10 space-y-6 text-[18px] leading-[1.7] font-normal text-body max-w-[640px] mx-auto text-center">
            <p>I work with people whose business, brand or body of work is tied to who they are. They have built something real. The drive that built it is now creating friction.</p>
            <p>The work starts inside. Activations, inquiry and deep recalibration clear what keeps the old identity in place. As that changes, clarity rises, purpose gets easier to see, and the way you build changes, because the person building it has changed.</p>
            <p>I work at the intersection of spiritual alignment, strategic clarity and operational intelligence.</p>
          </div>
        </div>
      </section>

      {/* In their words */}
      <section className="bg-background py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em] text-center mb-12">
            <span className="font-extrabold">In their</span>{" "}<span className="font-normal">words.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {socialProofQuotes.map((item) => (
              <div key={item.name} className="bg-card border border-border rounded-2xl p-7 flex flex-col">
                <p className="text-[18px] text-foreground font-normal leading-[1.7] flex-1">"{item.quote}"</p>
                <div className="flex items-start gap-3 mt-8">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                  <div>
                    <p className="text-[16px] font-extrabold text-foreground">{item.name}</p>
                    <p className="text-[14px] text-body leading-[1.7]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LineageSection />

      {/* 4. VALUES */}
      <section className="bg-background py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em] text-center mb-14">
            <span className="font-extrabold">My</span> values.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-[20px] font-extrabold text-foreground mb-3">{value.title}</h3>
                <p className="text-[18px] leading-[1.7] text-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPEAKING & FACILITATION */}
      <section className="bg-surface py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-foreground">
              Speaking & Facilitation
            </span>
            <h2 className="mt-4 text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
              <span className="font-extrabold">I speak on alignment,</span> energy, and the future of leadership.
            </h2>
            <p className="mt-5 text-[18px] leading-[1.7] text-body max-w-[700px] mx-auto">
              Inviting founders, creators, and communities to reconnect with intuition, truth, and embodied intelligence in an increasingly disembodied world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[50px] items-start mb-20">
            <div>
              <img
                src={speakerPhoto}
                alt="Sidsel Løschenkohl speaking on living from the heart in the age of AI"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="text-[28px] font-extrabold text-foreground leading-[1.3]">
                Living from the Heart in the Age of AI
              </h3>
              <div className="mt-5 space-y-5 text-[18px] leading-[1.7] text-body">
                <p>
                  My talks sit at the intersection of identity, spirituality, and strategy. I explore embodied intelligence, the patterns that shape how people lead, and why AI amplifies the signal you bring. The clearer and more coherent the human behind the tool, the more powerful the result.
                </p>
                <p>
                  In Living from the Heart in the Age of AI, I explore what becomes possible when technology meets presence. What does it look like to lead with both precision and intuition? And why is the most overlooked variable in any AI strategy the person behind it?
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em] mb-14">
            <span className="font-extrabold">Topics I</span> speak on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "THE INTERNAL OPERATING SYSTEM",
                body: "Why people who are doing everything right still hit ceilings. The layer beneath strategy that determines what you can actually hold.",
              },
              {
                title: "STATE ENGINEERING",
                body: "Why your state is not separate from your strategy. Energy, coherence, and how your internal state shapes everything you build.",
              },
              {
                title: "PUSH VS. PULL: THE IDENTITY SHIFT",
                body: "Why so many people build from pressure, proof, or survival, and what it takes to shift into a more purposeful way of creating.",
              },
              {
                title: "AI, SIGNAL, AND THE HUMAN EDGE",
                body: "AI does not create signal. It amplifies it. Why authentic human intelligence is becoming the real competitive advantage.",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-foreground">
                  {topic.title}
                </span>
                <p className="mt-3 text-[18px] leading-[1.7] text-body">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-mint-light rounded-2xl px-10 py-6 sm:px-12 sm:py-8 flex flex-col md:flex-row items-center gap-8">
            <MonadMark />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Interested in having me speak at your event or conference?
              </h3>
              <p className="mt-3 text-[16px] text-foreground leading-[1.75]">
                I speak at conferences, retreats, and private events on alignment, identity, and the future of leadership.
              </p>
            </div>
            <Button asChild className="flex-shrink-0 inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
            >
              <a href="mailto:sidsel@loschenkohl.com">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. THE BOOK */}
      <section className="bg-background py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <img
            src={bookCover}
            alt="The Power of Unwavering Belief — Book by Sidsel Løschenkohl"
            className="flex-shrink-0 w-[160px] md:w-[200px] rounded-2xl"
          />

          <div className="text-center md:text-left">
            <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-foreground">
              The Book
            </span>
            <h2 className="mt-3 text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
              <span className="font-extrabold">The Power</span> of Unwavering Belief
            </h2>
            <p className="mt-4 text-[18px] leading-[1.7] text-body">
              A book about how reality changes when belief stops being abstract and becomes lived. On identity, inner state, and the unseen laws behind what we create.
            </p>
            <a
              href="https://thepowerofunwaveringbelief.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-[14px] font-medium text-foreground hover:underline transition-colors"
            >
              Explore the Book →
            </a>
          </div>
        </div>
      </section>

      {/* 8. BLOG */}
      <section className="bg-surface py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
            <span className="font-extrabold">Blog</span>
          </h2>
          <p className="mt-3 text-[18px] text-body leading-[1.7] max-w-[700px]">
            Writing on identity, state, and building from alignment.
          </p>
          <Carousel
            opts={{ align: "start", loop: false }}
            className="mt-12"
          >
            <CarouselContent className="-ml-6">
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.href}
                  className="pl-6 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex items-center justify-between">
              <Link
                to="/blog"
                className="text-[14px] font-medium text-foreground hover:underline transition-colors"
              >
                View all blog posts →
              </Link>
              <div className="flex items-center gap-3">
                <CarouselPrevious className="static translate-y-0 h-11 w-11 border-mint text-foreground hover:bg-mint hover:text-foreground" />
                <CarouselNext className="static translate-y-0 h-11 w-11 border-mint text-foreground hover:bg-mint hover:text-foreground" />
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-background py-16 md:py-[100px] px-4 sm:px-8">
        <div className="max-w-[500px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[48px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
            <span className="font-extrabold">Ready to</span>{" "}<span className="font-normal">start?</span>
          </h2>
          <p className="mt-5 text-[18px] text-body leading-[1.7]">
            Every engagement starts with a short application and a call.
          </p>
          <Button asChild className="inline-flex mt-8 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            <Link to="/apply">APPLY NOW</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
