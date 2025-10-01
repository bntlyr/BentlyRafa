import type { ReactNode } from "react";
import "./card.module.css"


type CardProps = {
  children: ReactNode;
  variant?: "project" | "default"; // choose the card type
  className?: string;
};

type CardSubComponentProps = {
  children: ReactNode;
  className?: string;
};

// Main Card wrapper
export const Card = ({ children, variant = "project", className = "" }: CardProps) => {
  const baseClass = variant === "default" ? "default-card" : "project-card";
  return <div className={`${baseClass} ${className}`}>{children}</div>;
};

// Card Header
export const CardHeader = ({ children, className = "" }: CardSubComponentProps) => {
  return <h3 className={`project-title ${className}`}>{children}</h3>;
};

// Card Description
export const CardDescription = ({ children, className = "" }: CardSubComponentProps) => {
  return <p className={`project-description ${className}`}>{children}</p>;
};

// Card Picture (only used for project cards)
export const CardPicture = ({ children, className = "" }: CardSubComponentProps) => {
  return <div className={`project-image ${className}`}>{children}</div>;
};

// Card Content (used for both project and default cards)
export const CardContent = ({ children, className = "" }: CardSubComponentProps) => {
  return <div className={`project-content ${className}`}>{children}</div>;
};
