import { MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, necesito información sobre apoyos en casa con Hábitat Asistencial. ¿Podemos hablar?"
  );

export default function WhatsAppButton() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp con Hábitat Asistencial"
      className="whatsapp-pulse fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 py-3 pl-3 pr-5 text-white shadow-2xl transition hover:bg-green-600"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
        <MessageCircle className="h-7 w-7" />
      </span>
      <span className="hidden text-sm font-bold leading-tight sm:block">
        ¿Hablamos?
        <span className="block text-xs font-medium text-white/90">WhatsApp</span>
      </span>
    </a>
  );
}
