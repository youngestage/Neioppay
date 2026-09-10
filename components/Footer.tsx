"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const productLinks: FooterLink[] = [
  { label: "Money transfer", href: "#" },
  { label: "Virtual cards", href: "#" },
  { label: "Currency exchange", href: "#" },
  { label: "Foreign accounts", href: "#" },
  { label: "Pouch", href: "#" },
  { label: "Lifestyle", href: "#" },
];

const companyLinks: FooterLink[] = [
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
  { label: "Contact", href: "#" },
];

const lifestyleLinks: FooterLink[] = [
  { label: "For freelancers", href: "#" },
  { label: "For digital nomads", href: "#" },
  { label: "For travellers", href: "#" },
  { label: "Join our community", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of service", href: "#" },
  { label: "Acceptable use policy", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Video tutorials", href: "#" },
  { label: "FAQ", href: "#" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pb-8 sm:pb-12 pt-4">
      {/* 
        Footer Container Card:
        - Framed rounded card with deep navy background and 3D wave texture
        - Matches Hero section container curvature and padding
      */}
      <div className="w-full max-w-[1800px] mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden relative bg-[#07132B] text-white">
        
        {/* Background Texture Image */}
        <Image
          src="/footer.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 1800px) 100vw, 1800px"
          className="object-cover object-center pointer-events-none select-none z-0"
        />

        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-14">
          
          {/* Top Headline Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-mange font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white tracking-tight leading-[1.1]">
              Global Banking <br /> at your fingertips
            </h2>

            {/* App Store & Google Play Badges */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="#download-google-play"
                className="inline-block transition-transform duration-200 hover:scale-[1.03] active:scale-100"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/Link.webp"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
                />
              </a>
              <a
                href="#download-app-store"
                className="inline-block transition-transform duration-200 hover:scale-[1.03] active:scale-100"
                aria-label="Download on the App Store"
              >
                <img
                  src="/Link-1.webp"
                  alt="Download on the App Store"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
                />
              </a>
            </div>
          </div>

          {/* Links Grid Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mt-16 sm:mt-24 lg:mt-32">
            
            {/* Column 1: CONTACT US */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-2 lg:mb-0">
              <h3 className="font-montserrat font-semibold text-xs sm:text-[13px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">
                CONTACT US
              </h3>
              <a
                href="mailto:support@neioppay.net"
                className="font-montserrat text-sm sm:text-[15px] text-[#3B82F6] hover:text-[#60A5FA] transition-colors block mb-5"
              >
                support@neioppay.net
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/neioppay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-[34px] h-[34px] rounded-[8px] border border-[#363F51] flex items-center justify-center bg-[#07132B]/40 hover:border-white/50 hover:bg-white/10 transition-all text-white/60 hover:text-white group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@neioppay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-[34px] h-[34px] rounded-[8px] border border-[#363F51] flex items-center justify-center bg-[#07132B]/40 hover:border-white/50 hover:bg-white/10 transition-all text-white/60 hover:text-white group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/neioppay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-[34px] h-[34px] rounded-[8px] border border-[#363F51] flex items-center justify-center bg-[#07132B]/40 hover:border-white/50 hover:bg-white/10 transition-all text-white/60 hover:text-white group"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: PRODUCTS */}
            <div>
              <h3 className="font-montserrat font-semibold text-xs sm:text-[13px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">
                PRODUCTS
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <NextLink
                      href={item.href}
                      className="font-montserrat text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div>
              <h3 className="font-montserrat font-semibold text-xs sm:text-[13px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">
                COMPANY
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <NextLink
                      href={item.href}
                      className="font-montserrat text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: LIFESTYLE */}
            <div>
              <h3 className="font-montserrat font-semibold text-xs sm:text-[13px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">
                LIFESTYLE
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {lifestyleLinks.map((item) => (
                  <li key={item.label}>
                    <NextLink
                      href={item.href}
                      className="font-montserrat text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: LEGAL & SUPPORT */}
            <div>
              <h3 className="font-montserrat font-semibold text-xs sm:text-[13px] uppercase tracking-wider text-white/50 mb-3 sm:mb-4">
                LEGAL & SUPPORT
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <NextLink
                      href={item.href}
                      className="font-montserrat text-sm sm:text-[15px] text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal Policies */}
          <div className="mt-16 sm:mt-20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-montserrat text-white/60">
            <p>© Neioppay 2026</p>
            <div className="flex items-center gap-6 sm:gap-8 text-white/70">
              <NextLink href="#" className="hover:text-white transition-colors">
                Terms
              </NextLink>
              <NextLink href="#" className="hover:text-white transition-colors">
                Privacy
              </NextLink>
              <NextLink href="#" className="hover:text-white transition-colors">
                Cookie Preferences
              </NextLink>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
