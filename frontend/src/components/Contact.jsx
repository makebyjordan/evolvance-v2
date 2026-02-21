import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Consulta de ${formData.name} - ${formData.service}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Empresa: ${formData.company}
Servicio de Interés: ${formData.service}

Mensaje:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-[#0A0A0A] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-outfit text-sm uppercase tracking-widest text-[#D4AF37] font-semibold mb-4 block">
            Contacto
          </span>
          <h2 className="heading-1 mb-4">
            Comienza tu{' '}
            <span className="text-gradient">evolución digital</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="body-large max-w-2xl mx-auto mt-6">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a crecer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card">
            <h3 className="heading-3 text-white mb-6">Solicita tu consultoría gratuita</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="heading-3 text-white mb-2">¡Mensaje enviado!</h4>
                <p className="body-medium">Te contactaremos pronto</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-outfit text-sm font-medium text-[#DBCE97] mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-outfit text-sm font-medium text-[#DBCE97] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block font-outfit text-sm font-medium text-[#DBCE97] mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-outfit text-sm font-medium text-[#DBCE97] mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-outfit text-sm font-medium text-[#DBCE97] mb-2">
                    ¿Qué servicio te interesa? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Asistente IA por Voz">Asistente IA por Voz</option>
                    <option value="Asistente IA por WhatsApp">Asistente IA por WhatsApp</option>
                    <option value="CRM Personalizado">CRM Personalizado</option>
                    <option value="Desarrollo Web 2.0">Desarrollo Web 2.0</option>
                    <option value="Captación de Leads">Captación de Leads</option>
                    <option value="Construcción de Marca">Construcción de Marca</option>
                    <option value="Desarrollo de Software">Desarrollo de Software</option>
                    <option value="Apps Móviles">Apps Móviles</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-outfit text-sm font-medium text-[#DBCE97] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center group">
                  <Send className="w-4 h-4" />
                  Enviar consulta
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="glass-card p-6">
              <h3 className="heading-3 text-white mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-outfit text-sm font-semibold text-white mb-1">Ubicación</p>
                    <p className="body-small text-[#DBCE97]">{companyInfo.location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-outfit text-sm font-semibold text-white mb-1">Email</p>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="body-small text-[#D4AF37] hover:text-[#DBCE97] transition-colors"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-outfit text-sm font-semibold text-white mb-1">Teléfono</p>
                    <a
                      href={`tel:${companyInfo.contact.phone}`}
                      className="body-small text-[#D4AF37] hover:text-[#DBCE97] transition-colors"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card overflow-hidden">
              <h3 className="heading-3 text-white mb-4 px-6 pt-6">Nuestra ubicación</h3>
              <div className="relative h-64 bg-[#1A1A1A]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5190911161994!2d-5.9739344!3d37.4248403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1269b9dab8c225%3A0xed21985d3ca9c8c7!2sEvolvance!5e0!3m2!1ses!2ses!4v1769736359915!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación de Evolvance"
                ></iframe>
              </div>
            </div>

            {/* Horario */}
            <div className="glass-card p-6">
              <h3 className="heading-3 text-white mb-4">Horario de atención</h3>
              <div className="space-y-2">
                <div className="flex justify-between body-small">
                  <span className="text-[#DBCE97]">Lunes - Viernes</span>
                  <span className="text-white font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between body-small">
                  <span className="text-[#DBCE97]">Asistentes IA</span>
                  <span className="text-[#D4AF37] font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h3 className="heading-2 text-center mb-6">
            ¡Estamos en <span className="text-gradient">Sevilla</span>!
          </h3>
          <img 
            src="https://iili.io/Kpn2Nqu.png" 
            alt="Contact" 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
