"use client";

import React from "react";

interface MarqueeItem {
  label: string;
  variant: "neutral" | "blue";
}

const row1Items: MarqueeItem[] = [
  { label: "Business Payouts", variant: "neutral" },
  { label: "Multi-Currency Balances", variant: "blue" },
  { label: "Crypto Wallet", variant: "neutral" },
  { label: "Loans in Minutes", variant: "blue" },
  { label: "Instant Local Transfers", variant: "neutral" },
  { label: "Send Across Borders", variant: "blue" },
  { label: "Global Bank Accounts", variant: "neutral" },
  { label: "Virtual & Physical Cards", variant: "blue" },
];

const row2Items: MarqueeItem[] = [
  { label: "Loans in Minutes", variant: "blue" },
  { label: "Instant Local Transfers", variant: "neutral" },
  { label: "Send Across Borders", variant: "blue" },
  { label: "Business Payouts", variant: "neutral" },
  { label: "Multi-Currency Balances", variant: "blue" },
  { label: "Crypto Wallet", variant: "neutral" },
  { label: "Smart POS Terminals", variant: "blue" },
  { label: "High-Yield Savings", variant: "neutral" },
];

export const MoneyNeedsMarquee: React.FC = () => {
  // Duplicate arrays to make seamless infinite scrolling marquee
  const row1Repeated = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const row2Repeated = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden relative">
      {/* Title Section */}
      <div className="text-center px-4 mb-10 sm:mb-14">
        <h2 className="font-mange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0F172A] tracking-tight leading-[1.12]">
          Everything your money needs
        </h2>
        <h3 className="font-mange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#3B82F6] tracking-tight leading-[1.12] mt-1 sm:mt-2">
          in one app
        </h3>
      </div>

      {/* Marquee Wrapper with Smooth Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-5">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Row 1: Scrolling Left */}
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] select-none">
          {row1Repeated.map((item, index) => (
            <React.Fragment key={`row1-${index}`}>
              <div
                className={`flex-shrink-0 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-montserrat font-medium text-sm sm:text-base md:text-[17px] text-[#0F172A] transition-transform duration-200 hover:scale-[1.03] ${
                  item.variant === "blue"
                    ? "bg-[#EBF3FE] hover:bg-[#E1EDFE]"
                    : "bg-[#F4F5F7] hover:bg-[#EBEEF2]"
                }`}
              >
                {item.label}
              </div>
              <img
                src="/smoothray.svg"
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6 mx-3 sm:mx-4 flex-shrink-0 select-none pointer-events-none"
              />
            </React.Fragment>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max items-center animate-marquee-reverse hover:[animation-play-state:paused] select-none">
          {row2Repeated.map((item, index) => (
            <React.Fragment key={`row2-${index}`}>
              <div
                className={`flex-shrink-0 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-montserrat font-medium text-sm sm:text-base md:text-[17px] text-[#0F172A] transition-transform duration-200 hover:scale-[1.03] ${
                  item.variant === "blue"
                    ? "bg-[#EBF3FE] hover:bg-[#E1EDFE]"
                    : "bg-[#F4F5F7] hover:bg-[#EBEEF2]"
                }`}
              >
                {item.label}
              </div>
              <img
                src="/smoothray.svg"
                alt=""
                className="w-5 h-5 sm:w-6 sm:h-6 mx-3 sm:mx-4 flex-shrink-0 select-none pointer-events-none"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
