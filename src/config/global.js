export default {
  global: {
    Name: 'Estrategia comercial y gestión de marca',
    Description:
      'El componente formativo desarrolla competencias para analizar el entorno organizacional y estructurar estrategias de mercadeo orientadas a la promoción de ventas. Integra diagnóstico organizacional, mercadeo, mezcla de mercadeo, segmentación, posicionamiento y plan comercial. Asimismo, aborda comunicación comercial, identidad de marca, <em>branding</em> y campañas promocionales, incorporando herramientas de <em>marketing</em> digital y plataformas comerciales para fortalecer el posicionamiento y la gestión estratégica de las marcas.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diagnóstico organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mezcla de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: '<em>Target</em> (grupo objetivo)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plataformas comerciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plan comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Comunicación comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Estrategia de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Marca y construcción de identidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'ADN de marca',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: '<em>Branding</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Campaña promocional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: ' Material publicitario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema15',
        numero: '15',
        titulo: '<em>Brief</em> (documento resumen)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema16',
        numero: '16',
        titulo: 'Recursos de apoyo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema17',
        numero: '17',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema18',
        numero: '18',
        titulo: '<em>Marketing</em> digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema19',
        numero: '19',
        titulo: '<em>Social media marketing</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema20',
        numero: '20',
        titulo: '<em>E-business</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'ADN de marca',
      significado:
        'Conjunto de valores, propósito y características que definen la esencia y personalidad   de una marca.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'Proceso estratégico de creación, gestión y posicionamiento de una marca en la mente   del consumidor.',
    },
    {
      termino: '<em>Brief</em>',
      significado:
        'Documento que resume los objetivos, público objetivo, mensaje y lineamientos de una   campaña o estrategia comercial.',
    },
    {
      termino: 'Campaña promocional',
      significado:
        'Conjunto de acciones de comunicación y <em>marketing</em> diseñadas para incentivar la compra o   posicionar un producto o servicio.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'Medio a través del cual se transmite un mensaje comercial entre la empresa y su   público objetivo.',
    },
    {
      termino: 'Comunicación comercial',
      significado:
        'Conjunto de estrategias y mensajes utilizados por una organización para informar,   persuadir y conectar con el mercado.',
    },
    {
      termino: 'Diagnóstico organizacional',
      significado:
        'Proceso de análisis que permite evaluar la situación interna y externa de una   organización para apoyar la toma de decisiones estratégicas.',
    },
    {
      termino: '<em>E-business</em>',
      significado:
        'Modelo de negocio que utiliza plataformas digitales e internet para realizar   actividades comerciales, administrativas y de servicio.',
    },
    {
      termino: 'Estrategia comercial',
      significado:
        'Plan de acciones orientadas a alcanzar objetivos de ventas, posicionamiento y   crecimiento en el mercado.',
    },
    {
      termino: 'Estrategia de comunicación',
      significado:
        'Plan que define cómo una organización transmitirá sus mensajes a la audiencia para   cumplir objetivos comerciales.',
    },
    {
      termino: 'Identidad visual',
      significado:
        'Conjunto de elementos gráficos que representan visualmente una marca, como colores,   tipografía y logotipo.',
    },
    {
      termino: 'Imagen de marca',
      significado:
        'Percepción que tienen los consumidores sobre una marca a partir de sus experiencias y   comunicaciones.',
    },
    {
      termino: 'Manual de identidad',
      significado:
        'Documento que establece las normas de uso de los elementos visuales de una marca para   mantener coherencia en su comunicación.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'Conjunto de estrategias de mercadeo aplicadas en plataformas digitales para   promocionar productos o servicios.',
    },
    {
      termino: 'Material publicitario',
      significado:
        'Recursos gráficos o audiovisuales utilizados para comunicar mensajes promocionales al   público.',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado:
        'Conjunto de variables estratégicas de <em>marketing</em> conocidas como producto, precio, plaza   y promoción.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Proceso de análisis, planificación y ejecución de actividades orientadas a satisfacer   necesidades del mercado.',
    },
    {
      termino: 'Mensaje comercial',
      significado:
        'Información que una empresa comunica al público para promocionar sus productos,   servicios o marca.',
    },
    {
      termino: 'Plataformas comerciales',
      significado:
        'Espacios físicos o digitales donde las empresas promocionan y venden productos o   servicios.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca o producto en la mente del consumidor frente a sus   competidores.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Plan financiero que asigna recursos económicos para ejecutar acciones comerciales o   promocionales.',
    },
    {
      termino: 'Promoción de ventas',
      significado:
        'Conjunto de incentivos temporales utilizados para estimular la compra de productos o   servicios.',
    },
    {
      termino: 'Recursos de apoyo',
      significado:
        'Herramientas, materiales o medios utilizados para ejecutar estrategias comerciales o   promocionales.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'Proceso de dividir el mercado en grupos de consumidores con características similares.  ',
    },
    {
      termino: '<em>Target</em> (grupo objetivo)',
      significado:
        'Segmento específico del mercado al cual se dirige una estrategia comercial o campaña   promocional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aaker, D. A. (2014). Construir marcas fuertes. Editorial Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Belch, G. E., y Belch, M. A. (2018). Advertising and promotion: An   integrated marketing communications perspective (11th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Chaffey, D., y Ellis-Chadwick, F. (2019). Marketing digital: estrategia,   implementación y práctica (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2006). Introducción a la teoría general de la administración   (7.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'HubSpot Español. (2023). Cómo hacer organigramas empresariales? (Ejemplos)   [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=S6MuHuuDbJg',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.).   Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., y Keller, K. L. (2016). Dirección de marketing (15.ª ed.).   Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H., y Setiawan, I. (2021). Marketing 5.0: tecnología   para la humanidad. LID Editorial.',
      link: '',
    },
    {
      referencia:
        'Laudon, K. C., y Traver, C. G. (2018). E-commerce 2018: Business,   technology, society (14th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Mintzberg, H. (1989). Mintzberg on management: Inside our strange world of   organizations. Free Press.',
      link: '',
    },
    {
      referencia:
        'Porter, M. (2009). Estrategia competitiva: técnicas para el análisis de los   sectores industriales y de la competencia. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Rivera Camino, J., Arellano Cueva, R., y Molero Ayala, V. (2013). Conducta   del consumidor: estrategias y políticas aplicadas al marketing. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Robbins, S. P., y Coulter, M. (2005). Administración (8.ª ed.). Pearson   Educación.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2020). El plan de marketing en la práctica (23.ª   ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Selman, H. (2017). Marketing digital: estrategias para atraer clientes a tu   negocio. Editorial Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Stanton, W., Etzel, M., y Walker, B. (2007). Fundamentos de marketing (14.ª   ed.). McGraw-Hill Interamericana.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
