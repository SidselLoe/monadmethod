const CoachingCallGraphic = () => (
  <div className="w-[240px] mx-auto rounded-[28px] overflow-hidden border-[3px] border-[#2A2A2A] bg-[#1C1C1C] flex flex-col"
    style={{ height: 500, boxShadow: "0 2px 8px rgba(0,0,0,0.1), 0 16px 48px rgba(0,0,0,0.15), inset 0 0 0 2px rgba(255,255,255,0.06)" }}>
    {/* Status bar */}
    <div className="flex items-center justify-between px-4 pt-2 pb-1 bg-[#1C1C1C] relative">
      <span className="text-[11px] font-semibold text-white/90 tracking-wide">9:41</span>
      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[72px] h-[18px] bg-black rounded-xl" />
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" className="w-3.5 h-3.5"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5"><rect x="2" y="6" width="18" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/><rect x="4" y="8" width="10" height="8" rx="1" fill="rgba(255,255,255,0.7)"/></svg>
      </div>
    </div>

    {/* Meet top bar */}
    <div className="flex items-center justify-between px-3 pt-2.5 pb-2 bg-[#1C1C1C]">
      <div className="bg-white/[0.12] rounded-full px-2.5 py-1 text-[8px] font-medium text-white/80 whitespace-nowrap">Sidsel L. and you</div>
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      </div>
    </div>

    {/* Main video area */}
    <div className="relative bg-[#1C1C1C] overflow-hidden" style={{ aspectRatio: "9/14" }}>
      {/* Sparkle icon */}
      <div className="absolute top-2.5 left-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" className="w-3.5 h-3.5">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
        </svg>
      </div>

      {/* Participant centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-center">
        <div className="w-14 h-14 rounded-full mx-auto mb-2.5 flex items-center justify-center" style={{ background: "linear-gradient(145deg, #3a3540 0%, #4a4050 100%)" }}>
          <span className="text-xl font-semibold text-white/70">S</span>
        </div>
        <div className="text-[11px] font-medium text-white/80 tracking-wide">Sidsel L.</div>
        <div className="text-[8px] text-white/35 mt-0.5">Connected</div>
      </div>

      {/* Self-view PiP */}
      <div className="absolute bottom-3 right-3 w-[54px] h-[72px] rounded-xl overflow-hidden" style={{ background: "linear-gradient(155deg, #2a2520 0%, #3a3028 40%, #2e2822 100%)", boxShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>
        <div className="absolute w-4/5 h-1/2 rounded-full top-[15%] left-[10%] opacity-[0.12]" style={{ background: "#C4A87C", filter: "blur(18px)" }} />
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[68%] flex flex-col items-center">
          <div className="w-[34%] aspect-square bg-white/[0.07] rounded-full" style={{ filter: "blur(3px)" }} />
          <div className="w-[90%] h-[58%] bg-white/[0.05] rounded-t-[28%] -mt-[3%]" style={{ filter: "blur(4px)" }} />
        </div>
      </div>
    </div>

    {/* Bottom controls */}
    <div className="flex items-center justify-center gap-2 bg-[#2C2C2C] px-3.5 pt-3.5 pb-5">
      {[
        <svg key="cam" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" className="w-4 h-4"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
        <svg key="mic" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" className="w-4 h-4"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>,
        <svg key="emoji" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
        <svg key="more" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" className="w-4 h-4"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>,
      ].map((icon, i) => (
        <div key={i} className="h-9 w-11 rounded-full bg-white/[0.12] flex items-center justify-center flex-shrink-0">{icon}</div>
      ))}
      <div className="w-px h-6 bg-white/15 flex-shrink-0 mx-1" />
      <div className="w-[42px] h-[42px] rounded-full bg-[#EA4335] flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
          <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/>
        </svg>
      </div>
    </div>
  </div>
);

export default CoachingCallGraphic;
