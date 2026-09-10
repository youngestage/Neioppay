"use client";

import React from "react";
import NextLink from "next/link";
import {
  LegalDocShell,
  LegalSectionHeading,
  LegalP,
  type LegalSection,
} from "@/components/LegalDocShell";

const sections: LegalSection[] = [
  { id: "agreement", title: "1. Agreement to Terms" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "services", title: "3. Our Services" },
  { id: "accounts", title: "4. Accounts & Security" },
  { id: "prohibited", title: "5. Prohibited Use" },
  { id: "fees", title: "6. Fees & Transactions" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "liability", title: "8. Disclaimers & Liability" },
  { id: "termination", title: "9. Suspension & Termination" },
  { id: "law", title: "10. Governing Law" },
  { id: "contact", title: "11. Contact Us" },
];

export const TermsContent: React.FC = () => {
  return (
    <LegalDocShell
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="June 9, 2026"
      sections={sections}
      intro={
        <>
          <LegalP>
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the websites, mobile applications, and payment products
            operated by Neiop Pay Limited (&quot;Neiop Pay,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), including{" "}
            <NextLink
              href="/"
              className="text-[#3B82F6] font-semibold hover:underline"
            >
              neioppay.com
            </NextLink>{" "}
            (collectively, the &quot;Services&quot;).
          </LegalP>
          <LegalP className="italic text-[#0F172A]/65">
            By creating an account or using the Services, you agree to these
            Terms and our{" "}
            <NextLink
              href="/privacy"
              className="text-[#3B82F6] font-semibold hover:underline not-italic"
            >
              Privacy Policy
            </NextLink>
            . If you do not agree, do not use the Services.
          </LegalP>
        </>
      }
    >
      <article className="space-y-4">
        <LegalSectionHeading id="agreement">
          1. Agreement to Terms
        </LegalSectionHeading>
        <LegalP>
          These Terms form a binding agreement between you and Neiop Pay Limited.
          Additional product-specific terms may apply to certain features (for
          example cards, loans, or business accounts). If there is a conflict,
          the product-specific terms control for that feature.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="eligibility">2. Eligibility</LegalSectionHeading>
        <LegalP>To use the Services you must:</LegalP>
        <ul className="space-y-2.5">
          {[
            "Be at least 18 years old (or the age of majority in your jurisdiction).",
            "Have the legal capacity to enter into a binding contract.",
            "Complete identity verification (KYC) where required.",
            "Not be prohibited from using financial services under applicable law, sanctions, or our internal risk policies.",
          ].map((text) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
              <LegalP>{text}</LegalP>
            </li>
          ))}
        </ul>
        <LegalP>
          Business accounts may only be opened by authorized representatives of
          the legal entity, and you represent that you have authority to bind
          that entity.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="services">3. Our Services</LegalSectionHeading>
        <LegalP>
          Neiop Pay provides digital financial services that may include
          multi-currency balances, local and cross-border payments, virtual and
          physical cards, crypto-related features where available, and related
          account tools. Features may vary by country, eligibility, and
          regulatory approval.
        </LegalP>
        <LegalP>
          We may modify, suspend, or discontinue any part of the Services with
          notice where required by law, or immediately when needed for security,
          fraud prevention, or regulatory compliance.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="accounts">
          4. Accounts & Security
        </LegalSectionHeading>
        <LegalP>
          You are responsible for maintaining the confidentiality of your login
          credentials, devices, and authentication methods (including MFA). You
          must notify us promptly of any unauthorized access or suspected
          compromise of your account.
        </LegalP>
        <LegalP>
          You agree to provide accurate, complete information and to keep it
          updated. We may refuse, limit, or close accounts that fail verification
          or present elevated risk.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="prohibited">
          5. Prohibited Use
        </LegalSectionHeading>
        <LegalP>You agree not to use the Services to:</LegalP>
        <ul className="space-y-2.5">
          {[
            "Violate any applicable law, regulation, or sanctions program.",
            "Engage in fraud, money laundering, terrorist financing, or other financial crime.",
            "Infringe intellectual property or privacy rights of others.",
            "Interfere with or disrupt the Services, networks, or security controls.",
            "Misrepresent your identity, business, or the purpose of a transaction.",
            "Use the Services for prohibited industries or activities we designate from time to time.",
          ].map((text) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
              <LegalP>{text}</LegalP>
            </li>
          ))}
        </ul>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="fees">
          6. Fees & Transactions
        </LegalSectionHeading>
        <LegalP>
          Fees, FX spreads, and limits may apply to transfers, conversions,
          cards, and other features. Applicable fees will be disclosed in the app
          or on our Site before you confirm a transaction where practicable.
        </LegalP>
        <LegalP>
          Transaction processing times depend on banking partners, networks, and
          compliance checks. We are not responsible for delays caused by
          third-party institutions or incorrect recipient details you provide.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="ip">
          7. Intellectual Property
        </LegalSectionHeading>
        <LegalP>
          The Services, including branding, software, content, and design, are
          owned by Neiop Pay or its licensors. You receive a limited,
          non-exclusive, non-transferable license to use the Services for their
          intended purpose. You may not copy, reverse engineer, or exploit the
          Services except as allowed by law.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="liability">
          8. Disclaimers & Limitation of Liability
        </LegalSectionHeading>
        <LegalP>
          The Services are provided on an &quot;as available&quot; basis. To the
          fullest extent permitted by law, Neiop Pay disclaims warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </LegalP>
        <LegalP>
          To the fullest extent permitted by law, Neiop Pay and its affiliates
          will not be liable for indirect, incidental, special, consequential, or
          punitive damages, or for loss of profits, data, or goodwill. Our total
          liability arising out of these Terms or the Services will not exceed
          the fees you paid to us for the Services in the three (3) months
          preceding the claim, except where liability cannot be limited by law
          (including fraud or willful misconduct).
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="termination">
          9. Suspension & Termination
        </LegalSectionHeading>
        <LegalP>
          You may stop using the Services at any time. We may suspend or
          terminate access immediately if you breach these Terms, present
          compliance or fraud risk, or if required by law or a partner
          institution. Upon termination, provisions that by nature should survive
          (including liability limits, IP, and governing law) will continue to
          apply.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="law">10. Governing Law</LegalSectionHeading>
        <LegalP>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to conflict-of-law principles, except where
          mandatory local consumer or financial laws of your residence apply.
          Disputes will first be addressed through good-faith discussion with our
          support team.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="contact">11. Contact Us</LegalSectionHeading>
        <LegalP>
          For questions about these Terms, contact Neiop Pay Limited:
        </LegalP>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 border-l border-[#D1D5DB] pl-5">
          <div className="space-y-4">
            <div>
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#0F172A]/40 font-semibold block mb-1">
                Email
              </span>
              <a
                href="mailto:support@neiopay.com"
                className="font-montserrat font-semibold text-[#3B82F6] hover:underline break-all"
              >
                support@neiopay.com
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#0F172A]/40 font-semibold block mb-1">
                Nigeria
              </span>
              <LegalP>
                9b second powerline, opposite the Gen school Sango
              </LegalP>
            </div>
            <div>
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#0F172A]/40 font-semibold block mb-1">
                Canada
              </span>
              <LegalP>
                241 Elizabeth Avenue St. John&apos;s Province Newfoundland and
                Labrador
              </LegalP>
            </div>
          </div>
        </div>
      </article>
    </LegalDocShell>
  );
};
