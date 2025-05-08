fetch('../config.json')
  .then(response => response.json())
  .then(config => {
    const menuDiv = document.getElementById('menu');
    let menuHtml = '<h2>Menú</h2><ul>';
    config.categories.forEach(category => {
      menuHtml += `
        <li>
          <a href="../${category.main_page}">
            <img src="../${category.image}" alt="${category.name}" class="category-img">
            ${category.name}
          </a>
        </li>`;
    });
    menuHtml += '</ul>';
    menuDiv.innerHTML = menuHtml;
  });
