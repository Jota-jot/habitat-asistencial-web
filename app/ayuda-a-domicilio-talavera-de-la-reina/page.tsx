import type { Metadata } from "next";
import { LocalLanding } from "@/components/habitat/local-landing";

export const metadata: Metadata = {
  title: "Ayuda a domicilio en Talavera de la Reina | Hábitat Asistencial",
  description:
    "Ayuda a domicilio y cuidado de mayores en Talavera de la Reina. Prevención, tecnología sin cámaras e Informe Hogar Seguro. WhatsApp 635 332 019.",
  alternates: { canonical: "https://www.habitatasistencial.es/ayuda-a-domicilio-talavera-de-la-reina" },
  openGraph: {
    title: "Ayuda a domicilio en Talavera de la Reina | Hábitat Asistencial",
    description:
      "Ayuda a domicilio y cuidado de mayores en Talavera. Tecnología sin cámaras e Informe Hogar Seguro 29,90 €.",
    url: "https://www.habitatasistencial.es/ayuda-a-domicilio-talavera-de-la-reina",
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocalLanding
      cityLabel="Talavera de la Reina"
      h1="Ayuda a domicilio en Talavera de la Reina"
      lead="Cuidado profesional de personas mayores en casa en Talavera. Prevención de riesgos, apoyo a familias y tecnología discreta."
      intro={[
        "Hábitat Asistencial presta apoyo a familias de Talavera de la Reina que necesitan organizar el cuidado de un familiar mayor en el domicilio: orientación, horas de servicio según disponibilidad y prevención en el hogar.",
        "Empezamos por entender la situación real (movilidad, si vive solo/a, quién cuida ahora) y proponemos el siguiente paso más útil, sin obligar a un paquete completo.",
      ]}
      includes={[
        "Ayuda a domicilio por horas",
        "Descanso familiar",
        "Organización de apoyos y orientación a la familia",
        "Tecnología de prevención sin cámaras",
        "Informe Hogar Seguro 29,90 €",
      ]}
      zones="Talavera de la Reina y municipios cercanos, según disponibilidad. Consulte su caso por WhatsApp."
      waText="Hola, necesito información sobre ayuda a domicilio en Talavera de la Reina con Hábitat Asistencial."
    />
  );
}
