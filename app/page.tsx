import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CardsSection } from "@/components/CardsSection";
import { ProductOfferings } from "@/components/ProductOfferings";
import { PersonalBanking } from "@/components/PersonalBanking";
import { LoanInvestment } from "@/components/LoanInvestment";
import { BusinessBanking } from "@/components/BusinessBanking";
import { POSCarousel } from "@/components/POSCarousel";
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
      <div id="cards">
        <CardsSection />
      </div>
      <ProductOfferings />
      <div id="personal">
        <PersonalBanking />
      </div>
      <LoanInvestment />
      <div id="business">
        <BusinessBanking />
      </div>
      <div id="pos">
        <POSCarousel />
      </div>
      <Features />
      <div id="about">
        <AboutUs />
      </div>
      <div id="company">
        <MeetTheTeam />
      </div>
      <MissionVision />
      <div id="help">
        <CustomerSupport />
      </div>
      <div id="open-account">
        <Newsletter />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

