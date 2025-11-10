import React from "react";
import Link from "next/link";
import { WavyDivider } from "./WavyDivider";

export const BusinessBanking: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-light font-inter font-semibold uppercase text-sm mb-4 block">
              Business Banking
            </span>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-blue-very-dark mb-6">
              Run your business wherever you go with our all-in-one manager.
            </h3>
            <p className="text-lg font-inter text-blue-very-dark mb-8">
              Connect your business to a leading digital financial ecosystem. Accept payments seamlessly, manage operations, and track transactions — all in one trusted platform.
            </p>
            <Link
              href="#business-account"
              className="inline-block bg-blue-dark text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light transition-colors"
            >
              Open a Business Account
            </Link>
          </div>
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/WhatsApp Image 2025-11-10 at 09.53.11.jpeg"
              alt="Business Management Dashboard"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <WavyDivider className="text-blue-light" flip />
    </section>
  );
};

