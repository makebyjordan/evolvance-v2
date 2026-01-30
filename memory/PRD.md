# PRD - Evolvance Website

## Problema Statement Original
Crear una web espectacular para una agencia tecnológica (Evolvance) que destaque asistentes de IA por voz y WhatsApp como productos principales, siguiendo fielmente el manual de marca corporativa con colores oro/negro/beige y tipografías Outfit/Museo Sans Rounded. Incluir servicios de CRMs, webs 2.0, captación de leads, branding y desarrollo de software. Ubicación: Torres Torneo, Sevilla.

## Fecha de Inicio
30 de Enero, 2025

## User Personas
- **Empresarios y directores de empresas**: Buscan soluciones tecnológicas premium para automatizar y optimizar sus negocios
- **Responsables de marketing**: Necesitan herramientas de captación de leads y automatización
- **CTOs/Gerentes de tecnología**: Requieren desarrollos personalizados y CRMs a medida

## Identidad de Marca (Manual Corporativo)

### Colores Evolvance
- **Negro Corporativo**: #202121
- **Beige**: #DBCE97  
- **Oliva**: #605111
- **Dorado Premium**: #D4AF37 (elegido para web)

### Tipografías
- **Principal**: Outfit (títulos, headings, elementos destacados)
- **Secundaria**: Manrope (reemplaza Museo Sans Rounded por disponibilidad en Google Fonts)

### Valores de Marca
1. **Exclusividad**: Soluciones adaptadas a cada cliente
2. **Calidad**: Perfección en cada detalle
3. **Cercanía**: Acompañamiento continuo
4. **Innovación**: Tecnologías avanzadas e IA

## Arquitectura Implementada

### Stack Tecnológico
- **Frontend**: React 19 + TailwindCSS
- **Componentes UI**: Shadcn/UI + Lucide Icons
- **Estado**: React Hooks
- **Estilos**: CSS Custom Properties + Tailwind
- **Diseño**: Responsive Mobile-First

### Estructura de Componentes

```
src/
├── components/
│   ├── Header.jsx          # Navegación fija con logo y menú
│   ├── Hero.jsx            # Hero con imagen Torres Torneo
│   ├── FeaturedProducts.jsx # Asistentes IA con demos interactivos
│   ├── Services.jsx        # Grid de 6 servicios
│   ├── BrandValues.jsx     # 4 valores corporativos
│   ├── CaseStudies.jsx     # 3 casos de éxito
│   ├── Contact.jsx         # Formulario + info contacto
│   └── Footer.jsx          # Footer con links y redes sociales
├── data/
│   └── mockData.js         # Todos los datos mock
└── styles/
    └── evolvance.css       # Sistema de diseño Evolvance
```

## Características Implementadas (30 Enero 2025)

### ✅ Fase 1: Frontend con Mock Data

#### 1. Header & Navegación
- Logo Evolvance (versión horizontal)
- Menú de navegación responsive
- Botón CTA "Consultoría Gratuita"
- Scroll suave entre secciones
- Menú móvil hamburguesa

#### 2. Hero Section
- Imagen de fondo: Torres Torneo de Sevilla
- Overlay oscuro premium
- Badge "Soluciones Tecnológicas Premium"
- Título principal con gradiente dorado
- Subtítulo descriptivo
- 2 botones CTA (primario y secundario)
- Stats: 100+ proyectos, 24/7 soporte, 98% satisfacción, 50+ empresas
- Scroll indicator animado

#### 3. Productos Destacados (Asistentes IA)

**Asistente IA por Voz:**
- Demo interactiva con waveform animado
- Conversación simulada
- Features: Respuestas tiempo real, 24/7, integración, análisis
- Botón "Ver Demo Interactiva"
- Badge "DEMO DISPONIBLE"

**Asistente IA por WhatsApp:**
- Demo con interfaz de chat WhatsApp
- Mensajes bot simulados
- Features: Captación leads, respuestas personalizadas, seguimiento, integración CRM
- Badge "DEMO DISPONIBLE"

#### 4. Servicios (6 servicios)
1. **CRM Personalizado** - Icon Database
2. **Desarrollo Web 2.0** - Icon Globe
3. **Captación de Leads** - Icon Target
4. **Construcción de Marca** - Icon Sparkles
5. **Desarrollo de Software** - Icon Code
6. **Apps Móviles** - Icon Smartphone

Cada servicio con:
- Icono en círculo dorado
- Título y descripción
- Border izquierdo con color de acento
- Hover effect con desplazamiento

**Sección de Proceso:**
- 4 pasos: Análisis → Estrategia → Desarrollo → Acompañamiento
- Números grandes con efecto visual
- Líneas conectoras entre pasos

#### 5. Valores de Marca
- 4 valores con iconos en círculos dorados pulsantes
- Glass morphism cards
- Stats adicionales de resultados

#### 6. Casos de Éxito (3 casos)
1. **E-commerce Retail**: +340% conversión
2. **Clínica Médica**: -60% tiempo gestión, +180% pacientes
3. **Bufete Legal**: +200% leads calificados

Cada caso con:
- Imagen representativa
- Badge de cliente
- Descripción del proyecto
- Resultados con icon TrendingUp

#### 7. Formulario de Contacto
- Campos: Nombre, Email, Teléfono, Empresa, Servicio, Mensaje
- Validación HTML5
- Submit con mailto: (frontend simple)
- Confirmación visual al enviar
- Info de contacto lateral (ubicación, email, teléfono)
- Mapa placeholder con link a Google Maps
- Horario de atención

#### 8. Footer
- Logo Evolvance
- Descripción corporativa
- Redes sociales (LinkedIn, Instagram, Twitter, Email)
- Links de navegación
- Links de servicios
- Copyright y legal

### Diseño & UX

#### Sistema de Colores
```css
--evolvance-black: #202121    # Fondo cards y texto principal
--evolvance-beige: #DBCE97    # Texto secundario
--evolvance-gold: #D4AF37     # CTAs y acentos premium
--bg-primary: #0A0A0A         # Fondo página
```

#### Tipografía Scale
- **Hero**: 2.5rem - 4.5rem (responsive)
- **H1**: 2rem - 3rem
- **H2**: 1.5rem - 2rem
- **H3**: 1.25rem - 1.5rem
- **Body**: 1rem - 1.25rem

#### Componentes de UI
- **Botón Primario**: Dorado, pill shape, uppercase, shadow glow
- **Botón Secundario**: Border beige, transparent, pill shape
- **Cards**: Fondo oscuro, border dorado sutil, hover lift
- **Glass Cards**: Backdrop blur, semi-transparent

#### Animaciones
- Fade in up al scroll
- Hover lift en cards
- Pulse en iconos dorados
- Waveform animation en demo voz
- Smooth scroll navigation

#### Responsive Design
- **Mobile First**: 320px+
- **Tablet**: 768px+ (2 columnas)
- **Desktop**: 1280px+ (3-4 columnas)
- Menú hamburguesa en mobile
- Stack vertical en mobile, grid en desktop

### Assets Utilizados

#### Imágenes
- **Hero**: Torres Torneo Sevilla (Pexels)
- **Asistente Voz**: Smart speaker device
- **Asistente WhatsApp**: WhatsApp mobile interface
- **Casos de éxito**: Código, desarrollo, workspace

#### Logos
- Logo horizontal (versión 2) con texto
- Logo vertical (versión 1)
- Isotipo (solo V)

## Mock Data Implementado

Todos los datos están en `/app/frontend/src/data/mockData.js`:
- Hero data (títulos, CTAs, imagen)
- 2 productos destacados con demos
- 6 servicios
- 4 valores de marca
- 3 casos de éxito
- Información de empresa y contacto
- Conversaciones simuladas para demos

## Próximos Pasos (Backlog)

### P0 - Crítico
- [ ] **Backend API**: Crear endpoints para formulario de contacto
- [ ] **Base de datos MongoDB**: Guardar leads del formulario
- [ ] **Integración Email**: SendGrid/Resend para notificaciones
- [ ] **Google Maps API**: Mapa real en vez de placeholder

### P1 - Alta Prioridad  
- [ ] **Integración IA Real**: Conectar demos con OpenAI/Claude
- [ ] **CMS**: Panel admin para gestionar contenidos
- [ ] **Analytics**: Google Analytics / Plausible
- [ ] **SEO**: Meta tags, sitemap, structured data
- [ ] **Multiidioma**: Español e inglés

### P2 - Media Prioridad
- [ ] **Blog**: Sección de artículos/recursos
- [ ] **Portfolio ampliado**: Más casos de éxito con detalles
- [ ] **Testimonios**: Carrusel de clientes
- [ ] **FAQ**: Sección de preguntas frecuentes
- [ ] **Chat widget**: Asistente IA en vivo en la web

### Mejoras Técnicas
- [ ] **Optimización imágenes**: WebP, lazy loading
- [ ] **Performance**: Code splitting, bundle optimization
- [ ] **PWA**: Service worker, offline mode
- [ ] **Testing**: Unit tests, E2E tests
- [ ] **CI/CD**: Pipeline automatizado

## Notas Técnicas

### Dependencias Principales
```json
{
  "react": "^19.0.0",
  "lucide-react": "^0.507.0",
  "tailwindcss": "^3.4.17"
}
```

### Variables de Entorno
```
REACT_APP_BACKEND_URL=<backend_url>
```

### Comandos
```bash
# Frontend
cd /app/frontend
yarn start    # Desarrollo
yarn build    # Producción

# Supervisord
sudo supervisorctl restart frontend
```

## Métricas de Éxito

### UX Metrics (Objetivos)
- **Bounce Rate**: < 40%
- **Time on Site**: > 2 minutos
- **Form Completion**: > 15%
- **Mobile Traffic**: > 50%

### Business Metrics (Objetivos)
- **Lead Generation**: 50+ leads/mes
- **Demo Requests**: 20+ demos/mes
- **Conversion Rate**: 5-10% leads → clientes

## Changelog

### v1.0.0 - 30 Enero 2025
- ✅ Diseño completo siguiendo manual de marca Evolvance
- ✅ 8 secciones implementadas con mock data
- ✅ Demos interactivas de asistentes IA
- ✅ Responsive design mobile-first
- ✅ Animaciones y micro-interacciones
- ✅ Formulario de contacto con mailto
- ✅ Navegación suave entre secciones
- ✅ Optimización para conversión

---

**Última actualización**: 30 de Enero, 2025
**Estado**: Frontend MVP Completado ✅
**Siguiente fase**: Backend + Integraciones
