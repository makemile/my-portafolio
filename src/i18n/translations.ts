export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Mis proyectos",
    },
    hero: {
      greeting: "Hola! Mi nombre es",
      role: "Frontend Engineer",
    },
    about: {
      title: "Sobre mí",
      bio: "Soy Frontend Engineer especializada en React, Angular y TypeScript, con formación en Administración de Empresas e ingeniería web. Me enfoco en arquitectura frontend limpia, optimización de rendimiento (Web Performance), accesibilidad y seguridad en el cliente, garantizando código escalable y mantenible. Actualmente integro Inteligencia Artificial y servicios Cloud (AWS) para optimizar el desarrollo y construir productos intuitivos.",
      categories: {
        frontend: "Frontend Core",
        performance: "Performance & Testing",
        cloud: "Cloud & Integraciones",
      },
      jobs: {
        seidor: {
          period: "Mayo 2025 - Presente",
          role: "Consultora Frontend I",
          item1:
            "Lideré la optimización de rendimiento en una aplicación React migrando la infraestructura de construcción de CRA a Vite e implementando code splitting basado en rutas (React.lazy & Suspense).",
          item2:
            "Reduje el tamaño del bundle inicial en un 54% (de 7 MB a 3 MB) y recorté el tiempo del pipeline de CI/CD a la mitad en GitHub Pages.",
          item3:
            "Integré la gestión de activos estáticos almacenados en AWS S3 consumiendo recursos en la nube a través de la aplicación cliente.",
        },
        zenta: {
          period: "Ene 2025 - May 2025",
          role: "Frontend Engineer",
          item1:
            "Colaboré en la migración de un sistema monolítico en .NET hacia una arquitectura moderna, desarrollando e integrando features clave en Angular v17 y TypeScript.",
          item2:
            "Integré flujos de despliegue en entornos de nube con AWS y pipelines de CI/CD.",
        },
        ey: {
          period: "Dic 2022 - Mar 2024",
          role: "Frontend Engineer",
          item1:
            "Construcción de aplicaciones web dinámicas en React.js e integración de APIs RESTful para herramientas de análisis ambiental y sostenibilidad.",
          item2:
            "Mantenimiento y desarrollo de features en Angular para aplicaciones financieras.",
          item3:
            "Gestión de estado global y optimizaciones que mejoraron la experiencia de usuario (UX) en un 20%.",
        },
      },
    },
    projects: {
      title: "Mis proyectos",
      preview: "Preview",
      github: "Github",
    },
    footer: {
      cta: "¡Conectemos!",
      builtWith: "Creado con Astro & SCSS.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      projects: "My projects",
    },
    hero: {
      greeting: "Hi! My Name Is",
      role: "Frontend Engineer",
    },
    about: {
      title: "About me",
      bio: "I am a Frontend Engineer specializing in JavaScript, TypeScript, React, and Angular. My edge lies at the intersection of business strategy and technical excellence: I hold a background in Business Administration and transitioned into software engineering at Laboratoria. Beyond building interfaces, I focus on code maintainability, legacy architecture migrations, Web Performance optimization, and client-side security. Currently, I am expanding into Cloud integrations (AWS) and AI solutions to build scalable, intelligent, and intuitive web products.",
      categories: {
        frontend: "Frontend Core",
        performance: "Performance & Testing",
        cloud: "Cloud & Integrations",
      },
      jobs: {
        seidor: {
          period: "May 2025 - Present",
          role: "Frontend Consultant I",
          item1:
            "Led performance optimization on a React application by migrating the build infrastructure from CRA to Vite and implementing route-based code splitting (React.lazy & Suspense).",
          item2:
            "Reduced initial bundle size by 54% (from 7 MB to 3 MB) and cut GitHub Pages CI/CD pipeline deployment times in half.",
          item3:
            "Integrated static asset management stored on AWS S3, consuming cloud resources directly through the client application.",
        },
        zenta: {
          period: "Jan 2025 - May 2025",
          role: "Frontend Engineer",
          item1:
            "Collaborated in migrating a .NET monolithic system toward a modern architecture, developing and integrating key features using Angular v17 and TypeScript.",
          item2:
            "Integrated deployment workflows in cloud environments with AWS and CI/CD pipelines.",
        },
        ey: {
          period: "Dec 2022 - Mar 2024",
          role: "Frontend Engineer",
          item1:
            "Built dynamic web applications in React.js and integrated RESTful APIs for environmental analysis and sustainability tools.",
          item2:
            "Maintained and built features in Angular for enterprise financial systems.",
          item3:
            "Implemented global state management and UX optimizations that boosted overall user experience by 20%.",
        },
      },
    },
    projects: {
      title: "My projects",
      preview: "Preview",
      github: "Github",
    },
    footer: {
      cta: "Let's connect!",
      builtWith: "Built with Astro & SCSS.",
    },
  },
} as const;

export type Language = keyof typeof translations;
