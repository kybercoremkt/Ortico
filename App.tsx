import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { ProjectGallery } from './components/ProjectGallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Facebook, Instagram, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enlaces del menú de navegación
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Procesos', href: '#procesos' },
    { name: 'Testimoniales', href: '#testimoniales' },
  ];

  // Manejador para scroll suave
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Ajuste para el header fijo
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-200">
      {/* Navigation Header - Increased height to h-24 */}
      <nav className="fixed w-full z-40 bg-black/90 backdrop-blur-md border-b border-white/10 h-24 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Logo - Vertically Centered */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://i.imgur.com/R20TbmJ.png" 
              alt="ORTICO Logo" 
              className="h-14 sm:h-[4.5rem] w-auto object-contain" 
            />
          </div>

          {/* Desktop Nav Links - Moved to right side with ml-auto */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-primary-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Desktop Actions (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/Orticoconstrucciones" 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/orticoconstructora" 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            {/* Desktop Button */}
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base font-bold bg-primary-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors shadow-lg shadow-primary-500/20"
            >
              Cotizar mi proyecto
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="md:hidden text-zinc-100 hover:text-primary-500 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu - Adjusted top position to top-24 */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col items-center gap-6 animate-fade-in shadow-2xl overflow-y-auto max-h-[calc(100vh-6rem)]">
            
            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center gap-6 w-full pt-2 pb-4 border-b border-white/10">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-bold uppercase tracking-wider text-white hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-2">
              <a 
                href="https://www.facebook.com/Orticoconstrucciones" 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-300 hover:text-primary-500 transition-colors flex items-center gap-2"
              >
                <Facebook size={24} />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/orticoconstructora" 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-300 hover:text-primary-500 transition-colors flex items-center gap-2"
              >
                <Instagram size={24} />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
            
            <button 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center text-base font-bold bg-primary-500 text-zinc-900 px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors shadow-lg shadow-primary-500/20"
            >
              Cotizar mi proyecto
            </button>
          </div>
        )}
      </nav>

      <main>
        {/* IDs agregados para la navegación */}
        <div id="inicio">
          <Hero />
        </div>
        
        {/* Why Choose Us / Features */}
        <div className="bg-black py-16 border-b border-white/10">
           <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
               {[
                 { num: "+10", label: "Años de experiencia" },
                 { num: "+250", label: "Proyectos entregados" },
                 { num: "+200", label: "Remodelaciones" },
               ].map((stat, i) => (
                 <div key={i}>
                   <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.num}</div>
                   <div className="text-sm text-zinc-400 uppercase tracking-wide font-medium">{stat.label}</div>
                 </div>
               ))}
             </div>
             
             <div className="text-center mt-12">
                <p className="text-primary-500 font-bold tracking-[0.2em] text-sm sm:text-base uppercase">
                  Proyectos — Construcción — Inmobiliaria
                </p>
             </div>
           </div>
        </div>

        <div id="proyectos">
          <ProjectGallery />
        </div>

        <div id="procesos">
          <Process />
        </div>

        <div id="testimoniales">
          <Testimonials />
        </div>
        
        <ContactForm variant="default" id="contact-form" />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;