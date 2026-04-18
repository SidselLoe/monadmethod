import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";

const InternalOperatingSystem = () => {
  usePageMeta(
    "What I Mean When I Say Internal Operating System — Sidsel Løschenkohl",
    "It's not strategy. It's not mindset. It's the layer underneath both — the code your nervous system is running."
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
            What I Mean When I Say Internal Operating System
          </h1>
          <p className="mt-8 font-editorial italic text-[24px] sm:text-[28px] text-foreground/80 leading-[1.5]">
            It's not strategy. It's not mindset. It's the layer underneath both.
          </p>
          <div className="mt-10 flex items-center gap-4 text-[14px] text-body">
            <span className="font-semibold text-foreground">Sidsel Løschenkohl</span>
            <span className="text-mint">•</span>
            <span>6 min read</span>
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
            <p>When founders come to me, they usually arrive with one of two assumptions about what's in the way.</p>
            <p>
              The first is strategic. The offer isn't right. The team isn't right. The positioning, the pricing, the market. Fix the plan, and the business will move.
            </p>
            <p>
              The second is mental. They've read the books. They've done the mindset work. They've identified the limiting beliefs. They've rewritten the affirmations. And still, something isn't moving.
            </p>
            <p>Both are real work. Neither is the deepest layer.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The layer underneath
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>
              There's a layer underneath strategy and mindset. It's the one that decides what you can actually do, regardless of what you know or what you plan.
            </p>
            <p>That's what I mean when I say internal operating system.</p>
            <p>
              Your internal operating system is the code your nervous system is running. It's not what you think. It's what your body believes is safe. It's the set of automatic responses that fire before conscious thought, shaping every decision, relationship, and boundary from underneath.
            </p>
            <p>
              Strategy is the surface. Mindset is the middle. The operating system is the deep layer. Most work happens at the first two. Real change happens at the third.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            Why mindset work alone doesn't do it
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>You can have clean strategy and still self-sabotage.</p>
            <p>You can have positive mindset and still feel stuck.</p>
            <p>Because if the operating system underneath is running:</p>
            <div className="font-editorial italic text-[20px] text-foreground/80 space-y-2 pl-6 border-l-2 border-mint">
              <p>I'm only valuable when I'm producing.</p>
              <p>Rest is dangerous.</p>
              <p>If I delegate this, it won't get done right.</p>
              <p>Money is something I have to chase.</p>
              <p>If I'm seen clearly, I'll be hurt.</p>
            </div>
            <p>
              No amount of strategic clarity or affirmation rewriting will override those. The system underneath wins. Every time.
            </p>
          </div>

          {/* PULL QUOTE */}
          <div className="my-16 bg-mint rounded-xl py-[52px] px-8 sm:px-14 text-center">
            <p className="font-editorial italic text-[24px] text-foreground max-w-[640px] mx-auto leading-[1.5]">
              "The system underneath wins. Every time."
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            What the operating system actually is
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Your operating system is:</p>
            <p>
              How your body processes safety. What you believe, at a pre-conscious level, you're allowed to want. The automatic patterns that run before you've had time to think. The stories your nervous system holds about worthiness, rest, money, visibility, love, and responsibility.
            </p>
            <p>It's somatic, not just psychological. It lives in your body, not just your head.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            Why it matters
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Your operating system quietly decides:</p>
            <p>
              What opportunities you can receive. What relationships feel safe to be in. How much success you can hold without starting to sabotage it. Whether rest feels possible or threatening. How much of yourself you can show and still feel okay.
            </p>
            <p>
              Most founders have spent years trying to push past these limits through willpower and strategy. That's why the results never hold. You can override an operating system for a while. You can't override it forever. Eventually the system underneath pulls you back to what it thinks is safe.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The difference, in one example
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>Here's what the distinction actually looks like.</p>
            <p>
              <span className="font-semibold text-foreground">Mindset work:</span>{" "}
              <span className="font-editorial italic">I deserve to rest. I'm allowed to take time off.</span>
            </p>
            <p>
              <span className="font-semibold text-foreground">Operating system work:</span>{" "}
              <span className="font-editorial italic">Does my body feel safe when I stop producing? What happens physically in me when nothing's getting done?</span>
            </p>
            <p>
              One is cognitive. The other is embodied. One is a belief you're trying to install. The other is the system that decides whether that belief can hold.
            </p>
            <p>
              You can think your way into a new belief. You can't think your way into a new nervous system response. That work happens lower.
            </p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            What operating system work actually looks like
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>It's not a five-step framework. It's not a cognitive reframe.</p>
            <p>
              It's updating what your body experiences as safe. It's noticing the patterns that run before conscious thought and naming them. It's practicing a different internal state and letting the nervous system learn that it's not dangerous. It's recalibrating the defaults underneath the defaults.
            </p>
            <p>In practical terms, it's the difference between:</p>
            <p>Knowing your boundaries, and being able to hold them under pressure.</p>
            <p>Wanting to delegate, and actually being able to let go.</p>
            <p>Saying you want to be seen, and being able to stand still when the attention arrives.</p>
            <p>The knowing is mindset. The doing is operating system.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            The upgrade
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>The upgrade most founders are actually trying to make, underneath all the strategy:</p>
            <p>
              <span className="font-semibold text-foreground">Old OS:</span> Survive. Prove. Achieve. Control.
            </p>
            <p>
              <span className="font-semibold text-foreground">New OS:</span> Trust. Receive. Allow. Choose.
            </p>
            <p>That's it. That's the move.</p>
            <p>It looks small on paper. It's the work of an identity.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            A note from my own story
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>I learned this the hard way.</p>
            <p>
              For years I was doing the work at the top two layers. Smart strategy. Clean mindset. I could articulate why I did what I did better than almost anyone around me. And still, truthfully, I kept running up against the same patterns. Overworking. Struggling to receive. Controlling what I shouldn't have been controlling. Rest that didn't feel like rest.
            </p>
            <p>
              When my body collapsed in 2023, it became undeniable that the layer I'd been working on wasn't the layer that needed the work.
            </p>
            <p>
              What came online afterward wasn't a new belief. It was a new baseline. My system stopped running the old code. Slowly, then all at once, different things became possible.
            </p>
            <p>I didn't think my way into it. I had to work lower.</p>
          </div>

          <h2 className="mt-16 text-3xl sm:text-4xl md:text-[40px] font-bold text-foreground leading-[1.2]">
            Where this leaves you
          </h2>
          <div className="mt-7 space-y-7 text-[18px] leading-[1.8] text-body">
            <p>
              If you've done the mindset work and you're still finding yourself running the same patterns, the problem probably isn't that you don't understand.
            </p>
            <p>It's that the layer underneath hasn't been updated yet.</p>
            <p>
              Strategy matters. Mindset matters. But the operating system is where the leverage is. When the layer underneath shifts, everything above it stops requiring so much effort to hold in place. Decisions get easier. Boundaries get cleaner. The energy you were using to force the pattern becomes available for the work.
            </p>
            <p>That's the work.</p>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground leading-[1.2]">
            Ready to work lower?
          </h2>
          <p className="mt-5 text-[16px] text-body leading-[1.75]">
            If you've done the mindset work and the patterns are still running, book a call. No pitch. Just a conversation about what's underneath and whether the work is right for you.
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

export default InternalOperatingSystem;
