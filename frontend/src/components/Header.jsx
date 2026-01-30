import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Productos', href: '#productos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg shadow-lg border-b border-[#D4AF37]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center space-x-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_2d5da32d-c8d7-4484-9889-ef5971ddb3aa/artifacts/et1hsjc0_logo%2Btexto-evolvance.png"
              alt="Evolvance"
              className="h-10 transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-outfit text-sm font-medium text-[#DBCE97] hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contacto')}
              className="btn-primary"
            >
              Consultoría Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#D4AF37] hover:text-[#DBCE97] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-[#D4AF37]/20 animate-fade-in-up">
            <nav className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="font-outfit text-base font-medium text-[#DBCE97] hover:text-[#D4AF37] transition-colors duration-300 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#contacto')}
                className="btn-primary w-full justify-center mt-4"
              >
                Consultoría Gratuita
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
