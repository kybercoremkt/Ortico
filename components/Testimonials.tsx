import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Con ORTICO tuvimos reportes claros, sin retrasos y sin cambios inesperados en el presupuesto. Nos entregaron justo lo que queríamos.",
      author: "Cliente Residencial",
      location: "Temozón Norte",
      highlight: "Constructora confiable"
    },
    {
      quote: "El proyecto que desarrollamos con ORTICO se valoró casi al doble en poco más de un año. Su enfoque en plusvalía hizo toda la diferencia.",
      author: "Inversionista",
      location: "Mérida",
      highlight: "Inversión multiplicada"
    },
    {
      quote: "Nos acompañaron en cada decisión y se notó el dominio que tienen de la zona y los materiales. El resultado superó nuestras expectativas.",
      author: "Familia R.",
      location: "Montes de Amé",
      highlight: "Remodelación sin estrés"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Lo que dicen nuestros clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all relative">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-zinc-700" />
              <div className="text-primary-500 font-bold text-sm uppercase tracking-wider mb-4">
                {t.highlight}
              </div>
              <p className="text-zinc-300 mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-sm text-zinc-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};