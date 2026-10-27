import { MessageCircle, Check } from "lucide-react";

const waUrl =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, quiero información sobre organización de apoyos y/o horas de servicio en domicilio con Hábitat."
  );

const incluye = [
  "Consulta inicial para entender la situación y priorizar necesidades",
  "Propuesta de apoyos adaptada a lo que hace falta hoy",
  "Horas de servicio en domicilio cuando firmáis con Hábitat (sujeto a disponibilidad y mínimos)",
  "Orientación sobre opciones: servicio propio, adhesión u otras fórmulas según caso",
  "Seguimiento para ajustar el plan cuando cambie la situación",
];

const noIncluye = [
  "Atención sanitaria, diagnósticos o urgencias médicas",
  "Garantía de disponibilidad en cualquier horario o municipio",
  "Tramitación oficial de dependencia u otras prestaciones",
  "Vigilancia 24/7 ni teleasistencia de emergencias (salvo otro servicio acordado)",
];

export default function ApoyosSection() {
  return (
    <section id="organizacion-apoyos" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
            Servicio principal
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl">
            Organización de apoyos y horas en domicilio
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Si necesitáis horas de cuidado, podéis firmar el servicio con Hábitat Asistencial y nosotros
            os lo proveemos, siempre condicionado a disponibilidad y a un mínimo de servicio. También
            orientamos y organizamos el plan cuando aún no sabéis por dónde empezar.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#1B3A6B]">Qué incluye (según acuerdo)</h3>
            <ul className="mt-5 space-y-3">
              {incluye.map((t) => (
                <li key={t} className="flex gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="leading-7">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#1B3A6B]">Qué no incluye</h3>
            <ul className="mt-5 space-y-3">
              {noIncluye.map((t) => (
                <li key={t} className="flex gap-3 text-slate-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                  <span className="leading-7">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-[#1B3A6B] p-6 text-white sm:p-8">
          <h3 className="text-xl font-bold">Cómo funciona el servicio por horas</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-[#F0A500]">1. Contrato con Hábitat</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Si queréis horas de servicio, el acuerdo se firma con Hábitat y nosotros proveemos el
                apoyo, según disponibilidad.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#F0A500]">2. Mínimos y adhesión</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                El servicio puede estar sujeto a un mínimo de horas y a opciones de adhesión que
                hagan viable la atención en vuestra zona.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#F0A500]">3. Fórmulas a medida</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Valoramos tarjeta de servicios o banco de horas / mensualidad repartible según
                necesidades; se concretan al diseñar vuestro plan.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Precio según alcance y horas, a consultar. Sin compromiso en la primera conversación.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar horas y plan por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
