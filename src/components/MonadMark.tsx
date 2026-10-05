const MonadMark = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" aria-hidden="true" className={`shrink-0 text-foreground ${className}`}>
    <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="13" />
    <circle cx="60" cy="60" r="11" fill="currentColor" />
  </svg>
);

export default MonadMark;