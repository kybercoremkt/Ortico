import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

// 12 Proyectos para formar una cuadrícula de 3 columnas x 4 filas
const PROJECTS = [
  {
    id: 1,
    title: "Valentino",
    image: "https://i.imgur.com/QsSLIr0.jpeg",
  },
  {
    id: 2,
    title: "Velveti",
    image: "https://i.imgur.com/CIurMgt.jpeg",
  },
  {
    id: 3,
    title: "Tausend",
    image: "https://i.imgur.com/2tidE7g.jpeg",
  },
  {
    id: 4,
    title: "Venti",
    image: "https://i.imgur.com/TAosAXL.png",
  },
  {
    id: 5,
    title: "Maculi",
    image: "https://i.imgur.com/NRP5xGN.jpeg",
  },
  {
    id: 6,
    title: "Lawrent",
    image: "https://i.imgur.com/gPYCKLD.png",
  },
  {
    id: 7,
    title: "V-Tooch",
    image: "https://i.imgur.com/LdmJoSs.png",
  },
  {
    id: 8,
    title: "Victoria",
    image: "https://i.imgur.com/ZPlQnX8.png",
  },
  {
    id: 9,
    title: "Tunich",
    image: "https://i.imgur.com/ZyeCFvq.png",
  },
  {
    id: 10,
    title: "Xcumpich 21",
    image: "https://i.imgur.com/PXsbSxe.jpeg",
  },
  {
    id: 11,
    title: "Xik'nal",
    image: "https://i.imgur.com/3HJGpZY.png",
  },
  {
    id: 12,
    title: "Townhouses Riga",
    image: "https://i.imgur.com/CHKakNw.jpeg",
  }
];

export const ProjectGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Nuestros Proyectos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Arquitectura y Construcción
            </h2>
            <p className="text-white mt-4 text-lg">
              Una colección de nuestros trabajos más recientes, fusionando funcionalidad, estética y el entorno único de Yucatán.
            </p>
          </div>
          
          <a 
            href="https://www.instagram.com/orticoconstructora" 
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-white font-medium hover:text-primary-500 transition-colors"
          >
            Ver más en Instagram
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid 3x4 (3 columnas en escritorio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedImage(project.image)}
              className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5"
            >
              {/* Imagen de fondo */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Contenido Texto */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Botón flotante al hover */}
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal (Pop-up) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botón Cerrar (Tala/X) */}
            <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            
            {/* Imagen Full Size */}
            <img 
              src={selectedImage} 
              alt="Vista completa" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Evita cerrar si se da click en la imagen
            />
          </div>
        )}

      </div>
    </section>
  );
};