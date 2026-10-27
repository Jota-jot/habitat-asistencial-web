export function FamilySupportSection() {
  const waUrl =
    "https://wa.me/34635332019?text=" +
    encodeURIComponent(
      "Hola, somos una familia y necesitamos orientación sobre apoyos en domicilio. ¿Podéis ayudarnos?"
    );

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl rounded-3xl border border-slate-100 bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-9">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
            Apoyo a las familias
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[#1B3A6B] sm:mb-8 sm:text-4xl">
            Un apoyo que se adapta a cada situación
          </h2>
          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-8">
            <p>
              Entendemos la realidad que afronta una familia cuando necesita ayuda en el
              domicilio: no siempre sabe por dónde empezar ni cuánto apoyo va a necesitar.
            </p>
            <p>
              En Hábitat Asistencial acompañamos ese proceso. Empezamos por la necesidad
              actual, facilitamos la contratación del apoyo adecuado y hacemos seguimiento
              para ayudar a la persona y a su familia durante la adaptación. Después,
              modulamos el servicio según cómo evolucione la situación.
            </p>
            <p className="font-semibold text-[#1B3A6B]">
              No tienes que decidirlo todo de golpe: empezamos con lo que hace falta hoy y
              lo ajustamos contigo.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
            >
              Hablar con nosotros por WhatsApp
            </a>
            <a
              href="https://accessibility-grants-x3b7.bolt.host"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-95"
            >
              Busco ayudas <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
