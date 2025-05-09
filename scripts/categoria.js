async function cargarSubcategorias() {
  try {
    const res = await fetch('/config.json');
    const data = await res.json();
    const categoria = data.categorias.find(cat => cat.nombre === categoriaActual);

    if (!categoria) {
      console.error("Categoría no encontrada:", categoriaActual);
      return;
    }

    const main = document.querySelector("main");
    const lista = document.createElement("ul");

    categoria.subcategorias.forEach(sub => {
      sub.paginas.forEach(pagina => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "/" + pagina.ruta;
        a.textContent = `${sub.nombre} - ${pagina.titulo}`;
        li.appendChild(a);
        lista.appendChild(li);
      });
    });

    const titulo = document.createElement("h2");
    titulo.textContent = "Subcategorías";

    main.appendChild(titulo);
    main.appendChild(lista);
  } catch (e) {
    console.error("Error cargando subcategorías:", e);
  }
}

document.addEventListener("DOMContentLoaded", cargarSubcategorias);
