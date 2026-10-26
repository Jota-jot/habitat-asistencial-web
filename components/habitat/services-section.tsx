"use client";

import {
  MapPin, HandHeart, Users, ArrowRight, ShieldCheck, Bot, Home,
  Clock, BookOpen, Brain, Sprout, Store, HeartHandshake, BriefcaseBusiness,
  FileText, Activity
} from "lucide-react";

const serviceGroups = [
  {
    eyebrow: "Acompañamiento central",
    title: "Organizar los apoyos en casa",
    description: "Empezamos por escuchar qué necesita la persona y qué le resulta difícil de coordinar a la familia. Después ordenamos opciones, responsabilidades y siguientes pasos.",
    Icon: HandHeart,
    items: [
      ["Acompañamiento familiar", "Organización de rutinas, acuerdos, comunicación y revisión de los apoyos."],
      ["Apoyo a familias empleadoras", "Orientación para definir funciones, necesidades y una incorporación ordenada."],
      ["Búsqueda y selección de personal", "Apoyo en la identificación de perfiles y el proceso de incorporación, según alcance contratado."],
      ["Servicio por horas y apoyo domiciliario", "Opciones de asistencia puntual o continuada, sujetas a disponibilidad y condiciones confirmadas."],
      ["Descanso y respiro familiar", "Explorar alternativas de relevo temporal en vacaciones, convalecencia u otras necesidades, según capacidad disponible."]
    ]
  },
  {
    eyebrow: "Hogar y prevención",
    title: "Mejorar el entorno cotidiano",
    description: "Revisamos junto con la persona y su familia qué aspectos del hogar y de las rutinas podrían mejorarse. Las recomendaciones son orientativas y no sustituyen una evaluación clínica o de emergencias.",
    Icon: Home,
    items: [
      ["Hogar Seguro", "Orientación sobre accesibilidad, barreras y medidas prácticas de prevención doméstica."],
      ["Observatorio Domus", "Información y recursos para comprender y prevenir accidentes en el hogar."],
      ["Orientación sobre ayudas", "Localización de recursos y revisión inicial de requisitos; la concesión depende del organismo competente."]
    ]
  },
  {
    eyebrow: "Tecnología de apoyo",
    title: "Tecnología integrada con personas",
    description: "La tecnología puede aportar información y avisos. Los profesionales y la red de apoyo aportan contexto y actuación. La utilidad, configuración y prestaciones se explican antes de contratar.",
    Icon: Bot,
    items: [
      ["ASSURE CAREWARE", "Ecosistema tecnológico de apoyo y coordinación preventiva."],
      ["Hub y dispositivos asociados", "Soluciones de información y avisos para el hogar, según producto y configuración disponibles."],
      ["BioVital y AeroSense", "Productos que deben presentarse con sus prestaciones técnicas y disponibilidad verificadas."],
      ["Puntos AMBER", "Red de proximidad vinculada a farmacias y comercios; funciones concretas según el punto y los acuerdos establecidos."]
    ]
  },
  {
    eyebrow: "Comunidad y territorio",
    title: "Apoyos cerca de donde vives",
    description: "Conectamos necesidades y recursos de proximidad, adaptando el modelo a la realidad de cada barrio, municipio o localidad rural.",
    Icon: Sprout,
    items: [
      ["Servicios rurales", "Análisis de necesidades por localidad, coordinación con recursos existentes y planificación de desplazamientos y capacidad."],
      ["Adhesiones comunitarias", "Propuestas para comunidades de propietarios, barrios y redes locales, cuando sean viables."],
      ["Entidades y agencias colaboradoras", "Acuerdos con funciones, disponibilidad, responsabilidades, protección de datos y compensación definidos."],
      ["Red local de apoyo", "Colaboración con farmacias, asociaciones, centros y profesionales; sin compartir datos personales sin autorización adecuada."]
    ]
  },
  {
    eyebrow: "Participación y bienestar",
    title: "Actividad, vínculo y envejecimiento activo",
    description: "Propuestas de participación y actividad que respetan los intereses, el ritmo y las preferencias de cada persona.",
    Icon: Activity,
    items: [
      ["GiocoCoG", "Línea de actividad y entrenamiento cognitivo-motor, sin atribuir beneficios clínicos no demostrados."],
      ["Yopop y envejecimiento activo", "Actividades, movimiento, rutas y participación comunitaria según programación y profesionales disponibles."]
    ]
  },
  {
    eyebrow: "Protección y soluciones complementarias",
    title: "Un catálogo conectado, sin mezclar productos",
    description: "Las soluciones complementarias deben explicarse con claridad, diferenciando quién presta cada servicio, qué cubre y bajo qué condiciones.",
    Icon: ShieldCheck,
    items: [
      ["Catálogo de seguros", "Integración informativa con el catálogo de seguros compartido, manteniendo coberturas, exclusiones, precio y entidad responsable claramente identificados."],
      ["Modelo 3C", "Marco de intervención y organización asistencial descrito en la documentación del proyecto."],
      ["FARO PRO", "Línea de analítica y apoyo a la planificación; cualquier uso y afirmación predictiva debe ajustarse a la validación y documentación técnica."]
    ]
  }
];

export function ServicesSection() {
  const go = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="servicios" className="bg-white">
      <div className="bg-[#F4F8F8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-[#DDF4F0] px-4 py-1.5 text-sm font-semibold text-[#176B68]">Una propuesta integrada</span>
            <h2 className="text-3xl font-bold leading-tight text-[#102B46] sm:text-4xl lg:text-5xl">No necesitas contratarlo todo. Empezamos por lo que necesitas.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Servicios, tecnología y recursos comunitarios conectados alrededor de la persona y su hogar. Cada opción se explica con su alcance, disponibilidad y condiciones reales.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceGroups.map(({ eyebrow, title, description, Icon, items }, index) => (
              <article key={title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDF4F0] text-[#176B68]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.15em] text-[#176B68]">{String(index + 1).padStart(2, "0")} · {eyebrow}</p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-[#102B46] sm:text-2xl">{title}</h3>
                  </div>
                </div>
                <p className="mb-6 leading-7 text-slate-600">{description}</p>
                <div className="space-y-4">
                  {items.map(([name, detail]) => (
                    <div key={name} className="border-l-2 border-[#68CFC0] pl-4">
                      <h4 className="font-semibold text-[#102B46]">{name}</h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
                <button onClick={go} className="mt-7 inline-flex min-h-11 items-center gap-2 self-start rounded-xl bg-[#102B46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176B68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B68]">
                  Consultar esta línea <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#102B46] p-7 text-white sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.15em] text-[#68D3C4]">Cómo empezamos</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Escuchar → comprender → valorar con permiso → explicar opciones → decidir sin presión.</h3>
                <p className="mt-4 max-w-3xl leading-7 text-white/80">Te explicamos qué está disponible, qué incluye, qué no cubre y cuánto cuesta antes de que decidas. No es necesario contratar todas las líneas ni utilizar tecnología.</p>
              </div>
              <button onClick={go} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#68D3C4] px-6 py-3 font-bold text-[#102B46] transition hover:brightness-105">
                Cuéntanos qué necesitas <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
