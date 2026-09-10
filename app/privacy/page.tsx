import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PrivacyContent } from "@/components/PrivacyContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Neioppay",
  description:
    "How Neiop Pay Limited collects, uses, and protects your personal data across our website and payment services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
