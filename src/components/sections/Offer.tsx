import MonadMark from "@/components/MonadMark";
import {
  ACTIVATION_PRICE,
  ACTIVATIONS_PER_MONTH,
  FOUNDING_PLACES,
  LAST_2026_START,
  PAYMENT_LINKS,
  PRICE_STEPS,
  canBuyDirect,
  TIME_COMMITMENT,
  bonusOpen,
  currentStep,
  formatPrice,
  isFoundingRound,
  GUARANTEE,
} from "@/data/monadOs";

const APPLY_URL = "/apply";

const included = [
  {
    title: `${ACTIVATIONS_PER_MONTH} Monad Activations a month`,
    body: "Group energy sessions online, 90 minutes each, and the heart of the work. Join as many as you like. Six or more is ideal.",
    value: `${formatPrice(ACTIVATIONS_PER_MONTH * ACTIVATION_PRICE)} a month on their own`,
  },
  {
    title: "Four private strategic sessions",
    body: "An hour with me every week. I prepare for each one with your workbook recording, so we start where it matters.",
  },
  {
    title: "A workbook made for you, every week",
    body: "I take everything you tell me and turn it into questions that take you deeper. You answer them out loud as a voice note, with the exercises you need along the way.",
  },
  {
    title: "WhatsApp with me",
    body: "For when something comes up between sessions, which it will.",
  },
];

const Offer = ({ applyHref = APPLY_URL }: { applyHref?: string }) => {
  const step = currentStep();
  const founding = isFoundingRound();
  const bonus = bonusOpen();

  return (
    <section id="offer" className="bg-background py-[100px] px-8 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-foreground text-center mb-4">Monad OS</p>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">Thirty days,</span> one to one
        </h2>
        <p className="mt-6 text-[18px] text-body text-center max-w-[720px] mx-auto leading-[1.7]">
          Everything is made for you except the activations, which run as a group because the group field makes them more powerful.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {included.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-3">
                <MonadMark className="mt-1 h-5 w-5 shrink-0 text-mint" />
                <div>
                  <h3 className="text-[20px] font-extrabold text-foreground leading-[1.35]">{item.title}</h3>
                  <p className="mt-3 text-[15px] text-body leading-[1.7]">{item.body}</p>
                  {item.value && <p className="mt-4 text-[13px] font-semibold text-foreground/70">{item.value}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {bonus && (
          <div className="mt-5 rounded-xl border-2 border-[#7ec8c8] bg-mint-light p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">Until 11 November</p>
            <div className="flex-1">
              <h3 className="text-[20px] font-extrabold text-foreground leading-[1.35]">Three more months of Monad Activations, free</h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                Sign up by midnight on 11 November and you keep coming to the activations for three months after your 30 days, so the work has time to settle in. That's worth over {formatPrice(1300)} at the single-session price.
              </p>
            </div>
          </div>
        )}

        <p className="mt-10 text-[18px] text-foreground text-center">
          <span className="font-extrabold">Your time:</span> {TIME_COMMITMENT.toLowerCase()}.
        </p>

        <div className="mt-12 rounded-xl bg-ink text-ink-foreground p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-foreground/70">
                {founding ? "Founding round" : "Investment"}
              </p>
              <p className="mt-4 text-[56px] sm:text-[72px] font-extrabold leading-none tracking-[-0.025em]">{formatPrice(step.price)}</p>
              <p className="mt-4 text-[16px] leading-[1.7] text-ink-foreground/85">
                {founding
                  ? `${FOUNDING_PLACES} places. Monad OS starts every Monday, and for this price your first Monday has to be ${LAST_2026_START} at the latest.`
                  : "Monad OS starts every Monday."}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                {canBuyDirect() ? (
                  <>
                    <a
                      href={PAYMENT_LINKS.full}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
                    >
                      Join now
                    </a>
                    <a href={applyHref} className="text-[14px] font-semibold text-ink-foreground underline underline-offset-4 decoration-[#7ec8c8]">
                      Talk to me first
                    </a>
                  </>
                ) : (
                  <a
                    href={applyHref}
                    className="inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
                  >
                    Apply Now
                  </a>
                )}
              </div>
            </div>
            <ul className="space-y-3">
              {PRICE_STEPS.map((s) => {
                const active = s === step;
                return (
                  <li
                    key={s.label}
                    className={`flex items-center justify-between rounded-lg px-5 py-4 ${active ? "bg-ink-foreground text-ink" : "border border-ink-foreground/20 text-ink-foreground/70"}`}
                  >
                    <span className="text-[15px] font-semibold">{s.label === "Start in 2026" ? "Start by 28 December" : s.label}</span>
                    <span className="text-[18px] font-extrabold">{formatPrice(s.price)}</span>
                  </li>
                );
              })}
              <li className="pt-2 text-[13px] text-ink-foreground/70 leading-[1.6]">The increases are real, and there are no timers.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-border bg-card p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">My promise</p>
          <p className="flex-1 text-[16px] text-body leading-[1.7]">{GUARANTEE}</p>
        </div>

        <p className="mt-10 text-[16px] text-body text-center">
          Not ready yet?{" "}
          <a href="/activations" className="font-semibold text-foreground underline underline-offset-4 decoration-[#7ec8c8]">
            Come to a Monad Activation first
          </a>{" "}
          and feel the work for {formatPrice(ACTIVATION_PRICE)}.
        </p>
      </div>
    </section>
  );
};

export default Offer;
