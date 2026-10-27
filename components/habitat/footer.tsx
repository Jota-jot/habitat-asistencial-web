import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white bg-[#0f2340]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">Hábitat Asistencial</h3>
            <p className="text-white/60 text-sm leading-relaxed mt-3">
              Organizamos apoyos en el hogar y prestamos horas de servicio en domicilio con contrato
              con Hábitat, sujeto a disponibilidad y mínimos. Orientamos a las familias en cada paso.
            </p>
            <div className="space-y-2 mt-4">
              <a href="tel:+34635332019" className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4" />
                +34 635 332 019
              </a>
              <a
                href="mailto:habitatasistencial@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <Mail className="w-4 h-4" />
                habitatasistencial@gmail.com
              </a>
              <div className="flex gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  Calle Barberán y Collar 2, Bajo D
                  <br />
                  28806 Alcalá de Henares, Madrid
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F0A500]">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#organizacion-apoyos" className="hover:text-white">
                  Organización de apoyos y horas
                </a>
              </li>
              <li>
                <a href="#kit-hogar-seguro" className="hover:text-white">
                  Kit Hogar Seguro
                </a>
              </li>
              <li>ASSURE CAREWARE</li>
              <li>Punto AMBER</li>
              <li>Hogares Seguros</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F0A500]">
              Recursos
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#preguntas-frecuentes" className="hover:text-white">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#dependencia" className="hover:text-white">
                  Dependencia: cómo empezar
                </a>
              </li>
              <li>
                <a href="#kit-hogar-seguro" className="hover:text-white">
                  Kit Hogar Seguro
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#F0A500]">
              Presencia
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Alcalá de Henares</li>
              <li>Guadalajara</li>
              <li>Azuqueca</li>
              <li>Meco</li>
              <li>Torrejón de Ardoz</li>
              <li>Segovia / La Lastrilla</li>
              <li>Talavera de la Reina</li>
            </ul>
            <p className="mt-3 text-xs text-white/40">Cobertura según servicio y disponibilidad.</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-white/40 text-sm">
          © {new Date().getFullYear()} Hábitat Asistencial. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
