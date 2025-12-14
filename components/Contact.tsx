import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div>
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm">Contáctanos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Comienza tu proyecto hoy</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Estamos listos para escuchar tus ideas y convertirlas en realidad. 
              Agenda una cita o visítanos en nuestras oficinas en Mérida.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-slate-400">Calle 20 #345 x 15 y 17<br />Col. Altabrisa, Mérida, Yucatán.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                  <p className="text-slate-400">(999) 123-4567</p>
                  <p className="text-slate-400">(999) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Correo</h4>
                  <p className="text-slate-400">contacto@ortico.mx</p>
                  <p className="text-slate-400">ventas@ortico.mx</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horario</h4>
                  <p className="text-slate-400">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-400">Sáb: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl p-8 text-secondary-900 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Teléfono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="(999) ..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="juan@ejemplo.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Interesado en</label>
                <select id="service" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500">
                  <option value="">Selecciona una opción</option>
                  <option value="construccion">Construcción Residencial</option>
                  <option value="remodelacion">Remodelación</option>
                  <option value="diseno">Diseño Arquitectónico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary-500 hover:bg-primary-600 text-secondary-900 font-bold py-4 rounded-lg transition-colors mt-2">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};