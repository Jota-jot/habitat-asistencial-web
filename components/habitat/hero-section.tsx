"use client";

import { ArrowRight, MapPin, ShieldCheck, Wifi, Users, Sprout } from "lucide-react";

const helpUrl = "https://accessibility-grants-x3b7.bolt.host";

export function HeroSection() {
  const go = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative isolate flex min-h-[min(860px,100svh)] scroll-mt-20 items-center overflow-hidden bg-[#102B46]">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1773227055624-07b515ba87c5?auto=format&fit=crop&fm=jpg&q=80&w=2200"
          alt="Acompañamiento respetuoso a una persona mayor en su hogar"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B46]/95 via-[#102B46]/82 to-[#102B46]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102B46]/55 via-transparent to-[#102B46]/15" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#68D3C4]/40 bg-[#102B46]/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#68D3C4]" />
            Personas · Hogar · Tecnología · Comunidad
          </div>
          <h1 className="text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Cuando cuidar importa, <span className="text-[#68D3C4]">organizar el apoyo lo cambia todo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">
            Ayudamos a las personas y sus familias a organizar mejor los apoyos en casa, conectar profesionales y recursos cercanos e incorporar tecnología cuando realmente aporta valor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => go("#contacto")}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#68D3C4] px-6 py-3 font-bold text-[#102B46] shadow-lg transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
            >
              Cuéntanos qué apoyo necesitáis <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href={helpUrl}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68D3C4]"
            >
              Buscador de ayudas <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex items-start gap-2 text-sm leading-6 text-white/75">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#68D3C4]" />
            Red y recursos en Alcalá de Henares, Segovia/La Lastrilla, Guadalajara y Talavera de la Reina; cobertura concreta según servicio y disponibilidad.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <HeroCard icon={<Users />} title="Personas y familias" text="Orientación y continuidad de los apoyos." />
          <HeroCard icon={<Wifi />} title="ASSURE CAREWARE" text="Tecnología de apoyo, según solución y configuración." />
          <HeroCard icon={<ShieldCheck />} title="Punto AMBER" text="Conexión con farmacias y comercios de proximidad." />
          <HeroCard icon={<Sprout />} title="Servicios rurales" text="Propuestas territoriales ajustadas a necesidades y capacidad." />
        </div>
      </div>
    </section>
  );
}

function HeroCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/20 bg-[#102B46]/65 p-4 shadow-xl shadow-black/10 backdrop-blur-md sm:p-6">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#68D3C4]/15 text-[#68D3C4]">
        {icon}
      </div>
      <h2 className="break-words text-base font-bold leading-snug text-white sm:text-lg">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}
