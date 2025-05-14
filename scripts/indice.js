document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.getElementById('contenido');
    const encabezados = contenido.querySelectorAll('h2, h3, h4');
    const h1 = contenido.querySelector('h1');

    // Si no hay <h1> o encabezados relevantes, salir
    if (!h1 || encabezados.length === 0) return;

    // Crear líneas y contenedor
    const hrSuperior = document.createElement('hr');
    const hrInferior = document.createElement('hr');
    const contenedorIndice = document.createElement('nav');
    contenedorIndice.id = 'indice-temas';
    contenedorIndice.innerHTML = '<h2>Contenidos</h2>';
    const listaIndice = document.createElement('ul');

    encabezados.forEach((encabezado, index) => {
        if (!encabezado.id) {
            encabezado.id = `encabezado-${index}`;
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${encabezado.id}`;
        a.textContent = encabezado.textContent;

        // Sangría según nivel
        if (encabezado.tagName === 'H3') {
            li.style.marginLeft = '20px';
        } else if (encabezado.tagName === 'H4') {
            li.style.marginLeft = '40px';
        }

        li.appendChild(a);
        listaIndice.appendChild(li);
    });

    contenedorIndice.appendChild(listaIndice);

    // Insertar después del H1
    h1.insertAdjacentElement('afterend', hrSuperior);
    hrSuperior.insertAdjacentElement('afterend', contenedorIndice);
    contenedorIndice.insertAdjacentElement('afterend', hrInferior);
});
