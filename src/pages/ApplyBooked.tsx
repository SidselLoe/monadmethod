import { Button } from "@/components/ui/button";
import usePageMeta from "@/hooks/usePageMeta";

const WHATSAPP_NUMBER = "WHATSAPP_NUMBER";
const ACTIVATION_URL = "https://luma.com/monadmethod";

const PageNav = () => (
  <nav className="absolute inset-x-0 top-0 z-50 px-5 py-5 sm:px-8 sm:py-7">
    <div className="mx-auto flex max-w-[1100px] justify-end">
      <Button asChild className="h-auto rounded-full bg-accent px-7 py-3.5 text-[16px] font-semibold text-accent-foreground hover:bg-accent/90">
        <a href="/apply#apply">Apply</a>
      </Button>
    </div>
  </nav>
);

const MinimalFooter = () => (
  <footer className="bg-ink px-6 py-8 font-sans text-ink-foreground">
    <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-3 text-center text-[12px] sm:flex-row sm:gap-5">
      <span>© Monad Studios Ltd 2026</span>
      <div className="flex gap-5">
        <a href="/privacy-policy" className="hover:underline">Privacy</a>
        <a href="/terms-of-service" className="hover:underline">Terms</a>
      </div>
    </div>
  </footer>
);

const ApplyBooked = () => {
  usePageMeta(
    "Your Call Is Booked | Sidsel Løschenkohl",
    "Your Monad OS call is booked.",
    {
      canonical: "https://www.monadmethod.com/apply/booked",
      ogType: "website",
      robots: "noindex, nofollow",
    },
  );

  return (
    <div className="flex min-h-screen flex-col bg-ink font-sans">
      <PageNav />
      <main className="flex flex-1 items-center bg-ink px-5 py-32 text-center sm:px-8 sm:py-40">
        <div className="mx-auto max-w-[780px]">
          <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-foreground sm:text-[56px] lg:text-[70px]">Your call is booked.</h1>
          <div className="mx-auto mt-8 max-w-[660px] space-y-5 text-left text-[19px] leading-[1.6] text-ink-foreground/70 sm:text-[20px]">
            <p>One thing before we speak. Send me a two-minute voice note on WhatsApp answering:</p>
            <p>1. What's taking most of your energy right now?</p>
            <p>2. What have you already tried?</p>
            <p>3. What would make this call worth your time?</p>
          </div>
          <Button asChild className="mt-10 h-auto w-full rounded-full bg-accent px-10 py-[18px] text-[16px] font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">Send a voice note on WhatsApp</a>
          </Button>
          <a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer" className="mx-auto mt-8 block max-w-max text-[15px] text-ink-foreground underline underline-offset-4">
            Want to feel the work first? Join a Monad Activation this week.
          </a>
        </div>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default ApplyBooked;
