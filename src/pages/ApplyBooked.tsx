import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import usePageMeta from "@/hooks/usePageMeta";

const ACTIVATION_URL = "https://luma.com/monadmethod";

const ApplyBooked = () => {
  usePageMeta(
    "Your Call Is Booked | Sidsel Løschenkohl",
    "Your Monad OS call is booked. Join a Monad Activation before we speak.",
    {
      canonical: "https://www.monadmethod.com/apply/booked",
      ogType: "website",
      robots: "noindex, nofollow",
    },
  );

  return (
    <div className="min-h-screen bg-ink font-sans">
      <Navigation />
      <main className="bg-ink px-6 pb-28 pt-44 sm:px-8 sm:pb-36 sm:pt-52">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-mint" />
          <h1 className="text-4xl font-bold leading-[1.08] text-ink-foreground sm:text-5xl md:text-[72px]">
            Your call is booked.
          </h1>
          <p className="mx-auto mt-8 max-w-[680px] text-[18px] leading-[1.75] text-ink-foreground sm:text-[20px]">
            You'll get a calendar invite by email. Before we speak, the best way to feel the work is to join a Monad Activation.
          </p>
          <Button asChild className="mt-10 h-auto rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase text-accent-foreground hover:bg-accent/90">
            <a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer">
              Join an Activation
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyBooked;