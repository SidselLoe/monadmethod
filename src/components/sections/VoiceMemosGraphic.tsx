// Deterministic waveform heights
const generateBars = () => {
  const seed = [3,1,2,8,1,2,14,2,1,5,2,1,1,10,3,2,1,6,2,1,18,1,2,4,1,2,1,12,2,1,3,7,1,2,1,5,2,9,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return seed.slice(0, 90);
};

const bars = generateBars();
const playheadIndex = Math.floor(90 * 0.42);

const VoiceMemosGraphic = () => (
  <div className="w-[240px] mx-auto rounded-[28px] overflow-hidden border-[3px] border-[#D1D1D6] bg-[#F2F2F7] flex flex-col"
    style={{ height: 500, boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 16px 48px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.5)" }}>
    {/* Status bar */}
    <div className="flex items-center justify-between px-4 pt-2 pb-1 bg-[#F2F2F7] relative">
      <span className="text-[11px] font-semibold text-[#1C1C1E] tracking-wide">9:41</span>
      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[72px] h-[18px] bg-black rounded-xl" />
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" fill="#1C1C1E" className="w-3 h-3"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
        <svg viewBox="0 0 24 24" className="w-3 h-3"><rect x="2" y="6" width="18" height="12" rx="2" fill="none" stroke="#1C1C1E" strokeWidth="2"/><rect x="4" y="8" width="10" height="8" rx="1" fill="#1C1C1E"/></svg>
      </div>
    </div>

    {/* Voice Memos card */}
    <div className="bg-white mx-2.5 mt-2 rounded-2xl overflow-hidden" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div className="flex items-start justify-between px-4 pt-3.5 pb-2">
        <div className="w-7 h-7 rounded-full bg-[#F2F2F7] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="#8E8E93" className="w-3.5 h-3.5"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>
      <div className="text-center px-4 pb-1.5">
        <div className="text-[13px] font-semibold text-[#1C1C1E] -tracking-wide">Voice Reflection — Day 12</div>
        <div className="text-[9px] text-[#8E8E93] tracking-wide mt-0.5">04:32 &nbsp; 0:04</div>
      </div>
    </div>

    {/* Waveform area */}
    <div className="relative bg-[#F8F8FA] h-[200px] overflow-hidden">
      <div className="absolute inset-x-0 top-0 bottom-[30px] flex items-center justify-center">
        <div className="flex items-center gap-[1.5px] h-full px-4 py-5">
          {bars.map((h, i) => (
            <div key={i} className="flex-shrink-0 rounded-[1px]" style={{
              width: 2,
              height: i < playheadIndex ? h : 1,
              background: i < playheadIndex ? "#FF3B30" : "#D1D1D6",
              opacity: i < playheadIndex ? 0.6 : 0.3,
            }} />
          ))}
        </div>
      </div>
      {/* Playhead */}
      <div className="absolute top-0 bottom-[30px] flex flex-col items-center" style={{ left: "42%" }}>
        <div className="w-2 h-2 rounded-full bg-[#FF3B30] flex-shrink-0" />
        <div className="w-[1.5px] flex-1 bg-[#FF3B30]" />
        <div className="w-2 h-2 rounded-full bg-[#FF3B30] flex-shrink-0" />
      </div>
      {/* Timeline */}
      <div className="absolute bottom-2 inset-x-0 flex justify-between px-2">
        {["0:02","0:03","0:04","0:05","0:06"].map(t => (
          <span key={t} className="text-[8px] text-[#C7C7CC] tracking-wide">{t}</span>
        ))}
      </div>
    </div>

    {/* Timer */}
    <div className="text-center py-3 bg-[#F2F2F7]">
      <span className="text-[28px] font-light text-[#1C1C1E] tracking-wider" style={{ fontVariantNumeric: "tabular-nums" }}>00:04.19</span>
    </div>

    {/* Playback controls */}
    <div className="flex items-center justify-center gap-7 py-2 pb-3 bg-[#F2F2F7]">
      <div className="relative w-[22px] h-[22px]">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
          <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
        </svg>
        <span className="absolute top-1/2 left-[54%] -translate-x-1/2 -translate-y-1/2 text-[5px] font-bold text-[#8E8E93]">15</span>
      </div>
      <svg viewBox="0 0 24 24" fill="#8E8E93" className="w-7 h-7"><polygon points="6,3 20,12 6,21"/></svg>
      <div className="relative w-[22px] h-[22px]">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]">
          <path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
        <span className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 text-[5px] font-bold text-[#8E8E93]">15</span>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="flex items-center justify-between px-5 pt-3 pb-5 bg-[#F2F2F7]">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M7 8h6M7 12h10" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="w-14 h-9 rounded-[10px] bg-white flex items-center justify-center" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div className="flex gap-[3px]">
          <div className="w-1 h-4 rounded-[1.5px] bg-[#FF3B30]" />
          <div className="w-1 h-4 rounded-[1.5px] bg-[#FF3B30]" />
        </div>
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
          <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
        </svg>
      </div>
    </div>
  </div>
);

export default VoiceMemosGraphic;
