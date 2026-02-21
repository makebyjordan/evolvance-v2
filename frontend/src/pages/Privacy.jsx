import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="bg-black text-[#DBCE97] min-h-screen">
      <Header />
      <main className="container-custom pt-28 md:pt-32 pb-24 mb-12 space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">Política de Privacidad</p>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white">Política de Privacidad</h1>
          <p className="text-base text-[#c9bc85] max-w-3xl">
            NOESIS ALTIUS S. COOP. AND (EVOLVANCE) informa sobre el tratamiento y protección de los datos personales
            recabados a través de https://evolvance.es al navegar, contratar servicios o contactar con nosotros.
          </p>
        </header>

        <section className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">1. Información al usuario</h2>
          <p>
            El tratamiento de datos personales se realiza conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica
            3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">2. Identidad del responsable del tratamiento</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Responsable: NOESIS ALTIUS S. COOP. AND</li>
            <li>CIF: F22743868</li>
            <li>Nombre comercial: EVOLVANCE</li>
            <li>Dominio web: https://evolvance.es</li>
            <li>Correo electrónico: admin@evolvance.es</li>
            <li>Teléfono: +34 613 970 023</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">3. Principios aplicados en el tratamiento</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Licitud, lealtad y transparencia</li>
            <li>Limitación de la finalidad</li>
            <li>Minimización de datos</li>
            <li>Exactitud</li>
            <li>Limitación del plazo de conservación</li>
            <li>Integridad y confidencialidad</li>
            <li>Responsabilidad proactiva</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">4. Datos personales que se recogen</h2>
          <p>EVOLVANCE puede recopilar:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Nombre y apellidos</li>
            <li>Nombre de la empresa</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información proporcionada en formularios de contacto</li>
            <li>Datos necesarios para la contratación de servicios</li>
            <li>Dirección IP, datos de navegación y uso del sitio web</li>
            <li>No se tratan categorías especiales de datos personales</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">5. Finalidad del tratamiento de los datos</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Gestionar solicitudes de información y contacto</li>
            <li>Prestar y gestionar servicios de desarrollo de software</li>
            <li>Prestación de servicios de asistentes de voz y chat con IA</li>
            <li>Gestión comercial y administrativa con empresas clientes</li>
            <li>Envío de comunicaciones profesionales o comerciales relacionadas con los servicios</li>
            <li>Mejorar la experiencia del usuario y el funcionamiento del sitio web</li>
            <li>Cumplimiento de obligaciones legales</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">6. Base legal para el tratamiento</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Consentimiento del usuario</li>
            <li>Ejecución de contrato o precontrato</li>
            <li>Interés legítimo del responsable</li>
            <li>Cumplimiento de obligaciones legales</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">7. Conservación de los datos</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Mientras exista una relación comercial o contractual</li>
            <li>Mientras el usuario no solicite su supresión</li>
            <li>Durante los plazos legalmente exigidos para obligaciones fiscales o legales</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">8. Destinatarios de los datos</h2>
          <p>
            No se cederán datos personales a terceros, salvo obligación legal o cuando sea necesario para la correcta
            prestación del servicio (proveedores tecnológicos, servicios de hosting, herramientas de automatización o
            plataformas de comunicación) con los que se mantienen los correspondientes contratos de encargo de tratamiento.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">9. Transferencias internacionales de datos</h2>
          <p>
            En algunos casos se pueden usar herramientas tecnológicas con servidores fuera del Espacio Económico Europeo.
            Se garantizará que las transferencias se realicen conforme a las garantías adecuadas exigidas por el RGPD.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">10. Derechos del usuario</h2>
          <p>El usuario puede:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Acceder, rectificar, suprimir y limitar el tratamiento de sus datos</li>
            <li>Oponerse al tratamiento</li>
            <li>Solicitar la portabilidad de sus datos</li>
            <li>Retirar el consentimiento en cualquier momento</li>
          </ul>
          <p>
            Para ejercer derechos puede escribir a{' '}
            <a href="mailto:admin@evolvance.es" className="text-[#D4AF37] underline underline-offset-4">admin@evolvance.es</a>
            {' '}indicando el derecho a ejercer y adjuntando copia de un documento de identidad.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">11. Reclamaciones ante la autoridad de control</h2>
          <p>
            Puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline underline-offset-4">https://www.aepd.es</a>.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">12. Seguridad de los datos</h2>
          <p>
            EVOLVANCE adopta medidas técnicas y organizativas para garantizar la seguridad, integridad y confidencialidad
            de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">13. Cambios en la política de privacidad</h2>
          <p>
            EVOLVANCE puede modificar esta Política para adaptarla a novedades legislativas o jurisprudenciales. Las
            modificaciones se publicarán en esta misma página.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Áreas de Marketing</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Desarrollo web</li>
              <li>Email marketing</li>
              <li>Branding y copywriting</li>
              <li>SEO y SEM</li>
              <li>Campañas de Ads</li>
              <li>Contenido</li>
              <li>Gestión de redes sociales</li>
              <li>Producción audiovisual</li>
              <li>Estrategia de contenido</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Tecnología</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Automatizaciones e IA</li>
              <li>Programación a medida</li>
              <li>Ciberseguridad</li>
              <li>Realidad virtual</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4">Contacto</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Teléfono: 613 97 00 23</li>
              <li>Dirección: C. Astronomía, 1, Sevilla</li>
              <li>Evolvance</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
