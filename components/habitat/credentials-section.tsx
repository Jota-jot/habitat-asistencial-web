import { ShieldCheck, Award, BookOpen, Users } from "lucide-react";

const credentials = [
  {
    icon: Award,
    entity: "IMSERSO · Ministerio de Derechos Sociales",
    title: "Ciudades Amigables con las Personas Mayores",
    description: "Formación oficial en el marco de la Red Mundial de Ciudades Amigables con las Personas Mayores de la OMS. Enfoque en comunidad, prevención y envejecimiento activo.",
    year: "2024",
    badge: "OMS · Ciudades Amigables",
  },
  {
    icon: BookOpen,
    entity: "CRE Alzheimer Salamanca · IMSERSO",
    title: "Tecnología en intervenciones para personas con demencia",
    description: "Certificación del Centro de Referencia Estatal de Atención a Personas con Alzheimer y otras Demencias. Tecnología, terapias no farmacológicas y productos de apoyo.",
    year: "2025",
    badge: "CRE Alzheimer · IMSERSO",
  },
  {
    icon: ShieldCheck,
    entity: "Hábitat Asistencial",
    title: "Alineados con los criterios de la OMS",
    description: "Nuestro modelo de cuidado, prevención y envejecimiento activo está diseñado siguiendo las directrices de la Organización Mundial de la Salud para el cuidado domiciliario de personas mayores.",
    year: "",
    badge: "OMS · Envejecimiento Activo",
  },
  {
    icon: Users,
    entity: "Hábitat Asistencial",
    title: "Especialistas en dependencia y cuidado domiciliario",
    description: "Formación continua en atención a personas mayores, dependientes y en situación de vulnerabilidad. Gestión social, diagnóstico y coordinación asistencial.",
    year: "",
    badge: "Formación continua",
  },
];

export default function CredentialsSection() {
  return (
    <section id="credenciales" className="py-20 lg:py-28 bg-[#1B3A6B]/[.03]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider text-[#F0A500]">Formación y credenciales</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-[#1B3A6B]">
            Respaldo institucional <span className="text-[#F0A500]">y formación especializada</span>
          </h2>
          <p className="text-lg text-[#2a4f8a]">
            Cuidado, apoyo y prevención para personas mayores y dependientes. Envejecimiento activo alineado con los criterios de la OMS y la formación del IMSERSO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {credentials.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition flex gap-5">
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-[#1B3A6B]/10 text-[#1B3A6B]">
                <c.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F0A500]/10 text-[#8a6200]">{c.badge}</span>
                  {c.year && <span className="text-xs text-slate-400">{c.year}</span>}
                </div>
                <p className="text-xs text-[#4a72a8] mb-1">{c.entity}</p>
                <h3 className="font-bold text-[#1B3A6B] mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Franja de confianza */}
        <div className="mt-12 rounded-2xl bg-[#1B3A6B] p-8 text-center">
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Más de <span className="text-[#F0A500] font-bold">4 municipios</span> confían en Hábitat Asistencial para el cuidado de sus mayores. Alcalá de Henares, Guadalajara, Segovia y Talavera de la Reina.
          </p>
        </div>
      </div>
    </section>
  );
}
