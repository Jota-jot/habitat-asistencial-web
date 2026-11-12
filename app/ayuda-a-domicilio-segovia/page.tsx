import type { Metadata } from "next";
import { LocalLanding } from "@/components/habitat/local-landing";

export const metadata: Metadata = {
  title: "Ayuda a domicilio en Segovia | Hábitat Asistencial",
  description:
    "Ayuda a domicilio y cuidado de mayores en Segovia y La Lastrilla. Prevención, tecnología sin cámaras e Informe Hogar Seguro. WhatsApp 635 332 019.",
  alternates: { canonical: "https://www.habitatasistencial.es/ayuda-a-domicilio-segovia" },
  openGraph: {
    title: "Ayuda a domicilio en Segovia | Hábitat Asistencial",
    description:
      "Ayuda a domicilio y cuidado de mayores en Segovia. Tecnología sin cámaras e Informe Hogar Seguro 29,90 €.",
    url: "https://www.habitatasistencial.es/ayuda-a-domicilio-segovia",
    locale: "es_ES",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocalLanding
      cityLabel="Segovia"
      h1="Ayuda a domicilio en Segovia"
      lead="Cuidado de personas mayores en el hogar en Segovia y La Lastrilla. Prevención, acompañamiento profesional y tecnología discreta."
      intro={[
        "En Segovia y La Lastrilla, Hábitat Asistencial ayuda a las familias a organizar el cuidado en casa: orientación clara, servicio por horas cuando hay disponibilidad, y prevención de riesgos en el hogar.",
        "Nuestro enfoque no es solo cubrir horas: es que la persona mayor esté más segura y la familia más tranquila, con información y apoyos bien ordenados.",
      ]}
      includes={[
        "Ayuda a domicilio y acompañamiento según plan acordado",
        "Descanso familiar",
        "Prevención de caídas y riesgos en el hogar",
        "Tecnología de prevención sin cámaras",
        "Informe Hogar Seguro 29,90 €",
      ]}
      zones="Segovia, La Lastrilla y entornos cercanos, sujeto a disponibilidad. Consulte por WhatsApp."
      waText="Hola, necesito información sobre ayuda a domicilio en Segovia con Hábitat Asistencial."
    />
  );
}
