"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import NextLink from "next/link";

type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    id: "what-is",
    question: "What is Neioppay?",
    answer:
      "Neioppay is a global banking app from Neiop Pay Limited. Send, receive, and convert money from one place — including multi-currency balances, cards, cross-border transfers, and crypto features where available.",
  },
  {
    id: "countries",
    question: "Where can I use Neioppay?",
    answer:
      "Neioppay is built for people and businesses moving money across borders. Availability of specific currencies, accounts, and features can vary by country and verification status.",
  },
  {
    id: "currencies",
    question: "Which currencies and accounts can I open?",
    answer:
      "Depending on eligibility, you can hold multi-currency balances and open supported foreign accounts such as USD, GBP, and EUR, alongside local balances — all in one view.",
  },
  {
    id: "security",
    question: "Is Neioppay safe and regulated?",
    answer:
      "Neioppay operates under Nigerian financial regulation, with CBN licensing and NDIC insurance where applicable. We use secure infrastructure and monitoring to help protect your accounts and transfers.",
  },
  {
    id: "business",
    question: "Do you support businesses?",
    answer: (
      <>
        Yes. Business customers can use multi-currency accounts, local and foreign
        payments, international payouts, and related tools. Learn more on our{" "}
        <NextLink
          href="/buisness"
          className="text-[#3B82F6] font-semibold hover:underline"
        >
          Business
        </NextLink>{" "}
        page.
      </>
    ),
  },
  {
    id: "delete",
    question: "How do I delete my account?",
    answer: (
      <>
        You can request account and data deletion anytime. Follow the steps on our{" "}
        <NextLink
          href="/delete-account"
          className="text-[#3B82F6] font-semibold hover:underline"
        >
          Delete account
        </NextLink>{" "}
        page, or email support@neioppay.net.
      </>
    ),
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-24 lg:py-28"
    >
      <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 sm:gap-14 lg:gap-20 xl:gap-28 items-start">
        <div className="border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10 max-w-[520px]">
          <h2 className="font-mange font-bold text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] tracking-tight leading-[1.08] text-[#0F172A]">
            Questions,
            <br />
            answered.
          </h2>
          <div
            className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-5 sm:mt-6"
            aria-hidden="true"
          />
          <p className="font-montserrat text-base sm:text-[17px] text-[#0F172A]/70 mt-5 sm:mt-6 leading-relaxed max-w-[400px]">
            Quick answers about Neioppay accounts, transfers, security, and
            support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <NextLink
              href="/help"
              className="inline-flex items-center font-montserrat font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors"
            >
              Visit help center
            </NextLink>
            <NextLink
              href="/contact"
              className="inline-flex items-center font-montserrat font-medium text-[#0F172A]/55 hover:text-[#0F172A] transition-colors"
            >
              Contact us
            </NextLink>
          </div>
        </div>

        <div className="border-l border-[#D1D5DB] w-full">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-[#D1D5DB] first:border-t"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full flex items-center justify-between gap-6 pl-6 sm:pl-8 lg:pl-10 pr-2 sm:pr-4 py-5 sm:py-6 text-left group"
                >
                  <span className="font-montserrat font-semibold text-[15px] sm:text-base md:text-[17px] text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D1D5DB] text-[#0F172A] transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0F172A] text-white border-[#0F172A] rotate-180"
                        : "bg-white group-hover:border-[#3B82F6]/40"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-6 sm:pl-8 lg:pl-10 pr-12 sm:pr-16 pb-5 sm:pb-6">
                      <p className="font-montserrat text-[15px] sm:text-base text-[#0F172A]/70 leading-relaxed max-w-[560px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
