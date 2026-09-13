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
  { id: "commitment", title: "1. Our Commitment" },
  { id: "framework", title: "2. Regulatory Framework" },
  { id: "kyc", title: "3. Customer Due Diligence" },
  { id: "monitoring", title: "4. Transaction Monitoring" },
  { id: "reporting", title: "5. Suspicious Activity" },
  { id: "sanctions", title: "6. Sanctions & Prohibited Use" },
  { id: "records", title: "7. Record Keeping" },
  { id: "contact", title: "8. Contact" },
];

export const AmlContent: React.FC = () => {
  return (
    <LegalDocShell
      eyebrow="Legal"
      title="AML Policy"
      lastUpdated="September 11, 2026"
      sections={sections}
      intro={
        <>
          <LegalP>
            This Anti-Money Laundering and Counter-Financing of Terrorism
            (AML/CFT) Policy explains how Neiop Pay Limited (&quot;Neiop
            Pay,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            detects, prevents, and reports money laundering, terrorist
            financing, and related financial crime across the Neioppay
            Services.
          </LegalP>
          <LegalP className="italic text-[#0F172A]/65">
            Using Neioppay means you agree to cooperate with our verification,
            monitoring, and compliance requests. We may decline, delay, or
            reverse transactions, or restrict accounts, where required by law
            or our risk policies.
          </LegalP>
        </>
      }
    >
      <article className="space-y-4">
        <LegalSectionHeading id="commitment">
          1. Our Commitment
        </LegalSectionHeading>
        <LegalP>
          Neiop Pay is committed to maintaining a robust AML/CFT programme
          proportionate to the products we offer — including payments,
          multi-currency accounts, cards, and related services. Senior
          management oversees compliance culture, risk assessment, and
          escalation of high-risk cases.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="framework">
          2. Regulatory Framework
        </LegalSectionHeading>
        <LegalP>
          Our programme is designed to align with applicable Nigerian AML/CFT
          requirements and related guidance for payment service providers,
          including obligations connected to customer identification, ongoing
          monitoring, suspicious transaction reporting, and sanctions screening
          where required.
        </LegalP>
        <LegalP>
          Where we operate or process activity involving other jurisdictions,
          we also consider relevant international standards and correspondent
          or partner bank expectations.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="kyc">
          3. Customer Due Diligence
        </LegalSectionHeading>
        <LegalP>
          Before opening or fully activating an account, and at intervals
          thereafter, we apply customer due diligence (CDD), which may include:
        </LegalP>
        <ul className="space-y-2.5">
          {[
            "Collecting and verifying identity information (for example name, date of birth, address, and government ID).",
            "Understanding the nature and purpose of the account or business relationship.",
            "Applying enhanced due diligence for higher-risk customers, products, or geographies.",
            "Re-verifying information when risk indicators change or documents expire.",
          ].map((text) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
              <LegalP>{text}</LegalP>
            </li>
          ))}
        </ul>
        <LegalP>
          Business customers may be asked for corporate documents, beneficial
          ownership details, and evidence of authority to open and operate the
          account.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="monitoring">
          4. Transaction Monitoring
        </LegalSectionHeading>
        <LegalP>
          We monitor account activity for unusual patterns, volume, velocity,
          or counterparties that may indicate money laundering, fraud, or other
          prohibited conduct. Monitoring may be automated, manual, or both, and
          may lead to additional questions, holds, or account restrictions
          while we investigate.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="reporting">
          5. Suspicious Activity
        </LegalSectionHeading>
        <LegalP>
          Where we have reasonable grounds to suspect money laundering,
          terrorist financing, or related offences, we may file reports with
          the appropriate authorities as required by law. We do not tip off
          customers about such reports or investigations where disclosure is
          restricted.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="sanctions">
          6. Sanctions & Prohibited Use
        </LegalSectionHeading>
        <LegalP>
          Neiop Pay screens customers and, where applicable, transactions
          against relevant sanctions and prohibited-party lists. You may not
          use the Services to process funds for sanctioned persons, restricted
          jurisdictions, or illegal activity. Attempting to evade screening or
          verification is grounds for immediate suspension or termination.
        </LegalP>
        <LegalP>
          For broader product rules, see our{" "}
          <NextLink
            href="/terms"
            className="text-[#3B82F6] font-semibold hover:underline"
          >
            Terms of Service
          </NextLink>
          .
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="records">7. Record Keeping</LegalSectionHeading>
        <LegalP>
          We retain identification, KYC, and transaction records for the
          periods required under applicable AML/CFT and financial-services
          rules — often several years after account closure. Retention for
          compliance may continue even after a customer requests account
          deletion; see our{" "}
          <NextLink
            href="/delete-account"
            className="text-[#3B82F6] font-semibold hover:underline"
          >
            Delete account
          </NextLink>{" "}
          page and{" "}
          <NextLink
            href="/privacy"
            className="text-[#3B82F6] font-semibold hover:underline"
          >
            Privacy Policy
          </NextLink>
          .
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="contact">8. Contact</LegalSectionHeading>
        <LegalP>
          Questions about this AML Policy or compliance requests can be sent
          to:
        </LegalP>
        <LegalP>
          Neiop Pay Limited
          <br />
          Email:{" "}
          <a
            href="mailto:support@neioppay.net"
            className="text-[#3B82F6] font-semibold hover:underline"
          >
            support@neioppay.net
          </a>
        </LegalP>
      </article>
    </LegalDocShell>
  );
};
