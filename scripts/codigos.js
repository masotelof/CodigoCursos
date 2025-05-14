document.addEventListener('DOMContentLoaded', () => {
    const bloques = document.querySelectorAll('pre > code');

    bloques.forEach((codeBlock) => {
        const pre = codeBlock.parentElement;

        // Obtener el título desde el <code>
        const title = codeBlock.getAttribute('data-title');
        if (!title) return; // Si no hay título, no aplicar el contenedor

        // Crear contenedor general
        const contenedor = document.createElement('div');
        contenedor.className = 'bloque-codigo';

        // Crear encabezado con el título y el botón
        const encabezado = document.createElement('div');
        encabezado.className = 'codigo-encabezado';

        const titulo = document.createElement('span');
        titulo.textContent = title;

        const boton = document.createElement('button');
        boton.className = 'btn-toggle-codigo';
        boton.textContent = 'Mostrar código';

        encabezado.appendChild(titulo);
        encabezado.appendChild(boton);

        // Ocultar inicialmente el bloque
        pre.style.display = 'none';

        // Alternar visibilidad al hacer clic
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
