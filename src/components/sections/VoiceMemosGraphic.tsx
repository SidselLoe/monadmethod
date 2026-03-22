// Deterministic waveform heights
const generateBars = () => {
  const seed = [3, 1, 2, 8, 1, 2, 14, 2, 1, 5, 2, 1, 1, 10, 3, 2, 1, 6, 2, 1, 18, 1, 2, 4, 1, 2, 1, 12, 2, 1, 3, 7, 1, 2,
    1, 5, 2, 9, 1, 3, 2, 1, 6, 1, 2, 8, 1, 3, 2, 5, 1, 2, 4, 1, 7, 2, 1, 3, 1, 2, 1, 10, 2, 1, 5, 3, 1, 2, 4, 1, 6, 2, 1, 3, 8, 1, 2, 5, 1, 3];
  return seed.slice(0, 80);
};

const bars = generateBars();
const playheadIndex = Math.floor(80 * 0.42);

const VoiceMemosGraphic = () => (
  <div className="w-[240px] flex flex-col gap-1">
    {/* Top tile — waveform + recording info */}
    <div className="rounded-xl bg-[#F8F8FA] overflow-hidden flex flex-col" style={{ height: 190 }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <div className="text-[13px] font-semibold text-[#1C1C1E]">Voice Reflection — Day 12</div>
        <div className="text-[9px] text-[#8E8E93] mt-0.5">04:32</div>
      </div>

      {/* Waveform area */}
      <div className="flex-1 relative flex items-center px-4">
        <div className="flex items-center gap-[1.5px] w-full" style={{ height: "60%" }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-[1px]" style={{
              minWidth: 1.5,
              height: i < playheadIndex ? `${h * 3}%` : "1.5%",
              background: i < playheadIndex ? "#FF3B30" : "#D1D1D6",
              opacity: i < playheadIndex ? 0.55 : 0.3,
            }} />
          ))}
        </div>
        {/* Playhead */}
        <div className="absolute bg-[#FF3B30]" style={{ left: "42%", top: "8%", bottom: "8%", width: 1.5 }}>
          <div className="absolute -left-[2.75px] -top-[3px] w-[7px] h-[7px] rounded-full bg-[#FF3B30]" />
          <div className="absolute -left-[2.75px] -bottom-[3px] w-[7px] h-[7px] rounded-full bg-[#FF3B30]" />
        </div>
      </div>

      {/* Timer */}
      <div className="text-center py-2 pb-3.5">
        <span className="text-[22px] font-light text-[#1C1C1E] tracking-wide" style={{ fontVariantNumeric: "tabular-nums" }}>00:04.19</span>
      </div>
    </div>

    {/* Bottom tile — controls */}
    <div className="rounded-xl bg-[#F8F8FA] flex items-center justify-center gap-6 flex-shrink-0" style={{ height: 80 }}>
      {/* Transcribe icon */}
      <div className="w-7 h-7 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="1.8" strokeLinecap="round" className="w-[18px] h-[18px]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>

      {/* Pause button */}
      <div className="w-[52px] h-[36px] rounded-[10px] bg-white flex items-center justify-center" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
        <div className="flex gap-[3px]">
          <div className="w-[3.5px] h-[14px] rounded-[1.5px] bg-[#FF3B30]" />
          <div className="w-[3.5px] h-[14px] rounded-[1.5px] bg-[#FF3B30]" />
        </div>
      </div>

      {/* Sliders icon */}
      <div className="w-7 h-7 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="1.8" strokeLinecap="round" className="w-[18px] h-[18px]">
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
