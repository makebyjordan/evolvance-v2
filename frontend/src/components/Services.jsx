import React from 'react';
import { Database, Globe, Target, Sparkles, Code, Smartphone } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  Database,
  Globe,
  Target,
  Sparkles,
  Code,
  Smartphone
};

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-[#0F0F0F] relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-outfit text-sm uppercase tracking-widest text-[#D4AF37] font-semibold mb-4 block">
            Servicios Completos
          </span>
          <h2 className="heading-1 mb-4">
            Soluciones tecnológicas{' '}
            <span className="text-gradient">para cada necesidad</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="body-large max-w-2xl mx-auto mt-6">
            Desde la estrategia hasta la implementación, te acompañamos en cada paso de tu transformación digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`service-card service-card-${service.color} hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-[#D4AF37]" />
                </div>

                {/* Content */}
                <h3 className="heading-3 text-white mb-3">{service.title}</h3>
                <p className="body-medium text-[#DBCE97]">{service.description}</p>

                {/* Learn More Link */}
                <button
                  onClick={() => {
                    const element = document.querySelector('#contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 font-outfit text-sm font-semibold text-[#D4AF37] hover:text-[#DBCE97] transition-colors inline-flex items-center gap-2 group"
                >
                  Más información
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="heading-2 text-center mb-12">Nuestro proceso</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Análisis', desc: 'Estudiamos tu negocio en profundidad' },
              { step: '02', title: 'Estrategia', desc: 'Diseñamos la solución a medida' },
              { step: '03', title: 'Desarrollo', desc: 'Construimos con calidad premium' },
              { step: '04', title: 'Acompañamiento', desc: 'Soporte continuo post-lanzamiento' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className="text-5xl font-bold font-outfit text-[#D4AF37]/20 mb-3">
                  {item.step}
                </div>
                <h4 className="heading-3 text-white mb-2">{item.title}</h4>
                <p className="body-small text-[#DBCE97]">{item.desc}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
