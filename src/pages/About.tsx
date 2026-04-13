import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const socialProofQuotes = [
  { quote: "Once you see it, you can't unsee it.", name: "Alexandra" },
  { quote: "It's not about the actions we're taking, but where the action's coming from.", name: "Brandon" },
  { quote: "She doesn't coddle, but she's uniquely supportive in helping you carve an authentic path that actually fits you.", name: "Jessica" },
];

const beliefs = [
  {
    title: "You are the upgrade.",
    body: "Not the business. Not the systems. Not a better strategy. The lever is always you. When the internal operating system shifts, everything built on top of it shifts. Not as metaphor. As what actually happens.",
  },
  {
    title: "Building a business is a spiritual act.",
    body: "You are creating something that did not exist before you. Most people build from push — from pain, from proof, from survival. Very few build from pull. The shift between them is the most valuable thing I help founders make.",
  },
  {
    title: "You are not your business.",
    body: "You are the creator of it. The fusing of those two things is the source of most of the pain and limitation founders experience at the stage they come to me. Untangling that is part of the work.",
  },
  {
    title: "No one is coming to save you.",
    body: "And that is the most liberating thing there is.",
  },
];

const blogPosts = [
  {
    title: "The meaning ceiling",
    excerpt: "You hit every target you set. So why does it feel like something is still missing?",
  },
  {
    title: "Push vs. pull: why your drive is the problem",
    excerpt: "The same force that built everything is the force that is now in the way.",
  },
  {
    title: "What I mean when I say internal operating system",
    excerpt: "It is not strategy. It is not mindset. It is the layer underneath both.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />

      {/* 1. HERO */}
      <section className="bg-background py-20 sm:py-28 md:py-36 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-xs sm:text-sm font-normal uppercase tracking-[2px] text-muted-foreground">
              For founders who are the business
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-[64px] font-extrabold text-foreground leading-[1.1] tracking-[-0.3px]">
              You are the upgrade.
            </h1>
            <p className="mt-5 text-lg text-foreground leading-[1.6] max-w-[540px]">
              I work with founders who are the business and ready to stop letting their internal patterns limit what's possible.
            </p>
            <p className="mt-4 text-sm font-normal uppercase tracking-[1.5px] text-muted-foreground">
              Sidsel Løschenkohl · Creator of the Monad Method™ · London
            </p>
            <Link
              to="/apply"
              className="inline-flex mt-7 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded-full hover:bg-accent/90 transition-colors"
            >
              Book a Call
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] aspect-[3/4] rounded-xl bg-mint overflow-hidden flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Photo placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF STRIP */}
      <section className="bg-mint py-12 sm:py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
          {socialProofQuotes.map((item) => (
            <div key={item.name}>
              <p className="text-base italic text-foreground leading-[1.6]">
                "{item.quote}"
              </p>
              <span className="block mt-2 text-xs font-normal text-foreground">
                — {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MY STORY */}
      <section className="bg-background py-20 sm:py-28 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Why I built this.
          </h2>
          <div className="mt-7 space-y-5 text-base sm:text-lg text-foreground leading-[1.6]">
            <p>
              In 2023, my health collapsed. Not slowly. Quickly, and completely.
            </p>
            <p>
              After years of building at full intensity — always at full speed, always the next thing — my body enforced the stop I was not willing to choose myself. What followed was not a reset. It was a rebuild. From the ground up. Identity, operating system, purpose, everything.
            </p>
            <p>
              I had been building from push. Most high performers are, without fully knowing it. The same drive that produces results is the drive that eventually dismantles you. Push has a ceiling. You always find it. The moment when success arrives and fulfilment does not.
            </p>
            <p>
              In the space of that stop, I found what I had been running past. The energy activations. The self-inquiry. The honest reckoning with what I was actually building and why, and who I was outside of it.
            </p>
            <p>
              I used these tools on myself, thoroughly and for a long time, before I ever brought them to a client. By the time I formalised the Monad Method, it had already been tested on one very difficult subject. What I now offer is not a framework I studied. It is a methodology I lived.
            </p>
          </div>
        </div>
      </section>

      {/* 4. BELIEFS */}
      <section className="bg-mint-light py-20 sm:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            What I stand for.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="bg-background border-l-4 border-mint-border rounded-lg p-7 sm:p-8"
              >
                <h3 className="text-xl font-bold text-foreground">{belief.title}</h3>
                <p className="mt-3 text-base text-foreground leading-[1.6]">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BACKSTORY */}
      <section className="bg-background py-20 sm:py-28 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            The backstory.
          </h2>
          <div className="mt-7 space-y-5 text-base sm:text-lg text-foreground leading-[1.6]">
            <p>
              I am Danish. I grew up between cultures. I spent years building in fast-moving, high-stakes environments — Web3, crypto, advising — that reward being all-in and punish stepping back. I know what it costs. I also know what it costs not to stop.
            </p>
            <p>
              I live in London. The move from building to prove something, to building from genuine purpose — I have made that shift myself. That is why I know what it actually takes. Not as a concept. As a lived experience, with all the cost and clarity that entails.
            </p>
          </div>
        </div>
      </section>

      {/* 6. REFLECTIONS */}
      <section className="bg-mint-light py-20 sm:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
            Reflections
          </h2>
          <p className="mt-3 text-base text-foreground leading-[1.6] max-w-[640px]">
            Writing on founders, identity, state, and what it actually takes to build from alignment.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-background rounded-lg overflow-hidden border border-border">
                <div className="aspect-[16/10] bg-mint flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{post.title}</h3>
                  <p className="mt-2 text-sm text-foreground leading-[1.5] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/reflections"
                    className="inline-block mt-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/reflections"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all reflections →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-background py-20 sm:py-28 px-6">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.15]">
            Ready to talk?
          </h2>
          <p className="mt-5 text-base text-foreground leading-[1.6]">
            If something here spoke to you, book a call. No pitch. Just a conversation about where you are and whether the work is right for you.
          </p>
          <Link
            to="/apply"
            className="inline-flex mt-8 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
