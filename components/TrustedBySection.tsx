import React from "react";

export const TrustedBySection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col items-center text-center gap-8 sm:gap-10">
        <div className="w-full max-w-[640px] flex flex-col items-center">
          <h2 className="font-mange font-bold text-xl sm:text-2xl md:text-[28px] text-[#0F172A] tracking-tight">
            Trusted By Top African Businesses
          </h2>
          <div
            className="w-full border-t border-[#D1D5DB] mt-5 sm:mt-6"
            aria-hidden="true"
          />
        </div>

        <div className="w-full max-w-[1027px] mx-auto">
          <img
            src="/trusted.svg"
            alt="Partner logos including norebase, tribapay, paystack, and nomba"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
