"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  flags: { src: string; alt: string }[];
};

const testimonials: Testimonial[] = [
  {
    id: "chris",
    quote:
      "Business payments became quicker and easier for my customers in UK.",
    author: "Chris, Europe",
    flags: [
      { src: "/flags/eu.svg", alt: "European Union" },
      { src: "/flags/uk.svg", alt: "United Kingdom" },
    ],
  },
  {
    id: "osamudiamen",
    quote:
      "Neioppay has made it easy for me to send money back home for my family",
    author: "Osamudiamen, Nigeria",
    flags: [
      { src: "/flags/usa.svg", alt: "United States" },
      { src: "/flags/nig.svg", alt: "Nigeria" },
    ],
  },
];

const CARD_WIDTH_PX = 300;
const CARD_GAP_PX = 24;

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  const goPrev = () => {
    if (!canGoPrev) return;
    setActiveIndex((i) => i - 1);
  };

  const goNext = () => {
    if (!canGoNext) return;
    setActiveIndex((i) => i + 1);
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 sm:gap-14 lg:gap-12 xl:gap-20">
        {/* Cards — left on desktop */}
        <div className="w-full lg:w-[58%] xl:w-[56%] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              gap: CARD_GAP_PX,
              transform: `translateX(-${activeIndex * (CARD_WIDTH_PX + CARD_GAP_PX)}px)`,
            }}
          >
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="relative shrink-0 rounded-[28px] sm:rounded-[32px] overflow-hidden"
                style={{
                  width: CARD_WIDTH_PX,
                  aspectRatio: "1176 / 1608",
                }}
              >
                <img
                  src="/testimonial.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />

                <div className="relative z-10 flex h-full flex-col px-7 sm:px-8 pt-8 sm:pt-10 pb-8 sm:pb-9">
                  <div className="flex items-center" aria-label="Flags">
                    {item.flags.map((flag, i) => (
                      <span
                        key={`${item.id}-${flag.src}`}
                        className={`relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full overflow-hidden ${
                          i > 0 ? "-ml-3" : ""
                        }`}
                        style={{ zIndex: item.flags.length - i }}
                      >
                        <img
                          src={flag.src}
                          alt={flag.alt}
                          className="h-full w-full object-cover"
                        />
                      </span>
                    ))}
                  </div>

                  <blockquote className="mt-8 sm:mt-10 font-montserrat font-medium text-white text-[17px] sm:text-lg leading-relaxed tracking-tight">
                    &ldquo;{item.quote}
                  </blockquote>

                  <p className="mt-auto pt-8 font-montserrat font-normal text-sm sm:text-[15px] text-white/70">
                    {item.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Copy + controls — right on desktop */}
        <div className="w-full lg:w-[42%] xl:w-[44%] flex flex-col justify-center max-w-[520px] lg:max-w-none lg:pl-2 xl:pl-6">
          <h2 className="font-mange font-bold text-[#0F172A] text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.08] tracking-tight">
            See what&apos;s possible.
          </h2>
          <p className="font-montserrat font-normal text-base sm:text-lg text-[#0F172A]/70 mt-5 sm:mt-6 leading-relaxed max-w-[420px]">
            Real stories from people and businesses growing with Neiop Pay.
          </p>

          <div className="mt-8 sm:mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous testimonial"
              className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-all duration-200 ${
                canGoPrev
                  ? "bg-[#0F172A] text-white hover:bg-[#1E293B] cursor-pointer"
                  : "bg-[#E8ECF1] text-[#94A3B8] cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next testimonial"
              className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-all duration-200 ${
                canGoNext
                  ? "bg-[#0F172A] text-white hover:bg-[#1E293B] cursor-pointer"
                  : "bg-[#E8ECF1] text-[#94A3B8] cursor-not-allowed"
              }`}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
