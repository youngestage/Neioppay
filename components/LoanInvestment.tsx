import React from "react";
import Link from "next/link";
import { WavyDivider } from "./WavyDivider";

export const LoanInvestment: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/WhatsApp Image 2025-11-10 at 09.53.10.jpeg"
              alt="Financial Growth and Investment"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-blue-light font-inter font-semibold uppercase text-sm mb-4 block">
              Loan & Investment
            </span>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-blue-very-dark mb-6">
              Get Loans at Competitive Rates at Neiop Pay
            </h3>
            <p className="text-lg font-inter text-blue-very-dark mb-8">
              Empowering your financial future through strategic investments and flexible loans at competitive rates. Transparent, accessible, and designed to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#get-started"
                className="bg-blue-dark text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                href="#get-started"
                className="bg-white text-blue-dark border-2 border-blue-dark px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light hover:text-white transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WavyDivider className="text-blue-light" />
    </section>
  );
};

