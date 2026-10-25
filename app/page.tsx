import { Navbar } from "@/components/habitat/navbar";
import { HeroSection } from "@/components/habitat/hero-section";
import { FamilySupportSection } from "@/components/habitat/family-support-section";
import { ServicesSection } from "@/components/habitat/services-section";
import AmberSection from "@/components/habitat/amber-section";
import PressSection from "@/components/habitat/press-section";
import AboutSection from "@/components/habitat/about-section";
import VideosSection from "@/components/habitat/videos-section";
import ToolsSection from "@/components/habitat/tools-section";
import CtaSection from "@/components/habitat/cta-section";
import CredentialsSection from "@/components/habitat/credentials-section";
import ContactSection from "@/components/habitat/contact-section";
import Footer from "@/components/habitat/footer";
import WhatsAppButton from "@/components/habitat/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 min-w-0">
        <HeroSection />
        <FamilySupportSection />
        <ServicesSection />
        <AmberSection />
        <PressSection />
        <AboutSection />
        <VideosSection />
        <ToolsSection />
        <CtaSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
