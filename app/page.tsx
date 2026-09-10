import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MoneyNeedsMarquee } from "@/components/MoneyNeedsMarquee";
import { CryptoDashboardSection } from "@/components/CryptoDashboardSection";
import { FeatureScrollSection } from "@/components/FeatureScrollSection";
import { BusinessSection } from "@/components/BusinessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SecuritySection } from "@/components/SecuritySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MoneyNeedsMarquee />
      <CryptoDashboardSection />
      <FeatureScrollSection />
      <BusinessSection />
      <TestimonialsSection />
      <SecuritySection />
      <Footer />
    </main>
  );
}
