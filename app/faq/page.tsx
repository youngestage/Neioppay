import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ - Neioppay",
  description:
    "Frequently asked questions about Neioppay accounts, currencies, security, business banking, and support.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-4 sm:pt-6">
        <FaqSection />
      </div>
      <Footer />
    </main>
  );
}
