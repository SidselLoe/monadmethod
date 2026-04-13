import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import brandonCover from "@/assets/brandon-cover.jpg";
import jessicaCover from "@/assets/jessica-cover.jpg";
import backstoryPhoto from "@/assets/backstory-sidsel.jpg";

const socialProofQuotes = [
  { quote: "Once you see it, you can't unsee it.", name: "Alexandra", role: "Founder & Creative Director, Of The Islands", avatar: "" },
  { quote: "It's not about the actions we're taking, but where the action's coming from.", name: "Brandon", role: "Business Owner, Healing with Brandon", avatar: brandonCover },
  { quote: "She doesn't coddle, but she's uniquely supportive in helping you carve an authentic path that actually fits you.", name: "Jessica", role: "Founder and CEO, Wildflower Women", avatar: jessicaCover },
];

const values = [
  { title: "Alignment over everything", description: "I do not optimize for short-term gains at the expense of long-term integrity." },
  { title: "Clarity is power", description: "Clear vision, clear systems, and clear communication change what becomes possible." },
  { title: "Sovereign leadership", description: "You are not here to follow someone else's blueprint. You are here to trust yourself, think clearly, and lead from your own signal." },
  { title: "Structure as liberation", description: "Freedom comes from the right systems, frameworks, and simplicity. Structure should create spaciousness, not constraint." },
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
      <section className="bg-background py-28 sm:py-36 md:py-44 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[60px] font-bold text-foreground leading-[1.1] tracking-[-0.3px]">
            Awakening people to their authentic power and purpose
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground font-normal max-w-[640px] mx-auto leading-[1.6]">
            I exist to help ambitious founders stop building from push and start building from pull.
          </p>
        </div>
      </section>

      {/* 2. QUOTES (stacked rows with dividers) */}
      <section className="bg-background px-6">
        <div className="max-w-[1200px] mx-auto">
          {socialProofQuotes.map((item, index) => (
            <div key={item.name}>
              <div className="border-t-2 border-mint" />
              <div className="flex flex-col md:flex-row md:items-center py-12 md:py-16 gap-6 md:gap-16">
                <p className="font-editorial italic font-bold text-[28px] text-foreground leading-[1.4] md:w-1/2">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 md:w-1/2">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-lg">{item.name[0]}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-[16px] font-semibold text-foreground">{item.name}</p>
                    <p className="text-[14px] font-normal text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
              {index === socialProofQuotes.length - 1 && (
                <div className="border-t-2 border-mint" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. MISSION */}
      <section className="bg-background py-20 sm:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#1a1a1a] leading-[1.2] text-center">
            My mission: Help founders and creators return to the clearest expression of who they are.
          </h2>
          <p className="mt-6 text-[18px] font-normal text-[#444] leading-[1.7] max-w-[700px] mx-auto text-center">
            I work with ambitious people whose business, brand, or body of work is deeply tied to who they are. They have built something real. But what got them here is no longer what will get them there.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[50px] items-start">
            <div>
              <img
                src="https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%202.jpg"
                alt="Sidsel Løschenkohl"
                className="w-full rounded-lg object-cover"
              />
              <p className="mt-3 text-[14px] font-medium text-[#1a1a1a]">
                Sidsel Løschenkohl / Founder & Creator
              </p>
            </div>
            <div>
              <div className="space-y-5 text-[16px] leading-[1.75] text-[#444]">
                <p>For many, the drive that built the business is the same drive that is now creating friction. They are operating from push. From pressure, perfectionism, proving, survival, or a pattern they have outgrown.</p>
                <p>My work is about shifting that.</p>
                <p>Because building from push has a ceiling. Building from pull changes everything.</p>
                <p>This work starts internally. Through activations, inquiry, and deep recalibration, we clear the interference that keeps the old identity in place. As that changes, clarity increases. Purpose becomes easier to see. Aligned action becomes more natural. The way you build begins to change because the person building it has changed.</p>
                <p>I work at the intersection of spiritual alignment, strategic clarity, and operational intelligence.</p>
                <p>For the right person, this is not about being given a formula. It is about becoming more coherent, more self-trusting, and more fully expressed in what you create.</p>
              </div>
              <div className="mt-8">
                <Link
                  to="/apply"
                  className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUES */}
      <section className="bg-secondary py-20 sm:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] text-center mb-14">
            My values.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-[30px]">
                <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3">{value.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[#444]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BACKSTORY */}
      <section className="bg-background py-20 sm:py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
                The backstory.
              </h2>
              <div className="mt-7 space-y-5 text-base sm:text-lg text-foreground leading-[1.6]">
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
                className="w-full rounded-lg object-cover object-top"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPEAKING & FACILITATION */}
      <section className="bg-background py-20 sm:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-muted-foreground">
              Speaking & Facilitation
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15]">
              I speak on alignment, energy, and the future of leadership.
            </h2>
            <p className="mt-5 text-[17px] font-normal leading-[1.7] text-[#444] max-w-[680px] mx-auto">
              Inviting founders, creators, and communities to reconnect with intuition, truth, and embodied intelligence in an increasingly disembodied world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
            <div>
              <img
                src="https://hciqvcspehfitlgclhud.supabase.co/storage/v1/object/public/sidsel/Headshot%202.jpg"
                alt="Sidsel speaking"
                className="w-full rounded-[10px] object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="text-[28px] font-bold text-foreground">
                Living from the Heart in the Age of AI
              </h3>
              <div className="mt-5 space-y-5 text-[16px] leading-[1.75] text-[#444]">
                <p>
                  My talks sit at the intersection of identity, spirituality, and strategy. I explore embodied intelligence, the patterns that shape how people lead, and why AI amplifies the signal you bring. The clearer and more coherent the human behind the tool, the more powerful the result.
                </p>
                <p>
                  In Living from the Heart in the Age of AI, I explore what becomes possible when technology meets presence. What does it look like to lead with both precision and intuition? And why is the most overlooked variable in any AI strategy the person behind it?
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.15] mb-14">
            Topics I speak on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
                className="bg-white/95 border border-mint/40 rounded-xl p-8"
              >
                <span className="text-[13px] font-bold tracking-[0.12em] uppercase text-muted-foreground">
                  {topic.title}
                </span>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#444]">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-secondary rounded-xl py-[52px] px-8 sm:px-14 text-center">
            <p className="text-[22px] font-semibold text-foreground max-w-[720px] mx-auto leading-[1.5]">
              "Founders are some of the most spiritual people alive. To build something from nothing — to embody spirit in structure — is a sacred act."
            </p>
            <span className="block mt-4 text-[14px] font-normal text-muted-foreground">
              Sidsel Løschenkohl
            </span>
          </div>

          <div className="mt-10 text-center">
            <p className="text-[17px] text-[#444] mb-5">
              Interested in having me speak at your event or conference?
            </p>
            <Link
              to="/apply"
              className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* 7. THE BOOK */}
      <section className="py-20 sm:py-28 px-6" style={{ background: '#faf9f7' }}>
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div
            className="flex-shrink-0 w-[160px] md:w-[200px] rounded-md flex flex-col items-center justify-center text-center px-5 py-10"
            style={{
              aspectRatio: '2/3',
              background: '#1a1a1a',
              boxShadow: '8px 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <span className="text-mint text-2xl">⊙</span>
            <span className="mt-3 text-[17px] font-extrabold text-white leading-tight">
              The Power of Unwavering Belief
            </span>
            <span className="mt-2 text-[11px] font-normal text-mint">
              Sidsel Løschenkohl
            </span>
          </div>

          <div className="text-center md:text-left">
            <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-muted-foreground">
              The Book
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[32px] font-bold text-foreground leading-[1.2]">
              The Power of Unwavering Belief
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-[#444]">
              The deeper layer underneath everything I do. A book about what happens when you stop seeking and start being. Written from lived experience, not theory.
            </p>
            <a
              href="https://thepowerofunwaveringbelief.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-[#3f8d8d] hover:text-[#3f8d8d]/80 transition-colors"
            >
              Read more →
            </a>
          </div>
        </div>
      </section>

      {/* 8. REFLECTIONS */}
      <section className="bg-secondary py-20 sm:py-28 px-6">
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

      {/* 9. CTA */}
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
