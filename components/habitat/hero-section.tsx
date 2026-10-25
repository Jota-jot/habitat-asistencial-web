"use client";

import { ArrowRight, MapPin, Shield, Wifi } from "lucide-react";

const helpUrl = "https://accessibility-grants-x3b7.bolt.host/";

export function HeroSection() {
  const go = (h: string) =>
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative flex min-h-[min(900px,100svh)] scroll-mt-20 items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1773227055624-07b515ba87c5?auto=format&fit=crop&fm=jpg&q=80&w=2200"
          alt="Cuidadora acompañando a una mujer mayor"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142B4F]/90 via-[#1B3A6B]/70 to-[#1B3A6B]/35" />
      </div>
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-12 pt-28 sm:gap-10 sm:px-8 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:px-10 lg:py-32">
        <div className="min-w-0 max-w-2xl space-y-6 sm:space-y-8">
          <div className="inline-flex max-w-full items-start gap-2 rounded-2xl border border-[#F0A500]/30 bg-[#F0A500]/10 px-3 py-2 sm:items-center sm:rounded-full sm:px-4">
            <span className="w-2 h-2 rounded-full bg-[#F0A500] animate-pulse" />
            <span className="min-w-0 break-words text-sm font-medium leading-5 text-white/90">
              Prevención y coordinación asistencial domiciliaria
            </span>
          </div>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Antes de que <span className="text-[#F0A500]">ocurra algo.</span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
            Un ecosistema de cuidado que actúa antes de que la situación se
            agrave. Tecnología discreta en el hogar, red de apoyo en el barrio y
            coordinación profesional.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={helpUrl}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F0A500] px-6 font-bold text-[#0f2340] shadow-lg shadow-black/10 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:px-8"
            >
              Busco ayudas <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => go("#contacto")}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-6 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A500] sm:w-auto sm:px-8"
            >
              Solicitar información
            </button>
            <button
              onClick={() => go("#servicios")}
              className="min-h-12 w-full rounded-xl border border-white/40 bg-white/5 px-6 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A500] sm:w-auto sm:px-8"
            >
              Conocer el modelo
            </button>
          </div>
          <div className="flex min-w-0 items-start gap-2 break-words text-sm leading-5 text-white/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F0A500]" />
            Alcalá de Henares · Segovia · Guadalajara · Talavera de la Reina
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:pl-2">
          <Card
            icon={<Wifi />}
            title="ASSURE CAREWARE"
            text="Tecnología discreta en el hogar"
          />
          <Card
            icon={<span className="text-2xl">🟡</span>}
            title="Punto AMBER"
            text="Red de apoyo en farmacias y comercios"
          />
          <Card
            icon={<Shield />}
            title="CUIDÓN"
            text="Servicio de acompañamiento domiciliario"
          />
          <Card
            icon={<span className="text-2xl">🤝</span>}
            title="Adhesión familiar"
            text="Modelo de cuota mensual coordinado"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/20 bg-[#10294B]/55 p-3 shadow-lg shadow-black/10 backdrop-blur-md sm:p-6">
      <div className="text-[#F0A500] mb-3">{icon}</div>
      <div className="break-words [overflow-wrap:anywhere] font-bold leading-snug text-white">{title}</div>
      <div className="mt-1 break-words text-sm leading-snug text-white/80">{text}</div>
    </div>
  );
}
