// ════════════════════════════════════════════════════════════════
// River Remedy - Main JavaScript
// Bilingual Support & Dynamic Content
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  // Initialize language from localStorage or browser preference
  const savedLang = localStorage.getItem('riverRemedy_lang') || 'en';
  setLanguage(savedLang);

  // Setup language toggle
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Setup smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Setup animations on scroll
  observeElements();
});

// ════════════════════════════════════════════════════════════════
// LANGUAGE SYSTEM
// ════════════════════════════════════════════════════════════════

const translations = {
  en: {
    nav: {
      overview: 'Overview',
      analysis: 'Analysis',
      remediation: 'Solutions',
      team: 'Team',
      contact: 'Contact',
      fullReport: '↓ Full Report (PDF)',
      share: 'Share ↗'
    },
    hero: {
      title: 'Restoring the <span class="highlight">Pilcomayo River</span>',
      subtitle: 'A groundbreaking 8-year study of heavy metal contamination in South America\'s most critical transnational watershed, affecting 1.5 million people across Bolivia, Paraguay, and Argentina.',
      stat1: '1.5M',
      stat1label: 'People Affected',
      stat2: '450+',
      stat2label: 'Years of Mining',
      stat3: '14+',
      stat3label: 'Heavy Metals Tracked'
    },
    contamination: {
      title: 'The Contamination Crisis',
      badge: 'Environmental Justice',
      intro: 'For over 450 years, mining operations in the Potosí region have released toxic heavy metals—arsenic, lead, cadmium, zinc, and mercury—into the Pilcomayo River, contaminating drinking water, agricultural soil, and aquatic ecosystems across three nations.',
      impacts: [
        {
          icon: '💧',
          title: 'Water Contamination',
          desc: 'Lead concentrations exceed WHO drinking water standards by 4.2× at peak monitoring stations. Cadmium shows the highest mobility, traveling >800 km downstream.'
        },
        {
          icon: '🌾',
          title: 'Soil & Food Contamination',
          desc: 'Agricultural communities downstream rely on contaminated floodplain sediments. Crops show elevated lead and cadmium concentrations, creating chronic exposure pathways for children.'
        },
        {
          icon: '🌬️',
          title: 'Air Pollution',
          desc: 'Uncovered mining trucks, tailings dams, and smelting operations release metal-laden dust, driving respiratory illness rates in riverside communities to 27%.'
        },
        {
          icon: '👨‍👩‍👧',
          title: 'Health Disparities',
          desc: 'Indigenous communities, particularly the Weenhayek and Quechua peoples, show 2–5× higher blood lead levels than reference populations. Children bear the greatest burden.'
        }
      ]
    },
    analysis: {
      title: 'What We Discovered',
      intro: 'Using 1,436 water and sediment samples from 46 monitoring stations (2016–2024), we mapped contamination dynamics that reveal a critical seasonal pattern.',
      findings: [
        {
          year: '2016–2024',
          title: 'The Seasonal Hand-off Cycle',
          desc: 'During wet season (Nov–Apr), heavy rainfall mobilizes metals into the water column (5–30× concentration spikes). As dry season begins, metals adsorb to sediment and settle into the riverbed, creating persistent toxic reservoirs that continue releasing metals for months to years.'
        },
        {
          year: 'Emerging',
          title: 'Mercury Crisis (2021–2024)',
          desc: 'Mercury, near-zero through 2019, spiked to 2.3 mg/kg in 2024—13× the EPA freshwater guideline. Simultaneous cadmium spike suggests upstream processing changes or new artisanal gold mining.'
        },
        {
          year: 'Priority Finding',
          title: 'Cadmium\'s High Mobility',
          desc: 'Cadmium\'s partition coefficient (200 L/kg) is 8× lower than lead\'s (1,667 L/kg), making it the most dangerous for long-distance water transport despite lower absolute concentrations.'
        }
      ]
    },
    remediation: {
      title: 'Remediation Strategy',
      intro: 'We recommend a phased, cost-effective approach targeting the three highest-priority contamination hotspots.',
      phases: [
        {
          phase: 'Phase 1',
          cost: '$180K–$240K',
          title: 'Source Control & Monitoring',
          desc: 'Deploy real-time monitoring at mining discharge points to quantify loads and trigger early warning systems for downstream communities.'
        },
        {
          phase: 'Phase 2',
          cost: '$420K–$580K',
          title: 'Passive Treatment Wetlands',
          desc: 'Construct sulfate-reducing wetlands at hotspots to precipitate dissolved metals via biogenic sulfide (60–75% removal efficiency).'
        },
        {
          phase: 'Phase 3',
          cost: '$95K–$140K/yr',
          title: 'Phytoremediation Corridors',
          desc: 'Plant vetiver and water hyacinth in floodplain zones for ongoing metal uptake, bank stabilization, and carbon sequestration co-benefits.'
        }
      ]
    },
    team: {
      title: 'Our Team',
      intro: 'An interdisciplinary group of environmental scientists, hydrologists, and data analysts at UCSB Bren School.',
      members: [
        {
          initials: 'KB',
          name: 'Katerina Bischel',
          role: 'Principal Investigator • Environmental Scientist • M.E.S.M. 2026',
          affil: 'UCSB Bren'
        },
        {
          initials: 'AK',
          name: 'Dr. Arturo Keller',
          role: 'Faculty Advisor • Nanoscience & Environmental Engineering',
          affil: 'UCSB Bren'
        },
        {
          initials: 'PG',
          name: 'Project Team',
          role: 'Hydrological Modeling • Sediment Transport Analysis',
          affil: 'UCSB Bren'
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      intro: 'Have questions about the research or interested in remediation partnerships?',
      formTitle: 'Send us a message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
      submit: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent!'
    },
    footer: {
      about: 'About River Remedy',
      aboutDesc: 'A groundbreaking study of heavy metal contamination in the Pilcomayo River Basin, combining field research, geochemical analysis, and community engagement.',
      resources: 'Resources',
      contact: 'Contact',
      rights: '© 2024 River Remedy. All rights reserved.'
    }
  },

  es: {
    nav: {
      overview: 'Resumen',
      analysis: 'Análisis',
      remediation: 'Soluciones',
      team: 'Equipo',
      contact: 'Contacto',
      fullReport: '↓ Informe Completo (PDF)',
      share: 'Compartir ↗'
    },
    hero: {
      title: 'Restaurando el <span class="highlight">Río Pilcomayo</span>',
      subtitle: 'Un estudio innovador de 8 años sobre la contaminación por metales pesados en la cuenca transnacional más crítica de Sudamérica, que afecta a 1.5 millones de personas en Bolivia, Paraguay y Argentina.',
      stat1: '1.5M',
      stat1label: 'Personas Afectadas',
      stat2: '450+',
      stat2label: 'Años de Minería',
      stat3: '14+',
      stat3label: 'Metales Pesados Identificados'
    },
    contamination: {
      title: 'La Crisis de Contaminación',
      badge: 'Justicia Ambiental',
      intro: 'Durante más de 450 años, las operaciones mineras en la región de Potosí han liberado metales pesados tóxicos—arsénico, plomo, cadmio, zinc y mercurio—en el río Pilcomayo, contaminando el agua potable, los suelos agrícolas y los ecosistemas acuáticos en tres naciones.',
      impacts: [
        {
          icon: '💧',
          title: 'Contaminación del Agua',
          desc: 'Las concentraciones de plomo exceden los estándares de la OMS para agua potable en 4.2× en las estaciones de monitoreo más afectadas. El cadmio muestra la mayor movilidad, viajando >800 km río abajo.'
        },
        {
          icon: '🌾',
          title: 'Contaminación del Suelo y Alimentos',
          desc: 'Las comunidades agrícolas río abajo dependen de sedimentos de llanura de inundación contaminados. Los cultivos muestran concentraciones elevadas de plomo y cadmio, creando vías de exposición crónica para los niños.'
        },
        {
          icon: '🌬️',
          title: 'Contaminación del Aire',
          desc: 'Los camiones mineros sin cobertura, las presas de relaves y las operaciones de fundición liberan polvo cargado de metales, elevando las tasas de enfermedades respiratorias en las comunidades ribereñas al 27%.'
        },
        {
          icon: '👨‍👩‍👧',
          title: 'Disparidades en la Salud',
          desc: 'Las comunidades indígenas, particularmente los pueblos Weenhayek y Quechua, muestran 2–5× más altos los niveles de plomo en sangre que las poblaciones de referencia. Los niños cargan el mayor peso.'
        }
      ]
    },
    analysis: {
      title: 'Lo Que Descubrimos',
      intro: 'Utilizando 1,436 muestras de agua y sedimento de 46 estaciones de monitoreo (2016–2024), mapeamos la dinámica de contaminación que revela un patrón estacional crítico.',
      findings: [
        {
          year: '2016–2024',
          title: 'El Ciclo de Transición Estacional',
          desc: 'Durante la temporada de lluvia (nov–abr), el fuerte período de precipitaciones moviliza metales hacia la columna de agua (picos de 5–30×). A medida que comienza la estación seca, los metales se adsorben en el sedimento y se asientan en el lecho del río, creando reservorios tóxicos persistentes que continúan liberando metales durante meses a años.'
        },
        {
          year: 'Emergente',
          title: 'Crisis de Mercurio (2021–2024)',
          desc: 'El mercurio, casi cero hasta 2019, se disparó a 2.3 mg/kg en 2024—13× la pauta de agua dulce de la EPA. Un pico simultáneo de cadmio sugiere cambios en el procesamiento río arriba o nueva minería de oro artesanal.'
        },
        {
          year: 'Hallazgo Principal',
          title: 'Alta Movilidad del Cadmio',
          desc: 'El coeficiente de partición del cadmio (200 L/kg) es 8× más bajo que el del plomo (1,667 L/kg), lo que lo hace más peligroso para el transporte de agua a larga distancia a pesar de sus concentraciones absolutas más bajas.'
        }
      ]
    },
    remediation: {
      title: 'Estrategia de Remediación',
      intro: 'Recomendamos un enfoque fasal, rentable, dirigido a los tres puntos de contaminación más críticos.',
      phases: [
        {
          phase: 'Fase 1',
          cost: '$180K–$240K',
          title: 'Control de Fuentes y Monitoreo',
          desc: 'Implemente monitoreo en tiempo real en los puntos de descarga minera para cuantificar cargas y activar sistemas de alerta temprana para las comunidades río abajo.'
        },
        {
          phase: 'Fase 2',
          cost: '$420K–$580K',
          title: 'Humedales de Tratamiento Pasivo',
          desc: 'Construya humedales reductores de sulfato en los puntos críticos para precipitar metales disueltos mediante sulfuro biogénico (eficiencia de eliminación del 60–75%).'
        },
        {
          phase: 'Fase 3',
          cost: '$95K–$140K/año',
          title: 'Corredores de Fitorremediación',
          desc: 'Plante vetiver e jacinto de agua en zonas de llanura de inundación para la absorción continua de metales, estabilización de riberas y beneficios de secuestro de carbono.'
        }
      ]
    },
    team: {
      title: 'Nuestro Equipo',
      intro: 'Un grupo interdisciplinario de científicos ambientales, hidrólogos y analistas de datos de la Escuela Bren de UCSB.',
      members: [
        {
          initials: 'KB',
          name: 'Katerina Bischel',
          role: 'Investigadora Principal • Científica Ambiental • M.E.S.M. 2026',
          affil: 'UCSB Bren'
        },
        {
          initials: 'AK',
          name: 'Dr. Arturo Keller',
          role: 'Asesor de Facultad • Nanociencia e Ingeniería Ambiental',
          affil: 'UCSB Bren'
        },
        {
          initials: 'PG',
          name: 'Equipo de Proyecto',
          role: 'Modelado Hidrológico • Análisis de Transporte de Sedimentos',
          affil: 'UCSB Bren'
        }
      ]
    },
    contact: {
      title: 'Ponte en Contacto',
      intro: '¿Tienes preguntas sobre la investigación o estás interesado en asociaciones de remediación?',
      formTitle: 'Envíanos un mensaje',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Tu mensaje...',
      submit: 'Enviar Mensaje',
      sending: 'Enviando...',
      sent: '¡Mensaje enviado!'
    },
    footer: {
      about: 'Sobre River Remedy',
      aboutDesc: 'Un estudio innovador de la contaminación por metales pesados en la cuenca del río Pilcomayo, que combina investigación de campo, análisis geoquímico y participación comunitaria.',
      resources: 'Recursos',
      contact: 'Contacto',
      rights: '© 2024 River Remedy. Todos los derechos reservados.'
    }
  }
};

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('riverRemedy_lang', lang);

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[lang];

    for (let k of keys) {
      value = value[k];
    }

    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = value;
    } else {
      element.innerHTML = value;
    }
  });

  // Update lang toggle button
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.textContent = lang === 'en' ? 'ES / EN' : 'EN / ES';
  }

  // Update document language attribute
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang);
}

// ════════════════════════════════════════════════════════════════
// ANIMATIONS & SCROLL EFFECTS
// ════════════════════════════════════════════════════════════════

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .stat-item, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}

// Initialize current language variable
let currentLang = 'en';
