import Link from "next/link";

const safetyTips = [
  {
    number: "01",
    title: "Para antes de cruzar",
    text: "Detente en un lugar seguro, mira a ambos lados y escucha. Cruza por un paso habilitado cuando sea posible y acompañado de una persona adulta.",
  },
  {
    number: "02",
    title: "En casa, ojos atentos",
    text: "No toques productos de limpieza, enchufes, medicamentos ni objetos calientes. Si ves algo peligroso, aléjate y avisa a una persona adulta.",
  },
  {
    number: "03",
    title: "Los mayores también cuentan",
    text: "Mantén los pasos despejados, usa buena iluminación y pide ayuda si algo no parece seguro. Cuidar también es preguntar y acompañar.",
  },
];

export default function CantaYJuegaPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0] text-[#172b4d]">
      <header className="bg-[#1B3A6B] px-5 py-5 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="font-bold tracking-wide text-white hover:text-[#F0A500]">
            Hábitat Asistencial
          </Link>
          <Link href="/#contacto" className="rounded-full bg-[#F0A500] px-4 py-2 text-sm font-bold text-[#172b4d]">
            Contacto
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#1B3A6B] px-5 pb-16 pt-10 text-white sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#F0A500]/50 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#F0A500]">
              Prevención que se aprende jugando
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Canta y Juega
              <span className="mt-2 block text-[#F0A500]">Pequeños gestos, hogares más seguros</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Una propuesta educativa de Hábitat Asistencial para aprender normas sencillas de seguridad vial y prevención de accidentes en casa, compartirlas en el colegio y recordarlas en familia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cancion" className="rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#172b4d] hover:brightness-105">
                Aprender la canción
              </a>
              <a href="#actividad" className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">
                Actividad para el aula
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0A500] text-3xl" aria-hidden="true">🎃</span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#F0A500]">Edición piloto</p>
                <h2 className="text-2xl font-bold">Halloween seguro</h2>
              </div>
            </div>
            <p className="leading-7 text-white/85">
              Una actividad de prueba con canción, gestos y retos de observación. Mr. Quidon y Vigía forman parte de la identidad prevista del proyecto; sus ilustraciones originales se incorporarán cuando se localicen los archivos auténticos.
            </p>
            <p className="mt-4 text-sm text-white/65">
              Actividad educativa: debe adaptarse a la edad y realizarse con supervisión adulta.
            </p>
          </div>
        </div>
      </section>

      <section id="cancion" className="px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-wider text-[#b77900]">Canción original · borrador</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">¡Para, mira y avisa!</h2>
            <p className="mt-4 leading-7 text-slate-700">
              La cantamos marcando el ritmo con palmas y gestos. La letra es un borrador inicial para revisar antes de grabarla o presentarla en colegios.
            </p>
          </div>
          <div className="rounded-3xl border border-[#f0dca8] bg-white p-6 shadow-sm sm:p-9">
            <p className="text-lg font-semibold leading-9 sm:text-xl">
              ¡Para, para! ✋<br />
              ¡Mira, mira! 👀<br />
              A ambos lados antes de cruzar.<br />
              Con un adulto voy más seguro,<br />
              por el paso voy a pasar.<br /><br />
              Si en casa un peligro veo,<br />
              no lo toco, digo: «¡Ven!»<br />
              Busco a un adulto de confianza:<br />
              ¡avisar es hacerlo bien!
            </p>
            <div className="mt-6 rounded-xl bg-[#fff4d6] p-4 text-sm leading-6 text-slate-700">
              <strong>Gestos:</strong> palma abierta para «para»; mano sobre los ojos para «mira»; señalar a un adulto de confianza para «avisa». En la calle, cruzar siempre siguiendo las normas viales y las indicaciones del adulto responsable.
            </div>
          </div>
        </div>
      </section>

      <section id="actividad" className="bg-white px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-[#b77900]">Para colegios y familias</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-extrabold sm:text-4xl">El reto de los pequeños guardianes de la prevención</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Una dinámica breve para el aula: observar, elegir una respuesta segura y llevar a casa una misión que se realiza junto a una persona adulta.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Detectives de riesgos", "En una ilustración de una casa, identificar riesgos como objetos en el paso, productos de limpieza al alcance o superficies calientes."],
              ["¿Qué harías tú?", "Elegir entre respuestas posibles: alejarse, no tocar y avisar a una persona adulta de confianza."],
              ["Misión en familia", "Revisar con una persona adulta tres aspectos sencillos de seguridad, sin tocar ni manipular elementos peligrosos."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-[#fffaf0] p-6">
                <span className="text-2xl" aria-hidden="true">✓</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Tres mensajes que queremos recordar</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {safetyTips.map((tip) => (
              <article key={tip.number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-extrabold text-[#b77900]">{tip.number}</p>
                <h3 className="mt-2 text-xl font-bold">{tip.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A6B] px-5 py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">La prevención se aprende y se comparte</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/80">
              ¿Eres docente, familiar o entidad y quieres conocer la propuesta educativa? Contacta con Hábitat Asistencial para explorar una actividad piloto.
            </p>
          </div>
          <Link href="/#contacto" className="shrink-0 rounded-xl bg-[#F0A500] px-6 py-3 font-bold text-[#172b4d]">
            Consultar la actividad
          </Link>
        </div>
      </section>

      <footer className="bg-[#102746] px-5 py-6 text-center text-sm text-white/70">
        Hábitat Asistencial · Canta y Juega · Material educativo en desarrollo. No sustituye instrucciones de seguridad ni orientación profesional.
      </footer>
    </main>
  );
}
