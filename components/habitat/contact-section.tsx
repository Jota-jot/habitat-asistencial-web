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

const CONTACT_EMAIL = "habitatasistencial@gmail.com";
const WHATSAPP = "34635332019";
const API_URL = "/api/contact";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function buildWhatsAppUrl(payload: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const lines = [
    "Hola, me gustaría solicitar información sobre Hábitat Asistencial.",
    "",
    `Nombre: ${payload.name}`,
    payload.phone ? `Teléfono: ${payload.phone}` : "",
    payload.email ? `Email: ${payload.email}` : "",
    payload.service ? `Interés: ${payload.service}` : "",
    "",
    payload.message,
  ].filter(Boolean);
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function readPayload(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
  }

  /** Vía principal: WhatsApp con los datos del formulario */
  function onWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = readPayload(form);
    if (!payload.name || !payload.message) {
      setStatus("error");
      setFeedback("Indica al menos tu nombre y un mensaje breve.");
      return;
    }
    // Intento de registro en segundo plano (no bloquea WhatsApp)
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer");
    setStatus("ok");
    setFeedback("WhatsApp debería abrirse con tu consulta preparada. Revisa el mensaje y pulsa Enviar; si no se abre, escribe al +34 635 332 019.");
  }

  /** Vía secundaria: intento de email */
  async function onEmailSubmit() {
    const form = document.getElementById("habitat-contact-form") as HTMLFormElement | null;
    if (!form) return;
    setStatus("loading");
    setFeedback("");
    const payload = readPayload(form);
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setFeedback("Para email hacen falta nombre, email y mensaje.");
      return;
    }
    try {
      const fs = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: `[Hábitat Asistencial] Contacto web — ${payload.service || "Consulta"}`,
          _template: "table",
          _replyto: payload.email,
          _captcha: "false",
        }),
      });
      const fsJson = await fs.json().catch(() => ({} as { success?: boolean }));
      if (fs.ok && fsJson.success === true) {
        setStatus("ok");
        setFeedback("FormSubmit ha aceptado la solicitud. Comprueba que el correo llegue a la bandeja de entrada o spam; la entrega final no está verificada desde aquí.");
        form.reset();
        return;
      }
      setStatus("error");
      setFeedback("El email no se pudo confirmar. Usa el botón de WhatsApp, es más rápido.");
    } catch {
      setStatus("error");
      setFeedback("Error de conexión. Mejor WhatsApp: +34 635 332 019.");
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
            Rellena el formulario y envíanoslo por WhatsApp (respuesta más rápida) o por email.
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
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex gap-3">
                <Mail className="w-5 h-5 text-[#F0A500]" />
                <div>
                  <p className="text-white/60 text-xs uppercase">Email</p>
                  <p className="font-semibold break-all">{CONTACT_EMAIL}</p>
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
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre los servicios de Hábitat Asistencial")}`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp directo
            </a>
          </div>

          <form
            id="habitat-contact-form"
            onSubmit={onWhatsApp}
            className="lg:col-span-3 rounded-2xl p-6 sm:p-8 border bg-[#1B3A6B]/[.04]"
          >
            <h3 className="text-xl font-bold mb-2 text-[#1B3A6B]">Envíanos un mensaje</h3>
            <p className="text-sm text-slate-600 mb-6">
              Completa los datos y pulsa <strong>Enviar por WhatsApp</strong>. WhatsApp abrirá el mensaje preparado; tendrás que pulsar Enviar.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input required name="name" placeholder="Nombre *" className="rounded-xl border px-3 py-3" />
              <input name="email" type="email" placeholder="Email" className="rounded-xl border px-3 py-3" />
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
              className="w-full rounded-xl bg-green-600 text-white font-bold py-4 flex items-center justify-center gap-2"
              type="submit"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar por WhatsApp
            </button>
            <button
              type="button"
              onClick={onEmailSubmit}
              disabled={status === "loading"}
              className="mt-3 w-full rounded-xl border border-[#1B3A6B]/25 bg-white text-[#1B3A6B] font-semibold py-3 disabled:opacity-60"
            >
              {status === "loading" ? "Enviando email…" : "Enviar también por email"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
