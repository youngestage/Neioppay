"use client";

import React from "react";
import NextLink from "next/link";

const topics = [
  {
    title: "Getting started",
    description: "Accounts, verification, and how Neioppay works day to day.",
    href: "/faq",
  },
  {
    title: "Transfers & currencies",
    description: "Sending, receiving, converting, and multi-currency balances.",
    href: "/faq",
  },
  {
    title: "Business banking",
    description: "Tools for companies moving money locally and across borders.",
    href: "/buisness",
  },
  {
    title: "Security & compliance",
    description: "How we protect accounts and meet AML / regulatory duties.",
    href: "/aml",
  },
  {
    title: "Privacy & terms",
    description: "How we handle data and the rules for using Neioppay.",
    href: "/privacy",
  },
  {
    title: "Delete your account",
    description: "Steps to close your Neioppay account and request data deletion.",
    href: "/delete-account",
  },
];

export const HelpCenterContent: React.FC = () => {
  return (
    <>
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 border-b border-[#E5E7EB]">
        <div className="w-full max-w-[1800px] mx-auto">
          <div className="max-w-4xl border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10">
            <h1 className="font-mange font-bold text-4xl sm:text-5xl md:text-6xl text-[#0F172A] tracking-tight leading-[1.08]">
              Help center
            </h1>
            <div
              className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-6"
              aria-hidden="true"
            />
            <p className="font-montserrat text-base sm:text-[17px] text-[#0F172A]/75 leading-relaxed mt-5 max-w-2xl">
              Find answers fast, or reach our team when you need a human. Browse
              common topics below, check the FAQ, or send us a message.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 xl:gap-24">
          <div className="border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10 max-w-md">
            <h2 className="font-mange font-bold text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
              Need something else?
            </h2>
            <div
              className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-4"
              aria-hidden="true"
            />
            <p className="font-montserrat text-[15px] sm:text-base text-[#0F172A]/70 leading-relaxed mt-5">
              Our support team typically responds within one to two business
              days. For account-specific issues, use the email tied to your
              Neioppay account.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <NextLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-6 py-3 font-montserrat text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors w-fit"
              >
                Contact us
              </NextLink>
              <a
                href="mailto:support@neioppay.net"
                className="font-montserrat text-sm font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors"
              >
                support@neioppay.net
              </a>
            </div>
          </div>

          <div className="border-l border-[#D1D5DB] w-full">
            {topics.map((topic) => (
              <NextLink
                key={topic.title}
                href={topic.href}
                className="group block border-b border-[#D1D5DB] first:border-t pl-6 sm:pl-8 lg:pl-10 pr-4 py-5 sm:py-6 hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-montserrat font-semibold text-[15px] sm:text-base text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="font-montserrat text-sm sm:text-[15px] text-[#0F172A]/65 leading-relaxed mt-1.5 max-w-xl">
                      {topic.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#0F172A]/35 group-hover:text-[#3B82F6] transition-colors"
                  >
                    →
                  </span>
                </div>
              </NextLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
