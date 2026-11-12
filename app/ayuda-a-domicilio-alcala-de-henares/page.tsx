import type { Metadata } from "next";
import { LocalLanding } from "@/components/habitat/local-landing";

export const metadata: Metadata = {
  title: "Ayuda a domicilio en Alcalá de Henares | Hábitat Asistencial",
  description:
    "Ayuda a domicilio y cuidado de mayores en Alcalá de Henares. Tecnología de prevención sin cámaras, cuidadores profesionales e Informe Hogar Seguro. WhatsApp 635 332 019.",
  alternates: { canonical: "https://www.habitatasistencial.es/ayuda-a-domicilio-alcala-de-henares" },
  openGraph: {
    title: "Ayuda a domicilio en Alcalá de Henares | Hábitat Asistencial",
    description:
      "Ayuda a domicilio y cuidado de mayores en Alcalá de Henares. Tecnología sin cámaras e Informe Hogar Seguro 29,90 €.",
    url: "https://www.habitatasistencial.es/ayuda-a-domicilio-alcala-de-henares",
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocalLanding
      cityLabel="Alcalá de Henares"
      h1="Ayuda a domicilio en Alcalá de Henares"
      lead="Cuidado profesional de personas mayores en su propio hogar. Prevención, tecnología discreta y acompañamiento humano en Alcalá y el Corredor del Henares."
      intro={[
        "En Hábitat Asistencial ofrecemos un servicio integral de ayuda a domicilio en Alcalá de Henares pensado para que las personas mayores puedan permanecer en su casa con seguridad y dignidad. No se trata solo de enviar un cuidador: combinamos atención profesional, prevención de riesgos y tecnología no invasiva.",
        "Trabajamos en Alcalá de Henares y municipios cercanos (Torrejón de Ardoz, Azuqueca, Meco) con un modelo orientado a la tranquilidad de las familias.",
      ]}
      includes={[
        "Atención personal: higiene, movilidad, acompañamiento y apoyo en actividades diarias",
        "Servicio por horas flexible, sujeto a disponibilidad y mínimos",
        "Descanso familiar (respiro del cuidador)",
        "Orientación y organización de apoyos para familias",
        "Tecnología de prevención sin cámaras (ASSURE CAREWARE / BioVital)",
        "Informe Hogar Seguro: evaluación de riesgos + kit por 29,90 €",
      ]}
      zones="Alcalá de Henares, Torrejón de Ardoz, Azuqueca de Henares, Meco y municipios del Corredor del Henares. Si su familiar vive en otra localidad cercana, consúltenos."
      waText="Hola, necesito información sobre ayuda a domicilio en Alcalá de Henares con Hábitat Asistencial."
    />
  );
}
