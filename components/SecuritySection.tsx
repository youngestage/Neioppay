"use client";

import React from "react";

const securityFeatures = [
  {
    id: 1,
    title: "CBN licensed & NDIC Insured",
    description:
      "NeiopPay operates under Nigerian financial regulation, giving you a trusted foundation for everyday and cross-border payments.",
    icon: (
      <svg
        className="w-5 h-5 text-[#0F172A]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Protected by design",
    description:
      "Your eligible funds are handled through secure financial infrastructure designed to protect your balance and personal information",
    icon: (
      <svg
        className="w-5 h-5 text-[#0F172A]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Smart fraud protection",
    description:
      "Real-time monitoring helps identify unusual activity and protect your transfers, accounts, and payments.",
    icon: (
      <svg
        className="w-5 h-5 text-[#0F172A]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

export const SecuritySection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-16 xl:gap-24">
        
        {/* Left Column: Headline, Subtitle & 3 Regulated Trust Features */}
        <div className="w-full lg:w-[52%] xl:w-[54%] text-left max-w-[640px]">
          <h2 className="font-mange font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[66px] tracking-tight leading-[1.08] text-[#0F172A]">
            Security you can
            <br />
            count on
          </h2>

          <p className="font-montserrat font-normal text-base sm:text-lg md:text-[17px] xl:text-[18px] text-[#0F172A]/75 max-w-[500px] mt-6 sm:mt-8 leading-relaxed">
            Your money is protected with regulated services, secure technology,
            and safeguards designed for every transaction.
          </p>

          {/* List of 3 Security Points with Subtle Dividers */}
          <div className="mt-8 sm:mt-10 divide-y divide-slate-200/70 border-y border-slate-200/70">
            {securityFeatures.map((item) => (
              <div
                key={item.id}
                className="py-5 sm:py-6 flex items-start gap-4 sm:gap-5"
              >
                {/* Outlined Circular Icon Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 bg-white shadow-xs">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left pt-0.5">
                  <h3 className="font-montserrat font-bold text-base sm:text-[17px] text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-montserrat font-normal text-sm sm:text-[15px] text-[#0F172A]/70 leading-relaxed mt-1.5 max-w-[480px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Video with 24/7 Customer Support Animation */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[640px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden drop-shadow-[0_24px_50px_rgba(15,23,42,0.12)] bg-slate-50">
            <video
              src="/Timeline%201.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto object-cover select-none pointer-events-none block"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
