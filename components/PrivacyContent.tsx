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
  { id: "scope", title: "1. Scope & Compliance" },
  { id: "collect", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Your Info" },
  { id: "share", title: "4. How We Share Info" },
  { id: "transfers", title: "5. Cross-Border Transfers" },
  { id: "rights", title: "6. Data Protection Rights" },
  { id: "retention", title: "7. Data Retention" },
  { id: "security", title: "8. Security of Your Data" },
  { id: "changes", title: "9. Policy Changes" },
  { id: "contact", title: "10. Contact Us" },
];

export const PrivacyContent: React.FC = () => {
  return (
    <LegalDocShell
      eyebrow="Regulatory Compliance"
      title="Privacy Policy"
      lastUpdated="June 9, 2026"
      sections={sections}
      intro={
        <>
          <LegalP>
            Welcome to Neiop Pay. We value your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how Neiop
            Pay Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            collects, uses, discloses, and safeguards your information when you
            visit our website at{" "}
            <NextLink
              href="/"
              className="text-[#3B82F6] font-semibold hover:underline"
            >
              neioppay.com
            </NextLink>{" "}
            (the &quot;Site&quot;) and use our mobile application or payment
            services (collectively, the &quot;Services&quot;).
          </LegalP>
          <LegalP className="italic text-[#0F172A]/65">
            Please read this Privacy Policy carefully. By accessing or using our
            Services, you agree to the collection and use of your information in
            accordance with this policy.
          </LegalP>
        </>
      }
    >
      <article className="space-y-4">
        <LegalSectionHeading id="scope">
          1. Scope and Regulatory Compliance
        </LegalSectionHeading>
        <LegalP>
          This Privacy Policy is designed to meet strict global and regional
          regulatory standards, specifically governing users in Nigeria and the
          United States:
        </LegalP>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          <div className="border-l border-[#D1D5DB] pl-5">
            <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-1">
              Nigeria
            </p>
            <LegalP>
              Compliant with the Nigeria Data Protection Act (NDPA) 2023 and
              overseen by the Nigeria Data Protection Commission (NDPC).
            </LegalP>
          </div>
          <div className="border-l border-[#D1D5DB] pl-5">
            <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-1">
              United States
            </p>
            <LegalP>
              Compliant with the Gramm-Leach-Bliley Act (GLBA) for financial
              privacy and state-specific laws including the California Consumer
              Privacy Act (CCPA/CPRA).
            </LegalP>
          </div>
        </div>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="collect">
          2. Information We Collect
        </LegalSectionHeading>
        <LegalP>
          We collect several types of information from and about users of our
          Services, categorized as follows:
        </LegalP>

        <div className="space-y-8 mt-2">
          <div>
            <h3 className="font-mange font-bold text-lg sm:text-xl text-[#0F172A] mb-3">
              A. Information You Provide to Us
            </h3>
            <ul className="space-y-3.5">
              {[
                {
                  label: "Identity Data",
                  text: "Full name, date of birth, gender, nationality, and government-issued identification numbers (e.g., Nigerian BVN, NIN, or U.S. Social Security Number/ITIN) required for identity verification and Know Your Customer (KYC) compliance.",
                },
                {
                  label: "Contact Data",
                  text: "Email address, phone number, billing address, and physical mailing address.",
                },
                {
                  label: "Financial Data",
                  text: "Bank account details, payment card numbers, transaction history, and credit-related information.",
                },
                {
                  label: "Profile Data",
                  text: "Username, password, security questions, preferences, and feedback.",
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                  <LegalP>
                    <strong className="text-[#1E40AF] font-semibold">
                      {item.label}:
                    </strong>{" "}
                    {item.text}
                  </LegalP>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mange font-bold text-lg sm:text-xl text-[#0F172A] mb-3">
              B. Information Collected Automatically
            </h3>
            <ul className="space-y-3.5">
              {[
                {
                  label: "Technical Data",
                  text: "Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types, operating system, and platform.",
                },
                {
                  label: "Usage Data",
                  text: "Information about how you navigate and use our Site, products, and Services.",
                },
                {
                  label: "Geolocation Data",
                  text: "Precise physical location of your device, utilized for fraud prevention and compliance monitoring.",
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                  <LegalP>
                    <strong className="text-[#1E40AF] font-semibold">
                      {item.label}:
                    </strong>{" "}
                    {item.text}
                  </LegalP>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="use">
          3. How We Use Your Information
        </LegalSectionHeading>
        <LegalP>
          We process your personal data under valid legal bases as defined by the
          NDPA and U.S. federal frameworks. We use your data to:
        </LegalP>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mt-2">
          {[
            {
              title: "Provide Services",
              desc: "Process payments, manage accounts, and facilitate money transfers.",
            },
            {
              title: "Verify Identity",
              desc: "Conduct mandatory KYC, Anti-Money Laundering (AML), and Counter-Terrorist Financing (CTF) screenings.",
            },
            {
              title: "Prevent Fraud",
              desc: "Monitor transaction patterns, detect unauthorized access, and secure our systems.",
            },
            {
              title: "Customer Support",
              desc: "Respond to inquiries, troubleshoot bugs, and resolve payment disputes.",
            },
            {
              title: "Legal Compliance",
              desc: "Comply with applicable financial laws, court orders, and regulatory audit requests.",
            },
          ].map((item) => (
            <li key={item.title} className="border-l border-[#D1D5DB] pl-4">
              <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-1">
                {item.title}
              </p>
              <LegalP>{item.desc}</LegalP>
            </li>
          ))}
        </ul>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="share">
          4. How We Share Your Information
        </LegalSectionHeading>
        <LegalP>
          We do not sell your personal information. We may share your data with
          trusted third parties only under the following circumstances:
        </LegalP>
        <ol className="space-y-5 mt-2">
          {[
            {
              label: "Financial Partners",
              text: "Banking institutions, payment processors (e.g., Interswitch, Paystack, Stripe), and card networks to clear transactions.",
            },
            {
              label: "Identity Verification Vendors",
              text: "Approved agencies to validate your government identity documentation and BVN/SSN records.",
            },
            {
              label: "Service Providers",
              text: "Cloud hosting infrastructure providers, security auditors, and analytics tools working under strict confidentiality agreements.",
            },
            {
              label: "Law Enforcement & Regulators",
              text: "When legally compelled by agencies such as the Economic and Financial Crimes Commission (EFCC) in Nigeria, or the Financial Crimes Enforcement Network (FinCEN) and Consumer Financial Protection Bureau (CFPB) in the U.S.",
            },
          ].map((partner, index) => (
            <li key={partner.label} className="flex gap-4">
              <span className="font-mange font-bold text-[#3B82F6] text-lg leading-none pt-0.5 shrink-0 w-6">
                {index + 1}
              </span>
              <div>
                <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-1">
                  {partner.label}
                </p>
                <LegalP>{partner.text}</LegalP>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="transfers">
          5. Cross-Border Data Transfers
        </LegalSectionHeading>
        <LegalP>
          Neiop Pay operates globally. Information collected from Nigeria may be
          transferred to, stored, and processed in the United States, Canada, or
          other international jurisdictions.
        </LegalP>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          <div className="border-l border-[#D1D5DB] pl-5">
            <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-1">
              NDPA Compliance
            </p>
            <LegalP>
              We ensure all international transfers adhere to the adequacy
              requirements or standard contractual clauses approved by the NDPC.
            </LegalP>
          </div>
          <div className="border-l border-[#D1D5DB] pl-5">
            <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-1">
              Data Security
            </p>
            <LegalP>
              Data in transit is protected using advanced Transport Layer
              Security (TLS) encryption, and data at rest is secured via AES-256
              standard encryption.
            </LegalP>
          </div>
        </div>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="rights">
          6. Your Data Protection Rights
        </LegalSectionHeading>
        <LegalP>
          Depending on your location, you have specific data protection rights
          under applicable laws. To exercise any of these rights, please contact
          us at the email listed in Section 10.
        </LegalP>

        <div className="space-y-8 mt-2">
          <div>
            <h3 className="font-mange font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
              A. Nigerian Jurisdiction Rights (Under NDPA)
            </h3>
            <LegalP className="mb-3">
              If you reside in Nigeria, you have the right to:
            </LegalP>
            <ul className="space-y-2.5">
              {[
                "Request access to or copies of your personal data.",
                "Rectify inaccurate or incomplete information.",
                "Object to or restrict the processing of your data.",
                'Request the erasure ("right to be forgotten") of your data, subject to mandatory financial record retention laws.',
                "Withdraw your consent at any time for data processed based on consent.",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                  <LegalP>{text}</LegalP>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mange font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
              B. United States Jurisdiction Rights (Under GLBA & CCPA)
            </h3>
            <LegalP className="mb-3">If you are a U.S. resident:</LegalP>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                <LegalP>
                  <strong className="text-[#1E40AF] font-semibold">
                    GLBA Opt-Out:
                  </strong>{" "}
                  You have the right to opt out of us sharing your non-public
                  personal financial information with non-affiliated third
                  parties for marketing purposes.
                </LegalP>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                <LegalP>
                  <strong className="text-[#1E40AF] font-semibold">
                    CCPA Rights (California Residents):
                  </strong>{" "}
                  You have the right to know what personal information we
                  collect, request deletion, and opt out of any potential
                  &quot;sale&quot; or &quot;sharing&quot; of data for
                  cross-contextual behavioral advertising.
                </LegalP>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="retention">7. Data Retention</LegalSectionHeading>
        <LegalP>
          We retain your personal data only as long as necessary to fulfill the
          purposes outlined in this policy. Because we operate as a financial
          service provider, we are legally required by AML/CFT frameworks in both
          Nigeria and the U.S. to retain core customer identification and
          transaction records for a minimum period of five (5) to seven (7) years
          following the closure of your account.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="security">
          8. Security of Your Data
        </LegalSectionHeading>
        <LegalP>
          We implement robust technical, physical, and administrative security
          measures designed to protect your personal information from
          unauthorized access, loss, or alteration. These include end-to-end
          encryption, multi-factor authentication (MFA), network firewalls, and
          regular security vulnerability assessments.
        </LegalP>
        <LegalP className="italic text-[#0F172A]/65">
          However, no electronic transmission or storage system is 100% secure;
          we cannot guarantee absolute security.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="changes">
          9. Changes to This Privacy Policy
        </LegalSectionHeading>
        <LegalP>
          We may update our Privacy Policy from time to time to reflect changes
          in our practices or legal obligations. We will notify you of any
          material changes by posting the new policy on this page and updating
          the &quot;Last Updated&quot; date. We encourage you to review this
          policy periodically.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="contact">10. Contact Us</LegalSectionHeading>
        <LegalP>
          If you have any questions, concerns, complaints, or wish to exercise
          your data protection rights, please contact our Data Protection Officer
          (DPO) at:
        </LegalP>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 border-l border-[#D1D5DB] pl-5">
          <div className="space-y-4">
            <div>
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#0F172A]/40 font-semibold block mb-1">
                Company Name
              </span>
              <p className="font-montserrat font-semibold text-[#1E40AF]">
                Neiop Pay Limited
              </p>
            </div>
            <div>
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#0F172A]/40 font-semibold block mb-1">
                Email Address
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
                Physical Address (Nigeria)
              </span>
              <LegalP>
                9b second powerline, opposite the Gen school Sango
              </LegalP>
            </div>
            <div>
              <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#0F172A]/40 font-semibold block mb-1">
                Physical Address (Canada)
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
