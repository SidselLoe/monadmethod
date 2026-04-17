import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const MeaningCeiling = () => {
  usePageMeta(
    "The Meaning Ceiling — Sidsel Løschenkohl",
    "You hit every target you set. So why does it feel like something is still missing? On the ceiling every founder who is the business eventually finds."
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />

      {/* HERO */}
      <section className="bg-background pt-[160px] pb-[80px] px-8">
        <div className="max-w-[900px] mx-auto">
          <Link
            to="/about"
            className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-mint hover:underline transition-colors"
          >
            ← Back to Blog
          </Link>
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-[72px] font-bold text-foreground leading-[1.15] tracking-[-0.5px]">
            The Meaning Ceiling
          </h1>
          <p className="mt-8 font-editorial italic text-[24px] sm:text-[28px] text-foreground/80 leading-[1.5]">
            You hit every target you set. So why does it feel like something is still missing?
          </p>
          <div className="mt-10 flex items-center gap-4 text-[14px] text-body">
            <span className="font-semibold text-foreground">Sidsel Løschenkohl</span>
            <span className="text-mint">•</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="bg-background px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="border-t-2 border-mint" />
        </div>
      </section>

      {/* BODY */}
      <section className="bg-background pt-[60px] pb-[100px] px-8">
        <article className="max-w-[760px] mx-auto">
          <div className="space-y-7 text-[18px] leading-[1.8] text-body">
            <p>I've had versions of this conversation with founders more times than I can count.</p>

            <p>
              They've done it. They've built the business. The revenue is real. The recognition is real. The thing they set out to prove, they've proved. And somewhere in the middle of it, something quiet is pulling away. Not a breakdown. Not burnout. Not ingratitude. Just a low, persistent sense that the internal experience they were climbing toward never arrived.
            </p>

            <p>
              That's the meaning ceiling. Every founder who is the business finds it. I've found it myself.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            Where it comes from
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Most people build from push.</p>
            <p>
              Push is the drive that gets you moving. It's the force that makes you start the thing, finish the thing, show up for the thing when nothing in the environment is making you. For founders who are the business, push is usually what got them here. A proving instinct. A fear of standing still. A need to outrun something from earlier. An environment they never quite fit into.
            </p>
            <p>
              Push works. Sometimes for years. It produces revenue, results, and the external markers of success. It can carry a company through its first hard seasons and a person through a decade of building.
            </p>
            <p>But push has a ceiling. You always find it.</p>
            <p>
              The ceiling isn't about the size of your business. It isn't about the quality of your offer. It's about the fuel you've been running on. Pain is good ignition. It's a terrible propellant. Once you've escaped the thing you were escaping, the same drive keeps firing into an environment where there's nothing left to escape from.
            </p>
            <p>That's where the wins stop being enough.</p>
          </div>

          {/* PULL QUOTE */}
          <div className="my-16 bg-mint rounded-xl py-[52px] px-8 sm:px-14 text-center">
            <p className="font-editorial italic text-[24px] text-foreground max-w-[640px] mx-auto leading-[1.5]">
              "Pain is good ignition. It's a terrible propellant."
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            What the ceiling actually is
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>The ceiling isn't external. It's structural.</p>
            <p>
              Your capacity has expanded past the goals you set when you were a different version of yourself. The targets still get hit. They just hit a system that's already outgrown them.
            </p>
            <p>
              Most founders respond by doing more of what worked. Bigger goals. Bigger numbers. More output. A new offer, a new hire, a bigger launch. The same drive, harder. The same direction, further.
            </p>
            <p>
              It doesn't move the ceiling. Because the ceiling isn't a goal problem. It's an operating-system problem.
            </p>
            <p>You don't need more. You need something different running underneath the more.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            Why it feels personal
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>
              Most founders I partner with assume something is wrong with them when this shows up. They're ungrateful. They're restless. They're broken for not being satisfied.
            </p>
            <p>None of that is true.</p>
            <p>
              The ceiling is a coherence signal. Your internal system is telling you that the version of success you're currently holding doesn't match what you're ready to build. The longer you ignore it, the louder it gets. Eventually it starts running the room. Decisions get heavier. Rest feels dangerous. The oscillation between all-in and completely checked out gets wider.
            </p>
            <p>That's not a character flaw. That's information.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The shift
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>The shift out of the meaning ceiling isn't a mindset change. It's an identity change.</p>
            <p>
              It's the shift from push to pull. From building from pain to building from purpose. From a drive that was never fully yours to a direction that is.
            </p>
            <p>
              Pull isn't passive. It isn't easier. It doesn't mean working less, caring less, or achieving less. It means the fuel is different. You get up early for different reasons. You stay late for different reasons. You make cleaner decisions because they're not being filtered through something you're still trying to prove.
            </p>
            <p>
              When the shift happens, the business often grows. But that's a byproduct. The bigger thing is that you stop leading from pressure and start leading from direction.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The part no one talks about
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>
              Most founders who hit the ceiling can't name their actual purpose yet. They feel it. The sense that there's more, that what they're building could mean more. But they can't articulate it. The interference is too loud.
            </p>
            <p>Purpose isn't a prerequisite for the work. It's usually an output of it.</p>
            <p>
              You don't need to know what you're building toward. You need to clear what's been running you long enough for the real signal to become audible. When it does, you don't discover it. You recognize it. It was always there. The work surfaces what the drive was drowning out.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            A note from my own story
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>
              I found the ceiling in a way that was hard to miss. In 2023, my body stopped. A health collapse forced a full stop on everything I'd been running. The revenue, the pace, the identity I'd been performing. All of it came down at once.
            </p>
            <p>
              What came back online afterward was quieter. Less interested in proving. More interested in what was actually true.
            </p>
            <p>
              Truthfully, I didn't need bigger targets. I needed a different internal operating system.
            </p>
            <p>
              That's the work I do now, and it's the work Monad Studios exists for. Not because it's a theory. Because I had to rebuild from the ground up, first principles, and what I built is what I now bring to the founders I partner with.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            If you recognize yourself
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>
              If you're reading this, you probably recognize some of it. The wins that stopped being enough. The quiet question underneath the results. The sense that the drive that built everything is starting to cost you something. The oscillation. The restlessness. The feeling that something is clearly off, even when the numbers say otherwise.
            </p>
            <p>
              That's the ceiling. It's not a problem to fix. It's a threshold. And what's on the other side isn't bigger. It's truer.
            </p>
            <p>
              The work from here isn't to climb harder inside the old container. It's to name what's been running you, clear the interference, and build from something more coherent underneath.
            </p>
            <p>
              You're not behind. You're at the point the drive was always going to take you to. The next move is a different one.
            </p>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.2]">
            Recognize the ceiling?
          </h2>
          <p className="mt-5 text-[16px] text-body leading-[1.75]">
            If this read like a description of where you are, book a call. No pitch. Just a conversation about what's underneath the results and whether the work is right for you.
          </p>
          <a
            href="https://calendly.com/sidselloschenkohl/monad-discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeaningCeiling;
