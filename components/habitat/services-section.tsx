"use client";
import {Wifi,MapPin,HandHeart,Users,Stethoscope,HeartHandshake,ArrowRight,ShieldCheck,Bot,Home,Clock,BookOpen,FileText,Brain} from "lucide-react";

const techServices=[
  ["Asistentes Tecnológicos","Tecnología inteligente en el hogar que monitoriza presencia, movimiento y signos vitales sin cámaras ni wearables. Prevención antes de que ocurra algo.",Bot,["Radar Biovital","Sin cámaras","Alertas tempranas","Monitorización 24h"]],
  ["ASSURE CAREWARE","Sistema de detección no invasiva instalado en el hogar. El radar Biovital monitoriza actividad y signos vitales con total discreción.",Wifi,["Tecnología discreta","Sin wearables","Detección automática","Hogar seguro"]],
  ["Punto AMBER","Red de farmacias y comercios de proximidad activados como puntos de cuidado comunitario para personas mayores.",MapPin,["Farmacias asociadas","Comercio de barrio","Red activa","Dispensación segura"]],
  ["Hub AMBER 360°","Plataforma de coordinación con datos del radar, alertas, historial y gestión integral del cuidado domiciliario.",ShieldCheck,["Panel de control","Alertas en tiempo real","Historial clínico","Coordinación total"]],
];

const homeServices=[
  ["Apoyo y Hogar Seguro","Servicio integral de atención domiciliaria para personas mayores y dependientes. Cuidado de mayores a domicilio con profesionales cualificados.",Home,["Atención domiciliaria","Cuidado de mayores","Higiene personal","Hogar seguro"]],
  ["Servicio por Horas","Asistencia domiciliaria flexible adaptada a tus necesidades. Cuidador a domicilio por horas para apoyo puntual o continuado.",Clock,["Horario flexible","Sin permanencia","Asistencia puntual","Cuidador profesional"]],
  ["Descanso Familiar","Servicio de respiro para cuidadores familiares. Atención domiciliaria profesional para que las familias puedan descansar con total tranquilidad.",HeartHandshake,["Respiro familiar","Relevo del cuidador","Atención profesional","Tranquilidad garantizada"]],
  ["Acompañamiento a Familias Empleadoras","Asesoramiento y acompañamiento completo a familias que contratan cuidadores. Gestión integral del proceso de contratación.",Users,["Asesoría legal","Apoyo continuo","Gestión contratos","Orientación familiar"]],
  ["Búsqueda, Formación y Contratación","Servicio de selección, formación y apoyo a la contratación de cuidadores profesionales. Encontramos el perfil ideal para cada familia.",BookOpen,["Selección de cuidadores","Formación profesional","Apoyo contratación","Perfil personalizado"]],
  ["Diagnóstico y Gestor Social","Diagnóstico social personalizado y gestión documental integral incluido en todos nuestros servicios. Tu gestor social de referencia.",Brain,["Diagnóstico social","Gestor documental","Informe personalizado","Seguimiento continuo"]],
];

const adhesionService={
  title:"Modelo de Adhesión Familiar",
  description:"La forma más inteligente de garantizar el cuidado de tus mayores. Una cuota mensual que integra tecnología, red comunitaria y servicio humano coordinado. Todo en un solo punto de contacto.",
  features:["Tecnología en el hogar","Red Punto AMBER","Servicio CUIDÓN","Gestor social","Diagnóstico incluido","Un solo pago mensual"],
};

function ServiceCard({title,description,Icon,features,onContact}:{title:string,description:string,Icon:any,features:string[],onContact:()=>void}){
  return(
    <article className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-[#1B3A6B]/10 text-[#1B3A6B]">
        <Icon className="w-7 h-7"/>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#1B3A6B]">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {features.map((f:string)=>(
          <span key={f} className="text-xs px-3 py-1 rounded-full font-medium bg-[#F0A500]/10 text-[#8a6200]">{f}</span>
        ))}
      </div>
      <button onClick={onContact} className="inline-flex items-center gap-1 text-sm font-medium text-[#1B3A6B] hover:gap-2 transition-all">
        Solicitar información<ArrowRight className="w-4 h-4"/>
      </button>
    </article>
  );
}

export function ServicesSection(){
  const go=()=>document.querySelector("#contacto")?.scrollIntoView({behavior:"smooth"});
  return(
    <section id="servicios" className="bg-white">

      {/* BLOQUE 1: Asistentes Tecnológicos */}
      <div className="py-20 lg:py-24 bg-[#1B3A6B]/[.03]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium mb-4 bg-[#1B3A6B]/10 text-[#1B3A6B]">Tecnología para el hogar</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Asistentes Tecnológicos <span className="text-[#1B3A6B]">para mayores en casa</span></h2>
            <p className="text-slate-600 text-lg">Tecnología discreta e inteligente que cuida sin invadir. Monitorización del hogar, alertas tempranas y coordinación profesional.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techServices.map(([title,description,Icon,features]:any)=>(
              <ServiceCard key={title} title={title} description={description} Icon={Icon} features={features} onContact={go}/>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE 2: Servicios de Atención Domiciliaria */}
      <div className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium mb-4 bg-[#F0A500]/10 text-[#8a6200]">Atención domiciliaria profesional</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Cuidado de mayores <span className="text-[#F0A500]">a domicilio</span></h2>
            <p className="text-slate-600 text-lg">Asistencia domiciliaria profesional adaptada a cada familia. Cuidadores a domicilio, descanso familiar y gestión social incluida en todos los servicios.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map(([title,description,Icon,features]:any)=>(
              <ServiceCard key={title} title={title} description={description} Icon={Icon} features={features} onContact={go}/>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE 3: Modelo de Adhesión */}
      <div className="py-20 lg:py-24 bg-[#1B3A6B]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium mb-6 bg-[#F0A500]/20 text-[#F0A500]">Todo integrado</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{adhesionService.title}</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{adhesionService.description}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {adhesionService.features.map(f=>(
              <span key={f} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">{f}</span>
            ))}
          </div>
          <button onClick={go} className="inline-flex items-center gap-2 rounded-xl px-8 h-14 bg-[#F0A500] text-[#0f2340] font-bold text-lg hover:bg-[#F0A500]/90 transition">
            Solicitar información sobre el modelo de adhesión<ArrowRight className="w-5 h-5"/>
          </button>
        </div>
      </div>

    </section>
  );
}
