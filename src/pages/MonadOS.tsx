import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import usePageMeta from "@/hooks/usePageMeta";
const CALENDLY_URL = "https://calendly.com/sidselloschenkohl/monad-discovery";

const expectations = [
  "90 minutes total per session",
  "60 minutes lying down, eyes closed, guided by music",
  "30-minute opening and integration circle",
  "Small, intimate group with space for sharing",
  "No need to speak during the activation itself",
  "Full preparation details shared once booked",
];

const MonadOS = () => {
  usePageMeta(
    "Monad OS — 30-Day Founder Programme",
    "The 30-day entry point. Weekly energy activations, 1:1 strategic sessions, guided inquiry, and WhatsApp accountability for founders."
  );
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="h-16" />

      {/* Access strip */}
      <section className="bg-accent py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[18px] font-medium text-accent-foreground leading-[1.5] text-center sm:text-left">
            10 Monad Activations every month, online.<br />
            Included in Monad OS and every engagement that follows.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex bg-background text-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-background/90 transition-colors"
          >
            View Upcoming Sessions
          </a>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-secondary py-[100px] px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-card border border-border rounded-xl p-10 sm:p-12">
            <span className="block text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-6">
              What to expect
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 list-disc pl-5">
              {expectations.map((item) => (
                <li key={item} className="text-[16px] text-body py-2 leading-[1.75]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MonadOS;
