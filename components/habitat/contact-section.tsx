"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const locations = [
  "Alcalá de Henares",
  "Guadalajara",
  "Azuqueca",
  "Meco",
  "Torrejón de Ardoz",
  "Segovia / La Lastrilla",
  "Talavera de la Reina",
];

const services = [
  "Organización de apoyos en casa",
  "Búsqueda y selección de personal",
  "Hogar Seguro",
  "Observatorio Domus",
  "Punto AMBER",
  "Red de Comercios Amigables",
  "ASSURE CAREWARE",
  "BioVital",
  "AeroSense",
  "Servicios rurales",
  "GiocoCoG",
  "Yopop y envejecimiento activo",
  "Modelo 3C / FARO PRO",
  "Catálogo de seguros",
  "Otro",
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setFeedback(json.error || "No se pudo enviar. Prueba WhatsApp o llama al 635 332 019.");
        return;
      }
      setStatus("ok");
      setFeedback(json.message || "Mensaje enviado correctamente.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Error de conexión. Usa WhatsApp o el teléfono +34 635 332 019.");
    }
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider text-[#F0A500]">Contacto</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-[#1B3A6B]">
            Estamos aquí para <span className="text-[#F0A500]">ayudarte</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#2a4f8a]">
            Cercanía, prevención y acompañamiento. Cuéntanos qué necesitas y te asesoramos sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 rounded-2xl p-6 text-white bg-[#1B3A6B]">
            <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
            <div className="space-y-5">
              <a href="tel:+34635332019" className="flex gap-3">
                <Phone className="w-5 h-5 text-[#F0A500]" />
                <div>
                  <p className="text-white/60 text-xs uppercase">Teléfono</p>
                  <p className="font-semibold">+34 635 332 019</p>
                </div>
              </a>
              <a href="mailto:habitatasistencial@gmail.com" className="flex gap-3">
                <Mail className="w-5 h-5 text-[#F0A500]" />
                <div>
                  <p className="text-white/60 text-xs uppercase">Email</p>
                  <p className="font-semibold break-all">habitatasistencial@gmail.com</p>
                </div>
              </a>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#F0A500]" />
                <div>
                  <p className="text-white/60 text-xs uppercase">Dirección</p>
                  <p className="font-semibold">Calle Barberán y Collar 2, Bajo D</p>
                  <p className="text-white/70 text-sm">28806 Alcalá de Henares, Madrid</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[#F0A500]" />
                <div>
                  <p className="text-white/60 text-xs uppercase">Presencia en</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {locations.map((l) => (
                      <span key={l} className="text-white/80 text-xs bg-white/10 rounded-full px-2 py-0.5">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a
              className="mt-6 flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 font-bold"
              href="https://wa.me/34635332019?text=Hola%2C%20me%20gustaría%20solicitar%20información%20sobre%20los%20servicios%20de%20Hábitat%20Asistencial"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl p-6 sm:p-8 border bg-[#1B3A6B]/[.04]">
            <h3 className="text-xl font-bold mb-6 text-[#1B3A6B]">Envíanos un mensaje</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input required name="name" placeholder="Nombre *" className="rounded-xl border px-3 py-3" />
              <input required name="email" type="email" placeholder="Email *" className="rounded-xl border px-3 py-3" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input name="phone" placeholder="Teléfono" className="rounded-xl border px-3 py-3" />
              <select name="service" className="rounded-xl border px-3 py-3" defaultValue={services[0]}>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Mensaje *"
              className="w-full rounded-xl border px-3 py-3 mb-4"
            />
            {feedback && (
              <p
                className={`mb-4 text-sm rounded-xl px-4 py-3 ${
                  status === "ok"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : status === "error"
                      ? "bg-red-50 text-red-800 border border-red-200"
                      : "bg-slate-50 text-slate-700"
                }`}
                role="status"
              >
                {feedback}
              </p>
            )}
            <button
              className="w-full rounded-xl bg-[#F0A500] text-[#0f2340] font-bold py-4 disabled:opacity-60"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando…" : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
