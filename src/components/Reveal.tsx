import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}

/**
 * Wraps content in a subtle fade + upward translate when it enters the viewport.
 * Used for landing-page section reveals.
 */
const Reveal = ({ children, delay = 0, className, as = "div" }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
