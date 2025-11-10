import React from "react";
import Link from "next/link";
import { WavyDivider } from "./WavyDivider";

export const PersonalBanking: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-light font-inter font-semibold uppercase text-sm mb-4 block">
              Personal Banking
            </span>
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-blue-very-dark mb-6">
              Pay Bills For Less Anytime
            </h3>
            <p className="text-lg font-inter text-blue-very-dark mb-8">
              Fast, secure, and seamless bill payments that promote financial inclusion and convenience. Pay less and easily with Neiop Pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#download-app"
                className="bg-blue-dark text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light transition-colors text-center"
              >
                Download App
              </Link>
              <Link
                href="#download-app"
                className="bg-white text-blue-dark border-2 border-blue-dark px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-light hover:text-white transition-colors text-center"
              >
                Download App
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/WhatsApp Image 2025-11-10 at 09.53.09.jpeg"
              alt="Bills Payment App"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <WavyDivider className="text-blue-light" flip />
    </section>
  );
};

