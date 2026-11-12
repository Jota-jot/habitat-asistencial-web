import type { Metadata } from "next";
import { LocalLanding } from "@/components/habitat/local-landing";

export const metadata: Metadata = {
  title: "Ayuda a domicilio en Guadalajara | Hábitat Asistencial",
  description:
    "Ayuda a domicilio y cuidado de mayores en Guadalajara. Prevención, tecnología sin cámaras e Informe Hogar Seguro. WhatsApp 635 332 019.",
  alternates: { canonical: "https://www.habitatasistencial.es/ayuda-a-domicilio-guadalajara" },
  openGraph: {
    title: "Ayuda a domicilio en Guadalajara | Hábitat Asistencial",
    description:
      "Ayuda a domicilio y cuidado de mayores en Guadalajara. Tecnología sin cámaras e Informe Hogar Seguro 29,90 €.",
    url: "https://www.habitatasistencial.es/ayuda-a-domicilio-guadalajara",
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocalLanding
      cityLabel="Guadalajara"
      h1="Ayuda a domicilio en Guadalajara"
      lead="Cuidado profesional de personas mayores en casa. Prevención de riesgos, tecnología discreta y apoyo a familias en Guadalajara y alrededores."
      intro={[
        "Hábitat Asistencial ofrece ayuda a domicilio en Guadalajara para que las personas mayores puedan seguir viviendo en su hogar con seguridad. Combinamos cuidadores profesionales, organización de apoyos y tecnología de prevención sin cámaras.",
        "Acompañamos a las familias desde el primer contacto: orientamos, priorizamos necesidades y, si encaja, prestamos horas de servicio en domicilio según disponibilidad.",
      ]}
      includes={[
        "Ayuda a domicilio por horas (higiene, movilidad, acompañamiento)",
        "Descanso familiar / respiro del cuidador",
        "Orientación para organizar los apoyos en casa",
        "Tecnología de prevención sin cámaras",
        "Informe Hogar Seguro 29,90 € (evaluación + kit)",
      ]}
      zones="Guadalajara capital y municipios cercanos, según disponibilidad. Consulte su localidad por WhatsApp."
      waText="Hola, necesito información sobre ayuda a domicilio en Guadalajara con Hábitat Asistencial."
    />
  );
}
