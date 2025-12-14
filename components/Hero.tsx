import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 sm:pt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/YoTYJmz.jpeg" 
          alt="Mérida Architecture" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for contrast - Reduced opacity from 80 to 50 for better visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay - Reduced opacity from 90 to 60 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full">
        <div className="animate-fade-in flex flex-col items-center">
          
          {/* Título: Más grande en móvil (text-5xl) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-8 sm:mb-12 tracking-tight md:whitespace-nowrap px-4 sm:px-0">
            Diseño <span className="text-primary-500 mx-1 md:mx-2">+</span> 
            Construcción <span className="text-primary-500 mx-1 md:mx-2">+</span> 
            Confianza
          </h1>
          
          <div className="flex justify-center w-full sm:w-auto">
            {/* Botón: Se agrega rounded-lg para igualar al menú */}
            <button 
              onClick={scrollToContact}
              className="bg-primary-500 hover:bg-primary-400 text-black px-6 py-3 text-lg sm:px-10 sm:py-5 sm:text-xl font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(238,193,59,0.3)] flex items-center justify-center gap-2"
            >
              Cotizar mi proyecto
            </button>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};