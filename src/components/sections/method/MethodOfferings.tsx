import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MethodOfferings = () => {
  return (
    <section className="bg-background py-[100px] px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-foreground ">
            Start with Monad OS.<br />Continue with Monad LTS.
          </h2>
          <p className="mt-4 text-[18px] text-body leading-[1.7]">
            Monad OS is how you enter. Monad LTS is how the work compounds, for graduates only.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
          {/* Card 1 — Monad OS (primary) */}
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="h-[3px] bg-mint" />
            <div className="p-8 sm:p-10 flex flex-col h-full">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint mb-3">
                Monad OS
              </p>
              <h3 className="text-[24px] font-bold text-foreground leading-[1.3]">
                The 30-day entry point.
              </h3>
              <p className="mt-3 text-[16px] text-body leading-[1.75] flex-1">
                Installs the Monad Method into your daily operating rhythm. Weekly Monad Activations, weekly 1:1 Strategic Sessions, Guided Inquiry, WhatsApp accountability, and strategic frameworks. Weekly rolling starts. This is where everyone begins.
              </p>
              <Link
                to="/monad-os"
                className="inline-flex self-start mt-6 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
              >
                Explore Monad OS
              </Link>
            </div>
          </div>

          {/* Connector arrow */}
          <div className="hidden md:flex items-center justify-center px-4">
            <ArrowRight size={20} className="text-mint" />
          </div>
          <div className="flex md:hidden items-center justify-center py-4">
            <ArrowRight size={20} className="text-mint rotate-90" />
          </div>

          {/* Card 2 — Monad LTS (secondary) */}
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="h-[3px] bg-mint-light" />
            <div className="p-8 sm:p-10 flex flex-col h-full">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-mint-light mb-3">
                Monad LTS
              </p>
              <h3 className="text-[24px] font-bold text-foreground leading-[1.3]">
                Long-term support.
              </h3>
              <p className="mt-3 text-[16px] text-body leading-[1.75] flex-1">
                The long-term continuation, for founders who have completed Monad OS and want to keep building from the new baseline. Ongoing activations, strategic sessions, and inquiry, with systems and AI integration entering the partnership here. Invitation only.
              </p>
              <span className="inline-flex self-start mt-6 border border-mint-border text-foreground text-xs font-semibold uppercase tracking-[0.3px] px-6 py-2.5 rounded-full">
                For Monad OS Graduates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodOfferings;
