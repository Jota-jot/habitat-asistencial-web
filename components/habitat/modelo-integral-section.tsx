"use client";

import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Personas y familias",
    text: "Orientamos y ayudamos a organizar rutinas y apoyos, respetando las decisiones de la persona. La familia necesita acompañamiento; no tiene por qué resolverlo todo sola.",
  },
  {
    number: "02",
    title: "Demencia, memoria y capacidades",
    text: "Actividades significativas y recursos para trabajar la participación, la cognición y la función cotidiana. La tecnología puede apoyar, pero no sustituye el criterio ni la atención profesional.",
  },
  {
    number: "03",
    title: "Prevención y hogar seguro",
    text: "Revisar el entorno, anticipar riesgos, mantener los recursos preparados y acordar qué hacer si ocurre un incidente. La seguridad se construye con medidas complementarias.",
  },
  {
    number: "04",
    title: "Tecnología asistencial",
    text: "Soluciones como ASSURE CAREWARE, Vigía · BioVital y Cuidón Hub se valoran según su función real, la situación de la persona y el protocolo acordado.",
  },
  {
    number: "05",
    title: "Profesionales y comunidad",
    text: "Familias, profesionales, farmacias, comercios y entidades locales pueden colaborar cuando hay acuerdos claros, funciones definidas y respeto a la privacidad.",
  },
  {
    number: "06",
    title: "Residencias y territorio",
    text: "SHRI y las líneas de Acción Rural / Rural-Red buscan dar continuidad a los apoyos y adaptarlos a los recursos y distancias de cada entorno.",
  },
];

export default function ModeloIntegralSection() {
  return (
    <section id="modelo-integral" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9a6d00]">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
            Cada persona tiene su historia. Los apoyos deben encajar en ella.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            En Hábitat Asistencial ayudamos a ordenar apoyos alrededor de la vida real: la persona, su familia, quienes la atienden y los recursos que tiene cerca. Empezamos por escuchar qué está pasando y qué hace falta ahora.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Queremos mantener capacidades y participación, prevenir riesgos evitables y facilitar la coordinación. No prometemos riesgo cero ni creemos que una aplicación o un dispositivo puedan sustituir el acompañamiento humano.
          </p>
          <a
            href="#contacto"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#1B3A6B] px-5 py-3 font-semibold text-white transition hover:bg-[#244b83]"
          >
            Hablemos de vuestra situación <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
          {pillars.map(({ number, title, text }) => (
            <article key={number} className="border-t border-slate-200 py-6 sm:py-7">
              <div className="flex items-start gap-4">
                <span className="mt-1 text-sm font-semibold tabular-nums text-[#9a6d00]">{number}</span>
                <div>
                  <h3 className="text-xl font-semibold leading-snug text-[#1B3A6B]">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#F0A500] bg-[#F8FAFC] px-5 py-4 sm:px-6">
          <p className="font-semibold text-[#1B3A6B]">Tres preguntas guían el trabajo</p>
          <p className="mt-2 leading-7 text-slate-600">
            ¿Qué capacidades queremos mantener? ¿Qué podemos preparar mejor en casa y en el entorno? ¿Quién debe actuar y cómo nos coordinamos si algo cambia?
          </p>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-500">
          Los apoyos disponibles, las funciones de cada equipo y los tiempos de respuesta dependen del servicio, del territorio y del protocolo acordado.
        </p>
      </div>
    </section>
  );
}
