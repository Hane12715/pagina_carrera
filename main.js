function pintarImagen(contenedor, ruta, etiqueta) {
  if (ruta) {
    contenedor.innerHTML = `<img src="${ruta}" alt="${etiqueta}">`;
  } else {
    contenedor.innerHTML = `<div class="placeholder"> ${etiqueta}</div>`;
  }
}

function crearIcono(icono) {
  const esImagen = /\.(png|jpe?g|svg|webp|gif)$/i.test(icono);
  return esImagen ? `<img src="${icono}" alt="">` : icono;
}

function activarPanel(tarjetas, panel, alAbrir) {
  function cerrar() {
    panel.classList.remove('abierto');
    tarjetas.forEach(t => t.classList.remove('activa'));
  }

  tarjetas.forEach((tarjeta, i) => {
    tarjeta.addEventListener('click', () => {
      const yaAbierta = tarjeta.classList.contains('activa');
      cerrar();
      if (yaAbierta) return;

      tarjeta.classList.add('activa');
      panel.innerHTML = alAbrir(i) + '<button class="panel-cerrar" aria-label="Cerrar">✕</button>';
      panel.classList.add('abierto');
      panel.querySelector('.panel-cerrar').addEventListener('click', cerrar);
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

//Logo
document.getElementById('logo').innerHTML = CONTENIDO.sitio.logo;

//menu
const nav = document.getElementById('nav');
CONTENIDO.menu.forEach(item => {
  const a = document.createElement('a');
  a.href = '#' + item.id;
  a.textContent = item.texto;
  a.addEventListener('click', () => nav.classList.remove('abierto')); 
  nav.appendChild(a);
});

document.getElementById('menuBtn').addEventListener('click', () => {
  nav.classList.toggle('abierto');
});

//hero
const hero = CONTENIDO.hero;
document.getElementById('heroSaludo').textContent = hero.saludo;
document.getElementById('heroTitulo').textContent = hero.titulo;
document.getElementById('heroDescripcion').textContent = hero.descripcion;
document.getElementById('heroBoton').textContent = hero.boton;
pintarImagen(document.getElementById('heroFoto'), hero.imagen, 'Foto principal');
document.getElementById('heroNota').innerHTML = hero.nota;

//planes
const planes = CONTENIDO.planes;
document.getElementById('planesEtiqueta').textContent = planes.etiqueta;
document.getElementById('planesTitulo').textContent = planes.titulo;
document.getElementById('planesDescripcion').textContent = planes.descripcion;

const contPlanes = document.getElementById('planesTarjetas');
planes.carreras.forEach(c => {
  const fondo = c.imagen ? `style="background-image:url('${c.imagen}')"` : '';
  const contenido = `
    <div class="tarjeta-fondo" ${fondo}></div>
    <div class="tarjeta-contenido">
      <span class="tarjeta-icono">${crearIcono(c.icono)}</span>
      <h3>${c.nombre}</h3>
      <p>${c.descripcion}</p>
      <span class="tarjeta-link">${c.pdf ? '⬇ Descargar plan de estudio' : 'Próximamente'}</span>
    </div>`;

  if (c.pdf) {
    contPlanes.innerHTML += `<a class="tarjeta-carrera" href="${c.pdf}" download>${contenido}</a>`;
  } else {
    contPlanes.innerHTML += `<div class="tarjeta-carrera sin-pdf">${contenido}</div>`;
  }
});

//opoprtunidades
const opor = CONTENIDO.oportunidades;
document.getElementById('oporEtiqueta').textContent = opor.etiqueta;
document.getElementById('oporTitulo').textContent = opor.titulo;
document.getElementById('oporDescripcion').textContent = opor.descripcion;

const contOpor = document.getElementById('oporTarjetas');
opor.items.forEach(item => {
  contOpor.innerHTML += `
    <button class="tarjeta-mini">
      <span class="mini-icono">${crearIcono(item.icono)}</span>
      <span class="mini-titulo">${item.titulo}</span>
    </button>`;
});

activarPanel([...contOpor.children], document.getElementById('oporPanel'), i => {
  const item = opor.items[i];
  return `
    <h3 class="panel-titulo">${crearIcono(item.icono)} ${item.titulo}</h3>
    <div class="panel-texto">${item.info || '<p class="proximamente">Información próximamente.</p>'}</div>`;
});
//equipo disponible
const rec = CONTENIDO.recursos;
document.getElementById('recEtiqueta').textContent = rec.etiqueta;
document.getElementById('recTitulo').textContent = rec.titulo;
document.getElementById('recDescripcion').textContent = rec.descripcion;

const contRec = document.getElementById('recTarjetas');
rec.items.forEach(item => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjeta-foto';
  tarjeta.innerHTML = `
    <div class="foto"></div>
    <span class="foto-nombre">${item.nombre}</span>`;
  pintarImagen(tarjeta.querySelector('.foto'), item.imagen, 'Foto');
  contRec.appendChild(tarjeta);
});

//comunidad estudiantil
const com = CONTENIDO.comunidad;
document.getElementById('comEtiqueta').textContent = com.etiqueta;
document.getElementById('comTitulo').textContent = com.titulo;
document.getElementById('comDescripcion').textContent = com.descripcion;

const contCom = document.getElementById('comTarjetas');
com.grupos.forEach(g => {
  const redes = g.redes
    .filter(r => r.url)   // solo las que tienen link
    .map(r => `<a href="${r.url}" target="_blank" class="grupo-red">${r.nombre}</a>`)
    .join('');

  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjeta-grupo';
  tarjeta.innerHTML = `
    <div class="grupo-foto">
      <div class="foto"></div>
      <span class="grupo-logo">${crearIcono(g.logo)}</span>
    </div>
    <div class="grupo-cuerpo">
      <span class="grupo-tipo">${g.tipo}</span>
      <h3>${g.nombre}</h3>
      <p>${g.descripcion}</p>
      <div class="grupo-acciones">
        <button class="btn grupo-mas">Conocer más →</button>
        ${redes}
      </div>
    </div>`;
  pintarImagen(tarjeta.querySelector('.foto'), g.imagen, 'Foto del grupo');
  contCom.appendChild(tarjeta);
});

activarPanel([...contCom.querySelectorAll('.grupo-mas')], document.getElementById('comPanel'), i => {
  const g = com.grupos[i];
  return `
    <h3 class="panel-titulo">${g.nombre}</h3>
    <div class="panel-texto">${g.info || '<p class="proximamente">Información próximamente.</p>'}</div>`;
});

// ---------- FAQ ----------
const faq = CONTENIDO.faq;
document.getElementById('faqEtiqueta').textContent = faq.etiqueta;
document.getElementById('faqTitulo').textContent = faq.titulo;
document.getElementById('faqDescripcion').textContent = faq.descripcion;

const faqLista = document.getElementById('faqLista');
faq.preguntas.forEach(p => {
  faqLista.innerHTML += `
    <details class="faq-item" name="faq">
      <summary>${p.pregunta}</summary>
      <div class="faq-respuesta">${p.respuesta}</div>
    </details>`;
});

//galeria
const gal = CONTENIDO.galeria;
document.getElementById('galEtiqueta').textContent = gal.etiqueta;
document.getElementById('galTitulo').textContent = gal.titulo;
document.getElementById('galDescripcion').textContent = gal.descripcion;

const fotosConImagen = gal.fotos.filter(f => f.imagen);   // solo estas se abren en grande
const galGrid = document.getElementById('galGrid');

gal.fotos.forEach(f => {
  const item = document.createElement('div');
  item.className = 'gal-item';
  item.innerHTML = `<div class="foto"></div><span class="gal-titulo">${f.titulo}</span>`;
  pintarImagen(item.querySelector('.foto'), f.imagen, '');

  if (f.imagen) {
    item.classList.add('clickeable');
    item.addEventListener('click', () => abrirLightbox(fotosConImagen.indexOf(f)));
  }
  galGrid.appendChild(item);
});

//ligthbox
const lightbox = document.getElementById('lightbox');
let fotoActual = 0;

function mostrarFoto() {
  const f = fotosConImagen[fotoActual];
  document.getElementById('lbImg').src = f.imagen;
  document.getElementById('lbTitulo').textContent = f.titulo;
}
function abrirLightbox(i) {
  fotoActual = i;
  mostrarFoto();
  lightbox.classList.add('abierto');
}
function cerrarLightbox() {
  lightbox.classList.remove('abierto');
}
function moverFoto(paso) {
  fotoActual = (fotoActual + paso + fotosConImagen.length) % fotosConImagen.length;
  mostrarFoto();
}

document.getElementById('lbCerrar').addEventListener('click', cerrarLightbox);
document.getElementById('lbAnterior').addEventListener('click', () => moverFoto(-1));
document.getElementById('lbSiguiente').addEventListener('click', () => moverFoto(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) cerrarLightbox(); });

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('abierto')) return;
  if (e.key === 'Escape') cerrarLightbox();
  if (e.key === 'ArrowLeft') moverFoto(-1);
  if (e.key === 'ArrowRight') moverFoto(1);
});
// ---------- Footer ----------
const foot = CONTENIDO.footer;
document.getElementById('footLogo').innerHTML = CONTENIDO.sitio.logo;
document.getElementById('footDescripcion').textContent = foot.descripcion;

document.getElementById('footRedes').innerHTML = foot.redes
  .filter(r => r.url)
  .map(r => `
    <a href="${r.url}" target="_blank" aria-label="${r.icono}">
      <img src="https://cdn.simpleicons.org/${r.icono}/ffffff" alt="${r.icono}">
    </a>`)
  .join('');

document.getElementById('footMenu').innerHTML = CONTENIDO.menu
  .map(m => `<li><a href="#${m.id}">${m.texto}</a></li>`)
  .join('');

document.getElementById('footCarreras').innerHTML = CONTENIDO.planes.carreras
  .map(c => c.pdf
    ? `<li><a href="${c.pdf}" download>⬇ ${c.nombre}</a></li>`
    : `<li><span>${c.nombre}</span></li>`)
  .join('');

// Contacto
document.getElementById('footContacto').innerHTML = foot.contacto
  .map(c => {
    const texto = c.url ? `<a href="${c.url}">${c.texto}</a>` : `<span>${c.texto}</span>`;
    return `<li><span class="contacto-icono">${c.icono}</span>${texto}</li>`;
  })
  .join('');

// Año automático
document.getElementById('footCopy').textContent =
  `© ${new Date().getFullYear()} · ${foot.credito}`;

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('con-sombra', window.scrollY > 10);
});

const linksMenu = document.querySelectorAll('#nav a');

const observadorMenu = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      linksMenu.forEach(a => {
        a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });   

CONTENIDO.menu.forEach(m => {
  const seccion = document.getElementById(m.id);
  if (seccion) observadorMenu.observe(seccion);
});

const animables = document.querySelectorAll(
  '.seccion-intro, .tarjeta-carrera, .tarjeta-mini, .tarjeta-foto, .tarjeta-grupo, .faq-item, .gal-item'
);

animables.forEach(el => {
  el.classList.add('revelar');
  // retraso según su posición, para que aparezcan en cascada
  const indice = [...el.parentElement.children].indexOf(el);
  el.style.animationDelay = `${indice * 80}ms`;
});

const observadorRevelar = new IntersectionObserver((entradas, obs) => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target); 
    }
  });
}, { threshold: 0.15 });

animables.forEach(el => observadorRevelar.observe(el));  