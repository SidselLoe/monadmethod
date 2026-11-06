import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import MonadMark from "@/components/MonadMark";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import usePageMeta from "@/hooks/usePageMeta";
import { ACTIVATION_PRICE, formatPrice } from "@/data/monadOs";

const LUMA_URL = "https://luma.com/monadmethod";

const steps = [
  {
    title: "Most of your day runs on autopilot",
    body: "The same thoughts bring the same feelings, the same feelings drive the same choices, and the same choices give you the same results. That's why you can understand a pattern perfectly and still watch yourself repeat it. Same you, same results.",
  },
  {
    title: "Your thinking mind can't reach it",
    body: "Most of what drives you runs below conscious awareness. In everyday life your brain mostly runs fast, in what's called beta: analyzing, planning, scanning for what could go wrong. From there you can describe the pattern, but you can't change it.",
  },
  {
    title: "In an activation, your brainwaves slow down",
    body: "The frequency takes you out of that fast, analytical state and into alpha and theta, the slower states between awake and asleep. The analytical mind steps aside, and you become receptive. That's the state where old patterns can loosen and something new can take root.",
  },
  {
    title: "Your heart and brain come into coherence",
    body: "Your heart rhythm settles and your heart and brain fall into sync. You're deeply calm and fully awake at the same time, which is the opposite of survival mode. You can't create from survival. From coherence, you can.",
  },
  {
    title: "You feel the next version of you first",
    body: "In that state you get to feel what it's like to be the next version of you before anything outside has changed. The more often you feel it, the more familiar it becomes, until it stops being a feeling you visit and starts being who you are.",
  },
  {
    title: "Then you act from it",
    body: "When the state changes, the choices change with it. That's why the activations sit at the center of Monad OS: the sessions with me turn the new state into decisions, in your work, your money and your relationships.",
  },
];

const session = [
  ["Before", "Join from a laptop if you can, lying down at home in a quiet, dark room. Keep your camera on, because I work with each person directly and watch how your system responds so I can adjust."],
  ["Opening", "A short introduction and a moment to set what you want to let go of and what you want to call in."],
  ["The activation", "An hour lying down with your eyes closed, guided by music. You don't need to do anything or get anything right. The frequency does the work."],
  ["Coming back", "Time to land in your body again and share, as much or as little as you want. Everything shared stays in the room."],
];

const faqs: [string, string][] = [
  ["Do I need any experience?", "No. There's no technique to learn. You lie down and receive. People who have never done any kind of energy work go just as deep as people who have."],
  ["What will I feel?", "It's different for everyone, and different every time. People describe warmth, tingling, waves of emotion, images, deep calm, or simply the best rest they've had in months. Some feel a big shift in the first session. Others feel less at first and more each time. Both are normal, and the work builds on itself."],
  ["How many should I do?", "One is a good start. Most people really start to feel the shift after three, and inside Monad OS I recommend six or more over the month."],
  ["Does it work online?", "Yes. Being in your own space, lying down with nothing to perform, is part of why it works. Physical distance doesn't change what you receive."],
  ["Why a group?", "The group field makes the activation more powerful. People help each other let go, and you learn a lot through the mirror of what others are going through. You never have to speak if you don't want to."],
  ["What does it cost?", `${formatPrice(ACTIVATION_PRICE)} per session on Luma. Every live activation is included in Monad OS.`],
];

const Activations = () => {
  usePageMeta(
    "Monad Activations | Sidsel Løschenkohl",
    "Live group energy sessions online. You lie down, close your eyes and receive. What happens in an activation, and how a change in state changes you.",
    { canonical: "https://www.monadmethod.com/activations", ogType: "website" }
  );
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-background pt-[170px] pb-[100px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground mb-6">Monad Activations</p>
          <h1 className="text-4xl sm:text-5xl md:text-[72px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
            <span className="font-extrabold">Lie down, close your eyes</span>
            <br />
            and receive
          </h1>
          <p className="mt-8 text-[20px] text-foreground max-w-[720px] mx-auto leading-[1.7]">
            Live group energy sessions online, 90 minutes each. No technique and no effort. Most of what's been running you sits below your thinking mind, and the activation reaches that level directly.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors">
              See upcoming sessions
            </a>
            <a href="#how" className="text-[14px] font-semibold text-foreground underline underline-offset-4 decoration-[#7ec8c8] hover:decoration-2">
              How it works
            </a>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto mt-16 aspect-video rounded-xl overflow-hidden relative bg-ink cursor-pointer" onClick={() => { if (!playing) { setPlaying(true); setTimeout(() => videoRef.current?.play(), 0); } }}>
          {playing ? (
            <video ref={videoRef} src="/videos/monad-activation-overview.mp4" poster="/videos/monad-activation-poster.jpg" controls playsInline className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <>
              <img src="/videos/monad-activation-poster.jpg" alt="A Monad Activation in progress" className="testimonial-media absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute left-5 bottom-5 sm:left-8 sm:bottom-7 flex items-center gap-4 text-left text-white">
                <span className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <span className="ml-1 h-0 w-0 border-b-[8px] border-l-[13px] border-t-[8px] border-b-transparent border-l-white border-t-transparent" />
                </span>
                <span>
                  <span className="block text-[18px] sm:text-[26px] font-extrabold tracking-[-0.01em] leading-tight">Inside a Monad Activation</span>
                  <span className="block text-[13px] sm:text-[15px] text-white/80 mt-0.5">90 seconds</span>
                </span>
              </span>
            </>
          )}
        </div>
      </section>

      {/* Mechanism */}
      <section id="how" className="bg-surface py-[100px] px-8 scroll-mt-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground text-center mb-4">How it works</p>
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
            <span className="font-extrabold">How a new state</span> changes you
          </h2>
          <p className="mt-6 text-[18px] text-body text-center max-w-[760px] mx-auto leading-[1.7]">
            You are more than your thinking mind, and that's the whole point. Here's what's happening, step by step, when you lie down and let the frequency do the work.
          </p>
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-card border border-border rounded-xl p-8">
                <span className="text-[34px] font-extrabold leading-none text-mint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-[20px] font-extrabold text-foreground leading-[1.35]">{s.title}</h3>
                <p className="mt-3 text-[15px] text-body leading-[1.7]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Session */}
      <section className="bg-background py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
            <span className="font-extrabold">What happens</span> in a session
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {session.map(([title, body]) => (
              <div key={title} className="bg-card border border-border rounded-xl p-7">
                <MonadMark className="h-5 w-5 text-mint" />
                <h3 className="mt-5 text-[20px] font-extrabold text-foreground leading-[1.35]">{title}</h3>
                <p className="mt-3 text-[15px] text-body leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-16 max-w-[820px] mx-auto text-center">
            <p className="font-editorial italic text-[22px] sm:text-[26px] text-foreground leading-[1.5]">
              “There's such a gentle, receiving, energetic support in these energy activations that I just haven't felt anywhere else.”
            </p>
            <footer className="mt-4 text-[14px] font-semibold text-foreground">Jessica Rainey, somatic practitioner</footer>
          </blockquote>
        </div>
      </section>

      {/* Lineage */}
      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
            <span className="font-extrabold">Where it</span> comes from
          </h2>
          <p className="mt-8 text-[18px] text-body leading-[1.7]">
            I carry a direct Usui lineage of Reiki that traces back to Dr. Mikao Usui in Japan, I trained in Integrated Kundalini Activation, and I work through direct energy transmission. The Monad Activations are my own, built on those foundations and on everything I tested on myself first. 250+ people have experienced the work, online and in person, including group sessions at Burning Man.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-[100px] px-8">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
            <span className="font-extrabold">Questions</span> people ask
          </h2>
          <Accordion type="single" collapsible className="mt-10 border-t border-border">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`a-${i}`} className="border-b border-border">
                <AccordionTrigger className="group py-6 text-left text-[18px] sm:text-[20px] font-semibold leading-[1.35] text-foreground hover:no-underline [&>svg]:hidden">
                  {q}
                  <span aria-hidden="true" className="ml-4 shrink-0 text-[28px] font-normal leading-none text-mint group-data-[state=open]:hidden">+</span>
                  <span aria-hidden="true" className="ml-4 hidden shrink-0 text-[28px] font-normal leading-none text-mint group-data-[state=open]:block">−</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[16px] text-body leading-[1.75]">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-[60px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-mint-light rounded-xl px-10 py-8 sm:px-12 flex flex-col md:flex-row items-center gap-8">
            <MonadMark className="h-10 w-10 text-foreground shrink-0" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">Try one, or go all in</h3>
              <p className="mt-3 text-[16px] text-foreground leading-[1.75]">
                Book a single session on Luma, or do them inside <Link to="/" className="font-semibold underline underline-offset-4">Monad OS</Link>, where every live activation is included alongside four private sessions with me.
              </p>
            </div>
            <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors">
              Book a session
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activations;
