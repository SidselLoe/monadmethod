import { LAST_2026_START, bonusOpen, canBuyDirect, isFoundingRound } from "@/data/monadOs";

const HowItWorks = () => {
  const steps: [string, string][] = [
    [
      "Join",
      canBuyDirect()
        ? "Pay and you're in. If you'd rather talk first, apply and book a 20-minute call with me."
        : "Apply with a few short questions, then book a 20-minute call with me so we can see if it's right for you.",
    ],
    [
      "Starts every Monday",
      isFoundingRound()
        ? `Pick the Monday that works for you. For the founding price, your first Monday has to be ${LAST_2026_START} at the latest.`
        : "Pick the Monday that works for you.",
    ],
    ["Day one", "Your first workbook and our WhatsApp group are ready, and you can book your first activation and your first session."],
    [
      "Your 30 days, and after",
      bonusOpen()
        ? "Four sessions, four workbooks and as many activations as you can make. Join by 11 November and the activations carry on for three more months."
        : "Four sessions, four workbooks and as many activations as you can make. If there's more to build together, I'll invite you into long-term work.",
    ],
  ];

  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground text-center mb-4">How it works</p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">From here</span> to day one
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(([title, body], i) => (
            <div key={title} className="bg-card border border-border rounded-xl p-7">
              <span className="text-[42px] font-extrabold leading-none text-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-[20px] font-extrabold text-foreground leading-[1.35]">{title}</h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
