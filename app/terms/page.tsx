import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { TermsContent } from "@/components/TermsContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - Neioppay",
  description:
    "Terms governing your use of Neiop Pay Limited websites, apps, and payment services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  );
}
