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