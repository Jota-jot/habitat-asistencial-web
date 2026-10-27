import { MessageCircle, Check, Shield } from "lucide-react";

const waKit =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, quiero el Kit Hogar Seguro (29,90 € con valoración incluida). ¿Cómo lo pido?"
  );

const waConsulta =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, quiero una consulta sin compromiso sobre apoyos en casa / seguridad en el hogar."
  );

const items = [
  "Bolsa botiquín grande",
  "Pastillero de 7 días",
  "Bombilla con sensor de movimiento",
  "Timbre inalámbrico USB",
  "Calzador largo",
  "Pastillero mini + mini luz LED",
  "Valoración del hogar (20 min) incluida",
];

export default function KitHogarSection() {
  return (
    <section id="kit-hogar-seguro" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
            Oferta de lanzamiento
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl">
            Kit Hogar Seguro
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            No es el miedo a la caída. Es el miedo a la llamada. Empieza por lo básico:
            un kit práctico y una valoración clara de tu casa, sin compromiso de obras.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-wrap items-end gap-3">
              <span className="text-4xl font-bold text-[#1B3A6B]">29,90 €</span>
              <span className="text-lg text-slate-400 line-through">57,55 €</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                Ahorras 27,65 €
              </span>
            </div>
            <p className="mb-6 text-slate-600">
              Lo esencial para un hogar más seguro, con valoración del espacio incluida
              (online o presencial, ~20 minutos).
            </p>
            <ul className="mb-8 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={waKit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-700 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir el Kit por WhatsApp
            </a>
            <p className="mt-3 text-xs text-slate-500">IVA incluido. Precio de lanzamiento del catálogo 2026.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-[#1B3A6B] p-6 text-white sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0A500]/20 text-[#F0A500]">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Consulta sin compromiso</h3>
              <p className="mt-3 text-white/85 leading-7">
                Cuéntanos la situación de tu familiar. Te orientamos por WhatsApp o teléfono
                sin presión y sin tener que decidirlo todo de golpe.
              </p>
              <a
                href={waConsulta}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F0A500] px-5 py-3 font-bold text-[#0f2340] transition hover:brightness-105"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar sin compromiso
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#1B3A6B]">Para la familia empleadora</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Si contratáis apoyo en casa, os ayudamos a ordenar qué hace falta hoy,
                qué puede esperar y cómo coordinar el cuidado con más claridad y menos desgaste.
              </p>
              <a
                href={
                  "https://wa.me/34635332019?text=" +
                  encodeURIComponent(
                    "Hola, somos familia empleadora y necesitamos orientación sobre apoyos en domicilio."
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-[#1B3A6B] underline-offset-4 hover:underline"
              >
                Pedir orientación para la familia →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
