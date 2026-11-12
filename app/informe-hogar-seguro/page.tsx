import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/habitat/navbar";
import Footer from "@/components/habitat/footer";
import WhatsAppButton from "@/components/habitat/whatsapp-button";

export const metadata: Metadata = {
  title: "Informe Hogar Seguro 29,90 € | Prevención de caídas | Hábitat Asistencial",
  description:
    "Informe Hogar Seguro: evaluación profesional de riesgos en el hogar de personas mayores + kit de protección inicial. Solo 29,90 €. Sin compromiso. WhatsApp 635 332 019.",
  alternates: { canonical: "https://www.habitatasistencial.es/informe-hogar-seguro" },
  openGraph: {
    title: "Informe Hogar Seguro 29,90 € | Hábitat Asistencial",
    description:
      "Evaluación profesional de riesgos en el hogar + kit de protección inicial. 29,90 €. Sin compromiso.",
    url: "https://www.habitatasistencial.es/informe-hogar-seguro",
    locale: "es_ES",
    type: "website",
  },
};

const waHref =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, quiero el Informe Hogar Seguro (29,90 €). ¿Cómo lo reservo?"
  );

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2340] text-white px-5 py-14 sm:py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#F0A500]/40 bg-[#F0A500]/10 px-4 py-1.5 text-sm font-semibold text-[#F0A500]">
              Oferta de lanzamiento
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Informe Hogar Seguro
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/90">
              Una evaluación profesional de la vivienda que puede evitar un accidente.{" "}
              <strong>29,90 €</strong>. Sin compromiso.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-105"
            >
              Solicitar Informe Hogar Seguro · 29,90 €
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          <p className="mb-4 text-lg leading-8 text-slate-700">
            La mayoría de las caídas y accidentes domésticos en personas mayores no ocurren por
            casualidad. Hay factores de riesgo que se pueden detectar y corregir a tiempo: mala
            iluminación, alfombras sueltas, falta de puntos de apoyo, obstáculos en pasillos, baños
            sin adaptación…
          </p>
          <p className="mb-4 text-lg leading-8 text-slate-700">
            El <strong>Informe Hogar Seguro</strong> es una evaluación profesional de la vivienda
            orientada a la prevención. Se analizan los principales puntos de riesgo y se entrega un
            informe claro con recomendaciones prioritarias, junto con un kit de protección inicial.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-[#1B3A6B]">Qué incluye (29,90 €)</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {[
              "Evaluación de la vivienda (online o presencial, según caso)",
              "Análisis de iluminación, apoyos, elementos inestables y zonas críticas (baño, dormitorio, pasillos)",
              "Informe con recomendaciones priorizadas",
              "Kit de protección inicial",
              "Precio cerrado 29,90 € · Sin compromiso de servicio posterior",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 font-bold text-[#F0A500]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-[#1B3A6B]">Para quién es</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Para familias que quieren saber con objetividad si la casa de su familiar es realmente
            segura y qué se puede mejorar de forma sencilla y de bajo coste.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-[#1B3A6B]">Disponible en</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Alcalá de Henares · Guadalajara · Segovia · Talavera de la Reina y municipios cercanos
            (según disponibilidad).
          </p>

          <div className="mt-10 rounded-2xl border-2 border-[#F0A500] bg-[#FFF7ED] p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-[#1B3A6B]">Reservar ahora</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Escríbanos por WhatsApp al <strong>635 332 019</strong> indicando su localidad. Le
              confirmamos disponibilidad y fecha.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-105"
            >
              WhatsApp · Informe Hogar Seguro
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link href="/ayuda-a-domicilio-alcala-de-henares" className="text-[#1B3A6B] font-semibold hover:underline">
              Ayuda a domicilio Alcalá
            </Link>
            <Link href="/ayuda-a-domicilio-guadalajara" className="text-[#1B3A6B] font-semibold hover:underline">
              Guadalajara
            </Link>
            <Link href="/ayuda-a-domicilio-segovia" className="text-[#1B3A6B] font-semibold hover:underline">
              Segovia
            </Link>
            <Link href="/ayuda-a-domicilio-talavera-de-la-reina" className="text-[#1B3A6B] font-semibold hover:underline">
              Talavera
            </Link>
            <Link href="/" className="text-[#1B3A6B] font-semibold hover:underline">
              Inicio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
