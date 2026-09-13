import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HelpCenterContent } from "@/components/HelpCenterContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Help Center - Neioppay",
  description:
    "Get help with Neioppay accounts, transfers, business banking, security, and account deletion.",
};

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HelpCenterContent />
      <Footer />
    </main>
  );
}
