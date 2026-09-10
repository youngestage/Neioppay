"use client";

import React from "react";
import Image from "next/image";
import { BusinessButton } from "@/components/BusinessButton";

const features = [
  {
    id: "accounts",
    title: "Multi-currency business accounts",
    description:
      "Open supported USD, GBP, and EUR accounts to receive international payments and manage foreign business funds.",
    cta: "Explore global accounts",
    href: "#accounts",
    image: "/business/1.webp",
    imageAlt: "Multi-currency business balances for NGN, EUR, and BTC",
    reverse: false,
  },
  {
    id: "payments",
    title: "Local & foreign Payments",
    description:
      "Receive local and foreign payments and keep every transaction visible from your business dashboard.",
    cta: "Start getting paid",
    href: "#payments",
    image: "/business/2.webp",
    imageAlt: "Business payment transactions across multiple currencies",
    reverse: true,
  },
  {
    id: "payouts",
    title: "International payouts",
    description:
      "Send supported currencies to international suppliers, contractors, and business partners from one account.",
    cta: "Start getting paid",
    href: "#payouts",
    image: "/business/3.webp",
    imageAlt: "International bank transfer payout preview",
    reverse: false,
  },
  {
    id: "dashboard",
    title: "Unified dashboard",
    description:
      "View balances, incoming payments, outgoing transfers, and business activity without switching platforms.",
    cta: "View the dashboard",
    href: "#dashboard",
    image: "/business/4.webp",
    imageAlt: "Unified business dashboard with balances and transactions",
    reverse: true,
  },
  {
    id: "crypto",
    title: "Crypto-ready payments",
    description:
      "Manage supported crypto balances and conversions alongside your business currencies.",
    cta: "Explore crypto",
    href: "#crypto",
    image: "/business/5.webp",
    imageAlt: "Crypto payment notification and token balances",
    reverse: false,
  },
  {
    id: "cards",
    title: "Virtual business cards",
    description:
      "Create virtual cards for approved business spending and manage them from your account.",
    cta: "Start getting paid",
    href: "#cards",
    image: "/business/6.webp",
    imageAlt: "Neioppay virtual business cards",
    reverse: true,
  },
] as const;

const rule = "border-[#D1D5DB]";

export const BusinessFeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col gap-16 sm:gap-24 lg:gap-28">
        {features.map((feature) => (
          <div
            key={feature.id}
            id={feature.id}
            className={`flex flex-col items-center justify-between gap-10 sm:gap-14 lg:gap-16 xl:gap-20 ${
              feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="w-full lg:w-[52%] xl:w-[54%] flex items-center justify-center">
              <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] aspect-[1776/1260]">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-contain select-none pointer-events-none drop-shadow-[0_20px_48px_rgba(15,23,42,0.12)]"
                />
              </div>
            </div>

            {/* Text column with vertical + horizontal grey dividers */}
            <div
              className={`w-full lg:w-[48%] xl:w-[46%] max-w-[560px] text-left border-l ${rule} pl-6 sm:pl-8 lg:pl-10`}
            >
              <h2 className="font-mange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] tracking-tight leading-[1.1] text-[#0F172A]">
                {feature.title}
              </h2>

              {/* Horizontal rule meets the vertical border */}
              <div
                className={`-ml-6 sm:-ml-8 lg:-ml-10 border-t ${rule} mt-5 sm:mt-6`}
                aria-hidden="true"
              />

              <p className="font-montserrat font-normal text-base sm:text-[17px] text-[#0F172A]/70 max-w-[460px] mt-5 sm:mt-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-8 sm:mt-10">
                <BusinessButton href={feature.href}>{feature.cta}</BusinessButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
