import Link from "next/link";
import { Navbar } from "@/components/habitat/navbar";
import Footer from "@/components/habitat/footer";
import WhatsAppButton from "@/components/habitat/whatsapp-button";

const WA = "https://wa.me/34635332019";

type Props = {
  cityLabel: string;
  h1: string;
  lead: string;
  intro: string[];
  includes: string[];
  zones?: string;
  waText: string;
  showInforme?: boolean;
};

export function LocalLanding({
  cityLabel,
  h1,
  lead,
  intro,
  includes,
  zones,
  waText,
  showInforme = true,
}: Props) {
  const waHref = `${WA}?text=${encodeURIComponent(waText)}`;
  const informeHref = `${WA}?text=${encodeURIComponent(
    `Hola, quiero el Informe Hogar Seguro (29,90 €) en ${cityLabel}. ¿Cómo lo reservo?`
  )}`;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2340] text-white px-5 py-14 sm:py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#F0A500]/40 bg-[#F0A500]/10 px-4 py-1.5 text-sm font-semibold text-[#F0A500]">
              {cityLabel}
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{h1}</h1>
            <p className="mt-5 text-lg leading-8 text-white/90">{lead}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={showInforme ? informeHref : waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-105"
              >
                {showInforme ? "Solicitar Informe Hogar Seguro · 29,90 €" : "Hablar por WhatsApp"}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp 635 332 019
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          {intro.map((p, i) => (
            <p key={i} className="mb-4 text-lg leading-8 text-slate-700">
              {p}
            </p>
          ))}

          <h2 className="mt-10 text-2xl font-bold text-[#1B3A6B]">¿Qué incluye el servicio?</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 font-bold text-[#F0A500]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#1B3A6B]">Tecnología que cuida sin invadir</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Muchas familias rechazan instalar cámaras en casa. Trabajamos con sistemas de prevención
              discretos (ASSURE CAREWARE / BioVital) que detectan cambios de actividad y situaciones de
              riesgo <strong>sin grabar imágenes</strong> ni invadir la privacidad.
            </p>
          </div>

          {showInforme && (
            <div className="mt-8 rounded-2xl border-2 border-[#F0A500] bg-[#FFF7ED] p-6 sm:p-8 text-center">
              <h2 className="text-xl font-bold text-[#1B3A6B]">Informe Hogar Seguro · 29,90 €</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Evaluación profesional de riesgos en la vivienda (iluminación, apoyos, zonas críticas) +
                kit de protección inicial. Sin compromiso de continuidad.
              </p>
              <a
                href={informeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-105"
              >
                Reservar por WhatsApp
              </a>
            </div>
          )}

          {zones && (
            <>
              <h2 className="mt-10 text-2xl font-bold text-[#1B3A6B]">Zonas de cobertura</h2>
              <p className="mt-3 leading-7 text-slate-700">{zones}</p>
            </>
          )}

          <h2 className="mt-10 text-2xl font-bold text-[#1B3A6B]">Cómo empezar</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Escríbanos por WhatsApp al <strong>635 332 019</strong>. Le orientamos sin compromiso y, si
            encaja, reservamos el Informe Hogar Seguro o valoramos horas de apoyo en domicilio.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="text-[#1B3A6B] font-semibold hover:underline">
              ← Volver al inicio
            </Link>
            <Link href="/informe-hogar-seguro" className="text-[#1B3A6B] font-semibold hover:underline">
              Ver Informe Hogar Seguro
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
