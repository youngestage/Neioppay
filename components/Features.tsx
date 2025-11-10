import React from "react";
import { WavyDivider } from "./WavyDivider";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Fast & Seamless",
    description: "Fast, secure, and seamless digital payment solutions that simplify financial transactions and promote convenience.",
    icon: "💳",
  },
  {
    title: "Transparent & Secure",
    description: "Bank-level security with complete transparency. Your financial data is protected with advanced encryption and transparent processes.",
    icon: "🔒",
  },
  {
    title: "Financial Inclusion",
    description: "Promoting financial inclusion across Africa and beyond. Making everyday transactions accessible to everyone.",
    icon: "⚡",
  },
  {
    title: "Innovative Technology",
    description: "Connecting people, businesses, and institutions through innovative technology that makes transactions simple and trusted.",
    icon: "🔄",
  },
  {
    title: "24/7 Accessibility",
    description: "Accessible to everyone, anytime. Get help whenever you need it with our round-the-clock customer support.",
    icon: "🕐",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-blue-very-dark mb-4">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-light rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-poppins font-bold text-blue-very-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-base font-inter text-blue-very-dark">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <WavyDivider className="text-blue-light" />
    </section>
  );
};

