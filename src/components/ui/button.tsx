import type { ReactNode } from "react";
import "./button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary"; // optional, default is "primary"
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  // Map variant to actual class
  const variantClass = variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <button className={`btn ${variantClass} ${className}`}>
      {children}
    </button>
  );
}
