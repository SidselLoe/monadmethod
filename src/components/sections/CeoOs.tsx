import { Link } from "react-router-dom";

const cards = [
  {
    heading: "10× Energy Activations",
    body: "Shift your state. Restore coherence. Expand the capacity that pressure has been compressing.",
    iconBg: "bg-gradient-to-br from-[hsl(0,100%,97%)] to-[hsl(0,100%,93%)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 28C18 28 18 20 18 18" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 18C18 18 12 14 10 10" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M18 18C18 18 24 14 26 10" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M14 6C16 10 18 14 18 18" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <path d="M22 6C20 10 18 14 18 18" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <circle cx="18" cy="18" r="3" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" fill="none" />
        <path d="M18 10a8 8 0 0 1 8 8" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M18 10a8 8 0 0 0-8 8" stroke="hsl(0, 100%, 59.6%)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    heading: "4× Workbooks & Reflection",
    body: "Surface the beliefs running your decisions. Turn vague pressure into clear truth.",
    iconBg: "bg-gradient-to-br from-[hsl(222,60%,97%)] to-[hsl(222,60%,92%)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8v20" stroke="#4A6FA5" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 8c-2 0-8 1-10 2v18c2-1 8-2 10-2" stroke="#4A6FA5" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M18 8c2 0 8 1 10 2v18c-2-1-8-2-10-2" stroke="#4A6FA5" strokeWidth="2" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    heading: "4× Private Coaching (44 min)",
    body: "High-trust 1:1 sessions that turn insight into clean priorities, boundaries, and follow-through.",
    iconBg: "bg-gradient-to-br from-[hsl(140,40%,97%)] to-[hsl(140,40%,92%)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="16" height="12" rx="4" stroke="#3A8F5C" strokeWidth="2" fill="none" />
        <rect x="14" y="16" width="16" height="12" rx="4" stroke="#3A8F5C" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    heading: "30 Days Accountability",
    body: "Private WhatsApp support so nothing drifts between sessions. Check-ins, quick questions, real momentum.",
    iconBg: "bg-gradient-to-br from-[hsl(35,80%,97%)] to-[hsl(35,80%,92%)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="10" stroke="#C47A20" strokeWidth="2" fill="none" />
        <path d="M13 18l3.5 3.5L23 14" stroke="#C47A20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

const CeoOs = () => {
  return (
    <section className="bg-background py-[100px] sm:py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-foreground leading-[1.15]">
          CEO OS
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-[640px] mx-auto leading-[1.6]">
          30 days. Three modalities. One recalibration. Everything you need to shift how you operate as a founder.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.heading}
              className="bg-secondary border border-border rounded-xl p-7 sm:p-8 flex flex-col sm:flex-row items-start gap-5 text-left"
            >
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium text-foreground">
                  {c.heading}
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-[1.5]">
                  {c.body}
                </p>
              </div>
              <div
                className={`flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[20px] ${c.iconBg} flex items-center justify-center`}
              >
                {c.icon}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/apply"
          className="inline-flex mt-12 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-[0.5px] px-10 py-4 rounded hover:bg-accent/90 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default CeoOs;
