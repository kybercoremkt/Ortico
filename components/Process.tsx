import React from 'react';
import { 
  Users, 
  Map, 
  PencilRuler, 
  FileCheck, 
  Calculator, 
  PenTool, 
  HardHat, 
  Key, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const STEPS = [
  {
    icon: Users,
    title: "Conocemos tu visión",
    description: "Iniciamos con una asesoría para entender a fondo tu proyecto.",
    details: [
      "Tipo de proyecto",
      "Objetivo y alcance",
      "Tamaño y necesidades",
      "Presupuesto estimado",
      "Tiempos deseados"
    ]
  },
  {
    icon: Map,
    title: "Análisis del terreno",
    description: "Evaluamos tu terreno o te asesoramos para elegir el ideal.",
    details: [
      "Orientación y contexto",
      "Normativas locales",
      "Viabilidad técnica",
      "Potencial de plusvalía"
    ]
  },
  {
    icon: PencilRuler,
    title: "Diseño arquitectónico",
    description: "Desarrollamos un diseño funcional, estético y alineado a tu inversión.",
    details: [
      "Proyecto conceptual",
      "Distribución de espacios",
      "Optimización de costos",
      "Diseño adaptado al clima"
    ]
  },
  {
    icon: FileCheck,
    title: "Ingenierías y trámites",
    description: "Nos encargamos de toda la parte técnica y legal.",
    details: [
      "Ingenierías estructurales",
      "Presupuesto real",
      "Permisos y licencias"
    ]
  },
  {
    icon: Calculator,
    title: "Planeación final",
    description: "Definimos cómo se ejecutará el proyecto con total claridad.",
    details: [
      "Esquema de pagos",
      "Programa de obra",
      "Fechas de entrega",
      "Alcances definidos"
    ]
  },
  {
    icon: PenTool,
    title: "Firma de contrato",
    description: "Formalizamos todo con acuerdos claros y transparentes.",
    details: [
      "Metas del proyecto",
      "Programas de avance",
      "Esquema de pagos",
      "Garantías"
    ]
  },
  {
    icon: HardHat,
    title: "Construcción",
    description: "Ejecutamos la obra con control total y comunicación constante.",
    details: [
      "Mano de obra especializada",
      "Supervisión continua",
      "Reportes de avance",
      "Control de calidad"
    ]
  },
  {
    icon: Key,
    title: "Entrega y postventa",
    description: "Te entregamos tu proyecto terminado y seguimos contigo.",
    details: [
      "Entrega preliminar y final",
      "Garantía postconstrucción",
      "Recordatorios mantenimiento",
      "Respuesta oportuna"
    ]
  },
  {
    icon: Sparkles,
    title: "DISFRUTA TU PROYECTO",
    description: "Construye con tranquilidad, control y la certeza de haber elegido un equipo profesional.",
    details: [
      "Tranquilidad total",
      "Control de inversión",
      "Certeza profesional",
      "Sueño cumplido"
    ]
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Construye tu proyecto en Mérida
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Un proceso conectado, paso a paso, desde la idea hasta la entrega.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Indicadores de scroll (Gradients) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none md:hidden"></div>

          <div className="flex overflow-x-auto pb-12 pt-4 px-4 gap-6 snap-x snap-mandatory no-scrollbar">
            
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;
              return (
                <div 
                  key={index}
                  className="relative w-[85vw] sm:w-[360px] md:w-[380px] snap-center flex-shrink-0 pt-4"
                >
                  {/* Línea conectora EXTERNA (Puente entre tarjetas) */}
                  {!isLast && (
                    <div className="absolute top-[4.5rem] -right-8 w-10 h-[2px] bg-white z-0 hidden md:block"></div>
                  )}

                  {/* TARJETA */}
                  <div className={`h-full bg-zinc-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-primary-500/50 transition-all ${isLast ? 'bg-gradient-to-br from-zinc-900 to-primary-900/10 border-primary-500/30' : ''}`}>
                    
                    {/* Fila Superior: Icono y Número */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      {/* Icono */}
                      <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 bg-black ${
                        isLast 
                          ? 'border-primary-500 text-primary-500' 
                          : 'border-zinc-700 text-zinc-400 group-hover:border-primary-500 group-hover:text-primary-500'
                      }`}>
                        <step.icon size={28} />
                      </div>

                      {/* Número (Amarillo/Dorado siempre) */}
                      <div className="text-4xl font-bold opacity-80 select-none text-primary-500">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Título: Altura fija mínima ajustada */}
                      <h3 className={`text-xl font-bold mb-2 min-h-[3rem] flex items-center ${isLast ? 'text-primary-500' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      
                      {/* Descripción con menos margen y altura mínima reducida */}
                      <p className="text-white text-sm mb-4 leading-relaxed min-h-[40px] whitespace-normal">
                        {step.description}
                      </p>

                      {/* Lista sin mt-auto para evitar el hueco grande y evitar cortes */}
                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start text-sm text-white/90">
                            <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isLast ? 'bg-primary-500' : 'bg-zinc-600'}`}></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Flecha decorativa al final de la tarjeta para indicar flujo (Móvil) */}
                    {!isLast && (
                       <div className="absolute right-4 top-[3.35rem] text-zinc-700 md:hidden">
                          <ArrowRight size={20} />
                       </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Swipe Indicator for Mobile */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          <span className="text-xs text-white animate-pulse">← Desliza para ver más →</span>
        </div>

      </div>
    </section>
  );
};