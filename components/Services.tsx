import React from 'react';
import { Home, Ruler, HardHat, PencilRuler, BrickWall, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    title: 'Construcción Residencial',
    description: 'Creamos el hogar de tus sueños desde cero, cuidando cada detalle y acabado.',
    icon: Home,
  },
  {
    title: 'Diseño Arquitectónico',
    description: 'Planos, renders y visualización 3D para aprovechar al máximo tu terreno.',
    icon: PencilRuler,
  },
  {
    title: 'Remodelaciones',
    description: 'Transformamos espacios existentes para darles nueva vida y funcionalidad.',
    icon: BrickWall,
  },
  {
    title: 'Supervisión de Obra',
    description: 'Aseguramos que tu proyecto se ejecute según lo planeado, en tiempo y forma.',
    icon: HardHat,
  },
  {
    title: 'Levantamientos',
    description: 'Mediciones precisas y topografía para garantizar la viabilidad del proyecto.',
    icon: Ruler,
  },
  {
    title: 'Gestoría de Permisos',
    description: 'Nos encargamos de los trámites municipales y licencias necesarias.',
    icon: CheckCircle2,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-sm">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Soluciones Integrales
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 p-8 rounded-xl border border-white/5 hover:border-primary-500/50 transition-all hover:bg-zinc-900 group"
            >
              <div className="w-16 h-16 bg-black border border-primary-500/30 rounded-lg flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-black transition-colors shadow-lg">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};