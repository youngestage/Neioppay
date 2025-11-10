import React from "react";
import Link from "next/link";

export const CardsSection: React.FC = () => {
  return (
    <section className="bg-blue-very-dark py-16 lg:py-24 -mt-16 lg:-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Pay With Our Cards
          </h2>
          <p className="text-lg font-inter text-white max-w-2xl mx-auto mb-8">
            Simple, trusted, and accessible payments. Use your card for effortless online shopping and secure in-store transactions across Africa and beyond.
          </p>
          <div className="flex justify-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/WhatsApp Image 2025-11-10 at 09.53.09 (1).jpeg"
              alt="Neiop Pay Credit Card"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <Link
            href="#personal-account"
            className="inline-block bg-blue-dark text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light transition-colors"
          >
            Get A Personal Account
          </Link>
        </div>
      </div>
    </section>
  );
};


