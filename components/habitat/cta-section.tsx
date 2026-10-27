import { Phone, MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, me gustaría solicitar información sobre los servicios de Hábitat Asistencial"
  );

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#1B3A6B]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Porque cuidar mejor <span className="text-[#F0A500]">no es un lujo</span>
        </h2>
        <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Cuéntanos tu situación. Te orientamos sin compromiso y con respuesta rápida por WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 text-white font-bold px-8 py-4 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp ahora
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-[#F0A500] text-[#0f2340] font-bold px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Formulario de contacto
          </a>
        </div>
      </div>
    </section>
  );
}
