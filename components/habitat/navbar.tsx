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
const desktopNav = nav.filter(([href]) => ["#inicio", "#servicios", "#nosotros", "#contacto"].includes(href));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (h: string) => {
    setOpen(false);
    document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1B3A6B]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-3 sm:px-5 lg:h-20 lg:px-6">
        <button onClick={() => go("#inicio")} className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/logo-habitat.jpg"
            alt="Hábitat Asistencial"
            width={42}
            height={42}
            className="rounded-xl bg-white p-1 object-contain"
          />
          <div className="text-left">
            <div className="truncate text-base font-bold text-white sm:text-lg">Hábitat</div>
            <div className="text-xs text-[#F0A500] font-semibold">Asistencial</div>
          </div>
        </button>

        <div className="hidden xl:flex items-center gap-0.5">
          {desktopNav.map(([h, l]) => (
            <button
              key={h}
              onClick={() => go(h)}
              className="whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/10 2xl:px-3"
            >
              {l}
            </button>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-2 2xl:gap-3">
          <a href="tel:+34635332019" className="flex items-center gap-1.5 whitespace-nowrap text-sm text-white/90">
            <Phone className="w-4 h-4" />+34 635 332 019
          </a>
          <a
            href={helpUrl}
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-xl bg-[#F0A500] px-3 py-2 font-bold text-[#0f2340]"
          >
            Busco ayudas <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => go("#contacto")}
            className="whitespace-nowrap rounded-xl border border-white/30 px-3 py-2 font-semibold text-white"
          >
            Solicitar información
          </button>
        </div>

        <button
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F0A500] xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-white/10 bg-[#1B3A6B] px-4 pb-5 pt-2 shadow-xl xl:hidden">
          {nav.map(([h, l]) => (
            <button
              key={h}
              onClick={() => go(h)}
              className="block min-h-11 w-full rounded-lg px-4 py-3 text-left text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F0A500]"
            >
              {l}
            </button>
          ))}
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
    </nav>
  );
}
