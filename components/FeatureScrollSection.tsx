"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const featureCards = [
  { id: 1, src: "/feature/Frame 3742.webp", alt: "Borrow Money When You Need It" },
  { id: 2, src: "/feature/Frame 3743.webp", alt: "Move Money Fast" },
  { id: 3, src: "/feature/Frame 3744.webp", alt: "Global Bank Accounts" },
  { id: 4, src: "/feature/Frame 3745.webp", alt: "Open Free USD, GBP & EUR Accounts" },
  { id: 5, src: "/feature/Frame 3746.webp", alt: "Buy & Sell Crypto At Competitive Prices" },
];

export const FeatureScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [containerPadding, setContainerPadding] = useState(40);

  // Compute exact horizontal travel and grid padding matching the page layout
  useEffect(() => {
    const updateDimensions = () => {
      if (!trackRef.current) return;
      const vw = window.innerWidth;

      // Calculate responsive horizontal padding matching the max-w-[1800px] grid
      const pad = vw >= 1280 ? 40 : vw >= 1024 ? 32 : vw >= 640 ? 24 : 16;
      const leftMargin = Math.max((vw - 1800) / 2, 0) + pad;
      setContainerPadding(leftMargin);

      // Total track scrollable distance so Card 1 starts at left margin
      // and Card 5 finishes neatly aligned at the right margin
      const trackWidth = trackRef.current.scrollWidth;
      const distance = Math.max(0, trackWidth - vw);
      setScrollDistance(distance);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    window.addEventListener("resize", updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Framer Motion scroll tracker: 1:1 direct tracking for zero latency
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct transform mapped to GPU translate3d for silky smooth 60fps response
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section className="w-full bg-white relative py-6 sm:py-10">
      {/* 
        DESKTOP VIEW: High-Performance Pinned Horizontal Scroll
        - Pinned section header: "Make Every Money Move Count"
        - Aligned with the site's max-w-[1800px] container grid
        - Card 1 starts aligned with the left margin
        - Card 5 finishes aligned with the right margin
        - 1:1 GPU-accelerated translate3d response (zero lag)
      */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[280vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          {/* Section Header */}
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 mb-6 lg:mb-8">
            <h2 className="font-mange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] tracking-tight leading-[1.1] text-[#0F172A]">
              Make Every Money Move Count
            </h2>
          </div>

          <motion.div
            ref={trackRef}
            style={{
              x,
              paddingLeft: `${containerPadding}px`,
              paddingRight: `${containerPadding}px`,
            }}
            className="flex items-center gap-8 lg:gap-10 xl:gap-12 will-change-transform select-none py-2"
          >
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="relative flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] aspect-[467/625] h-[420px] lg:h-[490px] xl:h-[550px] max-h-[64vh]"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 360px"
                  className="object-contain pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 
        MOBILE VIEW: Smooth Horizontal Scroll-Snap Carousel
        - Header: "Make Every Money Move Count"
        - Natural touch swipe with native iOS-like inertia
        - Crisp 467x625 PNG cards
      */}
      <div className="md:hidden w-full py-8 px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="font-mange font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-[1.1] text-left">
            Make Every Money Move Count
          </h2>
        </div>
        <div className="w-full overflow-x-auto flex snap-x snap-mandatory gap-5 pb-6 pt-2 no-scrollbar scroll-smooth">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="relative flex-shrink-0 snap-center w-[85vw] max-w-[360px] aspect-[467/625]"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="85vw"
                className="object-contain drop-shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
