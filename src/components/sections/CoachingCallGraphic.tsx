const CoachingCallGraphic = () => (
  <div className="w-[240px] flex flex-col gap-1">
    {/* Top tile — Sidsel (Coach) */}
    <div className="w-full rounded-xl relative overflow-hidden" style={{ aspectRatio: "16/9", background: "linear-gradient(155deg, #2a2420 0%, #3a3028 40%, #2e2822 100%)" }}>
      {/* Ambient glow */}
      <div className="absolute rounded-full opacity-10" style={{ width: "70%", height: "50%", top: "15%", left: "15%", background: "#C4A87C", filter: "blur(35px)" }} />
      {/* Silhouette */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ bottom: "5%", width: "40%", height: "80%" }}>
        <div className="rounded-full flex-shrink-0" style={{ width: "28%", aspectRatio: "1/1", background: "rgba(255,255,255,0.07)", filter: "blur(5px)" }} />
        <div style={{ width: "80%", height: "55%", background: "rgba(255,255,255,0.05)", borderRadius: "25% 25% 0 0", filter: "blur(6px)", marginTop: "-3%" }} />
      </div>
      {/* Screen glow */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "30%", background: "linear-gradient(to top, rgba(200,210,220,0.03), transparent)" }} />
      {/* Name label */}
      <div className="absolute bottom-2 left-2.5">
        <span className="font-sans text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>Sidsel L.</span>
        <span className="block font-sans text-[8px] font-normal mt-px" style={{ color: "rgba(255,255,255,0.45)" }}>Coach</span>
      </div>
    </div>

    {/* Bottom tile — Founder (active speaker) */}
    <div className="w-full rounded-xl relative overflow-hidden" style={{ aspectRatio: "16/9", background: "linear-gradient(155deg, #1e2228 0%, #283038 40%, #222830 100%)", border: "2.5px solid rgba(66, 133, 244, 0.6)" }}>
      {/* Ambient glow */}
      <div className="absolute rounded-full opacity-10" style={{ width: "70%", height: "50%", top: "20%", left: "20%", background: "#8BA5B0", filter: "blur(35px)" }} />
      {/* Silhouette */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ bottom: "5%", width: "40%", height: "80%" }}>
        <div className="rounded-full flex-shrink-0" style={{ width: "28%", aspectRatio: "1/1", background: "rgba(255,255,255,0.07)", filter: "blur(5px)" }} />
        <div style={{ width: "80%", height: "55%", background: "rgba(255,255,255,0.05)", borderRadius: "25% 25% 0 0", filter: "blur(6px)", marginTop: "-3%" }} />
      </div>
      {/* Screen glow */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "30%", background: "linear-gradient(to top, rgba(200,210,220,0.03), transparent)" }} />
      {/* Name label */}
      <span className="absolute bottom-2 left-2.5 font-sans text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>Founder</span>
      {/* Meet badge */}
      <div className="absolute top-2 right-2 w-[22px] h-[22px] rounded-full bg-[#4285F4] flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" className="w-[11px] h-[11px]">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        </svg>
      </div>
    </div>
  </div>
);

export default CoachingCallGraphic;
