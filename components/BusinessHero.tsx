"use client";

import React from "react";
import Image from "next/image";

export const BusinessHero: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-1 pb-8 sm:pb-12">
      <div className="relative w-full max-w-[1800px] mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden aspect-[4145/2695] max-md:aspect-auto max-md:min-h-[720px] flex flex-col">
        <Image
          src="/buisnessbg.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 1800px) 100vw, 1800px"
          className="object-cover object-center max-md:object-[center_35%] pointer-events-none select-none z-0"
        />

        <div
          className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-black/50 to-transparent z-[1] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 pt-[9%] sm:pt-[8%] lg:pt-[7%] max-md:pt-16">
          <h1 className="font-mange font-bold text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] leading-[1.05] tracking-tight max-w-[920px]">
            <span className="block">Local business.</span>
            <span className="mt-1 sm:mt-2 inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-2 sm:gap-x-3 md:gap-x-4">
              <span>Global</span>
              <span className="relative inline-flex items-center justify-center shrink-0 -my-2 sm:-my-3 md:-my-4">
                <img
                  src="/hero-item.svg"
                  alt="Global currencies and markets"
                  className="h-[72px] sm:h-[92px] md:h-[110px] lg:h-[128px] xl:h-[140px] w-auto object-contain select-none pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] animate-business-float translate-y-3 -translate-x-1"
                />
              </span>
              <span>reach.</span>
            </span>
          </h1>

          <p className="font-montserrat font-normal text-sm sm:text-base md:text-[17px] text-white/80 max-w-[520px] mt-5 sm:mt-6 leading-relaxed">
            Move your money around with full confidence. Send, receive, convert
            currency from anywhere in the world
          </p>

          <a
            href="#get-started"
            className="mt-8 sm:mt-10 inline-flex items-center justify-center px-8 sm:px-9 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-montserrat font-medium text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/45 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </a>
        </div>

        <div className="relative z-10 flex-1" aria-hidden="true" />
      </div>
    </section>
  );
};
