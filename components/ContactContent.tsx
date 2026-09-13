"use client";

import React, { useState } from "react";
import NextLink from "next/link";

export const ContactContent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      type: "contact_request",
      name,
      email,
      topic,
      message,
      requestedAt: new Date().toISOString(),
    };
    void payload;
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 font-montserrat text-[15px] text-[#0F172A] placeholder:text-[#0F172A]/35 outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/15 transition";

  return (
    <>
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 border-b border-[#E5E7EB]">
        <div className="w-full max-w-[1800px] mx-auto">
          <div className="max-w-4xl border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10">
            <h1 className="font-mange font-bold text-4xl sm:text-5xl md:text-6xl text-[#0F172A] tracking-tight leading-[1.08]">
              Contact us
            </h1>
            <div
              className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-6"
              aria-hidden="true"
            />
            <p className="font-montserrat text-base sm:text-[17px] text-[#0F172A]/75 leading-relaxed mt-5 max-w-2xl">
              Questions about your account, transfers, business banking, or the
              app — we&apos;re here. Send a message or email us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 xl:gap-24">
          <div className="border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10 space-y-8 max-w-md">
            <div>
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]/40 mb-3">
                Email
              </p>
              <a
                href="mailto:support@neioppay.net"
                className="font-montserrat text-lg sm:text-xl font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors break-all"
              >
                support@neioppay.net
              </a>
            </div>

            <div>
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]/40 mb-3">
                Response time
              </p>
              <p className="font-montserrat text-[15px] text-[#0F172A]/70 leading-relaxed">
                We aim to reply within 1–2 business days. Urgent account or
                security issues get priority — include your registered email or
                phone in the message.
              </p>
            </div>

            <div>
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]/40 mb-3">
                Quick links
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "FAQ", href: "/faq" },
                  { label: "Help center", href: "/help" },
                  { label: "Delete account", href: "/delete-account" },
                  { label: "Privacy policy", href: "/privacy" },
                ].map((item) => (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      className="font-montserrat text-[15px] text-[#0F172A]/75 hover:text-[#3B82F6] transition-colors"
                    >
                      {item.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-l border-[#D1D5DB] pl-6 sm:pl-8 lg:pl-10 max-w-xl">
            {submitted ? (
              <div className="py-4">
                <h2 className="font-mange font-bold text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
                  Message received
                </h2>
                <div
                  className="-ml-6 sm:-ml-8 lg:-ml-10 border-t border-[#D1D5DB] mt-4"
                  aria-hidden="true"
                />
                <p className="font-montserrat text-[15px] sm:text-base text-[#0F172A]/70 leading-relaxed mt-5">
                  Thanks for reaching out. Our team will get back to you at the
                  email you provided. For faster follow-up you can also write to{" "}
                  <a
                    href="mailto:support@neioppay.net"
                    className="text-[#3B82F6] font-semibold hover:underline"
                  >
                    support@neioppay.net
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-montserrat text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-montserrat text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block font-montserrat text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="general">General question</option>
                    <option value="account">Account & verification</option>
                    <option value="transfers">Transfers & payments</option>
                    <option value="business">Business banking</option>
                    <option value="security">Security concern</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-montserrat text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldClass} resize-y min-h-[140px]`}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-3.5 font-montserrat text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
