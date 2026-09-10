"use client";

import React from "react";
import Image from "next/image";

const phrases = [
  {
    prefix: "Bank",
    highlight: "Globally",
    badge: "/herocurrency.svg",
    alt: "Currencies ($ £ €)",
  },
  {
    prefix: "Pay in",
    highlight: "Crypto",
    badge: "/cryptocurrency.svg",
    alt: "Cryptocurrencies (BTC, ETH, USDT)",
  },
];

export const Hero: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = phrases[index];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-1 pb-8 sm:pb-12">
      <div className="w-full max-w-[1800px] mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] flex flex-col justify-between">
        <Image
          src="/heroimg.webp"
          alt="Neioppay Hero Background"
          fill
          priority
          sizes="(max-width: 1800px) 100vw, 1800px"
          className="object-cover object-right pointer-events-none select-none z-0"
        />
        {/* Top/Left Content Area: Typography & CTA */}
        <div className="relative z-10 pt-10 sm:pt-14 lg:pt-20 xl:pt-24 pl-6 sm:pl-10 md:pl-14 lg:pl-18 xl:pl-24 pr-6 max-w-[620px] xl:max-w-[700px]">
          {/* Main Headline in Mange font with animated cycle */}
          <h1 className="font-mange font-bold text-[#0F172A] text-4xl sm:text-5xl md:text-6xl xl:text-[68px] leading-[1.08] tracking-tight">
            <span
              key={index}
              className="animate-phrase-cycle inline-flex items-center flex-wrap sm:flex-nowrap gap-x-2.5 sm:gap-x-3 gap-y-2"
            >
              <span>{current.prefix}</span>
              <span className="text-[#3B82F6]">{current.highlight}</span>
              <span className="inline-flex items-center -mt-0.5 sm:-mt-1">
                <img
                  src={current.badge}
                  alt={current.alt}
                  className="h-[36px] sm:h-[44px] md:h-[50px] lg:h-[56px] xl:h-[62px] w-auto object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </span>
            </span>
            <span className="block mt-1 sm:mt-2">from one app</span>
          </h1>

          {/* Subheadline in Montserrat font */}
          <p className="font-montserrat font-normal text-sm sm:text-base md:text-[17px] text-[#0F172A]/75 max-w-[430px] mt-5 sm:mt-6 leading-relaxed">
            Move your money around with full confidence. Send, receive, convert currency from anywhere in the world
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#open-account"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#1E40AF] text-white font-montserrat font-medium text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-600/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* 
          Floating QR Code Badge (Bottom Left):
          - Sits at the bottom-left over the soft blue gradient
          - Translucent frosted glass card with white text and app store icons
        */}
        <div className="relative z-10 pb-8 sm:pb-10 lg:pb-12 xl:pb-14 pl-6 sm:pl-10 md:pl-14 lg:pl-18 xl:pl-24 pt-4">
          <div className="inline-flex items-center gap-3.5 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(15,23,42,0.08)] w-fit">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl p-1 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden">
              <img
                src="/QR%20Code.svg"
                alt="Scan to Download Neioppay App"
                className="w-full h-full object-contain select-none"
              />
            </div>
            <div className="text-left pr-2 sm:pr-3">
              <h4 className="font-montserrat font-semibold text-xs sm:text-sm text-white leading-snug drop-shadow-sm tracking-tight">
                Scan to download app
              </h4>
              <p className="font-montserrat text-[11px] sm:text-xs text-white/90 mt-0.5 leading-snug drop-shadow-sm">
                Available on Appstore and PlayStore
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src="/Apple logo.svg"
                  alt="Apple App Store"
                  className="h-4 w-auto object-contain drop-shadow-sm"
                />
                <img
                  src="/Logo copy.svg"
                  alt="Google Play Store"
                  className="h-4 w-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
