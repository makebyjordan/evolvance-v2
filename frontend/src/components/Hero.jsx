import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroData } from '../data/mockData';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="Torres Torneo Sevilla"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4 py-20">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-outfit text-xs uppercase tracking-wider text-[#DBCE97] font-medium">
            {heroData.announcement}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="heading-hero max-w-5xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {heroData.title.split(' ').slice(0, 4).join(' ')}{' '}
          <span className="text-gradient">
            {heroData.title.split(' ').slice(4).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="body-large max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {heroData.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => scrollToSection('#contacto')}
            className="btn-primary group"
          >
            {heroData.cta.primary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('#servicios')}
            className="btn-secondary"
          >
            {heroData.cta.secondary}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '100+', label: 'Proyectos Exitosos' },
            { value: '24/7', label: 'Soporte Continuo' },
            { value: '98%', label: 'Satisfacción Cliente' },
            { value: '50+', label: 'Empresas Confían' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-outfit mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#DBCE97] font-outfit uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#D4AF37] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
