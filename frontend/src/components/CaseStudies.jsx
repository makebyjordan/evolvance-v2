import React from 'react';
import { TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/mockData';

const CaseStudies = () => {
  return (
    <section id="casos" className="section-padding bg-[#0F0F0F] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-outfit text-sm uppercase tracking-widest text-[#D4AF37] font-semibold mb-4 block">
            Casos de Éxito
          </span>
          <h2 className="heading-1 mb-4">
            Empresas que ya{' '}
            <span className="text-gradient">evolucionaron</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="body-large max-w-2xl mx-auto mt-6">
            Resultados reales de clientes que confiaron en Evolvance para transformar su negocio.
          </p>
        </div>

        {/* Results Question */}
        <div className="text-center mb-12">
          <h3 className="heading-3 text-white">¿Quieres resultados como estos?</h3>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="card-featured overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client Badge */}
                <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
                  <span className="font-outfit text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {study.client}
                  </span>
                </div>

                <h3 className="heading-3 text-white mb-3">{study.title}</h3>
                <p className="body-medium text-[#DBCE97] mb-4">{study.description}</p>

                {/* Results */}
                <div className="flex items-center gap-2 p-3 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="font-outfit text-sm font-semibold text-[#D4AF37]">
                    {study.results}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="body-medium italic mt-4w">
          
            ...entre otros...
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block glass-card p-8 max-w-2xl">
            <h3 className="heading-3 mb-4">¿Quieres resultados como estos?</h3>
            <p className="body-medium mb-6">
              Cada proyecto es único. Contáctanos para una consultoría gratuita y descubre cómo podemos ayudarte
            </p>
            <a
              href="https://calendly.com/admin-evol-vance/evolweb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultoría Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
