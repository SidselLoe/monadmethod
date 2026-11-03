import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MethodTestimonials from "@/components/sections/method/MethodTestimonials";
import Footer from "@/components/sections/Footer";
import MonadMark from "@/components/MonadMark";
import usePageMeta from "@/hooks/usePageMeta";

const covers = [
  "The real decisions as they come up: who to hire, who to let go, where to grow and what to say no to",
  "The hard conversations, before and after you have them",
  "Your energy and your state, with activations whenever you need them",
  "Accountability on what you said you'd do, and someone who'll say it how it is when you don't",
  "Your life outside the business, because it's the same you running both",
];

const MonadLTS = () => {
  usePageMeta(
    "Monad LTS | Sidsel Løschenkohl",
    "Long-term work with Sidsel for founders who've done Monad OS. Strategic partnership across your business and your life. By invitation.",
    { canonical: "https://www.monadmethod.com/monad-lts", ogType: "website" }
  );
  return (
    <div className="min-h-screen">
      <Navigation ctaLabel="See Monad OS" ctaHref="/" />

      <section className="bg-background pt-[170px] pb-[100px] px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground mb-6">Monad LTS · By invitation</p>
          <h1 className="text-4xl sm:text-5xl md:text-[72px] font-normal text-foreground leading-[1.1] tracking-[-0.025em]">
            <span className="font-extrabold">Someone in your corner</span>
            <br />
            as the stakes grow
          </h1>
          <p className="mt-8 text-[20px] text-foreground max-w-[760px] mx-auto leading-[1.7]">
            Monad OS changes the one building. Monad LTS is what comes after, for founders who want me alongside them as the business, the team and the stakes get bigger. It's long-term support across your business and your life.
          </p>
        </div>
      </section>

      <section className="bg-surface py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
              <span className="font-extrabold">What we</span> work on
            </h2>
            <p className="mt-6 text-[18px] text-body leading-[1.7]">
              Whatever is actually in front of you. We keep working on the inside, and we work on what you're building, at the same time, because one drives the other.
            </p>
          </div>
          <ul className="space-y-5">
            {covers.map((c) => (
              <li key={c} className="flex gap-3 text-[17px] text-foreground leading-[1.7]">
                <MonadMark className="mt-1.5 h-5 w-5 shrink-0 text-mint" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-[100px] px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground tracking-[-0.025em]">
            <span className="font-extrabold">How you</span> get here
          </h2>
          <p className="mt-6 text-[18px] text-body leading-[1.7]">
            Everyone starts with Monad OS. If you're building something and we both feel there's more to do together, I'll invite you in at the end of your 30 days. It's a mutual decision and a mutual investment, so there's no application and no public price.
          </p>
          <Link to="/" className="inline-flex mt-9 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors">
            Start with Monad OS
          </Link>
        </div>
      </section>

      <MethodTestimonials />
      <Footer />
    </div>
  );
};

export default MonadLTS;
