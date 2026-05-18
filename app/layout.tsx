import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hábitat Asistencial | Prevención y Coordinación Asistencial en el Hogar",
  description: "Ecosistema de prevención y coordinación asistencial domiciliaria. Tecnología ASSURE CAREWARE, red de Puntos AMBER en farmacias y comercios, servicio CUIDÓN y modelo de adhesión familiar. Alcalá de Henares, Segovia, Guadalajara, Talavera de la Reina.",
  keywords: ["hábitat asistencial","cuidado domiciliario mayores","punto AMBER farmacia","ASSURE CAREWARE","CUIDÓN servicio domiciliario","teleasistencia avanzada","prevención dependencia","radar Biovital","coordinación asistencial"],
  metadataBase: new URL("https://habitatasistencial.es"),
  openGraph: { title: "Hábitat Asistencial | Prevención y Coordinación Asistencial en el Hogar", description: "Ecosistema de prevención y coordinación asistencial domiciliaria.", url: "https://habitatasistencial.es", siteName: "Hábitat Asistencial", type: "website", locale: "es_ES" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {"@context":"https://schema.org","@type":"Organization",name:"Hábitat Asistencial",url:"https://habitatasistencial.es",telephone:"+34635332019",email:"info@habitatasistencial.es",sameAs:["https://assurecareware.es"]};
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
