const tiles = [
  { name: "Sidsel L.", grad: "linear-gradient(135deg, #1a1520 0%, #2d2035 40%, #1e1828 100%)", glow: "#8B5CF6", live: true },
  { name: "James R.", grad: "linear-gradient(135deg, #1c1a15 0%, #2a2520 40%, #1e1c17 100%)", glow: "#D4A574" },
  { name: "Ana K.", grad: "linear-gradient(135deg, #151a1c 0%, #202a2d 40%, #171e20 100%)", glow: "#5B9BD5" },
  { name: "David M.", grad: "linear-gradient(135deg, #1a1518 0%, #2d2028 40%, #1e1820 100%)", glow: "#C084A0" },
  { name: "Sarah T.", grad: "linear-gradient(135deg, #1a1a15 0%, #2d2d20 40%, #1e1e18 100%)", glow: "#A0A060" },
  { name: "Michael C.", grad: "linear-gradient(135deg, #141828 0%, #1e2440 40%, #161a2e 100%)", glow: "#6B7FD4" },
];

const EnergyActivationGraphic = () => (
  <div className="w-full rounded-xl overflow-hidden border border-[#E8E8E8] flex flex-col" style={{ height: 500, boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08)" }}>
    {/* Browser bar */}
    <div className="flex items-center gap-3 bg-[#F6F6F6] px-4 py-3 border-b border-[#E8E8E8]">
      <div className="flex gap-1.5 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 bg-white rounded-md px-3.5 py-1.5 text-xs text-[#999] border border-[#E0E0E0] font-sans tracking-wide">
        Energy Activation — Live Session
      </div>
    </div>

    {/* Video grid */}
    <div className="grid grid-cols-3 grid-rows-2 gap-[3px] bg-[#161616] p-[3px]">
      {tiles.map((t, i) => (
        <div key={i} className="relative overflow-hidden rounded-[4px]" style={{ aspectRatio: "16/10", background: t.grad }}>
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full opacity-15" style={{ background: t.glow, filter: "blur(30px)" }} />
          {/* Silhouette */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "15%", width: "65%", height: "30%", background: "rgba(255,255,255,0.04)", borderRadius: "40% 40% 20% 20%", filter: "blur(6px)" }} />
          {/* LIVE badge */}
          {t.live && (
            <span className="absolute top-2 left-2.5 bg-accent text-white font-sans text-[8px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-[3px]">Live</span>
          )}
          {/* Name */}
          <span className="absolute bottom-2 left-2.5 font-sans text-[10px] font-medium text-white/70">{t.name}</span>
        </div>
      ))}
    </div>

    {/* Caption bar */}
    <div className="flex items-center justify-between bg-[#161616] px-5 py-3.5">
      <span className="font-sans text-xs text-white/50">6 founders — Energy Activation in progress</span>
      <div className="flex gap-2">
        {/* Mic icon */}
        <div className="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="1" width="6" height="11" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <line x1="8" y1="21" x2="16" y2="21" />
          </svg>
        </div>
        {/* Camera icon */}
        <div className="w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default EnergyActivationGraphic;
