async function cargarMenu() {
  try {
    const res = await fetch('config.json');
    const data = await res.json();
    const menu = document.getElementById('menu');
    menu.innerHTML = "";

    data.categorias.forEach(cat => {
      const div = document.createElement('div');
      div.classList.add('categoria');

      const link = document.createElement('a');
      link.href = cat.paginaPrincipal;
      link.style.display = "flex";
      link.style.alignItems = "center";
      link.style.gap = "0.5rem";

      const img = document.createElement('img');
      img.src = cat.imagen;
      img.alt = cat.nombre;
      img.classList.add('icono');

      const span = document.createElement('span');
      span.textContent = cat.nombre;

      link.appendChild(img);
      link.appendChild(span);
      div.appendChild(link);
      menu.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar el menú:", error);
  }
}

document.addEventListener('DOMContentLoaded', cargarMenu);
