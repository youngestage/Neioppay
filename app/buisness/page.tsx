import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BusinessHero } from "@/components/BusinessHero";
import { TrustedBySection } from "@/components/TrustedBySection";
import { BusinessFeaturesSection } from "@/components/BusinessFeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business - Neioppay",
  description:
    "Local business. Global reach. Multi-currency accounts, cross-border payouts, and tools built to move your business beyond borders.",
};

export default function BuisnessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BusinessHero />
      <TrustedBySection />
      <BusinessFeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
