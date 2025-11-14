import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CardsSection } from "@/components/CardsSection";
import { ProductOfferings } from "@/components/ProductOfferings";
import { PersonalBanking } from "@/components/PersonalBanking";
import { LoanInvestment } from "@/components/LoanInvestment";
import { BusinessBanking } from "@/components/BusinessBanking";
import { Features } from "@/components/Features";
import { AboutUs } from "@/components/AboutUs";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { MissionVision } from "@/components/MissionVision";
import { CustomerSupport } from "@/components/CustomerSupport";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CardsSection />
      <ProductOfferings />
      <PersonalBanking />
      <LoanInvestment />
      <BusinessBanking />
      <Features />
      <AboutUs />
      <MeetTheTeam />
      <MissionVision />
      <CustomerSupport />
      <Newsletter />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

