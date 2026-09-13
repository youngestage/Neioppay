import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AmlContent } from "@/components/AmlContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AML Policy - Neioppay",
  description:
    "How Neiop Pay Limited detects and prevents money laundering and terrorist financing across Neioppay services.",
};

export default function AmlPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AmlContent />
      <Footer />
    </main>
  );
}
