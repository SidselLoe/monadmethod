const parts = [
  {
    label: "Monad Activations",
    title: "Shift your state",
    body: "Live group sessions where you lie down at home and receive, guided by music. Your brainwaves slow, your heart and brain come into coherence, and what's been running you can change. There's nothing to do. The frequency does the work.",
  },
  {
    label: "Workbooks",
    title: "See what's been running you",
    body: "A workbook written for you every week and answered out loud as a voice note. Speaking gets you past the internal editor, and you'll often hear your own answers as you say them.",
  },
  {
    label: "Strategic sessions",
    title: "Act from what's returned",
    body: "Four private hours with me where what you've seen turns into decisions: what to stop carrying, what to let in, and where your energy goes from here.",
  },
];

const SameYou = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal text-foreground text-center tracking-[-0.025em]">
          <span className="font-extrabold">Same you,</span> same results
        </h2>

        <div className="mt-8 max-w-[820px] mx-auto space-y-5 text-[18px] text-body text-center leading-[1.7]">
          <p>
            Most of what drives you runs below conscious awareness. That's why understanding a pattern has never been enough to change it. You can name it, explain exactly where it came from, and still watch yourself do it again.
          </p>
          <p>
            A new result needs a new you. Still you, at a different frequency. So Monad OS works on three levels at once, and goes round in a circle rather than a straight line, a little deeper every time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {parts.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ec8c8]"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/70">{p.label}</p>
              <h3 className="mt-3 text-[20px] font-extrabold text-foreground">{p.title}</h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[22px] sm:text-[26px] text-foreground text-center leading-[1.4]">
          <span className="font-extrabold">The answers come from you.</span> My role is to hold up the mirror.
        </p>
      </div>
    </section>
  );
};

export default SameYou;
