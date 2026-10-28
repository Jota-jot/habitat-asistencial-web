import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hábitat Asistencial | Prevención y Coordinación Asistencial en el Hogar",
  description:
    "Organización de apoyos y horas de servicio en domicilio. Orientación a familias, Kit Hogar Seguro y prevención en el hogar. Alcalá de Henares, Guadalajara, Segovia, Talavera y municipios cercanos.",
  keywords: [
    "hábitat asistencial",
    "cuidado domiciliario mayores",
    "organización de apoyos",
    "ayuda a domicilio",
    "kit hogar seguro",
    "punto AMBER farmacia",
    "prevención dependencia",
  ],
  metadataBase: new URL("https://www.habitatasistencial.es"),
  openGraph: {
    title: "Hábitat Asistencial | Apoyos en el hogar",
    description:
      "Organizamos apoyos y prestamos horas de servicio en domicilio. Consulta sin compromiso por WhatsApp.",
    url: "https://www.habitatasistencial.es",
    siteName: "Hábitat Asistencial",
    type: "website",
    locale: "es_ES",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hábitat Asistencial",
    url: "https://www.habitatasistencial.es",
    telephone: "+34635332019",
    email: "habitatasistencial@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Barberán y Collar 2, Bajo D",
      addressLocality: "Alcalá de Henares",
      postalCode: "28806",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
