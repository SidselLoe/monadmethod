
const ProblemProgram = () => {
  return (
    <section className="bg-surface py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Problem statement */}
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground text-center leading-[1.15]">
          You were pushed here. By something you still haven't faced.
        </h2>

        {/* Solution bridge */}
        <p className="mt-6 text-[18px] text-body text-center max-w-[700px] mx-auto leading-[1.7]">
          The results are real. The revenue, the recognition, the company that actually works. And the feeling you were climbing toward never arrived.
          <br /><br />
          You built this from push. The drive that got you here is the same drive that is now the ceiling. Push has always had one. You found it.
        </p>

        {/* Asymmetric bento grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big card - left, spans full height */}
          <div className="md:row-span-2 bg-card border border-border rounded-xl overflow-hidden flex flex-col">
            <div className="p-7 sm:p-8">
              <h3 className="text-[20px] font-semibold text-foreground">Get out of your head</h3>
              <p className="mt-3 text-[15px] text-body leading-[1.7]">
                Your best thinking has never arrived through effort. Activations clear what has been preventing it and take you into the state where clarity, creative power, and sharp decisions actually live. Guided, music-driven, experienced lying down. No technique. No performance. Each session compounds. What becomes available in that state is not something you find. It finds you.
              </p>
            </div>
          </div>

          {/* Top right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8">
              <h3 className="text-[20px] font-semibold text-foreground">Reveal what's been running you</h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                You can't see the patterns running your leadership from inside them. Structured self-inquiry surfaces them. Every reflection becomes the foundation for the next session. What has been making your decisions without your permission gets named.
              </p>
          </div>

          {/* Bottom right card */}
          <div className="bg-card border border-border rounded-xl p-7 sm:p-8 flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-[20px] font-semibold text-foreground">Take aligned action</h3>
              <p className="mt-2 text-[15px] text-body leading-[1.7]">
                The activations shift your state. The inquiry names what's been running underneath you. The sessions bring both into action. Priorities, delegation, decisions. They move differently now. Not because the strategy is better. Because you have changed.
              </p>
            </div>
            <div className="flex-shrink-0 py-2">
              <VoiceMemosGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemProgram;
