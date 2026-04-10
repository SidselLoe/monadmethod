const CoachingCallGraphic = () => (
  <div className="w-[180px] flex flex-col gap-1">
    {/* Top tile — Sidsel */}
    <div className="w-full rounded-lg relative overflow-hidden bg-secondary border border-border" style={{ aspectRatio: "16/9" }}>
      {/* Avatar circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-mint/50" />
      {/* Name label */}
      <div className="absolute bottom-1.5 left-2">
        <span className="font-sans text-[9px] font-medium text-foreground/80">Sidsel L.</span>
      </div>
    </div>

    {/* Bottom tile — Founder (active speaker) */}
    <div className="w-full rounded-lg relative overflow-hidden bg-secondary border-2 border-mint-border" style={{ aspectRatio: "16/9" }}>
      {/* Avatar circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-mint/50" />
      {/* Name label */}
      <span className="absolute bottom-1.5 left-2 font-sans text-[9px] font-medium text-foreground/80">Founder</span>
      {/* Meet badge */}
      <div className="absolute top-1.5 right-1.5 w-[16px] h-[16px] rounded-full bg-mint-border flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" className="w-[8px] h-[8px]">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        </svg>
      </div>
    </div>
  </div>
);

export default CoachingCallGraphic;
