import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "CEO OS", href: "/ceo-os" },
  { label: "Monad Method", href: "/monad-method" },
  { label: "Reflections", href: "/reflections" },
  { label: "About", href: "/about" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      <div className="w-full max-w-[1400px] bg-background/95 backdrop-blur-sm rounded-lg border border-border/40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] px-4 sm:px-8 py-2.5 flex items-center justify-between">
        {/* Logo dot */}
        <Link to="/" className="group flex-shrink-0">
          <div className="relative w-[14px] h-[14px]">
            <div className="absolute inset-0 rounded-full bg-foreground transition-all duration-300 group-hover:scale-[0.45]" />
            <div className="absolute inset-0 rounded-full border-[2px] border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-5 py-2 text-sm font-medium text-foreground rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: tagline + CTA */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <span className="text-xs text-muted-foreground max-w-[160px] text-right leading-tight">
            Leadership programs for startup founders
          </span>
          <Link
            to="/apply"
            className="bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-6 py-2.5 rounded-md hover:bg-accent/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background rounded-lg border border-border shadow-lg p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-foreground hover:text-accent-foreground hover:bg-accent rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-6 py-3 rounded-md hover:bg-accent/90 transition-colors text-center"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
