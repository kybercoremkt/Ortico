import React from 'react';
import { AlertTriangle, ShieldCheck, Clock, Hammer } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Problem */}
        <div className="mb-24">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">El Riesgo</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Construir sin expertos es un <span className="text-red-500">peligro</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Desconocimiento, costos ocultos y mala calidad son problemas comunes en el sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Procesos constructivos inadecuados para el clima",
              "Proveedores informales sin garantías",
              "Aumentos de presupuesto sorpresa",
              "Atrasos interminables en la entrega"
            ].map((item, idx) => (
              <div key={idx} className="bg-red-950/10 p-8 rounded-lg border border-red-900/20 hover:border-red-700/50 transition-colors">
                <div className="text-red-500 mb-4">
                  <AlertTriangle size={24} />
                </div>
                <p className="font-medium text-zinc-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative border border-white/10">
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-sm">La Solución ORTICO</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Construcción <span className="text-primary-500">Inteligente</span>
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
                Eliminamos la incertidumbre. Nos encargamos de todo el proceso para que tu inversión esté segura.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary-500 transition-colors group">
                <ShieldCheck className="w-12 h-12 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Diseño a Medida</h3>
                <p className="text-zinc-400">Proyectos arquitectónicos que maximizan la plusvalía de tu terreno.</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary-500 transition-colors group">
                <Hammer className="w-12 h-12 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Calidad Premium</h3>
                <p className="text-zinc-400">Materiales y acabados seleccionados para durar en el clima de Yucatán.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary-500 transition-colors group">
                <Clock className="w-12 h-12 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Tiempos Garantizados</h3>
                <p className="text-zinc-400">Cronogramas reales. Sin sorpresas ni "mañana queda".</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};