import { Navbar } from "@/components/habitat/navbar";
import { HeroSection } from "@/components/habitat/hero-section";
import { FamilySupportSection } from "@/components/habitat/family-support-section";
import KitHogarSection from "@/components/habitat/kit-hogar-section";
import { ServicesSection } from "@/components/habitat/services-section";
import AmberSection from "@/components/habitat/amber-section";
import PressSection from "@/components/habitat/press-section";
import AboutSection from "@/components/habitat/about-section";
import VideosSection from "@/components/habitat/videos-section";
import ToolsSection from "@/components/habitat/tools-section";
import FaqSection from "@/components/habitat/faq-section";
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
        <KitHogarSection />
        <ServicesSection />
        <AmberSection />
        <PressSection />
        <AboutSection />
        <VideosSection />
        <ToolsSection />
        <section id="observatorio-domus" className="scroll-mt-24 bg-[#1B3A6B] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#F0A500]/40 bg-[#F0A500]/10 px-4 py-1.5 text-sm font-semibold text-[#F0A500]">
                Prevención basada en datos
              </p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Observatorio Domus
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Conoce los datos epidemiológicos sobre lesiones en el hogar en España y Europa y descubre recomendaciones prácticas para prevenir accidentes y mejorar la seguridad en casa.
              </p>
              <a
                href="https://observatorio-habitat-asistencial-13.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-105"
              >
                Explorar el Observatorio Domus <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0A500] text-2xl text-[#0f2340]">⌂</div>
                <div>
                  <p className="font-bold">Seguridad en el hogar</p>
                  <p className="text-sm text-white/65">Información y prevención</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/85">
                <li className="flex gap-3"><span className="text-[#F0A500]">✓</span><span>Datos sobre lesiones domésticas y sus factores de riesgo.</span></li>
                <li className="flex gap-3"><span className="text-[#F0A500]">✓</span><span>Orientación para anticipar riesgos y prevenir accidentes.</span></li>
                <li className="flex gap-3"><span className="text-[#F0A500]">✓</span><span>Recomendaciones para familias y profesionales.</span></li>
              </ul>
            </div>
          </div>
        </section>
        <FaqSection />
        <CtaSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
