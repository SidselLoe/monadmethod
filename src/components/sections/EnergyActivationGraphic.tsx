const tiles = [
  { name: "Sidsel L.", live: true },
  { name: "James R." },
  { name: "Ana K." },
  { name: "David M." },
  { name: "Sarah T." },
  { name: "Michael C." },
];

const EnergyActivationGraphic = () => (
  <div className="w-full rounded-xl overflow-hidden border border-border flex flex-col" style={{ height: 300, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
    {/* Browser bar */}
    <div className="flex items-center gap-3 px-3 py-2 border-b border-border bg-background">
      <div className="flex gap-1 shrink-0">
        <span className="w-2 h-2 rounded-full bg-mint-border" />
        <span className="w-2 h-2 rounded-full bg-mint" />
        <span className="w-2 h-2 rounded-full bg-secondary" />
      </div>
      <div className="flex-1 bg-secondary rounded px-2.5 py-1 text-[9px] text-foreground/60 border border-border font-sans tracking-wide">
        Energy Activation — Live Session
      </div>
    </div>

    {/* Video grid */}
    <div className="grid grid-cols-3 grid-rows-2 gap-[2px] bg-border p-[2px] flex-1">
      {tiles.map((t, i) => (
        <div key={i} className="relative overflow-hidden bg-secondary">
          {/* Subtle avatar circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-mint/40" />
          {t.live && (
            <span className="absolute top-1.5 left-1.5 bg-mint-border text-white font-sans text-[7px] font-semibold uppercase tracking-wider px-1 py-[1px] rounded-[2px]">Live</span>
          )}
          <span className="absolute bottom-1.5 left-1.5 font-sans text-[8px] font-medium text-foreground/60">{t.name}</span>
        </div>
      ))}
    </div>

    {/* Caption bar */}
    <div className="flex items-center justify-between bg-background px-3 py-2 border-t border-border">
      <span className="font-sans text-[9px] text-foreground/50">6 founders — Energy Activation in progress</span>
      <div className="flex gap-1.5">
        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--mint-border))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="1" width="6" height="11" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
          </svg>
        </div>
        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--mint-border))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default EnergyActivationGraphic;
