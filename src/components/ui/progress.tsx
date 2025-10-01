import type { FC } from "react";
import "./progress.module.css";

type ProgressProps = {
  value: number; // progress from 0 to 100
  className?: string;
};

const Progress: FC<ProgressProps> = ({ value, className = "" }) => {
  const clampedValue = Math.max(0, Math.min(100, value)); // ensure 0 <= value <= 100

  return (
    <div className={`progress-bar ${className}`}>
      <div
        className="progress-fill"
        style={{ width: `${clampedValue}%` }}
      ></div>
    </div>
  );
};

export default Progress;
