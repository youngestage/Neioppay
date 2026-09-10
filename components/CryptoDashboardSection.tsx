"use client";

import React from "react";
import Image from "next/image";

export const CryptoDashboardSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-24 lg:py-32 overflow-visible">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-[48%] xl:w-[46%] text-left max-w-[640px] z-10">
          <h2 className="font-mange font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[66px] tracking-tight leading-[1.08] text-[#0F172A]">
            One View Of Your
            <br />
            Finances.
          </h2>

          <p className="font-montserrat font-normal text-base sm:text-lg md:text-[17px] xl:text-[18px] text-[#0F172A]/75 max-w-[490px] mt-6 sm:mt-8 leading-relaxed">
            Track your local balance, foreign-currency accounts, loan status,
            and digital asset holdings side by side no more juggling a local
            bank app, a foreign account, and a separate exchange.
          </p>
        </div>

        <div className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-center lg:justify-end pt-10 sm:pt-14 lg:pt-8">
          <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[660px]">
            <div className="w-full aspect-[2596/2164] rounded-[28px] sm:rounded-[38px] lg:rounded-[46px] overflow-hidden shadow-[0_16px_40px_rgba(195,248,74,0.22)] relative">
              <Image
                src="/crytptonew.webp"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center pointer-events-none select-none"
              />
            </div>

            <div className="absolute -top-[14%] sm:-top-[15%] lg:-top-[16%] -left-[4%] sm:-left-[5%] lg:-left-[6%] w-[108%] sm:w-[109%] lg:w-[110%] pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/dashboard.webp"
                alt="Neioppay Multi-Currency and Crypto Dashboard preview"
                width={1600}
                height={1415}
                sizes="(max-width: 1024px) 95vw, 50vw"
                className="w-full h-auto object-contain drop-shadow-[0_24px_50px_rgba(15,23,42,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
