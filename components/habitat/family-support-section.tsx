export function FamilySupportSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
            Apoyo a las familias
          </p>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl">
            Un apoyo que se adapta a cada situación
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-700">
            <p>
              Entendemos la realidad que afronta una familia cuando necesita
              ayuda en el domicilio: no siempre sabe por dónde empezar ni cuánto
              apoyo va a necesitar.
            </p>
            <p>
              En Hábitat Asistencial acompañamos ese proceso. Empezamos por la
              necesidad actual, facilitamos la contratación del apoyo adecuado
              y hacemos seguimiento para ayudar a la persona y a su familia
              durante la adaptación. Después, modulamos el servicio según cómo
              evolucione la situación.
            </p>
            <p className="font-semibold text-[#1B3A6B]">
              No tienes que decidirlo todo de golpe: empezamos con lo que hace
              falta hoy y lo ajustamos contigo.
            </p>
          </div>
          <a
            href="https://ayudas.habitatasistencial.es"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#0f2340] transition hover:brightness-95"
          >
            Busco ayudas <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
