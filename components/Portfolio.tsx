import React from 'react';
import { PortfolioItem } from '../types';

const PROJECTS: PortfolioItem[] = [
  { id: 1, title: 'Casa Norte', category: 'Residencial', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'Plaza Altabrisa (Local)', category: 'Comercial', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Villa Campestre', category: 'Residencial', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Oficinas Centro', category: 'Remodelación', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Loft Industrial', category: 'Diseño', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Hacienda Eventos', category: 'Restauración', imageUrl: 'https://picsum.photos/600/400?random=6' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm">Portafolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Proyectos Recientes</h2>
          </div>
          <a href="#" className="text-zinc-300 hover:text-primary-500 font-medium flex items-center gap-2 transition-colors">
            Ver galería completa <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10">
              <div className="aspect-[4/3] w-full">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 flex flex-col justify-end p-6">
                <span className="text-primary-400 font-medium text-sm mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};