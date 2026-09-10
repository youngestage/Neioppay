"use client";

import React, { useEffect, useState } from "react";

export type LegalSection = {
  id: string;
  title: string;
};

type LegalDocShellProps = {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
  children: React.ReactNode;
};

export const LegalDocShell: React.FC<LegalDocShellProps> = ({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
  children,
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 100;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <>
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 border-b border-[#E5E7EB]">
        <div className="w-full max-w-[1800px] mx-auto">
          <div className="max-w-4xl border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10">
            {eyebrow ? (
              <p className="font-montserrat text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#3B82F6]">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={`font-mange font-bold text-4xl sm:text-5xl md:text-6xl text-[#0F172A] tracking-tight leading-[1.08] ${
                eyebrow ? "mt-3" : ""
              }`}
            >
              {title}
            </h1>
            <div
              className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-6"
              aria-hidden="true"
            />
            <p className="font-montserrat text-sm font-medium text-[#0F172A]/55 mt-5">
              Last Updated: {lastUpdated}
            </p>
            <div className="font-montserrat text-base sm:text-[17px] text-[#0F172A]/75 leading-relaxed mt-5 max-w-3xl space-y-4">
              {intro}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-12 lg:gap-16 xl:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-[#D1D5DB] pl-5">
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]/40 mb-4">
                Table of Contents
              </p>
              <nav className="flex flex-col gap-1.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`font-montserrat text-sm py-1.5 transition-colors ${
                      activeSection === section.id
                        ? "text-[#3B82F6] font-semibold"
                        : "text-[#0F172A]/55 hover:text-[#0F172A] font-medium"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10 max-w-3xl space-y-12 sm:space-y-14">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export const LegalSectionHeading: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id, children }) => (
  <div id={id} className="scroll-mt-28">
    <h2 className="font-mange font-bold text-2xl sm:text-[28px] text-[#0F172A] tracking-tight leading-tight">
      {children}
    </h2>
    <div
      className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-4 mb-5"
      aria-hidden="true"
    />
  </div>
);

export const LegalP: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <p
    className={`font-montserrat text-[15px] sm:text-base text-[#0F172A]/75 leading-relaxed ${className}`}
  >
    {children}
  </p>
);
