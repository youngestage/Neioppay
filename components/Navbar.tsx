"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  variant?: "light" | "dark";
};

export const Navbar: React.FC<NavbarProps> = ({ variant = "light" }) => {
  const pathname = usePathname();
  const isBusinessPage = pathname === "/buisness" || pathname === "/business";
  const isDark = variant === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu automatically on route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const linkIdle = isDark
    ? "font-medium text-white/80 hover:text-white"
    : "font-medium text-[#0F172A]/80 hover:text-[#0F172A]";
  const linkActive = isDark
    ? "font-semibold text-white hover:text-white/90"
    : "font-semibold text-[#0F172A] hover:text-[#3B82F6]";

  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-black/70 backdrop-blur-md py-4 sm:py-5"
            : "bg-white/85 backdrop-blur-md shadow-sm py-4 sm:py-5"
          : "bg-transparent py-6 sm:py-8 lg:py-10"
      }`}
    >
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        <NextLink href="/" className="flex items-center gap-2 group">
          <img
            src="/logo.svg"
            alt="Neioppay Logo"
            className={`h-7 sm:h-8 lg:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
              isDark ? "brightness-0 invert" : ""
            }`}
          />
        </NextLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-11 font-montserrat">
          <NextLink
            href="/"
            className={`text-[15px] sm:text-base transition-colors ${
              !isBusinessPage ? linkActive : linkIdle
            }`}
          >
            Personal
          </NextLink>

          <NextLink
            href="/buisness"
            className={`text-[15px] sm:text-base transition-colors ${
              isBusinessPage ? linkActive : linkIdle
            }`}
          >
            Business
          </NextLink>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`md:hidden flex items-center justify-center h-10 w-10 rounded-full transition-all active:scale-95 ${
            isDark
              ? "bg-white/10 text-white hover:bg-white/20 border border-white/15"
              : "bg-[#0F172A]/5 text-[#0F172A] hover:bg-[#0F172A]/10 border border-[#0F172A]/10"
          }`}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Clean, Spacious Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-[100] flex flex-col ${
            isDark ? "bg-[#07132B] text-white" : "bg-white text-[#0F172A]"
          } animate-in fade-in duration-200`}
        >
          {/* Top Bar */}
          <div className="w-full px-5 sm:px-6 py-5 sm:py-6 flex items-center justify-between shrink-0">
            <NextLink
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img
                src="/logo.svg"
                alt="Neioppay Logo"
                className={`h-7 sm:h-8 w-auto object-contain ${
                  isDark ? "brightness-0 invert" : ""
                }`}
              />
            </NextLink>

            <button
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-center h-10 w-10 rounded-full transition-all active:scale-95 ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/5 text-[#0F172A] hover:bg-black/10"
              }`}
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content with breathing room */}
          <div className="flex-1 px-6 sm:px-8 py-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-8 pt-2">
              {/* Primary Nav */}
              <nav className="flex flex-col space-y-5">
                <NextLink
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-mange text-3xl sm:text-4xl tracking-tight transition-colors flex items-center justify-between py-1 ${
                    !isBusinessPage
                      ? "text-[#3B82F6] font-bold"
                      : isDark
                        ? "text-white/70 hover:text-white"
                        : "text-[#0F172A]/80 hover:text-[#0F172A]"
                  }`}
                >
                  <span>Personal</span>
                  {!isBusinessPage && (
                    <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                  )}
                </NextLink>

                <NextLink
                  href="/buisness"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-mange text-3xl sm:text-4xl tracking-tight transition-colors flex items-center justify-between py-1 ${
                    isBusinessPage
                      ? "text-[#3B82F6] font-bold"
                      : isDark
                        ? "text-white/70 hover:text-white"
                        : "text-[#0F172A]/80 hover:text-[#0F172A]"
                  }`}
                >
                  <span>Business</span>
                  {isBusinessPage && (
                    <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                  )}
                </NextLink>
              </nav>

              {/* Subtle Hairline Divider */}
              <div
                className={`border-t ${
                  isDark ? "border-white/10" : "border-[#E5E7EB]"
                }`}
              />

              {/* Secondary Navigation */}
              <nav className="flex flex-col space-y-4 font-montserrat">
                {[
                  { label: "Help Center", href: "/help" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "AML Policy", href: "/aml" },
                ].map((item) => (
                  <NextLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base sm:text-lg font-medium transition-colors py-0.5 ${
                      isDark
                        ? "text-white/60 hover:text-white"
                        : "text-[#0F172A]/60 hover:text-[#0F172A]"
                    }`}
                  >
                    {item.label}
                  </NextLink>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 pb-4 space-y-5">
              <div className="flex items-center gap-3">
                <a
                  href="#download-google-play"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block transition-transform active:scale-95"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="/Link.webp"
                    alt="Get it on Google Play"
                    className="h-10 w-auto object-contain"
                  />
                </a>
                <a
                  href="#download-app-store"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block transition-transform active:scale-95"
                  aria-label="Download on the App Store"
                >
                  <img
                    src="/Link-1.webp"
                    alt="Download on the App Store"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>

              <div className="flex items-center justify-between text-xs font-montserrat text-[#0F172A]/50 dark:text-white/50 pt-2 border-t border-[#E5E7EB]/60 dark:border-white/10">
                <a
                  href="mailto:support@neioppay.net"
                  className="text-[#3B82F6] hover:underline"
                >
                  support@neioppay.net
                </a>
                <span>© 2026 Neioppay</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
