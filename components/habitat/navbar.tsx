"use client";

import Image from "next/image";
import { Phone, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

const helpUrl = "https://accessibility-grants-x3b7.bolt.host/";
const nav = [
  ["#inicio", "Inicio"],
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
  const go = (h: string) => {
    setOpen(false);
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1B3A6B]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button onClick={() => go("#inicio")} className="flex items-center gap-3">
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
              className="px-4 py-2 rounded-lg text-white/90 hover:bg-white/10 text-sm font-medium"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+34635332019" className="flex items-center gap-2 text-white/90 text-sm">
            <Phone className="w-4 h-4" />+34 635 332 019
          </a>
          <a
            href={helpUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F0A500] text-[#0f2340] font-bold"
          >
            Busco ayudas <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => go("#contacto")}
            className="px-4 py-2 rounded-xl border border-white/30 text-white font-semibold"
          >
            Solicitar información
          </button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1B3A6B] px-4 pb-4">
          {nav.map(([h, l]) => (
            <button
              key={h}
              onClick={() => go(h)}
              className="block w-full text-left px-4 py-3 text-white"
            >
              {l}
            </button>
          ))}
          <a
            href={helpUrl}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F0A500] px-4 py-3 font-bold text-[#0f2340]"
          >
            Busco ayudas <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => go("#contacto")}
            className="mt-2 block w-full rounded-xl border border-white/30 px-4 py-3 text-white font-semibold"
          >
            Solicitar información
          </button>
        </div>
      )}
    </nav>
  );
}
