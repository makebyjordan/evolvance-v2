import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Legal = () => {
  return (
    <div className="bg-black text-[#DBCE97] min-h-screen">
      <Header />
      <main className="container-custom pt-28 md:pt-32 pb-24 mb-12 space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">Aviso Legal</p>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white">Aviso Legal</h1>
          <p className="text-base text-[#c9bc85] max-w-3xl">
            Información general sobre el sitio web https://evolvance.es y las condiciones de uso aplicables.
          </p>
        </header>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">1. Información general</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Titular: NOESIS ALTIUS S. COOP. AND</li>
            <li>Nombre comercial: EVOLVANCE</li>
            <li>CIF: F22743868</li>
            <li>Dominio web: https://evolvance.es</li>
            <li>Correo electrónico: admin@evolvance.es</li>
            <li>Teléfono: +34 613 970 023</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">2. Objeto</h2>
          <p>
            Este Aviso Legal regula el acceso, navegación y uso del sitio web https://evolvance.es, así como las
            responsabilidades derivadas de la utilización de sus contenidos y servicios.
          </p>
          <p>EVOLVANCE ofrece servicios profesionales orientados a empresas, principalmente en:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Desarrollo de software</li>
            <li>Automatización de procesos</li>
            <li>Asistentes de voz con inteligencia artificial</li>
            <li>Asistentes de chat con inteligencia artificial</li>
            <li>Soluciones tecnológicas personalizadas</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">3. Condiciones de uso</h2>
          <p>El acceso y uso del sitio implica la aceptación plena de este Aviso Legal. El usuario se compromete a no:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Realizar actividades ilícitas o contrarias a la buena fe y al orden público</li>
            <li>Difundir contenidos ofensivos, ilegales o contrarios a derechos de terceros</li>
            <li>Provocar daños en los sistemas físicos o lógicos de EVOLVANCE o de terceros</li>
          </ul>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio (textos, imágenes, diseño, logotipos, software, código fuente, marcas y nombres
            comerciales) son titularidad de EVOLVANCE o de terceros autorizantes y están protegidos por la normativa
            vigente. Se prohíbe la reproducción, distribución o comunicación pública sin autorización expresa.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">5. Responsabilidad</h2>
          <p>EVOLVANCE no se hace responsable de:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Daños derivados del uso del sitio web</li>
            <li>Falta de disponibilidad, mantenimiento o funcionamiento del sitio</li>
            <li>Errores u omisiones en los contenidos</li>
            <li>Presencia de virus u otros elementos dañinos</li>
            <li>Uso indebido del sitio por parte de los usuarios</li>
          </ul>
          <p>
            EVOLVANCE puede suspender temporalmente el acceso sin previo aviso por motivos técnicos, de mantenimiento o de
            seguridad.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">6. Enlaces a terceros</h2>
          <p>
            El sitio puede contener enlaces a webs de terceros. EVOLVANCE no se responsabiliza de su contenido, políticas
            o prácticas. El establecimiento de enlaces no implica relación alguna entre EVOLVANCE y los titulares de los
            sitios enlazados.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">7. Protección de datos personales</h2>
          <p>
            El tratamiento de datos personales se rige por lo establecido en la Política de Privacidad disponible en este
            sitio web.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">8. Uso de cookies</h2>
          <p>El uso de cookies se regula por la Política de Cookies disponible en este sitio web.</p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">9. Legislación aplicable y jurisdicción</h2>
          <p>
            La relación entre EVOLVANCE y el usuario se regirá por la normativa española vigente. Para controversias
            derivadas del acceso o uso, las partes se someterán a los Juzgados y Tribunales que correspondan conforme a
            derecho.
          </p>
        </section>

        <section className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">10. Modificaciones</h2>
          <p>
            EVOLVANCE puede modificar este Aviso Legal en cualquier momento para adaptarlo a cambios legislativos,
            técnicos o de funcionamiento. Las modificaciones se publicarán en esta misma página. Última actualización:
            2026.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Marketing</h3>
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

export default Legal;
