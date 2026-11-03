// Single source for Monad OS offer details shown on the site.
// Change prices, dates or FAQs here and every page updates.

export const ACTIVATION_PRICE = 44; // £ per live group activation on Luma
export const ACTIVATIONS_PER_MONTH = 10;
export const FOUNDING_PLACES = 11;
export const LAST_2026_START = "28 December";

// Stripe payment link. Paste it in to switch on the "Join now" buttons.
// While empty, every button goes to /apply instead.
export const PAYMENT_LINKS = {
  full: "https://buy.stripe.com/5kQfZg8nef9Z7c80yU9oc00", // £1,500, Stripe limits it to 11 payments
};
export const canBuyDirect = () => Boolean(PAYMENT_LINKS.full);

// Midnight at the end of Wednesday 11 November, London time (GMT in November).
const BONUS_DEADLINE = new Date("2026-11-12T00:00:00Z");

type PriceStep = { label: string; price: number; from: Date; note?: string };

export const PRICE_STEPS: PriceStep[] = [
  { label: "Start in 2026", price: 1500, from: new Date("2000-01-01T00:00:00Z"), note: `${FOUNDING_PLACES} places` },
  { label: "From 1 January", price: 2000, from: new Date("2027-01-01T00:00:00Z") },
  { label: "From 1 February", price: 2500, from: new Date("2027-02-01T00:00:00Z") },
];

export const formatPrice = (value: number) => `£${value.toLocaleString("en-GB")}`;

export function currentStep(now = new Date()) {
  return [...PRICE_STEPS].reverse().find((step) => now >= step.from) ?? PRICE_STEPS[0];
}

export function upcomingSteps(now = new Date()) {
  return PRICE_STEPS.filter((step) => step.from > now);
}

export const isFoundingRound = (now = new Date()) => currentStep(now) === PRICE_STEPS[0];
export const bonusOpen = (now = new Date()) => now < BONUS_DEADLINE;

export const BONUS_VALUE = 3 * ACTIVATIONS_PER_MONTH * ACTIVATION_PRICE; // £1,320

export function priceSentence(now = new Date()) {
  const step = currentStep(now);
  const next = upcomingSteps(now)[0];
  if (isFoundingRound(now)) {
    return `${formatPrice(step.price)} if you start in 2026. There are ${FOUNDING_PLACES} places at this price. Monad OS starts every Monday, and to get this price your first Monday has to be ${LAST_2026_START} at the latest.${next ? ` From 1 January it's ${formatPrice(next.price)}.` : ""}`;
  }
  return `${formatPrice(step.price)}.${next ? ` ${next.label} it's ${formatPrice(next.price)}.` : ""}`;
}

export const GUARANTEE = "Do the whole thing: all four sessions, at least four activations and every workbook. If you haven't felt the shift by the end, I keep working with you until you do, at no extra cost.";

export const TIME_COMMITMENT = "About 4 to 5 hours a week, including everything";

export function faqs(now = new Date()): [string, string][] {
  const list: [string, string][] = [
    ["Do I need to be a founder?", "No. The people doing Monad OS right now are at a turning point: starting a business, leaving a career, going all in on a creative path, deciding what's next. What matters is that what you build comes from you, and that you're open to energy work."],
    ["Can I just join, or do I need a call?", "You can join straight away. If you'd like to talk it through first, apply and book a 20-minute call with me. Either way, we start on a Monday."],
    ["Do I need to know my purpose?", "No. That's usually something the work surfaces, not something you bring to it."],
    ["Will you tell me what to do?", "No. I won't hand you a playbook. The work gets you back to your own judgment, so the decisions come from you, and they hold."],
    ["What's a Monad Activation?", "A live group session online, 90 minutes in total. For about an hour of it you lie down at home with your eyes closed, guided by music, while I work with your energy. There's nothing to learn and nothing to get right. The frequency does the work."],
    ["How much time does it take?", "About 4 to 5 hours a week, including everything: your hour with me, your workbook and one or two activations. That's the minimum, and the more time you give it, the further it goes."],
    ["Is it group or private?", "The activations run live in a group, because the group field makes them more powerful. You don't need to speak, and sharing afterward is optional. Everything else is one to one and made for you: your workbooks, your four sessions and WhatsApp."],
    ["Does this work online?", "Yes. You do the activations lying down at home, in your own space, with nothing to perform. That's part of why they work. Strategic sessions run on video."],
    ["Is this confidential?", "Yes. Your sessions and workbooks stay between us. In the group, you choose what you share, and what's shared stays there."],
    ["What does it cost?", priceSentence(now)],
  ];
  if (bonusOpen(now)) {
    list.push(["What's the early sign-up bonus?", `Sign up by 11 November and you get three more months of Monad Activations after your 30 days, free. That's worth over ${formatPrice(1300)} at the single-session price, and it gives the work time to settle in.`]);
  }
  list.push(["Is there a guarantee?", GUARANTEE]);
  list.push(["What happens after the 30 days?", "Plenty of people keep coming to the activations. If you're building something and we both feel there's more to do, I'll invite you into long-term work with me."]);
  return list;
}
