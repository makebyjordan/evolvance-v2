import React from 'react';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#202121] text-[#DBCE97] pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="https://customer-assets.emergentagent.com/job_2d5da32d-c8d7-4484-9889-ef5971ddb3aa/artifacts/et1hsjc0_logo%2Btexto-evolvance.png"
              alt="Evolvance"
              className="h-10 mb-4"
            />
            <p className="body-medium mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#D4AF37] group-hover:text-[#202121] transition-colors" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37] group-hover:text-[#202121] transition-colors" />
              </a>
              <a
                href={companyInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[#D4AF37] group-hover:text-[#202121] transition-colors" />
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#D4AF37] group-hover:text-[#202121] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit text-white font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Productos', href: '#productos' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Casos de Éxito', href: '#casos' },
                { label: 'Contacto', href: '#contacto' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="body-small hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit text-white font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#productos" onClick={(e) => { e.preventDefault(); scrollToSection('#productos'); }} className="body-small hover:text-[#D4AF37] transition-colors inline-block">
                  Asistentes IA
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="body-small hover:text-[#D4AF37] transition-colors inline-block">
                  CRM Personalizado
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="body-small hover:text-[#D4AF37] transition-colors inline-block">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="body-small hover:text-[#D4AF37] transition-colors inline-block">
                  Captación de Leads
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('#servicios'); }} className="body-small hover:text-[#D4AF37] transition-colors inline-block">
                  Apps Móviles
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-small text-[#888]">
            © {currentYear} Evolvance. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="body-small text-[#888] hover:text-[#D4AF37] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="body-small text-[#888] hover:text-[#D4AF37] transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
