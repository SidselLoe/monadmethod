import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const PushVsPull = () => {
  usePageMeta(
    "Push vs. Pull: Why Your Drive Is the Problem — Sidsel Løschenkohl",
    "The same force that built everything is the force that's now in the way. On push, pull, and the identity shift founders eventually have to make."
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
            Push vs. Pull: Why Your Drive Is the Problem
          </h1>
          <p className="mt-8 font-editorial italic text-[24px] sm:text-[28px] text-foreground/80 leading-[1.5]">
            The same force that built everything is the force that's now in the way.
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
            <p>Most founders I partner with don't realize they're still pushing until they try to stop.</p>
            <p>
              They can feel something's off. The pace, the pressure, the low-level dread that shows up on Sunday nights and quietly follows them into Monday. But when I ask what's actually running things underneath, the answer is almost always some version of the same instinct.
            </p>
            <p>They're pushing.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            What push is
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Push is the drive that built you. For most founders, it's what got you here.</p>
            <p>
              Push is building from pain. Running away from something. Proving yourself to someone who stopped watching a long time ago. Filling a gap you can't name. Surviving an environment you never quite fit into.
            </p>
            <p>
              Push works. Sometimes for years. It produces revenue, recognition, and the external markers of success. It's what gets a company through its first hard seasons and a person through a decade of building.
            </p>
            <p>
              But push has a shelf life. And when it runs out, you don't always notice. You just keep firing it. Harder, longer, with more output. The system starts breaking underneath you. Relationships need constant repair. Rest starts to feel dangerous. Decisions get heavier. You start oscillating between being all-in and being completely checked out, and the swing gets wider.
            </p>
            <p>That's what push looks like when it stops working.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            What pull is
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Pull runs on different fuel.</p>
            <p>
              Pull is building toward something that calls you. Work that feels like expression, not output. It gets you up early and keeps you going late, but it doesn't feel hard in the same way. It feels like what you're made for.
            </p>
            <p>
              Pull isn't easier. Honestly, in the beginning it often feels harder, because you're unlearning the nervous system pattern that made push feel like the only real option. But the work coming out of pull is different. Cleaner. Less distorted. More yours.
            </p>
          </div>

          {/* PULL QUOTE */}
          <div className="my-16 bg-mint rounded-xl py-[52px] px-8 sm:px-14 text-center">
            <p className="font-editorial italic text-[24px] text-foreground max-w-[640px] mx-auto leading-[1.5]">
              "The drive that got you here can't take you where you're going."
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The paradox
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Here's the part most founders don't want to hear.</p>
            <p>The drive that got you here can't take you where you're going.</p>
            <p>
              The next level doesn't run on the same fuel as the first one. The first one required you to prove you could build it. The next one requires you to sustain it, deepen it, and keep becoming the person it needs you to be. That doesn't happen through more effort. It happens through a different relationship with effort altogether.
            </p>
            <p>
              Push is good ignition. It's a terrible propellant. Once you've outrun the thing you were outrunning, the same drive keeps firing into an environment where there's nothing left to escape from. And it costs you.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            What pull isn't
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>This is where most high-achievers get stuck.</p>
            <p>They hear "pull" and translate it as passive. Lazy. Soft. Giving up. Waiting around.</p>
            <p>It's none of that.</p>
            <p>
              Pull is a different kind of power. The power of alignment, timing, and resonance. It's not about working less. It's about working from a different place inside you. You're still making things. You're still showing up early. You're still shipping. You're just not doing it to prove you deserve to be here.
            </p>
            <p>That's a very different thing.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The fear underneath
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p className="font-editorial italic text-foreground">
              If I stop pushing, will anything actually happen?
            </p>
            <p>
              Almost every founder I work with asks some version of this, whether out loud or not. It's the honest fear underneath the question of how to stop running on fumes.
            </p>
            <p>
              The answer is yes. But different things. Things you couldn't have forced into existence. Opportunities that needed spaciousness to land. Decisions that needed more than pressure behind them to be right. Relationships that needed your presence, not your performance.
            </p>
            <p>
              Push is good at producing certain kinds of results. Pull is good at producing the rest of your life.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            From push to pull
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>The shift from push to pull isn't a mindset change. It's an identity change.</p>
            <p>
              It's the move from making things happen to letting things happen through you. From effort as proof of worthiness to ease as evidence of alignment. From building from pain to building from purpose.
            </p>
            <p>
              Most founders can't make this shift through willpower, because willpower is push. You don't push your way into pull. You clear what's running you, name the pattern, and stop feeding it. The operating system updates, and from that updated place, different things start to move.
            </p>
            <p>The business doesn't slow down. It sharpens.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            A note from my own story
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>I spent years not knowing there was another way.</p>
            <p>
              I was operating almost entirely from push. Forcing outcomes. Controlling variables. Treating rest like it was something I had to earn. It worked, in the way push works. Until it didn't.
            </p>
            <p>
              In 2023, my body shut the operation down. A health collapse took every external piece of proof I'd been using to justify the pace I was running at, and it took them all at once. What came back online afterward wasn't push. It wasn't pull yet either. It was quiet.
            </p>
            <p>
              The pull came in gradually, as I rebuilt. Not by willing it into existence. By clearing what had been drowning it out.
            </p>
            <p>
              That's the work I do now. Not because it's a theory. Because I had to live it first.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            Where this leaves you
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>If you're reading this and recognizing yourself, you already know.</p>
            <p>
              The drive that built everything is still running. But it's starting to cost more than it produces. You can feel the pattern even if you can't name it yet. The constant output. The inability to switch off. The way you become someone else when you're not producing.
            </p>
            <p>
              The move from here isn't to push harder. It's to stop feeding the push long enough for pull to become audible.
            </p>
            <p>
              Pull was always there. You just couldn't hear it over the noise of what was running you.
            </p>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.2]">
            Ready to stop feeding the push?
          </h2>
          <p className="mt-5 text-[16px] text-body leading-[1.75]">
            If this read like a description of where you are, book a call. No pitch. Just a conversation about what's underneath the drive and whether the work is right for you.
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

export default PushVsPull;
