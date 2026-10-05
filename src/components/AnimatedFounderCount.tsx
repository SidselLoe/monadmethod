import { useEffect, useRef, useState } from "react";

const AnimatedFounderCount = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(200);
      return;
    }

    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1800, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(200 * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ref} className={`font-extrabold tabular-nums ${className}`}>{count}+</span>;
};

export default AnimatedFounderCount;