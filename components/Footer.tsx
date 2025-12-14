import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de 3 columnas: Marca (Izq), Espacio (Centro), Contacto (Der) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Brand - Columna 1 */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">ORTICO</h3>
            <p className="text-sm text-white mb-6">
              Expertos en construcción residencial y comercial de alto valor en la península de Yucatán.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Orticoconstrucciones" target="_blank" rel="noreferrer" className="text-white hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/orticoconstructora" target="_blank" rel="noreferrer" className="text-white hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Contact - Columna 3 (lg:col-start-3 empuja esto a la derecha) */}
          <div className="lg:col-start-3">
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/A11LhMJ95GespB9D7" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white hover:text-primary-500 transition-colors"
                >
                  Sky City, Mérida, Yucatán, México
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3" />
                <a href="mailto:soporteortico@gmail.com" className="text-white hover:text-primary-500 transition-colors">soporteortico@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3" />
                <a href="tel:9997740016" className="text-white hover:text-primary-500 transition-colors">999 774 0016</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} ORTICO Constructora S.A. de C.V. Todos los derechos reservados.</p>
          <p>
            Página diseñada por <a href="https://kybercoremkt.com/" target="_blank" rel="noreferrer" className="text-primary-500 hover:text-white transition-colors">Kyber Core MKT</a>
          </p>
        </div>
      </div>
    </footer>
  );
};