import { Button } from "@/components/ui/button";
import usePageMeta from "@/hooks/usePageMeta";

const WHATSAPP_NUMBER = "WHATSAPP_NUMBER";
const ACTIVATION_URL = "https://luma.com/monadmethod";

const ApplyBooked = () => {
  usePageMeta("Your Call Is Booked | Sidsel Løschenkohl", "Your Monad OS call is booked.", {
    canonical: "https://www.monadmethod.com/apply/booked", ogType: "website", robots: "noindex, nofollow",
  });
  return <div className="flex min-h-screen flex-col bg-funnel-warm font-sans text-foreground">
    <main className="flex flex-1 items-center justify-center px-4 py-[72px] sm:py-28">
      <div className="w-full max-w-[720px] rounded-2xl border border-funnel-border bg-card p-7 text-center shadow-funnel sm:p-12">
        <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[52px]">Your call is booked.</h1>
        <div className="mx-auto mt-8 max-w-[600px] space-y-5 text-left text-[17px] leading-[1.65] text-funnel-body">
          <p>One thing before we speak. Send me a two-minute voice note on WhatsApp answering:</p>
          <p>1. What's taking most of your energy right now?</p>
          <p>2. What have you already tried?</p>
          <p>3. What would make this call worth your time?</p>
        </div>
        <Button asChild className="mt-9 h-auto w-full rounded-full bg-accent px-9 py-[18px] text-[16px] font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto"><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">Send a voice note on WhatsApp</a></Button>
        <a href={ACTIVATION_URL} target="_blank" rel="noopener noreferrer" className="mx-auto mt-8 block max-w-max text-[15px] text-funnel-body underline underline-offset-4">Want to feel the work first? Join a Monad Activation this week.</a>
      </div>
    </main>
    <footer className="px-4 py-8 text-center text-[13px] text-funnel-subtle">© Monad Studios Ltd 2026 · <a href="/privacy-policy" className="hover:underline">Privacy</a> · <a href="/terms-of-service" className="hover:underline">Terms</a></footer>
  </div>;
};
export default ApplyBooked;
