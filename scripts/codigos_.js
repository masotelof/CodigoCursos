document.addEventListener('DOMContentLoaded', () => {
    const bloques = document.querySelectorAll('pre > code');

    bloques.forEach((codeBlock, index) => {
        const pre = codeBlock.parentElement;

        // Obtener el título desde un atributo de datos (data-title)
        const title = pre.getAttribute('data-title') || 'Código de ejemplo';

        // Crear contenedor general
        const contenedor = document.createElement('div');
        contenedor.className = 'bloque-codigo';

        // Crear encabezado con el título y el botón
        const encabezado = document.createElement('div');
        encabezado.className = 'codigo-encabezado';

        const titulo = document.createElement('span');
        titulo.textContent = title; // Establecer título dinámico

        const boton = document.createElement('button');
        boton.className = 'btn-toggle-codigo';
        boton.textContent = 'Mostrar código';

        encabezado.appendChild(titulo);
        encabezado.appendChild(boton);

        // Ocultar inicialmente el <pre>
        pre.style.display = 'none';

        // Alternar visibilidad
        boton.addEventListener('click', () => {
            const visible = pre.style.display === 'block';
            pre.style.display = visible ? 'none' : 'block';
            boton.textContent = visible ? 'Mostrar código' : 'Ocultar código';
        });

        // Construir estructura final
        pre.replaceWith(contenedor);
        contenedor.appendChild(encabezado);
        contenedor.appendChild(pre);
    });
});
