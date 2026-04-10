const generateBars = () => {
  const seed = [3, 1, 2, 8, 1, 2, 14, 2, 1, 5, 2, 1, 1, 10, 3, 2, 1, 6, 2, 1, 18, 1, 2, 4, 1, 2, 1, 12, 2, 1, 3, 7, 1, 2,
    1, 5, 2, 9, 1, 3, 2, 1, 6, 1, 2, 8, 1, 3, 2, 5, 1, 2, 4, 1, 7, 2, 1, 3, 1, 2, 1, 10, 2, 1, 5, 3, 1, 2, 4, 1, 6, 2, 1, 3, 8, 1, 2, 5, 1, 3];
  return seed.slice(0, 80);
};

const bars = generateBars();
const playheadIndex = Math.floor(80 * 0.42);

const VoiceMemosGraphic = () => (
  <div className="w-[180px] flex flex-col gap-1">
    {/* Top tile — waveform */}
    <div className="rounded-lg bg-secondary border border-border overflow-hidden flex flex-col" style={{ height: 120 }}>
      <div className="px-3 pt-2.5 pb-1">
        <div className="text-[10px] font-semibold text-foreground">Voice Reflection — Day 12</div>
        <div className="text-[7px] text-foreground/50 mt-px">04:32</div>
      </div>

      <div className="flex-1 relative flex items-center px-3">
        <div className="flex items-center gap-[1px] w-full" style={{ height: "55%" }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-[1px]" style={{
              minWidth: 1,
              height: i < playheadIndex ? `${h * 3}%` : "1.5%",
              background: i < playheadIndex ? "hsl(var(--accent))" : "hsl(var(--mint-border))",
              opacity: i < playheadIndex ? 0.55 : 0.3,
            }} />
          ))}
        </div>
        <div className="absolute bg-accent" style={{ left: "42%", top: "10%", bottom: "10%", width: 1 }}>
          <div className="absolute -left-[2px] -top-[2px] w-[5px] h-[5px] rounded-full bg-accent" />
          <div className="absolute -left-[2px] -bottom-[2px] w-[5px] h-[5px] rounded-full bg-accent" />
        </div>
      </div>

      <div className="text-center py-1.5">
        <span className="text-[16px] font-light text-foreground tracking-wide" style={{ fontVariantNumeric: "tabular-nums" }}>00:04.19</span>
      </div>
    </div>

    {/* Bottom tile — controls */}
    <div className="rounded-lg bg-secondary border border-border flex items-center justify-center gap-4 flex-shrink-0" style={{ height: 48 }}>
      <div className="w-5 h-5 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="hsl(var(--mint-border))" strokeWidth="1.8" strokeLinecap="round" className="w-[14px] h-[14px]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
      <div className="w-[36px] h-[24px] rounded-md bg-background border border-border flex items-center justify-center">
        <div className="flex gap-[2px]">
          <div className="w-[2.5px] h-[10px] rounded-[1px] bg-accent" />
          <div className="w-[2.5px] h-[10px] rounded-[1px] bg-accent" />
        </div>
      </div>
      <div className="w-5 h-5 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="hsl(var(--mint-border))" strokeWidth="1.8" strokeLinecap="round" className="w-[14px] h-[14px]">
          <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
          <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
          <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
        </svg>
      </div>
    </div>
  </div>
);

export default VoiceMemosGraphic;
