"use client";

import React from "react";
import NextLink from "next/link";

export const BusinessSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-[48%] xl:w-[46%] flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[640px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden drop-shadow-[0_24px_50px_rgba(15,23,42,0.12)] bg-slate-50">
            <video
              src="/biz-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto object-cover select-none pointer-events-none block"
            />
          </div>
        </div>

        <div className="w-full lg:w-[52%] xl:w-[54%] text-left max-w-[640px]">
          <h2 className="font-mange font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[66px] tracking-tight leading-[1.08] text-[#0F172A]">
            Built to move your
            <br />
            business beyond
            <br />
            borders.
          </h2>

          <p className="font-montserrat font-normal text-base sm:text-lg md:text-[17px] xl:text-[18px] text-[#0F172A]/75 max-w-[520px] mt-6 sm:mt-8 leading-relaxed">
            Scale Globally Without Banking Friction with Multi-currency business
            accounts, cross-border payouts, POS terminals, payment APIs,
            working-capital loans.
          </p>

          <div className="mt-8 sm:mt-10 flex items-center gap-6 sm:gap-8">
            <NextLink
              href="/buisness"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#1E40AF] text-white font-montserrat font-medium text-base shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </NextLink>
            <NextLink
              href="/buisness"
              className="font-montserrat font-semibold text-base text-[#0F172A] underline underline-offset-4 hover:text-[#3B82F6] transition-colors"
            >
              Learn more
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
};
