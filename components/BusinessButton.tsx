"use client";

import React from "react";

type BusinessButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export const BusinessButton: React.FC<BusinessButtonProps> = ({
  href = "#get-started",
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center h-12 sm:h-[48px] min-w-[177px] px-6 rounded-2xl overflow-hidden font-montserrat font-medium text-sm sm:text-[15px] text-white transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 ${className}`}
    >
      <img
        src="/BUISNESSBTN.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </a>
  );
};
