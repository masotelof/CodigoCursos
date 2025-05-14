async function cargarMenu() {
  try {
    const res = await fetch('../../config.json');
    const data = await res.json();
    const menu = document.getElementById('menu');
    menu.innerHTML = "";

    // Enlace a la página principal
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('categoria');
    //homeDiv.style.marginBottom = "auto"; // Empuja hacia abajo en el menú
    homeDiv.style.paddingBottom = "1rem";
    homeDiv.style.borderBottom = "1px solid #444";

    const homeLink = document.createElement('a');
    homeLink.href = "../../";
    homeLink.style.display = "flex";
    homeLink.style.alignItems = "center";
    homeLink.style.gap = "0.5rem";

    const homeImg = document.createElement('img');
    homeImg.src = "../../imgs/home.svg";  // Asegúrate de tener este archivo
    homeImg.alt = "Inicio";
    homeImg.classList.add('icono');

    const homeSpan = document.createElement('span');
    homeSpan.textContent = "Inicio";

    homeLink.appendChild(homeImg);
    homeLink.appendChild(homeSpan);
    homeDiv.appendChild(homeLink);
    menu.appendChild(homeDiv);


    // Categorías del archivo JSON
    data.categorias.forEach(cat => {
      const div = document.createElement('div');
      div.classList.add('categoria');

      const link = document.createElement('a');
      link.href = "../../" + cat.paginaPrincipal;
      link.style.display = "flex";
      link.style.alignItems = "center";
      link.style.gap = "0.5rem";

      const img = document.createElement('img');
      img.src = "../../" + cat.imagen;
      img.alt = cat.nombre;
      img.classList.add('icono');

      const span = document.createElement('span');
      span.textContent = cat.nombre;

      link.appendChild(img);
      link.appendChild(span);
      div.appendChild(link);
      menu.appendChild(div);
    });

    // Botón "Regresar"
    const regresarDiv = document.createElement('div');
    regresarDiv.style.marginTop = "auto"; // Empuja hacia abajo en el menú
    regresarDiv.style.paddingTop = "1rem";
    regresarDiv.style.borderTop = "1px solid #444";

    const regresarBtn = document.createElement('button');
    regresarBtn.textContent = "⟵ Regresar";
    regresarBtn.style.width = "100%";
    regresarBtn.style.padding = "0.5rem";
    regresarBtn.style.background = "#2e2e2e";
    regresarBtn.style.color = "#fff";
    regresarBtn.style.border = "none";
    regresarBtn.style.cursor = "pointer";
    regresarBtn.style.fontSize = "1rem";
    regresarBtn.onmouseover = () => regresarBtn.style.background = "#444";
    regresarBtn.onmouseout = () => regresarBtn.style.background = "#2e2e2e";

    regresarBtn.onclick = () => window.history.back();

    regresarDiv.appendChild(regresarBtn);
    menu.appendChild(regresarDiv);
  } catch (error) {
    console.error("Error al cargar el menú:", error);
  }
}

document.addEventListener('DOMContentLoaded', cargarMenu);
