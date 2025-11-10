"use client";

import React, { useState } from "react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="bg-blue-very-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Sign up for our weekly newsletter
          </h2>
          <p className="text-lg font-inter text-white mb-8">
            for fun, finance and more
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg font-inter text-blue-very-dark focus:outline-none focus:ring-2 focus:ring-blue-light"
            />
            <button
              type="submit"
              className="bg-blue-light text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-blue-dark transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


