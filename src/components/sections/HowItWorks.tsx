import { LAST_2026_START, bonusOpen, isFoundingRound } from "@/data/monadOs";

const HowItWorks = () => {
  const steps: [string, string][] = [
    ["Apply", "A few short questions about where you are and what you want to change."],
    ["A 20-minute call", "We talk about where you are and whether Monad OS is right for you. If it's not a clear yes for both of us, we don't do it."],
    [
      "Start on a Monday",
      isFoundingRound()
        ? `Any Monday until ${LAST_2026_START}. Your first workbook and our WhatsApp group are ready the same day.`
        : "Any Monday. Your first workbook and our WhatsApp group are ready the same day.",
    ],
    [
      "Your 30 days, and after",
      bonusOpen()
        ? "Four sessions, four workbooks and as many activations as you can make. Sign up by 11 November and the activations carry on for three more months."
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
