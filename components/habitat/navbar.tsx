"use client";

import Image from "next/image";
import { Phone, Menu, X, ExternalLink, Layers, ArrowRight } from "lucide-react";
import { useState } from "react";

const helpUrl = "https://accessibility-grants-9yea.bolt.host";

const nav = [
  ["#inicio", "Inicio"],
  ["#modelo-integral", "Nuestro modelo"],
  ["#servicios", "Servicios"],
  ["#punto-amber", "Punto AMBER"],
  ["#noticias", "Noticias"],
  ["#nosotros", "Nosotros"],
  ["#videos", "Vídeos"],
  ["#herramientas", "Herramientas"],
  ["#contacto", "Contacto"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const go = (h: string) => {
    setOpen(false);
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1B3A6B]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4">
        <button onClick={() => go("#inicio")} className="flex min-w-0 shrink-0 items-center gap-3">
          <Image
            src="/images/logo-habitat.jpg"
            alt="Hábitat Asistencial"
            width={48}
            height={48}
            className="rounded-xl bg-white p-1 object-contain"
          />
          <div className="text-left">
            <div className="font-bold text-white text-lg">Hábitat</div>
            <div className="text-xs text-[#F0A500] font-semibold">Asistencial</div>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {nav.map(([h, l]) => (
            <button
              key={h}
              onClick={() => go(h)}
              className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 text-sm font-medium whitespace-nowrap"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <button
            onClick={() => setProjectsOpen(true)}
            className="px-3 py-2 rounded-xl border border-white/25 text-white font-semibold hover:bg-white/10 whitespace-nowrap text-sm"
          >
            Proyectos y recursos
          </button>
          <a
            href={helpUrl}
            className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl bg-[#F0A500] px-3 py-2 font-bold text-[#0f2340] text-sm"
          >
            Busco ayudas <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:+34635332019" className="flex items-center gap-1.5 text-white/90 text-sm whitespace-nowrap">
            <Phone className="w-4 h-4" />+34 635 332 019
          </a>
          <button
            onClick={() => go("#contacto")}
            className="px-3 py-2 rounded-xl bg-white/10 border border-white/30 text-white font-semibold text-sm whitespace-nowrap"
          >
            Solicitar información
          </button>
        </div>

        <button
          className="lg:hidden ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="lg:hidden max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/10 bg-[#1B3A6B] px-4 pb-5 pt-2">
          {nav.map(([h, l]) => (
            <button
              key={h}
              onClick={() => go(h)}
              className="block min-h-11 w-full rounded-lg px-4 py-3 text-left text-white hover:bg-white/10"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              setProjectsOpen(true);
            }}
            className="block min-h-11 w-full rounded-lg px-4 py-3 text-left text-white font-semibold hover:bg-white/10"
          >
            Proyectos y recursos
          </button>
          <a
            href={helpUrl}
            className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F0A500] px-4 py-3 font-bold text-[#0f2340]"
          >
            Busco ayudas <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => go("#contacto")}
            className="mt-2 block min-h-12 w-full rounded-xl border border-white/30 px-4 py-3 font-semibold text-white"
          >
            Solicitar información
          </button>
        </div>
      )}

      {projectsOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setProjectsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-title"
            className="w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl max-h-[90svh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1B3A6B]/10 px-3 py-1 text-sm font-semibold text-[#1B3A6B]">
                  <Layers className="h-4 w-4" /> Hábitat Asistencial
                </div>
                <h2 id="projects-title" className="mt-3 text-2xl sm:text-3xl font-bold text-[#1B3A6B]">
                  Proyectos y recursos
                </h2>
                <p className="mt-2 text-slate-600">Accede a las herramientas y proyectos de Hábitat.</p>
              </div>
              <button
                onClick={() => setProjectsOpen(false)}
                aria-label="Cerrar ventana"
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://app.habitatasistencial.es"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border p-5 hover:border-[#1B3A6B] hover:bg-slate-50"
              >
                <strong className="block text-[#1B3A6B]">Catálogo GiocoCog</strong>
                <span className="mt-1 block text-sm text-slate-600">Entrenamiento cognitivo y recursos</span>
                <span className="mt-3 block break-all text-xs text-slate-500">app.habitatasistencial.es</span>
                <ExternalLink className="mt-3 h-4 w-4 text-[#1B3A6B]" />
              </a>
              <a
                href="https://giocog.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border p-5 hover:border-[#1B3A6B] hover:bg-slate-50"
              >
                <strong className="block text-[#1B3A6B]">GiocoCog</strong>
                <span className="mt-1 block text-sm text-slate-600">Aplicación de entrenamiento cognitivo</span>
                <span className="mt-3 block break-all text-xs text-slate-500">giocog.habitatasistencial.es</span>
                <ExternalLink className="mt-3 h-4 w-4 text-[#1B3A6B]" />
              </a>
              <a
                href={helpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border p-5 hover:border-[#1B3A6B] hover:bg-slate-50"
              >
                <strong className="block text-[#1B3A6B]">Buscador de ayudas</strong>
                <span className="mt-1 block text-sm text-slate-600">Ayudas de accesibilidad y subvenciones</span>
                <span className="mt-3 block break-all text-xs text-slate-500">accessibility-grants-x3b7.bolt.host</span>
                <ExternalLink className="mt-3 h-4 w-4 text-[#1B3A6B]" />
              </a>
              <a
                href="https://observatorio-habitat-asistencial-13.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border p-5 hover:border-[#1B3A6B] hover:bg-slate-50"
              >
                <strong className="block text-[#1B3A6B]">Observatorio / Asesor Domus</strong>
                <span className="mt-1 block text-sm text-slate-600">Epidemiología y prevención de accidentes en el hogar</span>
                <span className="mt-3 block break-all text-xs text-slate-500">observatorio-habitat-asistencial-13.vercel.app</span>
                <ExternalLink className="mt-3 h-4 w-4 text-[#1B3A6B]" />
              </a>
            </div>
            <p className="mt-5 text-xs text-slate-500">
              Los dominios personalizados se muestran como referencia. Los botones abren las direcciones de servicio verificadas.
            </p>
          </section>
        </div>
      )}
    </nav>
  );
}
