import { MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, quiero orientación sobre el trámite de dependencia y cómo organizar apoyos en casa."
  );

const pasos = [
  {
    n: "1",
    t: "Presentar la solicitud",
    d: "Se inicia ante la administración competente de la comunidad autónoma, siguiendo sus canales y requisitos.",
  },
  {
    n: "2",
    t: "Aportar la documentación",
    d: "Pueden solicitarse documentos de identidad, residencia, informes de salud y otros justificantes. La lista concreta depende del territorio y del caso.",
  },
  {
    n: "3",
    t: "Realizar la valoración",
    d: "El equipo correspondiente valora la situación de la persona y sus necesidades de apoyo, según el procedimiento establecido.",
  },
  {
    n: "4",
    t: "Recibir la resolución",
    d: "La Administración comunica el resultado y, cuando corresponde, el grado de dependencia reconocido.",
  },
  {
    n: "5",
    t: "Determinar los apoyos",
    d: "Según la situación, los requisitos y los recursos disponibles, puede establecerse el acceso a servicios o prestaciones del sistema.",
  },
];

const rapidas = [
  {
    q: "¿Hay que tener reconocida la dependencia para recibir ayuda en casa?",
    a: "No necesariamente. Podéis organizar apoyos privados o consultar otros recursos sin esperar a la resolución administrativa.",
  },
  {
    q: "¿Dónde se presenta la solicitud?",
    a: "Con carácter general, ante la administración competente de la comunidad autónoma. Los servicios sociales municipales pueden orientaros.",
  },
  {
    q: "¿Cuánto tarda el reconocimiento?",
    a: "No existe un plazo único que pueda garantizarse. Depende del procedimiento y de cada territorio.",
  },
  {
    q: "¿Qué grado le corresponderá a mi familiar?",
    a: "No puede determinarse solo por lo que cuenta la familia. El grado lo establece la Administración con la valoración oficial.",
  },
  {
    q: "¿Podemos pedir orientación antes de solicitarla?",
    a: "Sí. Consultar las opciones ayuda a preparar documentación, resolver dudas y organizar apoyos mientras decidís cómo continuar.",
  },
];

export default function DependenciaSection() {
  return (
    <section id="dependencia" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
          Orientación administrativa
        </p>
        <h2 className="text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl">
          Dependencia en España: cómo empezar el trámite
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Cuando una persona mayor empieza a necesitar ayuda, es habitual preguntarse si hay que
          solicitar la dependencia, qué documentación hace falta y si se pueden recibir apoyos
          mientras se espera. El primer paso es entender el reconocimiento y cómo encaja en vuestra
          familia. No hace falta resolverlo todo de golpe.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">1. ¿Qué es la dependencia reconocida?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Es una situación que la Administración valora oficialmente cuando una persona necesita
              apoyo de otra para actividades básicas de la vida diaria, o determinados apoyos para su
              autonomía, según los criterios establecidos. Necesitar ayuda en casa y tener reconocida
              la dependencia no son lo mismo: podéis organizar apoyos aunque aún no haya valoración
              oficial. El reconocimiento puede permitir acceder a servicios o prestaciones según el
              grado, los requisitos y la comunidad autónoma.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">2. ¿Quién puede solicitarla?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              La solicitud suele presentarse para la persona que necesita los apoyos, por ella misma
              o mediante quien pueda representarla conforme a los requisitos aplicables. Si eres
              familiar cuidador, puedes ayudar a reunir información y consultar cómo iniciar el
              procedimiento. La forma de presentar la solicitud varía según la comunidad autónoma.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">3. ¿Cómo funciona el trámite?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Con carácter general, el proceso sigue estas etapas:
            </p>
            <ol className="mt-4 space-y-4">
              {pasos.map((p) => (
                <li key={p.n} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1B3A6B] text-sm font-bold text-white">
                    {p.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1B3A6B]">{p.t}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Para formularios y requisitos vigentes, consulta los servicios sociales de tu municipio
              o la información oficial de tu comunidad autónoma.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">4. ¿Qué conviene preparar antes?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
              <li>Anotar qué actividades puede realizar la persona sola y en cuáles necesita ayuda.</li>
              <li>Identificar dificultades, riesgos en casa y momentos del día más complicados.</li>
              <li>Reunir documentación básica y consultar qué informes se solicitan.</li>
              <li>Contactar con servicios sociales de referencia de tu territorio.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">5. ¿Qué no garantiza el reconocimiento?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              No garantiza una resolución rápida ni un tipo concreto de ayuda. Los plazos y apoyos
              dependen de la administración y de cada caso. Tampoco cubre automáticamente todas las
              necesidades cotidianas. Por eso conviene conocer las opciones públicas y los apoyos que
              la familia puede organizar mientras tanto.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">
              6. ¿Podemos organizar los cuidados mientras esperamos?
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Sí. No hace falta esperar a que el expediente esté resuelto. Podéis identificar
              prioridades, repartir responsabilidades, valorar apoyos profesionales y revisar la
              seguridad del hogar, respetando la autonomía de la persona y un plan realista para quien
              cuida.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1B3A6B]">7. ¿Cómo puede ayudar Hábitat Asistencial?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Escuchamos vuestra situación, ordenamos dudas, ayudamos a priorizar y orientamos sobre
              los siguientes pasos y la organización de apoyos en casa. Acompañamos y ayudamos a
              entender opciones: no sustituimos a los servicios sociales ni a la Administración, ni
              tramitamos el reconocimiento en su nombre salvo que se indique expresamente otro
              servicio.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold text-[#1B3A6B]">Preguntas rápidas</h3>
          <div className="mt-4 space-y-3">
            {rapidas.map((r) => (
              <div key={r.q} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="font-semibold text-[#1B3A6B]">{r.q}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{r.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-bold text-[#1B3A6B]">Para empezar hoy: tres pasos</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-600">
            <li>Anota las necesidades prioritarias de tu familiar.</li>
            <li>Consulta el procedimiento de tu comunidad autónoma o servicios sociales municipales.</li>
            <li>Organiza los apoyos urgentes del día a día sin esperar solo a la resolución.</li>
          </ol>
        </div>

        <div className="mt-8 rounded-3xl bg-[#1B3A6B] px-6 py-8 text-center text-white">
          <p className="text-lg font-semibold leading-8">¿No sabes cuál debería ser el primer paso?</p>
          <p className="mt-3 text-white/80 leading-7">
            Te ayudamos a ordenar las dudas, identificar prioridades y valorar cómo organizar los
            apoyos en casa.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Consulta breve por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
