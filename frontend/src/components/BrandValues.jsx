import React from 'react';
import { Star, Award, Heart, Zap } from 'lucide-react';
import { brandValues } from '../data/mockData';

const iconMap = {
  Star,
  Award,
  Heart,
  Zap
};

const BrandValues = () => {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-outfit text-sm uppercase tracking-widest text-[#D4AF37] font-semibold mb-4 block">
            Nuestros Valores
          </span>
          <h2 className="heading-1 mb-4">
            Lo que nos hace{' '}
            <span className="text-gradient">diferentes</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="body-large max-w-2xl mx-auto mt-6">
            Evolvance se posiciona como una empresa tecnológica premium, especializada en soluciones digitales personalizadas
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {brandValues.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#DBCE97] flex items-center justify-center mx-auto mb-4 pulse-gold">
                  <IconComponent className="w-8 h-8 text-[#202121]" />
                </div>

                {/* Content */}
                <h3 className="heading-3 text-white mb-3">{value.title}</h3>
                <p className="body-small text-[#DBCE97]">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-card p-10 max-w-4xl mx-auto">
          <h3 className="heading-2 text-center mb-10">Resultados que hablan por nosotros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '340%', label: 'Promedio aumento conversión' },
              { value: '60%', label: 'Reducción tiempo gestión' },
              { value: '24/7', label: 'Disponibilidad asistentes' },
              { value: '180%', label: 'Incremento captación leads' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-outfit mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-[#DBCE97] font-outfit uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
