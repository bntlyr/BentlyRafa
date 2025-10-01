import type { ReactNode } from "react";
import "./badge.module.css";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant: "tag" | "stat";
  number?: string | number; // optional, for stat variant
  label?: string;           // optional, for stat variant
};

export default function Badge({
  children,
  className = "",
  variant,
  number,
  label,
}: BadgeProps) {
  if (variant === "stat") {
    return (
      <div className={`stat ${className}`}>
        {number !== undefined && <span className="stat-number">{number}</span>}
        {label ? <span className="stat-label">{label}</span> : children}
      </div>
    );
  }

  // default to "tag" variant
  return <span className={`tag ${className}`}>{children}</span>;
}
