"use client";

import {
  Activity,
  Brain,
  HeartHandshake,
  House,
  MapPinned,
  ShieldCheck,
  Smartphone,
  UsersRound,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Personas y familias",
    text: "Orientación, organización de rutinas y continuidad de los apoyos, respetando las decisiones de la persona y sin cargar toda la responsabilidad sobre la familia.",
    label: "Apoyo cotidiano",
  },
  {
    icon: Brain,
    title: "Demencia y capacidades",
    text: "Apoyo centrado en la persona, actividades significativas y recursos de estimulación cognitiva y funcional. La tecnología acompaña; no sustituye la valoración profesional.",
    label: "Cognición y función",
  },
  {
    icon: ShieldCheck,
    title: "Prevención y hogar seguro",
    text: "Accesibilidad, prevención de caídas y accidentes, detección de riesgos, botiquines de referencia, mantenimiento de recursos y procedimientos claros.",
    label: "Seguridad por capas",
  },
  {
    icon: Smartphone,
    title: "Tecnología asistencial",
    text: "ASSURE CAREWARE, Vigía · BioVital, Cuidón Hub y soluciones de apoyo, según el equipo, la configuración y el protocolo acordado.",
    label: "Tecnología con propósito",
  },
  {
    icon: UsersRound,
    title: "Profesionales y comunidad",
    text: "Coordinación con familias, profesionales, farmacias, comercios y entidades locales, con responsabilidades claras y respeto a la privacidad.",
    label: "Red de proximidad",
  },
  {
    icon: MapPinned,
    title: "Residencias y territorio",
    text: "SHRI, Acción Rural / Rural-Red y colaboración con entidades para adaptar los apoyos a cada entorno, las distancias y los recursos disponibles.",
    label: "Continuidad asistencial",
  },
];

export default function ModeloIntegralSection() {
  return (
    <section id="modelo-integral" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full border border-[#F0A500]/35 bg-[#F0A500]/10 px-4 py-1.5 text-sm font-semibold text-[#8a6200]">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
              No son servicios aislados. Es un sistema de apoyo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              En Hábitat Asistencial conectamos a la persona, su familia, los profesionales, la tecnología y los recursos de su entorno. Empezamos por lo que necesita hoy y organizamos los apoyos que tienen sentido para su situación.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Nuestro criterio es activar y conservar capacidades siempre que sea posible, prevenir riesgos y facilitar una respuesta ordenada cuando algo cambia. No prometemos riesgo cero ni sustituimos innecesariamente a las personas.
            </p>
            <a
              href="#contacto"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1B3A6B] px-6 py-3 font-bold text-white transition hover:bg-[#244b83]"
            >
              Cuéntanos qué necesitas <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text, label }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:-translate-y-0.5 hover:border-[#F0A500]/60 hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3A6B]/[0.08] text-[#1B3A6B] transition group-hover:bg-[#F0A500]/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#9a6d00]">{label}</p>
                <h3 className="text-xl font-bold text-[#1B3A6B]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl bg-[#1B3A6B] p-6 text-white sm:grid-cols-3 sm:p-8">
          <div>
            <Activity className="mb-3 h-6 w-6 text-[#F0A500]" />
            <h3 className="font-bold">Activar capacidades</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">Movimiento, equilibrio, memoria, participación y autonomía, según cada persona.</p>
          </div>
          <div>
            <House className="mb-3 h-6 w-6 text-[#F0A500]" />
            <h3 className="font-bold">Preparar el entorno</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">Medidas de prevención complementarias, recursos localizables y revisiones para mantenerlos preparados.</p>
          </div>
          <div>
            <HeartHandshake className="mb-3 h-6 w-6 text-[#F0A500]" />
            <h3 className="font-bold">Coordinar la respuesta</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">Procedimientos claros para saber quién actúa, cómo pedir ayuda y cuándo escalar a profesionales.</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Cada apoyo se concreta según el servicio contratado, las necesidades, la disponibilidad y el territorio. Las funciones de los equipos y los tiempos de respuesta dependen de la solución y del protocolo acordado.
        </p>
      </div>
    </section>
  );
}
