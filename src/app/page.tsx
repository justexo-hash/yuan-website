"use client";
import { LanguageProvider } from "./components/LanguageContext";
import LoadingScreen from "./components/LoadingScreen";
import TickerBar from "./components/TickerBar";
import HeroSection from "./components/HeroSection";
import DecreeSection from "./components/DecreeSection";
import DashboardSection from "./components/DashboardSection";
import PressSection from "./components/PressSection";
import ChairmanSection from "./components/ChairmanSection";
import ContractSection from "./components/ContractSection";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";

export default function Home() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <TickerBar />
      <LanguageToggle />
      <main className="pt-8">
        <HeroSection />
        <DecreeSection />
        <DashboardSection />
        <PressSection />
        <ChairmanSection />
        <ContractSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
