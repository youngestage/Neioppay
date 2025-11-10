import React from "react";

interface WavyDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export const WavyDivider: React.FC<WavyDividerProps> = ({
  className = "",
  flip = false,
  color = "#0F172A", // blue-very-dark default
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none -mb-px ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`block w-full h-16 md:h-20 ${flip ? "transform rotate-180" : ""}`}
      >
        <path
          d="M0,50 C80,5 220,-5 300,40 C520,110 680,110 900,40 C980,-5 1120,5 1200,50 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
