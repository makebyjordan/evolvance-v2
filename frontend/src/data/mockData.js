// Mock data para Evolvance

export const heroData = {
  announcement: "Soluciones Tecnológicas Premium",
  title: "Evoluciona tu negocio con tecnología a medida",
  subtitle: "Diseñamos y desarrollamos soluciones digitales personalizadas que impulsan el crecimiento de tu empresa mediante IA, automatización y acompañamiento estratégico.",
  backgroundImage: "https://images.pexels.com/photos/20877155/pexels-photo-20877155.jpeg",
  cta: {
    primary: "Solicitar consultoría",
    secondary: "Ver servicios"
  }
};

export const featuredProducts = [
  {
    id: 1,
    title: "Asistente IA por Voz",
    description: "Transforma la atención a tus clientes con asistentes virtuales por voz que entienden, responden y resuelven 24/7 con tecnología de última generación.",
    features: [
      "Respuestas en tiempo real",
      "Disponibilidad 24/7",
      "Integración con tus sistemas",
      "Análisis de conversaciones"
    ],
    image: "https://images.pexels.com/photos/977296/pexels-photo-977296.jpeg",
    accent: "purple",
    demoType: "voice"
  },
  {
    id: 2,
    title: "Asistente IA por WhatsApp",
    description: "Automatiza tu atención en WhatsApp Business con IA conversacional que capta leads, responde consultas y cierra ventas mientras duermes.",
    features: [
      "Captación automática de leads",
      "Respuestas personalizadas",
      "Seguimiento de conversaciones",
      "Integración con CRM"
    ],
    image: "https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg",
    accent: "green",
    demoType: "whatsapp"
  }
];

export const services = [
  {
    id: 1,
    icon: "Database",
    title: "CRM Personalizado",
    description: "Sistemas de gestión de clientes diseñados específicamente para tu flujo de trabajo, sin funcionalidades innecesarias.",
    color: "purple"
  },
  {
    id: 2,
    icon: "Globe",
    title: "Desarrollo Web 2.0",
    description: "Sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.",
    color: "blue"
  },
  {
    id: 3,
    icon: "Target",
    title: "Captación de Leads",
    description: "Estrategias personalizadas de generación de clientes potenciales con automatización y análisis en tiempo real.",
    color: "orange"
  },
  {
    id: 4,
    icon: "Sparkles",
    title: "Construcción de Marca",
    description: "Identidad corporativa completa, desde el diseño hasta la estrategia de comunicación.",
    color: "pink"
  },
  {
    id: 5,
    icon: "Code",
    title: "Desarrollo de Software",
    description: "Aplicaciones web y móviles a medida con las últimas tecnologías y mejores prácticas.",
    color: "grey"
  },
  {
    id: 6,
    icon: "Smartphone",
    title: "Apps Móviles",
    description: "Aplicaciones nativas e híbridas que tus usuarios amarán usar cada día.",
    color: "blue"
  }
];

export const brandValues = [
  {
    title: "Exclusividad",
    description: "Cada cliente es único. Evolvance diseña soluciones adaptadas específicamente a las necesidades reales de cada empresa.",
    icon: "Star"
  },
  {
    title: "Calidad",
    description: "El trabajo no se da por finalizado hasta alcanzar el nivel de calidad acordado, cuidando cada detalle del proceso y del resultado final.",
    icon: "Award"
  },
  {
    title: "Cercanía",
    description: "Acompañamiento constante durante todo el proyecto y en la fase posterior, ofreciendo soporte, asesoramiento y seguimiento continuo.",
    icon: "Heart"
  },
  {
    title: "Innovación",
    description: "Uso permanente de tecnologías avanzadas, automatizaciones e inteligencia artificial, manteniéndose siempre actualizado.",
    icon: "Zap"
  }
];

export const caseStudies = [
  {
    id: 1,
    client: "E-commerce Retail",
    title: "Automatización de ventas con IA",
    description: "Incremento del 340% en conversión mediante asistente de WhatsApp que gestiona consultas, envía catálogos y procesa pedidos automáticamente.",
    results: "+340% conversión, 24/7 disponibilidad",
    image: "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg"
  },
  {
    id: 2,
    client: "Clínica Médica",
    title: "CRM y captación de pacientes",
    description: "Sistema personalizado que redujo tiempo de gestión en 60% y aumentó captación de nuevos pacientes en 180%.",
    results: "-60% tiempo gestión, +180% pacientes",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657"
  },
  {
    id: 3,
    client: "Bufete Legal",
    title: "Asistente por voz para consultas",
    description: "Sistema de atención que gestiona primeras consultas, agenda citas y califica leads automáticamente.",
    results: "+200% leads calificados",
    image: "https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg"
  }
];

export const companyInfo = {
  name: "Evolvance",
  tagline: "Soluciones tecnológicas premium a medida",
  description: "Empresa tecnológica especializada en el diseño y desarrollo de soluciones digitales personalizadas para empresas que buscan crecer, optimizar procesos y diferenciarse dentro de su sector.",
  location: {
    address: "Torres Torneo, Sevilla",
    googleMapsUrl: "https://maps.app.goo.gl/NDiwYgWddM9RMlZb1",
    coordinates: {
      lat: 37.4023,
      lng: -5.9767
    }
  },
  contact: {
    email: "contacto@evolvance.es",
    phone: "+34 XXX XXX XXX"
  },
  social: {
    linkedin: "#",
    instagram: "#",
    twitter: "#"
  }
};

// Mock para demo de voice assistant
export const voiceAssistantDemo = {
  status: "idle", // idle, listening, processing, speaking
  conversations: [
    {
      id: 1,
      type: "user",
      text: "¿Cuáles son sus servicios?",
      timestamp: "10:30"
    },
    {
      id: 2,
      type: "assistant",
      text: "Ofrecemos CRM personalizados, desarrollo web, asistentes de IA, estrategias de captación de leads y mucho más. ¿En qué área te gustaría profundizar?",
      timestamp: "10:30"
    }
  ]
};

// Mock para demo de WhatsApp assistant
export const whatsappAssistantDemo = {
  conversations: [
    {
      id: 1,
      type: "user",
      text: "Hola, necesito información sobre sus asistentes de IA",
      timestamp: "14:23",
      status: "delivered"
    },
    {
      id: 2,
      type: "bot",
      text: "¡Hola! 👋 Soy el asistente virtual de Evolvance. Tenemos dos soluciones principales:\n\n🎤 Asistente por Voz\n💬 Asistente por WhatsApp\n\n¿Cuál te interesa más?",
      timestamp: "14:23",
      status: "read"
    },
    {
      id: 3,
      type: "user",
      text: "El de WhatsApp",
      timestamp: "14:24",
      status: "delivered"
    },
    {
      id: 4,
      type: "bot",
      text: "Perfecto! 🚀 Nuestro asistente de WhatsApp puede:\n\n✅ Responder 24/7\n✅ Captar leads automáticamente\n✅ Integrar con tu CRM\n✅ Enviar catálogos y procesar pedidos\n\n¿Te gustaría agendar una demo personalizada?",
      timestamp: "14:24",
      status: "read"
    }
  ]
};

export const faqData = [
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer: "Cada proyecto es único. Un CRM básico puede estar listo en 3-4 semanas, mientras que una aplicación compleja puede tomar 2-3 meses. Siempre establecemos plazos claros desde el inicio."
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer: "Absolutamente. Todos nuestros proyectos incluyen soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento y actualización continua."
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer: "Sí, trabajamos desde startups hasta grandes empresas. Cada solución se adapta al tamaño, presupuesto y objetivos específicos del cliente."
  },
  {
    question: "¿Los asistentes de IA funcionan en mi idioma?",
    answer: "Nuestros asistentes soportan múltiples idiomas, incluyendo español, inglés, y muchos más. Se configuran específicamente para tu mercado."
  }
];
