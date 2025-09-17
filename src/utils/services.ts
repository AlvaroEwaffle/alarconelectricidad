export interface Service {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  services: ServiceItem[];
  benefits: string[];
  process: string[];
  cta: string;
  gallery: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "instalaciones-domiciliarias",
    title: "Instalaciones Eléctricas Domiciliarias",
    description: "Servicios completos de instalación eléctrica para hogares, desde el diseño hasta la ejecución, cumpliendo con todas las normativas vigentes y garantizando la máxima seguridad.",
    shortDescription: "Instalaciones eléctricas completas para hogares con certificación SEC",
    icon: "🏠",
    services: [
      {
        title: "Instalación eléctrica nueva",
        description: "Diseño y ejecución de instalaciones eléctricas para viviendas nuevas, con cumplimiento de normativas vigentes y alto estándar de seguridad.",
        icon: "🏗️"
      },
      {
        title: "Instalación de luminarias",
        description: "Montaje de lámparas, plafones, focos, y sistemas de iluminación LED de eficiencia energética.",
        icon: "💡"
      },
      {
        title: "Instalación de sistemas de climatización",
        description: "Conexión de sistemas de calefacción, ventilación y aire acondicionado (HVAC) de acuerdo a las necesidades del hogar.",
        icon: "❄️"
      },
      {
        title: "Instalación de enchufes y tomas eléctricas",
        description: "Instalación de puntos de energía en espacios según la distribución de cada hogar, adaptados a necesidades de dispositivos electrónicos.",
        icon: "🔌"
      },
      {
        title: "Cableado estructurado",
        description: "Instalación de redes eléctricas y cableado adecuado para uso doméstico y para el soporte de nuevas tecnologías.",
        icon: "🔗"
      }
    ],
    benefits: [
      "Cumplimiento total de normativas SEC",
      "Garantía de 2 años en todas las instalaciones",
      "Materiales de primera calidad",
      "Optimización del consumo energético",
      "Diseño personalizado según necesidades"
    ],
    process: [
      "Evaluación gratuita del proyecto",
      "Diseño del sistema eléctrico",
      "Cotización detallada sin compromiso",
      "Ejecución con materiales certificados",
      "Pruebas de funcionamiento y entrega"
    ],
    cta: "Solicitar evaluación gratuita",
    gallery: [
      "/FOTO1.jpg",
      "/FOTO2.jpg",
      "/FOTO3.jpg",
      "/FOTO4.jpg",
      "/FOTO5.jpg",
      "/FOTO6.jpg",
      "/FOTO7.jpg",
      "/FOTO8.jpg"
    ]
  },
  {
    slug: "reposicion-fallas",
    title: "Reposición de Fallas y Cambio de Equipos Eléctricos",
    description: "Diagnóstico preciso y reparación de problemas eléctricos existentes, reposición de equipos obsoletos y mantenimiento preventivo para garantizar la seguridad y eficiencia del sistema.",
    shortDescription: "Diagnóstico y reparación de problemas eléctricos con tecnología avanzada",
    icon: "🔧",
    services: [
      {
        title: "Diagnóstico de fallas eléctricas",
        description: "Identificación precisa de problemas en sistemas eléctricos residenciales e industriales mediante herramientas tecnológicas avanzadas.",
        icon: "🔍"
      },
      {
        title: "Reposición de cables y conductores eléctricos",
        description: "Sustitución de cables dañados o envejecidos para garantizar la seguridad y eficiencia del sistema eléctrico.",
        icon: "🔌"
      },
      {
        title: "Cambio de tableros eléctricos",
        description: "Actualización o reemplazo de tableros eléctricos residenciales o industriales para cumplir con las normativas y mejorar la distribución de energía.",
        icon: "⚡"
      },
      {
        title: "Reposición de equipos de protección eléctrica",
        description: "Instalación de nuevos dispositivos de protección como interruptores automáticos, fusibles y sistemas de puesta a tierra.",
        icon: "🛡️"
      },
      {
        title: "Cambio de equipos eléctricos obsoletos",
        description: "Reemplazo de equipos como transformadores, interruptores, y sistemas de distribución que han llegado al final de su vida útil o no cumplen con los estándares modernos.",
        icon: "🔄"
      }
    ],
    benefits: [
      "Diagnóstico gratuito de fallas",
      "Reparaciones con garantía de 1 año",
      "Uso de herramientas tecnológicas avanzadas",
      "Respuesta rápida en emergencias",
      "Mantenimiento preventivo incluido"
    ],
    process: [
      "Inspección y diagnóstico del problema",
      "Identificación de la causa raíz",
      "Propuesta de solución y cotización",
      "Reparación con materiales certificados",
      "Pruebas de funcionamiento y verificación"
    ],
    cta: "Solicitar diagnóstico gratuito",
    gallery: [
      "/FOTO9.jpg",
      "/FOTO10.jpg",
      "/FOTO11.jpg",
      "/FOTO12.jpg",
      "/FOTO13.jpg",
      "/FOTO14.jpg",
      "/FOTO15.jpg"
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
