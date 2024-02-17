function createNavbar() {
    // Crear el elemento <nav> y asignarle clases
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light bg-light';

    // Crear el div contenedor fluido
    const containerFluid = document.createElement('div');
    containerFluid.className = 'container-fluid';
    nav.appendChild(containerFluid);

    // Crear el enlace de la marca de la navbar
    const navbarBrand = document.createElement('a');
    navbarBrand.className = 'navbar-brand pt-0';
    navbarBrand.href = '#';
    navbarBrand.textContent = 'JQuery';
    containerFluid.appendChild(navbarBrand);

    // Crear el botón del toggler de la navbar
    const navbarToggler = document.createElement('button');
    navbarToggler.className = 'navbar-toggler';
    navbarToggler.type = 'button';
    navbarToggler.dataset.bsToggle = 'collapse';
    navbarToggler.dataset.bsTarget = '#navbarNav';
    navbarToggler.setAttribute('aria-controls', 'navbarNav');
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarToggler.setAttribute('aria-label', 'Toggle navigation');

    const span = document.createElement('span');
    span.className = 'navbar-toggler-icon';
    navbarToggler.appendChild(span);

    containerFluid.appendChild(navbarToggler);

    // Crear el div para el contenido colapsable
    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarNav';
    containerFluid.appendChild(collapseDiv);

    // Crear la lista de navegación
    const ul = document.createElement('ul');
    ul.className = 'navbar-nav';
    collapseDiv.appendChild(ul);

    // Crear los elementos de la lista
    const navItems = [
        { href: '#', text: 'Home', active: true },
        { href: '#', text: 'Features', active: false },
        { href: '#', text: 'Pricing', active: false }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        
        if (item.active) a.classList.add('active');

        if (item.disabled) {
            a.classList.add('disabled');
            a.setAttribute('tabindex', '-1');
            a.setAttribute('aria-disabled', 'true');
        }

        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Finalmente, agregar el <nav> al cuerpo del documento o a cualquier otro elemento deseado
    document.getElementById('navBar').appendChild(nav);
}

function createHome(){
    // Create the <img> element
    const img = document.createElement('img');
    img.src = 'img/background.webp';
    img.alt = 'Home';
    img.className = 'background-image';

    // Create the <h1> element
    const h1 = document.createElement('h1');
    h1.textContent = 'Web Development';
    h1.className = 'home-title';

    // Create the <h2> element
    const h2_Al = document.createElement('h2');
    h2_Al.textContent = 'Alejandro Paniagua Rodriguez';
    h2_Al.className = 'person-names';

    const h2_An = document.createElement('h2');
    h2_An.textContent = 'Angela Gijón Flores';
    h2_An.className = 'person-names m-0 p-0';

    // Add the created elements to the document's home page or to the desired container
    document.getElementById('home').appendChild(img);
    document.getElementById('home').appendChild(h1);
    document.getElementById('home').appendChild(h2_Al);
    document.getElementById('home').appendChild(h2_An);

}

function createList(items){
    const ul = document.createElement('ul');
    ul.className = 'list-group';

    items.forEach(function(item) {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.textContent = item;

      const div = document.createElement('div');
      div.className = 'btn-group';

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-item btn btn-primary me-1 ms-1';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-item btn btn-primary';

      div.appendChild(editButton);
      div.appendChild(deleteButton);
      li.appendChild(div);
      ul.appendChild(li);
    });

    document.getElementById('list').appendChild(ul);

}

function main() {
    createNavbar();
    createHome();
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];
    createList(items);

    document.addEventListener('DOMContentLoaded', function() {
        // Añadir un nuevo ítem
        document.getElementById('add-item').addEventListener('click', function() {
            const itemText = document.getElementById('new-item-text').value;
            if (itemText) { // Asegurar que el texto no esté vacío
                createList([itemText]); // Asume que createList está definida correctamente
                document.getElementById('new-item-text').value = ''; // Limpiar el campo de texto
            }
        });
    
        // Borrar un ítem
        document.getElementById('list').addEventListener('click', function(event) {
            if (event.target.classList.contains('delete-item')) {
                event.target.closest('li').remove(); // Usar closest para encontrar el <li> ancestro y removerlo
            }
        });
    
        // Editar un ítem
        document.getElementById('list').addEventListener('click', function(event) {
            if (event.target.classList.contains('edit-item')) {
                const li = event.target.closest('li'); // Encontrar el <li> ancestro
                let currentText = li.childNodes[0].textContent.trim(); // Asumir que el texto del ítem es el primer nodo de texto
                const newText = prompt('Edit the item:', currentText);
                if (newText) {
                    li.childNodes[0].textContent = newText; // Actualizar el texto del ítem
                }
            }
        });
    });
    
}

window.onload = main();