import React from "react";
import { WavyDivider } from "./WavyDivider";

export const MissionVision: React.FC = () => {
  return (
    <section className="bg-white pt-16 lg:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission Statement */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-blue-very-dark mb-4">
              Mission Statement
            </h2>
            <p className="text-base md:text-lg font-inter text-blue-very-dark leading-relaxed">
              To empower individuals and businesses with fast, secure, and seamless digital payment solutions that promote financial inclusion, transparency, and convenience across Africa and beyond.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-blue-very-dark mb-4">
              Vision Statement
            </h2>
            <p className="text-base md:text-lg font-inter text-blue-very-dark leading-relaxed">
              To become a leading digital financial ecosystem that connects people, businesses, and institutions through innovative technology — making everyday transactions simple, trusted, and accessible to everyone.
            </p>
          </div>
        </div>
      </div>
      <WavyDivider className="text-blue-light -mt-1" />
    </section>
  );
};

