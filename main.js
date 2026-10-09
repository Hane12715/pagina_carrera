function pintarImagen(contenedor, ruta, etiqueta) {
  if (ruta) {
    contenedor.innerHTML = `<img src="${ruta}" alt="${etiqueta}">`;
  } else {
    contenedor.innerHTML = `<div class="placeholder">📷 ${etiqueta}</div>`;
  }
}

//Logo
document.getElementById('logo').innerHTML = CONTENIDO.sitio.logo;

//menu
const nav = document.getElementById('nav');
CONTENIDO.menu.forEach(item => {
  const a = document.createElement('a');
  a.href = '#' + item.id;
  a.textContent = item.texto;
  a.addEventListener('click', () => nav.classList.remove('abierto')); // cierra en móvil
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
pintarImagen(document.getElementById('heroImagen'), hero.imagen, 'Foto principal');