import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CardsSection } from "@/components/CardsSection";
import { ProductOfferings } from "@/components/ProductOfferings";
import { PersonalBanking } from "@/components/PersonalBanking";
import { LoanInvestment } from "@/components/LoanInvestment";
import { BusinessBanking } from "@/components/BusinessBanking";
import { Features } from "@/components/Features";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { MissionVision } from "@/components/MissionVision";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

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
      <MeetTheTeam />
      <MissionVision />
      <Newsletter />
      <Footer />
    </main>
  );
}

