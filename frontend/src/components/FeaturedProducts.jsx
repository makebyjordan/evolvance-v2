import React, { useState } from 'react';
import { Play, Pause, Volume2, CheckCircle } from 'lucide-react';
import { featuredProducts } from '../data/mockData';

const FeaturedProducts = () => {
  const [activeDemo, setActiveDemo] = useState(null);
  const handleDemoClick = (product) => {
    if (product.demoType === 'voice') {
      window.open('/#/demo', '_self');
      return;
    }
    setActiveDemo(activeDemo === product.id ? null : product.id);
  };

  return (
    <section id="productos" className="section-padding bg-[#0A0A0A] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-outfit text-sm uppercase tracking-widest text-[#D4AF37] font-semibold mb-4 block">
            Productos Destacados
          </span>
          <h2 className="heading-1 mb-4">
            Asistentes de IA que{' '}
            <span className="text-gradient">transforman tu negocio</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="body-large max-w-2xl mx-auto mt-6">
            Automatiza tu atención al cliente con tecnología de inteligencia artificial de última generación
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`product-card product-card-accent-${product.accent} animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent"></div>
                
                {/* Demo Badge */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#202121] px-3 py-1 rounded-full text-xs font-outfit font-semibold uppercase">
                  Demo Disponible
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="heading-3 mb-3 text-white">{product.title}</h3>
                <p className="body-medium mb-6">{product.description}</p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="body-small text-[#DBCE97]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Demo Button / Calendly link when activa */}
                {activeDemo === product.id ? (
                  <a
                    href="https://calendly.com/admin-evol-vance/evolweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center group"
                  >
                    <Pause className="w-4 h-4" />
                    CITA PARA HABLAR DE IA PARA WHATSAPP
                  </a>
                ) : (
                  <button
                    onClick={() => handleDemoClick(product)}
                    className="btn-primary w-full justify-center group"
                  >
                    <Play className="w-4 h-4" />
                    Ver Demo Interactiva
                  </button>
                )}

                {/* Demo Interface */}
                {activeDemo === product.id && (
                  <div className="mt-6 p-6 bg-black/50 rounded-lg border border-[#D4AF37]/30 animate-fade-in-up">
                    {product.demoType === 'voice' ? (
                      <VoiceDemo />
                    ) : (
                      <WhatsAppDemo />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block glass-card p-8 max-w-2xl">
            <h3 className="heading-3 mb-4">¿Listo para automatizar tu negocio?</h3>
            <p className="body-medium mb-6">
              Agenda una consultoría gratuita y descubre cómo nuestros asistentes de IA pueden transformar tu empresa
            </p>
            <a
              href="https://calendly.com/admin-evol-vance/evolweb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              CITA PARA HABLAR DE IA PARA WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Voice Assistant Demo Component
const VoiceDemo = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-outfit text-sm text-[#D4AF37] uppercase">Demo Asistente de Voz</span>
        <Volume2 className="w-5 h-5 text-[#D4AF37]" />
      </div>

      {/* Waveform Visualization */}
      <div className="flex items-center justify-center gap-1 h-20 bg-black/50 rounded-lg p-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isListening ? 'animate-pulse' : ''
            }`}
            style={{
              height: `${isListening ? Math.random() * 100 : 20}%`,
              animationDelay: `${i * 0.05}s`
            }}
          ></div>
        ))}
      </div>

      {/* Conversation */}
      <div className="space-y-3">
        <div className="bg-[#1A1A1A] p-3 rounded-lg">
          <p className="text-sm text-[#DBCE97]">
            <strong className="text-white">Usuario:</strong> ¿Cuáles son sus servicios?
          </p>
        </div>
        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-3 rounded-lg">
          <p className="text-sm text-[#DBCE97]">
            <strong className="text-[#D4AF37]">Asistente:</strong> Ofrecemos CRM personalizados, desarrollo web, asistentes de IA, estrategias de captación de leads y mucho más. ¿En qué área te gustaría profundizar?
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsListening(!isListening)}
        className={`w-full py-3 rounded-lg font-outfit text-sm font-semibold uppercase transition-colors ${
          isListening
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-[#D4AF37] hover:bg-[#DBCE97] text-[#202121]'
        }`}
      >
        {isListening ? 'Detener' : 'Probar Asistente'}
      </button>
    </div>
  );
};

// WhatsApp Assistant Demo Component
const WhatsAppDemo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">W</span>
        </div>
        <div>
          <p className="font-outfit text-sm font-semibold text-white">Evolvance Bot</p>
          <p className="text-xs text-[#888]">En línea</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        <div className="flex justify-end">
          <div className="bg-[#1A1A1A] p-3 rounded-lg max-w-[80%]">
            <p className="text-sm text-[#DBCE97]">
              Hola, necesito información sobre sus asistentes de IA
            </p>
            <span className="text-xs text-[#888] block mt-1">14:23</span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-[#b8d1ba]/20 border border-[#b8d1ba]/30 p-3 rounded-lg max-w-[80%]">
            <p className="text-sm text-[#DBCE97]">
              ¡Hola! 👋 Soy el asistente virtual de Evolvance. Tenemos dos soluciones principales:
              <br /><br />
              🎤 Asistente por Voz<br />
              💬 Asistente por WhatsApp
              <br /><br />
              ¿Cuál te interesa más?
            </p>
            <span className="text-xs text-[#888] block mt-1">14:23</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#1A1A1A] p-3 rounded-lg max-w-[80%]">
            <p className="text-sm text-[#DBCE97]">El de WhatsApp</p>
            <span className="text-xs text-[#888] block mt-1">14:24</span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-[#b8d1ba]/20 border border-[#b8d1ba]/30 p-3 rounded-lg max-w-[80%]">
            <p className="text-sm text-[#DBCE97]">
              Perfecto! 🚀 Nuestro asistente de WhatsApp puede:
              <br /><br />
              ✅ Responder 24/7<br />
              ✅ Captar leads automáticamente<br />
              ✅ Integrar con tu CRM<br />
              ✅ Enviar catálogos y procesar pedidos
              <br /><br />
              ¿Te gustaría agendar una demo personalizada?
            </p>
            <span className="text-xs text-[#888] block mt-1">14:24</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/20">
        <p className="text-xs text-center text-[#888]">
          Demo simulada - El asistente real responde en tiempo real
        </p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
