"use client";

import {
  ArrowRight, HandHeart, ShieldCheck, Bot, Sprout, Activity, Users, HeartHandshake
} from "lucide-react";

const services = [
  {
    title: "Acompañamiento familiar",
    eyebrow: "Personas y hogar",
    text: "Organizamos los apoyos, las rutinas y la comunicación para que la ayuda encaje mejor en la vida cotidiana.",
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452d8?auto=format&fit=crop&w=1000&q=82",
    alt: "Acompañamiento cercano a una persona mayor",
    Icon: HandHeart,
    tag: "Apoyo en casa"
  },
  {
    title: "Hogar Seguro",
    eyebrow: "Prevención cotidiana",
    text: "Ideas prácticas para revisar el entorno doméstico, la accesibilidad y los riesgos del día a día.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82",
    alt: "Interior de un hogar luminoso y cuidado",
    Icon: ShieldCheck,
    tag: "Seguridad"
  },
  {
    title: "Tecnología y Puntos AMBER",
    eyebrow: "Apoyo conectado",
    text: "Tecnología y redes de proximidad, explicadas con claridad y adaptadas a cada necesidad y acuerdo.",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=1000&q=82",
    alt: "Dispositivo tecnológico de apoyo en el hogar",
    Icon: Bot,
    tag: "Tecnología"
  },
  {
    title: "Servicios rurales",
    eyebrow: "Cerca de ti",
    text: "Apoyos adaptados a pueblos y zonas rurales, teniendo en cuenta distancias, recursos locales y disponibilidad.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=82",
    alt: "Paisaje rural y pueblo entre montañas",
    Icon: Sprout,
    tag: "Territorio"
  },
  {
    title: "GiocoCoG",
    eyebrow: "Actividad y participación",
    text: "Propuestas de actividad cognitivo-motora y participación, sin promesas clínicas no verificadas.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=82",
    alt: "Personas compartiendo una actividad en grupo",
    Icon: Activity,
    tag: "Participación"
  },
  {
    title: "Yopop y envejecimiento activo",
    eyebrow: "Bienestar en comunidad",
    text: "Actividades, movimiento y rutas para mantenerse conectado con el entorno y con otras personas.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=82",
    alt: "Grupo de personas disfrutando de una actividad comunitaria",
    Icon: Users,
    tag: "Comunidad"
  },
  {
    title: "Familias, profesionales y entidades",
    eyebrow: "Una red coordinada",
    text: "Colaboración con familias, profesionales, agencias y recursos locales con responsabilidades claras.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=82",
    alt: "Profesionales coordinándose en equipo",
    Icon: HeartHandshake,
    tag: "Colaboración"
  },
  {
    title: "Seguros y soluciones complementarias",
    eyebrow: "Protección e información",
    text: "Un espacio para conectar el catálogo de seguros y otras soluciones cuando se confirme la documentación y sus condiciones.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=82",
    alt: "Vivienda familiar como símbolo de protección del hogar",
    Icon: ShieldCheck,
    tag: "Protección"
  }
];

export function ServicesSection() {
  const go = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="servicios" className="bg-[#F4F8F8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex rounded-full bg-[#DDF4F0] px-4 py-1.5 text-sm font-semibold text-[#176B68]">Más apoyo. Mejor organizado. En equilibrio.</span>
            <h2 className="text-3xl font-bold leading-tight text-[#102B46] sm:text-4xl lg:text-5xl">Nuestros servicios</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Una oferta integrada para cada necesidad: personas, hogares, tecnología y comunidad, también en entornos rurales.</p>
          </div>
          <button onClick={go} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-[#102B46] px-5 py-3 font-semibold text-white transition hover:bg-[#176B68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B68] sm:self-auto">
            Cuéntanos qué necesitáis <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, eyebrow, text, image, alt, Icon, tag }) => (
            <article key={title} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-44 overflow-hidden bg-slate-200 sm:h-48">
                <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B46]/55 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#102B46]">{tag}</span>
                <div className="absolute -bottom-5 right-4 flex h-12 w-12 items-center justify-center rounded-xl border-4 border-white bg-[#0C817F] text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 pt-7">
                <p className="text-xs font-bold uppercase tracking-[.13em] text-[#168078]">{eyebrow}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-[#102B46]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
                <button onClick={go} className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-[#087D7A] hover:text-[#102B46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B68]">
                  Saber más <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl bg-[#102B46] p-6 text-white sm:grid-cols-3 sm:p-8">
          <div>
            <p className="font-bold text-[#68D3C4]">1. Escuchamos</p>
            <p className="mt-1 text-sm leading-6 text-white/80">Entendemos qué necesita la persona y qué le cuesta organizar a la familia.</p>
          </div>
          <div>
            <p className="font-bold text-[#68D3C4]">2. Ordenamos opciones</p>
            <p className="mt-1 text-sm leading-6 text-white/80">Explicamos alcance, disponibilidad, responsabilidades y precio antes de decidir.</p>
          </div>
          <div>
            <p className="font-bold text-[#68D3C4]">3. Acordamos el siguiente paso</p>
            <p className="mt-1 text-sm leading-6 text-white/80">Sin presión y sin contratar líneas que no encajen con vuestra situación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
