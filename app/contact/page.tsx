import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactContent } from "@/components/ContactContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - Neioppay",
  description:
    "Contact Neiop Pay Limited support for account, transfer, business, and security questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
 