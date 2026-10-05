import type { ElementType, ReactNode } from "react";

type SplitHeadingProps = {
  as?: ElementType;
  className?: string;
  first: ReactNode;
  rest?: ReactNode;
};

const SplitHeading = ({ as: Tag = "h2", className = "", first, rest }: SplitHeadingProps) => (
  <Tag className={`split-heading ${className}`}>
    <span className="split-heading__lead">{first}</span>
    {rest !== undefined && <span className="split-heading__rest"> {rest}</span>}
  </Tag>
);

export default SplitHeading;