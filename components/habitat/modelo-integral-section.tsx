import { MessageCircle } from "lucide-react";

const waUrl =
  "https://wa.me/34635332019?text=" +
  encodeURIComponent(
    "Hola, quiero conocer el modelo integral de Hábitat y cómo puede aplicarse a nuestra situación."
  );

const principios = [
  {
    t: "Autonomía y voz propia",
    d: "Respetar decisiones, privacidad, capacidades conservadas y derecho a participar, incluso cuando se necesita ayuda.",
  },
  {
    t: "Activación funcional",
    d: "Promover movimiento, equilibrio, fuerza, memoria, coordinación, participación y confianza, con objetivos adaptados a cada persona.",
  },
  {
    t: "Familias acompañadas",
    d: "Orientar, organizar tareas y ofrecer seguimiento sin asumir que la familia debe resolverlo todo.",
  },
  {
    t: "Profesionales con respaldo",
    d: "Coordinación, protocolos y formación. La tecnología complementa al equipo; no sustituye su criterio ni su trabajo.",
  },
  {
    t: "Tecnología con propósito",
    d: "Información y alertas cuando aporten valor real, con respeto a la intimidad y sin presentar la monitorización como vigilancia permanente.",
  },
  {
    t: "Comunidad y proximidad",
    d: "Conectar recursos locales, farmacias, entidades y administraciones con funciones claras y procedimientos que protejan la privacidad.",
  },
];

const capas = [
  { t: "Persona", d: "Preferencias, capacidades y derecho a decidir el apoyo que necesita." },
  { t: "Familia", d: "Orientación y organización sin cargar toda la responsabilidad en unos pocos." },
  { t: "Hogar", d: "Rutinas, seguridad cotidiana y adaptaciones proporcionadas al riesgo." },
  { t: "Profesionales", d: "Criterio humano, coordinación y límites claros de competencia." },
  { t: "Tecnología", d: "Señales e información útiles; no vigilancia permanente ni sustituto del cuidado." },
  { t: "Actividad", d: "Participación, entrenamiento y envejecimiento activo cuando la persona lo desea." },
  { t: "Comunidad", d: "Farmacias, comercios y redes de proximidad con protocolos, no como cuidadores." },
  { t: "Territorio", d: "Cobertura real según distancias, personal y demanda; sin promesas vacías." },
];

const pasos = [
  { t: "Escuchar", d: "Situación, preferencias, rutinas, entorno y preocupaciones de la persona y su familia." },
  { t: "Orientar", d: "Información práctica, criterios de alerta y próximos pasos realistas." },
  { t: "Organizar", d: "Plan proporcionado: tareas, apoyos, responsabilidades y cuándo escalar." },
  { t: "Activar apoyos", d: "Atención, adaptación del hogar, recursos comunitarios o tecnología si son pertinentes." },
  { t: "Revisar", d: "Comprobar si el plan sigue siendo adecuado y ajustar ante cambios." },
];

const lineas = [
  {
    pill: "Persona y hogar",
    t: "Atención y acompañamiento",
    d: "Apoyo cotidiano, rutinas y conexión con recursos profesionales, respetando preferencias y capacidades.",
    estado: "Disponible según zona y mínimos",
    href: "#organizacion-apoyos",
  },
  {
    pill: "Familia",
    t: "Orientación y apoyo familiar",
    d: "Guías prácticas, organización de tareas y señales que aconsejan consultar a profesionales.",
    estado: "Disponible",
    href: "#organizacion-apoyos",
  },
  {
    pill: "Actividad",
    t: "Envejecimiento activo",
    d: "Actividad cognitiva, funcional y social. Iniciativas del ecosistema: GiocoCoG, Yopop, Cuidón y Vigía.",
    estado: "Según iniciativa y disponibilidad",
    href: "#servicios",
  },
  {
    pill: "Continuidad",
    t: "SHRI y servicios residenciales",
    d: "Continuidad entre residencia, domicilio, familia y profesionales. Componentes a validar por contexto.",
    estado: "Propuesta / validación",
    href: null,
  },
  {
    pill: "Prevención",
    t: "Hogar seguro y accesibilidad",
    d: "Revisión de barreras, prevención de accidentes y orientación sobre adaptaciones. No es una aseguradora ni promete riesgo cero.",
    estado: "Kit y valoración disponibles",
    href: "#kit-hogar-seguro",
  },
  {
    pill: "Proximidad",
    t: "Puntos AMBER y red local",
    d: "Puntos de referencia comunitarios y protocolos. No convierte a farmacias o comercios en cuidadores ni en emergencias.",
    estado: "Despliegue por acuerdo local",
    href: "#punto-amber",
  },
  {
    pill: "Territorio",
    t: "Acción Rural / Rural-Red",
    d: "Adaptar apoyos a dispersión, distancias y recursos existentes, sin prometer cobertura no garantizada.",
    estado: "Según territorio",
    href: "#servicios",
  },
  {
    pill: "Método",
    t: "Modelo 3C y FARO PRO",
    d: "Marcos de organización y evaluación del proyecto. El detalle técnico de FARO PRO se conserva en la documentación oficial.",
    estado: "Documentado / validación",
    href: null,
  },
  {
    pill: "Conocimiento",
    t: "Observatorio Domus",
    d: "Epidemiología y prevención de accidentes domésticos, orientado a educación preventiva.",
    estado: "Herramienta accesible",
    href: "#observatorio-domus",
  },
];

const tech = [
  {
    t: "ASSURE CAREWARE",
    d: "Ecosistema de apoyo, monitorización no invasiva y gestión de alertas, según solución e implantación.",
  },
  {
    t: "Vigía · BioVital",
    d: "Funciones relacionadas con señales y sueño según el equipo instalado; no sustituyen valoración clínica.",
  },
  {
    t: "Cuidón Hub",
    d: "Gestión de avisos y alertas. Cada implantación necesita protocolo de recepción, valoración y escalado.",
  },
  {
    t: "Integración humana",
    d: "Una alerta no es un diagnóstico ni garantiza intervención. Hay que definir quién la recibe, cuándo y qué hace.",
  },
];

const seguridad = [
  {
    t: "Caídas y movilidad",
    d: "Detectar barreras, valorar apoyos y preparar qué hacer ante una caída; no forzar movilización si puede haber lesión.",
  },
  {
    t: "Botiquín y punto de referencia",
    d: "Ubicación conocida, revisión de contenidos y caducidades, y quién se responsabiliza de reponer.",
  },
  {
    t: "Incendios y emergencias",
    d: "Detectores adecuados, límites de la primera intervención y aviso al 112 cuando corresponda.",
  },
  {
    t: "Seguridad por capas",
    d: "No confiar toda la protección a un sensor o una persona: combinar entorno, recursos, mantenimiento y procedimientos.",
  },
];

export default function ModeloIntegralSection() {
  return (
    <section id="modelo-integral" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#B77900]">
          Modelo integral
        </p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
          Más apoyo. Mejor organizado.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Un modelo que conecta personas, familias, profesionales, tecnología y comunidad para prevenir
          riesgos, activar capacidades y organizar apoyos continuos alrededor de la vida cotidiana.
        </p>
        <p className="mt-3 inline-flex rounded-full border border-[#F0A500]/40 bg-[#F0A500]/10 px-4 py-1.5 text-sm font-semibold text-[#8a6200]">
          Autonomía · Prevención · Coordinación · Proximidad
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[#1B3A6B]">¿Cómo empezó el modelo?</h3>
          <p className="mt-3 leading-7 text-slate-600">
            No nació de sumar servicios independientes, sino de una pregunta: cómo organizar mejor los
            apoyos que una persona necesita a lo largo del tiempo, sin sustituir innecesariamente sus
            capacidades ni cargar toda la responsabilidad sobre su familia.
          </p>
          <p className="mt-4 border-l-4 border-[#F0A500] pl-4 text-lg font-semibold leading-8 text-[#1B3A6B]">
            No se trata de reemplazar a las personas ni de añadir tecnología por añadirla. Se trata de
            activar capacidades y organizar mejor los apoyos.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-[#1B3A6B]">Cómo se relacionan las capas</h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            Cada elemento aporta algo distinto. Se combinan según la situación; no todas las personas
            necesitan todos los componentes.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capas.map((c) => (
              <article
                key={c.t}
                className="rounded-2xl border border-[#1B3A6B]/15 bg-[#1B3A6B]/[0.03] p-4"
              >
                <h4 className="font-bold text-[#1B3A6B]">{c.t}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.d}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-[#1B3A6B]">Principios que ordenan el sistema</h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            La persona está en el centro. Los servicios se combinan según necesidades y momento vital.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principios.map((p) => (
              <article
                key={p.t}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h4 className="font-bold text-[#1B3A6B]">{p.t}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.d}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-[#1B3A6B]">Recorrido de apoyo</h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            La puerta de entrada puede ser sencilla. No hace falta empezar con tecnología o un gran
            contrato. El apoyo puede crecer o cambiar según evolucione la situación.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-5">
            {pasos.map((p, i) => (
              <article
                key={p.t}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center sm:text-left"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F0A500]/20 text-sm font-bold text-[#8a6200]">
                  {i + 1}
                </span>
                <h4 className="mt-3 font-bold text-[#1B3A6B]">{p.t}</h4>
                <p className="mt-2 text-xs leading-5 text-slate-600">{p.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-[#F0A500]/10 px-5 py-4 text-sm leading-6 text-[#5c4508]">
            <strong>Principio de acceso:</strong> orientación y apoyo también a familias que organizan
            cuidados por horas, sin obligar a un paquete completo ni a incorporar tecnología para recibir
            ayuda.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-[#1B3A6B]">Arquitectura de líneas del ecosistema</h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            No son negocios aislados: son componentes combinables. El alcance, la disponibilidad y el
            grado de implantación se concretan en cada oferta.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lineas.map((l) => (
              <article
                key={l.t}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-[#1B3A6B]/10 px-2.5 py-0.5 text-xs font-bold text-[#1B3A6B]">
                  {l.pill}
                </span>
                <h4 className="font-bold text-[#1B3A6B]">{l.t}</h4>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{l.d}</p>
                <p className="mt-3 text-xs font-semibold text-[#B77900]">{l.estado}</p>
                {l.href ? (
                  <a
                    href={l.href}
                    className="mt-3 text-sm font-bold text-[#1B3A6B] underline-offset-4 hover:underline"
                  >
                    Ver en la web →
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-bold text-[#1B3A6B]">Seguridad y prevención</h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            El riesgo cero no existe. El enfoque es reducir riesgos con medidas complementarias,
            recursos mantenidos y respuestas ordenadas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {seguridad.map((s) => (
              <article
                key={s.t}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h4 className="font-bold text-[#1B3A6B]">{s.t}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            El Kit Hogar Seguro y la valoración del espacio son una puerta práctica a esta línea.{" "}
            <a href="#kit-hogar-seguro" className="font-semibold text-[#1B3A6B] underline-offset-2 hover:underline">
              Ver Kit Hogar Seguro
            </a>
          </p>
        </div>

        <div className="mt-14 rounded-3xl bg-[#1B3A6B] p-6 text-white sm:p-10">
          <h3 className="text-2xl font-bold">Tecnología: señales; personas: contexto</h3>
          <p className="mt-3 max-w-2xl text-white/85 leading-7">
            Los dispositivos se incorporan cuando responden a una necesidad concreta, respetan la
            privacidad y tienen definido quién recibe las alertas, el procedimiento y los límites de
            respuesta.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tech.map((t) => (
              <div key={t.t} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h4 className="font-bold text-[#F0A500]">{t.t}</h4>
                <p className="mt-2 text-sm leading-6 text-white/80">{t.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/65">
            Cualquier cifra de fiabilidad de equipos debe vincularse al dispositivo, función y
            condiciones concretas; no se usa aquí como promesa universal.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-[#1B3A6B]">Rigor al comunicar</h3>
          <p className="mt-3 leading-7 text-slate-600">
            No prometemos riesgo cero, detección infalible, respuesta garantizada, subvenciones
            concedidas ni mejora clínica sin evidencia suficiente. Explicamos qué aporta cada medida,
            qué límites tiene y qué apoyo humano la acompaña.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#1B3A6B]">
            Materias que requieren confirmación operativa antes de publicarse como oferta cerrada:
            cobertura territorial exacta, horarios, ratios, precios de cada línea y protocolos de
            respuesta.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Contacto preferente por WhatsApp. El formulario web intenta registrar y reenviar la consulta;
            la entrega de correo depende de servicios de terceros y no está garantizada en todos los
            casos. No publicamos datos sanitarios ni testimonios identificables sin autorización.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar cómo aplica a tu caso
          </a>
        </div>
      </div>
    </section>
  );
}
