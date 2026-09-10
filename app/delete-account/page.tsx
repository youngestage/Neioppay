import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AccountDeletionContent } from "@/components/AccountDeletionContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete Your Account - Neioppay",
  description:
    "Request deletion of your Neioppay account and associated data. Steps, data retention details, and a request form for Neiop Pay Limited users.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AccountDeletionContent />
      <Footer />
    </main>
  );
}
