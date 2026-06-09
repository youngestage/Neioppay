import { Navbar } from "@/components/Navbar";
import { PrivacyContent } from "@/components/PrivacyContent";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacyContent />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
