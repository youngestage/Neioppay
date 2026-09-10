"use client";

import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type NavbarProps = {
  variant?: "light" | "dark";
};

export const Navbar: React.FC<NavbarProps> = ({ variant = "light" }) => {
  const pathname = usePathname();
  const isBusinessPage = pathname === "/buisness" || pathname === "/business";
  const isDark = variant === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMenuOpen(false);
      setIsMoreOpen(false);
    }
  };

  const moreItems = [
    { label: "Global Accounts", href: "/#cards" },
    { label: "Crypto", href: "/#features" },
    { label: "Loans", href: "/#pos" },
    { label: "Company", href: "/#company" },
    { label: "Help Center", href: "/#help" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  const linkIdle = isDark
    ? "font-medium text-white/80 hover:text-white"
    : "font-medium text-[#0F172A]/80 hover:text-[#0F172A]";
  const linkActive = isDark
    ? "font-semibold text-white hover:text-white/90"
    : "font-semibold text-[#0F172A] hover:text-[#3B82F6]";

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
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

          <div
            ref={moreRef}
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-1.5 text-[15px] sm:text-base transition-colors focus:outline-none cursor-pointer ${linkIdle}`}
              aria-expanded={isMoreOpen}
            >
              <span>More</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMoreOpen
                    ? isDark
                      ? "rotate-180 text-white"
                      : "rotate-180 text-[#3B82F6]"
                    : isDark
                      ? "text-white/60"
                      : "text-[#0F172A]/60"
                }`}
              />
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {moreItems.map((item) => (
                  <NextLink
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMoreOpen(false);
                    }}
                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#0F172A]/80 hover:text-[#3B82F6] hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </NextLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2.5 rounded-xl transition-colors focus:outline-none ${
            isDark
              ? "text-white hover:bg-white/10"
              : "text-[#0F172A] hover:bg-slate-100"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden absolute inset-x-0 top-full border-b shadow-2xl p-6 transition-all duration-300 z-50 ${
            isDark
              ? "bg-black/95 backdrop-blur-xl border-white/10"
              : "bg-white/98 backdrop-blur-xl border-slate-200/80"
          }`}
        >
          <div className="flex flex-col gap-4 font-montserrat">
            <NextLink
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`px-3 py-2 text-base rounded-lg transition-colors ${
                !isBusinessPage ? linkActive : linkIdle
              }`}
            >
              Personal
            </NextLink>

            <NextLink
              href="/buisness"
              onClick={() => setIsMenuOpen(false)}
              className={`px-3 py-2 text-base rounded-lg transition-colors ${
                isBusinessPage ? linkActive : linkIdle
              }`}
            >
              Business
            </NextLink>

            <div
              className={`border-t my-1 pt-2 ${
                isDark ? "border-white/15" : "border-slate-200/60"
              }`}
            >
              <span
                className={`px-3 text-xs font-semibold uppercase tracking-wider ${
                  isDark ? "text-white/40" : "text-[#0F172A]/40"
                }`}
              >
                More Features
              </span>
              <div className="mt-2 flex flex-col gap-1">
                {moreItems.map((item) => (
                  <NextLink
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isDark
                        ? "text-white/75 hover:text-white"
                        : "text-[#0F172A]/80 hover:text-[#3B82F6]"
                    }`}
                  >
                    {item.label}
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
