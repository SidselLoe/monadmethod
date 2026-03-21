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
      <div className="w-full max-w-[1400px] bg-background/95 backdrop-blur-sm rounded-full border border-border shadow-[0_2px_12px_rgba(0,0,0,0.08)] px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo dot */}
        <Link to="/" className="group flex-shrink-0">
          <div className="relative w-[14px] h-[14px]">
            {/* Default: solid circle (CEO OS) */}
            <div className="absolute inset-0 rounded-full bg-foreground transition-all duration-300 group-hover:scale-[0.45]" />
            {/* Hover: ring appears (Monad Method) */}
            <div className="absolute inset-0 rounded-full border-[2px] border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 ml-auto mr-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/apply"
          className="hidden md:inline-flex bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
        >
          Apply Now
        </Link>

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
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background rounded-2xl border border-border shadow-lg p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-6 py-3 rounded-full hover:bg-accent/90 transition-colors text-center"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
