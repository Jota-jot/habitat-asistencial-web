"use client";
import { FileText, Bot, ArrowRight, Mic, Search, Shield } from "lucide-react";

export default function ToolsSection() {
  return (
    <section id="herramientas" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium mb-4 bg-[#1B3A6B]/10 text-[#1B3A6B]">
            Herramientas útiles
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Recursos <span className="text-[#1B3A6B]">prácticos</span> para familias y comunidades
          </h2>
          <p className="text-slate-600 text-lg">
            Accede de forma sencilla a las ayudas disponibles y a un asesor de prevención pensado para personas mayores y sus familias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <article className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#F0A500]/15 text-[#8a6200]">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#1B3A6B]">
              Subvenciones y Ayudas a la Accesibilidad
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
              Consulta programas públicos vigentes para ascensores, salvaescaleras, rampas, duchas a cota cero y otras actuaciones de accesibilidad. Información actualizada por Comunidad Autónoma.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#F0A500]" />
                Búsqueda por tipo de actuación y territorio
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F0A500]" />
                Enlaces a fuentes oficiales
              </li>
            </ul>
            <a
              href="https://accessibility-grants-x3b7.bolt.host"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-[#1B3A6B] text-white font-semibold hover:bg-[#152d54] transition"
            >
              Ir a Ayudas y Subvenciones
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>

          <article className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1B3A6B]/10 text-[#1B3A6B]">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#1B3A6B]">
              Asesor IA de Prevención
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
              Consulta dudas sobre seguridad en el hogar, prevención de caídas y buenas prácticas. Incluye dictado por voz y lectura en voz alta pensados para personas mayores.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-[#1B3A6B]" />
                Dictado y transcripción por voz
              </li>
              <li className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#1B3A6B]" />
                Respuestas claras y accesibles
              </li>
            </ul>
            <a
              href="https://aistudio.google.com/apps/990c963d-0d5a-41ab-b4ff-47af8aa2f2af?showPreview=true&showAssistant=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-[#F0A500] text-[#0f2340] font-semibold hover:bg-[#e09400] transition"
            >
              Abrir Asesor de Prevención
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        </div>

        <p className="text-center text-sm text-slate-500 mt-10 max-w-2xl mx-auto">
          Estas herramientas son de acceso libre y están pensadas para facilitar la prevención y el acceso a ayudas públicas. Si necesitas apoyo personalizado, contacta con nosotros.
        </p>
      </div>
    </section>
  );
}
