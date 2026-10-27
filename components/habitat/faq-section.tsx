import { MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, tengo dudas sobre cómo organizar apoyos en casa. ¿Podéis orientarme en una consulta breve?"
  );

const faqs = [
  {
    q: "¿Por dónde empiezo si mi familiar necesita apoyo en casa?",
    a: "Empieza por observar qué puede hacer por sí mismo, en qué necesita ayuda y qué situaciones os preocupan más. Anota las necesidades relacionadas con la comida, el aseo, la movilidad, las salidas y las noches. No hace falta resolverlo todo de golpe: identificar las prioridades permite organizar los apoyos paso a paso, empezando por lo más importante para la persona y su familia.",
  },
  {
    q: "¿Qué es la dependencia reconocida y en qué se diferencia de necesitar ayuda?",
    a: "Necesitar ayuda es una realidad que podéis observar en el día a día. La dependencia reconocida es una valoración administrativa oficial que determina un grado y puede dar acceso a servicios o prestaciones, según los requisitos aplicables. Ambas situaciones no son lo mismo: podéis necesitar organizar apoyos en casa aunque todavía no se haya solicitado o resuelto la valoración.",
  },
  {
    q: "¿Cómo se solicita la valoración de dependencia en España?",
    a: "Con carácter general, la solicitud se presenta ante la administración competente de la comunidad autónoma, directamente o a través de los servicios habilitados en cada territorio. Después se revisa la documentación y se realiza la valoración correspondiente. Los requisitos, la documentación y los plazos varían según la comunidad autónoma y el caso. Si no sabes por dónde empezar, podemos ayudarte a ordenar las dudas y los próximos pasos.",
  },
  {
    q: "¿Cuánto cuesta organizar los apoyos en casa?",
    a: "Depende de las horas necesarias, del tipo de atención, de los horarios y de si se necesita apoyo durante las noches o los fines de semana. También influye cómo se contrata el servicio y qué tareas se acuerdan. Lo más útil es identificar primero las necesidades prioritarias y valorar las opciones disponibles, sin asumir más gastos de los necesarios ni comprometer una atención que no pueda mantenerse.",
  },
  {
    q: "¿Podemos seguir trabajando mientras cuidamos a un familiar?",
    a: "Sí, aunque compatibilizar trabajo y cuidados puede resultar agotador cuando toda la responsabilidad recae en las mismas personas. Ayuda repartir tareas, acordar horarios y prever qué hacer si alguien no puede acudir. También conviene identificar los momentos más difíciles del día para organizar apoyos en esas franjas. No se trata de que la familia deje de cuidar, sino de que no tenga que sostenerlo todo sola.",
  },
  {
    q: "¿Qué implica ser familia empleadora al contratar ayuda en el domicilio?",
    a: "Cuando contratáis directamente a una persona trabajadora del hogar, asumís las obligaciones que correspondan como empleadores, incluidas las relacionadas con el contrato, la Seguridad Social, la retribución, los descansos y las vacaciones. También es importante acordar las tareas, los horarios y la comunicación en casa. Las obligaciones concretas dependen de la modalidad de contratación, por lo que conviene informarse bien antes de empezar.",
  },
  {
    q: "¿Existen ayudas para adaptar la vivienda y mejorar la seguridad?",
    a: "Puede haber ayudas públicas para actuaciones como adaptar el baño, eliminar barreras o facilitar el acceso a la vivienda. Los requisitos, las cuantías y las convocatorias dependen de la comunidad autónoma, el ayuntamiento y el programa correspondiente. Antes de realizar obras, conviene identificar qué cambios son prioritarios y consultar las convocatorias vigentes o los servicios de orientación disponibles.",
  },
  {
    q: "¿Cómo podemos prevenir las caídas y dejar de pasar la noche pendientes del teléfono?",
    a: "El miedo a una caída o a recibir una llamada durante la noche puede generar mucho desgaste. Revisar la iluminación, retirar obstáculos, mejorar la seguridad del baño y facilitar los desplazamientos son medidas que pueden ayudar. También conviene acordar quién responde ante una incidencia y valorar si algún sistema de apoyo resulta adecuado. Ninguna medida elimina todos los riesgos, pero una buena organización puede aportar tranquilidad sin convertir a la familia en vigilante permanente.",
  },
  {
    q: "¿Qué diferencia hay entre teleasistencia, ayuda a domicilio y organización de apoyos?",
    a: "La teleasistencia facilita pedir ayuda o recibir determinados avisos, según el sistema contratado. La ayuda a domicilio consiste en la atención presencial para tareas y necesidades acordadas. La organización de apoyos permite identificar qué hace falta, cuándo, quién se responsabiliza y cómo se coordina y revisa. Son opciones que pueden complementarse, pero su utilidad depende de las necesidades de la persona y de los recursos disponibles.",
  },
  {
    q: "¿Qué puede hacer Hábitat Asistencial si todavía no sabemos qué necesitamos?",
    a: "Podemos empezar escuchando vuestra situación y ayudándoos a ordenar las necesidades, las prioridades y las opciones disponibles. A partir de ahí, valoramos qué apoyos encajan y qué pasos podrían darse primero, según el alcance de nuestros servicios y los recursos disponibles. No tenéis que decidirlo todo en una primera conversación: la idea es avanzar con claridad, respetando las decisiones y la autonomía de la persona.",
  },
];

export default function FaqSection() {
  return (
    <section id="preguntas-frecuentes" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
            Orientación clara
          </p>
          <h2 className="text-3xl font-bold text-[#1B3A6B] sm:text-4xl">Preguntas frecuentes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Dudas habituales de familias que empiezan a organizar apoyos en casa. Respuestas
            directas, sin alarmismo.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-slate-50/80 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[#1B3A6B] sm:px-6 sm:py-5">
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B3A6B]/10 text-sm text-[#1B3A6B]">
                    {i + 1}
                  </span>
                  <span className="flex-1 pr-2">{item.q}</span>
                  <span className="mt-1 text-slate-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-base leading-7 text-slate-600 sm:px-6 sm:pl-[3.75rem]">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#1B3A6B] px-6 py-8 text-center text-white sm:px-10">
          <p className="text-lg font-semibold leading-8">
            Puedes empezar con una consulta breve y sin compromiso.
          </p>
          <p className="mt-3 text-white/80 leading-7">
            Te escuchamos, ordenamos las prioridades y buscamos un primer paso asumible.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
