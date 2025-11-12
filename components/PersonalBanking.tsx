import React from "react";
import Link from "next/link";
import { CreativeDivider } from "./CreativeDivider";

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
              Stop struggling with bills payment, pay less and easily with Neiop Pay.
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
          <div className="bg-gray-100 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <span className="text-gray-400 font-inter">Bills Payment Image</span>
          </div>
        </div>
      </div>
      <CreativeDivider color="#3B82F6" flip />
    </section>
  );
};

