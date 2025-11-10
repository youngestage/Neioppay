import React from "react";

interface WavyBorderProps {
  className?: string;
  color?: string;
}

export const WavyBorder: React.FC<WavyBorderProps> = ({
  className = "",
  color = "blue-light",
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q50,50 100,100 T200,100 L200,200 L0,200 Z"
          fill={`rgb(var(--${color}))`}
          className={`text-${color}`}
        />
      </svg>
    </div>
  );
};

