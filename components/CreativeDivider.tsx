"use client";
import React from "react";

interface CreativeDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export const CreativeDivider: React.FC<CreativeDividerProps> = ({
  className = "",
  flip = false,
  color = "#3B82F6", // brand.light default
}) => {
  return (
    <div className={`w-full overflow-hidden relative ${className}`}>
      <div className="relative h-20 md:h-24">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, transparent 50%, ${color} 100%)`,
            backgroundSize: "200% 200%",
            animation: "gradientShift 8s ease infinite",
          }}
        />
        
        {/* Geometric pattern overlay */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`absolute inset-0 w-full h-full ${flip ? "transform rotate-180" : ""}`}
        >
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0.1" />
              <stop offset="50%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </linearGradient>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill={color} opacity="0.2" />
            </pattern>
          </defs>
          
          {/* Smooth wave path */}
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#dividerGradient)"
          />
          
          {/* Subtle dots pattern */}
          <rect width="100%" height="100%" fill="url(#dots)" opacity="0.3" />
          
          {/* Animated line */}
          <path
            d="M0,60 Q300,20 600,60 T1200,60"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            strokeDasharray="10,5"
            style={{
              animation: "dashMove 3s linear infinite",
            }}
          />
        </svg>
        
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{
              background: color,
              left: "10%",
              top: "50%",
              transform: "translateY(-50%)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-24 h-24 rounded-full blur-2xl opacity-15"
            style={{
              background: color,
              right: "20%",
              top: "30%",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes dashMove {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 30;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};


