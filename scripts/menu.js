document.addEventListener("DOMContentLoaded", () => {
  fetch("config.json")
    .then(res => res.json())
    .then(data => {
      const menu = document.getElementById("menu");
      menu.innerHTML = '<h2>Categorías</h2><ul>';
      data.categorias.forEach(cat => {
        menu.innerHTML += `
          <li>
            <a href="\${cat.pagina_principal}">
              <img src="\${cat.imagen}" alt="\${cat.nombre}" style="width:20px;height:20px;">
              \${cat.nombre}
            </a>
          </li>
        `;
      });
      menu.innerHTML += '</ul>';
    });
});