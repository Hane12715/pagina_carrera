const CONTENIDO = {
  sitio: {
    logo: "Ingeniería en Sistemas<br>Ingeniería en Ciencia de Datos e IA"
  },

  menu: [
    { id: "inicio",       texto: "Inicio" },
    { id: "planes",       texto: "Planes de estudio" },
    { id: "oportunidades",texto: "Oportunidades" },
    { id: "recursos",     texto: "Equipo disponible" },
    { id: "comunidad",    texto: "Comunidad estudiantil" },
    { id: "galeria",      texto: "Galería de eventos" }
  ],

  hero: {
    saludo: "¡Bienvenid@!",
    titulo: "Bienvenido a la página oficial de tu carrera",
    descripcion: "Aquí encontrarás toda la información que necesitas sobre Ingeniería en Sistemas e Ingeniería en Ciencia de Datos e Inteligencia Artificial. Explora, conoce y aprovecha todo lo que hay para ti.",
    boton: "↓ Comenzar a explorar",
    imagen: "https://i.pinimg.com/1200x/bc/d0/af/bcd0af5f67c485d4158e6cc35286fdee.jpg",   
    nota: ""
  },

  planes: {
    etiqueta: "Planes de estudio",
    titulo: "Tu camino, paso a paso",
    descripcion: "Conoce el plan de estudios de cada carrera y descubre todas las materias que te prepararán para el futuro.",
    carreras: [
      {
        nombre: "Ingeniería en Sistemas",
        icono: "",
        icono: "img/icono-sistemas.png",
        descripcion: "Aprende a construir soluciones tecnológicas, desde el desarrollo de software hasta la gestión de sistemas.",
        imagen: "https://i.pinimg.com/736x/fb/5e/ed/fb5eed240969e40d50fb721e4860d0f4.jpg",                       
        pdf: "docs/plan-sistemas.pdf"      
      },
      {
        nombre: "Ingeniería en Ciencia de Datos e Inteligencia Artificial",
        icono: "",
        icono: "img/icono-sistemas.png",
        descripcion: "Aprende a analizar datos, crear modelos inteligentes y generar impacto con IA.",
        imagen: "",
        pdf: "docs/plan-datos-ia.pdf"
      }
    ]
  },
    oportunidades: {
    etiqueta: "Oportunidades",
    titulo: "Más que una carrera, son oportunidades",
    descripcion: "Hay muchas formas de crecer, aprender y vivir experiencias que suman a tu futuro. Aquí algunas de ellas:",
    items: [
      { icono: "🏅", titulo: "cursos",             info: "" },
      { icono: "🏅", titulo: "congresos",                    info: "" },
      { icono: "🏅", titulo: "Hackathons",            info: "" },
      { icono: "🏅", titulo: "Comunidad tecnológica",                info: "" },
      { icono: "🏅", titulo: "Prácticas profesionales e internacionalización", info: "" }
    ]
  },
    recursos: {
    etiqueta: "Equipo y espacios disponibles",
    titulo: "Recursos que impulsan tu aprendizaje",
    descripcion: "Contamos con laboratorios, equipos y herramientas especializadas para que desarrolles todo tu potencial.",
    items: [
      { nombre: "Laboratorio de IA",            imagen: "" },   
      { nombre: "PCs para entrenamiento de IA", imagen: "" },
      { nombre: "Robot Temi",                   imagen: "" },
      { nombre: "Lentes de realidad virtual",   imagen: "" }
    ]
  },
    comunidad: {
    etiqueta: "Comunidad estudiantil",
    titulo: "Juntos hacemos la diferencia",
    descripcion: "Aquí encontrarás los grupos estudiantiles para que te involucres, compartas ideas y construyas nuevas experiencias.",
    grupos: [
      {
        nombre: "The Backend",
        tipo: "Asociación estudiantil",
        logo: "⚙️",         
        imagen: "",          
        descripcion: "La asociación estudiantil de nuestras carreras",
        info: "",       
        redes: [
          { nombre: "Instagram", url: "" }
        ]     
      },
      {
        nombre: "Club de Blockchain",
        tipo: "Club estudiantil",
        logo: "⛓️",
        imagen: "",
        descripcion: "Un espacio para aprender y experimentar con blockchain.",
        info: "",
        redes: [
          { nombre: "Instagram", url: "" }
        ]
      }
    ]
  },
    faq: {
    etiqueta: "Preguntas frecuentes",
    titulo: "Resuelve tus dudas",
    descripcion: "Aquí respondemos las preguntas más comunes sobre nuestras carreras, procesos y recursos.",
    preguntas: [
      { pregunta: "¿Dónde puedo encontrar mi plan de estudio?", respuesta: "Puedes descargarlo en la sección <a href='#planes'>Planes de estudio</a>." },
      { pregunta: "¿Qué certificaciones puedo obtener?",        respuesta: "Información próximamente." },
      { pregunta: "¿Qué laboratorios puedo utilizar?",          respuesta: "Revisa la sección <a href='#recursos'>Equipo disponible</a>." },
      { pregunta: "¿Qué comunidades estudiantiles existen?",    respuesta: "The Backend y el Club de Blockchain. Conócelos en <a href='#comunidad'>Comunidad</a>." },
      { pregunta: "¿Dónde puedo solicitar información académica?", respuesta: "Información próximamente." }
    ]
  },

  galeria: {
    etiqueta: "Galería de eventos",
    titulo: "Nuestra vida en imágenes",
    descripcion: "Talleres, charlas, hackathons, visitas académicas y mucho más. Así vivimos la experiencia.",
    fotos: [
      { imagen: "", titulo: "Hackathon " },   
      { imagen: "", titulo: "Taller" },
      { imagen: "", titulo: "Visita " },
      { imagen: "", titulo: "Charla" },
      { imagen: "", titulo: "Convivio" },
      { imagen: "", titulo: "Convivio" },
      { imagen: "", titulo: "Convivio" },
      { imagen: "", titulo: "Convivio" }
    ]
  },
    footer: {
    descripcion: "Página oficial de las carreras de Ingeniería en Sistemas e Ingeniería en Ciencia de Datos e Inteligencia Artificial de UNITEC",
    redes: [
      { icono: "instagram", url: "" },   // vacío = no se muestra
    ],
    contacto: [
      { icono: "📍", texto: "Facultad de ingenieria", url: "" },
      { icono: "🕒", texto: "Lunes a viernes", url: "" }
    ],
    credito: "Hecho por The Backend"
  }
};