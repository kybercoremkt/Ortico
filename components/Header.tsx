import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary-500 text-white p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
            <Hammer size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-secondary-900' : 'text-white'}`}>
              ORTICO
            </span>
            <span className={`text-xs font-medium tracking-wider uppercase ${isScrolled ? 'text-primary-600' : 'text-primary-300'}`}>
              Constructora
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-secondary-800' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary-500 hover:bg-primary-600 text-secondary-900 px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105"
          >
            Cotizar Ahora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-secondary-800 font-medium py-2 border-b border-slate-100 last:border-0 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};