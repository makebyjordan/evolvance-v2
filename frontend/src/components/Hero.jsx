import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroData } from '../data/mockData';
import vanceVideo from '../media/presentacion-vance-avatar-evolvance.mp4';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDemoPage = () => {
    window.open('/#/demo', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
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
          <p className="body-large max-w-3xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {heroData.subtitle}
          </p>

          {/* Bullets */}
          {heroData.bullets && (
            <div
              className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: '0.25s' }}
            >
              {heroData.bullets.map((bullet, index) => (
                <div key={bullet} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <p className="body-small text-[#DBCE97] text-left">{bullet}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={openDemoPage}
              className="btn-primary group"
            >
              {heroData.cta.primary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://calendly.com/admin-evol-vance/evolweb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {heroData.cta.secondary}
            </a>
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

      {/* Sección con video de fondo */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10">
          <video
            className="w-full h-full max-h-screen max-w-none object-contain bg-black"
            autoPlay
            loop
            muted
            playsInline
            src={vanceVideo}
          />
        </div>
        <div className="absolute inset-0 bg-black/60 mr-30 ml-30"></div>
        <div className="relative z-10 h-full flex items-center justify-center py-16 mr-30 ml-30">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_0.4fr_1fr] gap-y-6 gap-x-[30px] items-center pt-[90px] md:pt-[190px] px-[30px]">
            <div className="text-2xl md:text-5xl font-semibold font-outfit drop-shadow-[0_0_22px_rgba(212,175,55,0.4)] leading-tight text-[var(--evolvance-beige)] tracking-wide text-justify ml-[20px] bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_0_35px_rgba(212,175,55,0.25)] md:col-start-3 md:self-start">
              <span className="block bg-gradient-to-r from-[#e6d89d] via-white to-[#D4AF37] bg-clip-text text-transparent mt-[20px] mb-[20px]">
                ¡Soy VANCE! 👋​
              </span>
            </div>
            <div className="text-2xl md:text-5xl font-semibold font-outfit drop-shadow-[0_0_22px_rgba(212,175,55,0.4)] leading-tight text-[var(--evolvance-beige)] tracking-wide text-justify ml-[20px] bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_0_35px_rgba(212,175,55,0.25)] md:col-start-1">
              <span className="bg-gradient-to-r from-[#e6d89d] via-white to-[#D4AF37] bg-clip-text text-transparent">
                la MascotIA de evolvance!
              </span>
            </div>
            <div aria-hidden className="md:block hidden" />
            <div className="relative z-30 text-2xl md:text-5xl font-semibold font-outfit drop-shadow-[0_0_22px_rgba(212,175,55,0.4)] leading-tight text-[var(--evolvance-beige)] tracking-wide text-center md:self-end mt-[60px] md:-mt-6 mr-[20px] bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-8 py-8 shadow-[0_0_35px_rgba(212,175,55,0.25)] flex items-center justify-center">
              <span className="bg-gradient-to-r from-[#e6d89d] via-[#D4AF37] to-[#e6d89d] bg-clip-text text-transparent">
                ¡^^Saludos ^^!
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20 text-[var(--evolvance-beige)] italic text-sm md:text-base drop-shadow-lg">
          *creado con GEMINI 3 PRO Veo
        </div>
      </section>
    </>
  );
};

export default Hero;
