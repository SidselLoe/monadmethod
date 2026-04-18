import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide scroll reveal: automatically fades + lifts every <section>
 * (and any element marked with .reveal-on-scroll) as it enters the viewport.
 *
 * - Skips the first section on the page (usually a hero) so above-the-fold
 *   content appears instantly.
 * - Respects prefers-reduced-motion.
 * - Re-runs on every route change so newly mounted pages are observed.
 */
const useGlobalScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Wait a tick so the new route's DOM is mounted.
    const timeout = window.setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("section, .reveal-on-scroll")
      );

      // Skip the first section on the page (hero) so it shows instantly.
      const firstSection = document.querySelector("section");

      targets.forEach((el) => {
        if (el === firstSection) return;
        if (el.dataset.revealReady === "true") return;
        el.dataset.revealReady = "true";
        if (prefersReduced) {
          el.classList.add("reveal-visible");
          return;
        }
        el.classList.add("reveal-init");
      });

      if (prefersReduced) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((el) => {
        if (el === firstSection) return;
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [pathname]);
};

export default useGlobalScrollReveal;
