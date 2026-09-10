"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import {
  LegalDocShell,
  LegalSectionHeading,
  LegalP,
  type LegalSection,
} from "@/components/LegalDocShell";

const sections: LegalSection[] = [
  { id: "overview", title: "1. About This Request" },
  { id: "steps", title: "2. How To Request Deletion" },
  { id: "data", title: "3. What Data Is Deleted Or Kept" },
  { id: "form", title: "4. Submit A Request" },
  { id: "contact", title: "5. Contact" },
];

export const AccountDeletionContent: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountId, setAccountId] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend wiring comes later — keep the payload shape ready.
    const payload = {
      type: "account_deletion_request",
      app: "Neioppay",
      developer: "Neiop Pay Limited",
      fullName,
      email,
      phone,
      accountId,
      details,
      requestedAt: new Date().toISOString(),
    };
    void payload;
    setSubmitted(true);
  };

  return (
    <LegalDocShell
      eyebrow="Neioppay · Google Play"
      title="Delete Your Account"
      lastUpdated="September 10, 2026"
      sections={sections}
      intro={
        <>
          <LegalP>
            This page is for users of the <strong>Neioppay</strong> mobile app
            and related services operated by{" "}
            <strong>Neiop Pay Limited</strong>. Use it to request that your
            Neioppay account and associated personal data be deleted.
          </LegalP>
          <LegalP>
            Requests are reviewed by our support team. Some records may be
            retained where required by law (see Section 3).
          </LegalP>
        </>
      }
    >
      <article className="space-y-4">
        <LegalSectionHeading id="overview">
          1. About This Request
        </LegalSectionHeading>
        <LegalP>
          Deleting your Neioppay account permanently closes access to the app
          and removes personal data we no longer need to keep. This process
          applies to accounts created through the Neioppay Android / iOS apps
          and our website services.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="steps">
          2. How To Request Deletion
        </LegalSectionHeading>
        <LegalP>
          Follow these steps to request that your Neioppay account and
          associated data are deleted:
        </LegalP>
        <ol className="space-y-5 mt-2">
          {[
            "Open this page from the Neioppay Play Store listing, the app, or neioppay.net.",
            "Complete the request form in Section 4 with the email / phone number linked to your Neioppay account.",
            "Optionally include your account ID or any details that help us verify ownership.",
            "Submit the form. We will confirm by email and process verified requests.",
            "Alternatively, email support@neiopay.com with the subject line “Account deletion request” and your registered email or phone number.",
          ].map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="font-mange font-bold text-[#3B82F6] text-lg leading-none pt-0.5 shrink-0 w-6">
                {index + 1}
              </span>
              <LegalP>{step}</LegalP>
            </li>
          ))}
        </ol>
        <LegalP className="mt-2">
          Typical processing time is up to 30 days after we verify your
          identity, unless a longer legal retention period applies to specific
          records.
        </LegalP>
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="data">
          3. What Data Is Deleted Or Kept
        </LegalSectionHeading>
        <LegalP>
          After a verified deletion request, Neiop Pay Limited handles data as
          follows:
        </LegalP>

        <div className="space-y-6 mt-2">
          <div className="border-l border-[#D1D5DB] pl-5">
            <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-2">
              Deleted
            </p>
            <ul className="space-y-2.5">
              {[
                "Profile details used for everyday app access (name display preferences, saved payees you added, in-app settings).",
                "Device tokens and marketing / push notification preferences tied to the account.",
                "Optional profile content that is not required for legal retention.",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                  <LegalP>{text}</LegalP>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l border-[#D1D5DB] pl-5">
            <p className="font-montserrat font-semibold text-sm text-[#1E40AF] mb-2">
              Retained (where required by law)
            </p>
            <ul className="space-y-2.5">
              {[
                "Identity / KYC records and transaction history required under AML/CFT rules — typically retained for 5 to 7 years after account closure.",
                "Records needed for fraud prevention, dispute resolution, audits, or lawful requests from regulators.",
                "Anonymized or aggregated analytics that no longer identify you.",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                  <LegalP>{text}</LegalP>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <LegalP>
          For more detail, see our{" "}
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
        <LegalSectionHeading id="form">4. Submit A Request</LegalSectionHeading>
        <LegalP>
          Use this form to request deletion of your Neioppay account. Fields
          marked * are required.
        </LegalP>

        {submitted ? (
          <div className="border-l border-[#3B82F6] pl-5 py-2 mt-4">
            <p className="font-montserrat font-semibold text-[#0F172A] mb-2">
              Request received
            </p>
            <LegalP>
              Thanks — your deletion request has been recorded. Our team will
              follow up at the email you provided. If you need help sooner,
              write to{" "}
              <a
                href="mailto:support@neiopay.com?subject=Account%20deletion%20request"
                className="text-[#3B82F6] font-semibold hover:underline"
              >
                support@neiopay.com
              </a>
              .
            </LegalP>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-5 max-w-xl"
            noValidate
          >
            <div>
              <label
                htmlFor="deletion-name"
                className="block font-montserrat text-sm font-medium text-[#0F172A] mb-1.5"
              >
                Full name *
              </label>
              <input
                id="deletion-name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 font-montserrat text-[15px] text-[#0F172A] outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="deletion-email"
                className="block font-montserrat text-sm font-medium text-[#0F172A] mb-1.5"
              >
                Account email *
              </label>
              <input
                id="deletion-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 font-montserrat text-[15px] text-[#0F172A] outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="deletion-phone"
                className="block font-montserrat text-sm font-medium text-[#0F172A] mb-1.5"
              >
                Phone number
              </label>
              <input
                id="deletion-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 font-montserrat text-[15px] text-[#0F172A] outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="deletion-account"
                className="block font-montserrat text-sm font-medium text-[#0F172A] mb-1.5"
              >
                Account ID (if known)
              </label>
              <input
                id="deletion-account"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 font-montserrat text-[15px] text-[#0F172A] outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="deletion-details"
                className="block font-montserrat text-sm font-medium text-[#0F172A] mb-1.5"
              >
                Additional details
              </label>
              <textarea
                id="deletion-details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 font-montserrat text-[15px] text-[#0F172A] outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 resize-y"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-montserrat font-medium text-base shadow-lg shadow-blue-500/25 transition-all duration-300"
            >
              Request account deletion
            </button>
          </form>
        )}
      </article>

      <article className="space-y-4">
        <LegalSectionHeading id="contact">5. Contact</LegalSectionHeading>
        <LegalP>
          Neiop Pay Limited · Neioppay app support:{" "}
          <a
            href="mailto:support@neiopay.com"
            className="text-[#3B82F6] font-semibold hover:underline"
          >
            support@neiopay.com
          </a>
        </LegalP>
      </article>
    </LegalDocShell>
  );
};
