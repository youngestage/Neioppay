"use client";
import React from "react";
import Link from "next/link";
import { WavyDivider } from "./WavyDivider";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white text-blue-very-dark py-20 lg:py-32 min-h-[85vh] lg:min-h-screen -mb-16 lg:-mb-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Your <span className="text-blue-light">Money</span> Partner
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-inter text-blue-very-dark mb-8 max-w-3xl">
            Fast, secure, and seamless digital payment solutions that promote financial inclusion, transparency, and convenience across Africa and beyond.
          </p>

          {/* Google Play Badge */}
          <a
            href="https://play.google.com/store/apps/details?id=com.neiop.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10"
            aria-label="Get it on Google Play"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-12 w-auto"
            />
          </a>

          {/* Regulatory Badges */}
          <div className="flex flex-col sm:flex-row items-start justify-start gap-8 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-inter text-sm text-blue-very-dark">Licensed by CBN</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cbn.svg"
                alt="CBN Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter text-sm text-blue-very-dark">Insured by NDIC</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ndic.png"
                alt="NDIC Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>
          </div>

          {/* Right-side image with glow effect */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.2) 0%, rgba(0, 102, 255, 0.1) 40%, transparent 70%)',
                filter: 'blur(40px)',
                width: '120%',
                height: '120%',
                margin: '-10%',
                zIndex: 0
              }}
            />
            {/* Phone image */}
            <div className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Group%201.png"
                alt="Neiop app mockups"
                className="max-w-full h-auto w-[80%] md:w-[70%] lg:w-[90%] drop-shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WavyDivider className="text-blue-light" />
      </div>
    </section>
  );
};


