function createNavbar(){
    $(document).ready(function() {
        // Create <nav> element and assign classes to it
        const $nav = $('<nav>', { class: 'navbar navbar-expand-lg navbar-light bg-light fixed-top' });

        // Create the fluid container div
        const $containerFluid = $('<div>', { class: 'container-fluid' });

        // Create navbar branding link
        const $navbarBrand = $('<a>', { class: 'navbar-brand pt-0', href: '#', text: 'JQuery' });

        // Create navbar toggler button
        const $navbarToggler = $('<button>', {
            class: 'navbar-toggler',
            type: 'button',
            'data-bs-toggle': 'collapse',
            'data-bs-target': '#navbarNav',
            'aria-controls': 'navbarNav',
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
        }).append($('<span>', { class: 'navbar-toggler-icon' }));

        // Create the div for the collapsible content
        const $collapseDiv = $('<div>', { class: 'collapse navbar-collapse', id: 'navbarNav' });

        // Create the navigation list
        const $ul = $('<ul>', { class: 'navbar-nav' });

        // Create the list items
        const navItems = [
            { href: '#', text: 'Home', active: true },
            { href: '#', text: 'Features', active: false },
            { href: '#', text: 'Pricing', active: false }
        ];

        $.each(navItems, function(i, item) {
            const $li = $('<li>', { class: 'nav-item' });
            const $a = $('<a>', {
                class: 'nav-link' + (item.active ? ' active' : '') + (item.disabled ? ' disabled' : ''),
                href: item.href,
                text: item.text
            });
            if (item.disabled) {
                $a.attr('tabindex', '-1').attr('aria-disabled', 'true');
            }
            $li.append($a);
            $ul.append($li);
        });

        // Putting it all together
        $nav.append($containerFluid.append($navbarBrand).append($navbarToggler).append($collapseDiv.append($ul)));

        // Adding the <nav> to the body of the document
        $('#navBar').append($nav);
    });
}

function createHome(){
    $(document).ready(function() {
        // Create the <img> element
        const $img = $('<img>', {
            src: 'img/background.webp',
            alt: 'Home',
            class: 'background-image'
        });
        $('#home').append($img);
      
        // Create the <h1> element
        const $h1 = $('<h1>', {
          text: 'Web Development',
          class: 'home-title'
        });
        $('#home').append($h1);
      
        // Create the <h2> element
        const $h2_Al = $('<h2>', {
            text: 'Alejandro Paniagua Rodríguez',
            class: 'person-names'
        });

        const $h2_An = $('<h2>', {
          text: 'Ángela Gijón Flores',
          class: 'person-names m-0 p-0'
        });

        $('#home').append($h2_Al);
        $('#home').append($h2_An);
    });
}

function createList(items){
    $(document).ready(function() {
        const $ul = $('<ul>', { class: 'list-group' });

        $.each(items, function(index, item) {
            const $li = $('<li>', { class: 'list-group-item d-flex justify-content-between align-items-center', text: item }).appendTo($ul);
            const $div = $('<div>', { class: 'btn-group' }).appendTo($li);
            $('<button>', { text: 'Edit', class: 'edit-item btn btn-primary me-1 ms-1' }).appendTo($div);
            $('<button>', { text: 'Delete', class: 'delete-item btn btn-primary' }).appendTo($div);
        });

        $('#list').append($ul);
      });
}

function main() {
    createNavbar();
    createHome();
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];
    createList(items);

    $(document).ready(function() {
        // Function to add a new item
        $('#add-item').click(function() {
            const itemText = $('#new-item-text').val();
            if (itemText) { // Asegurarse de que el texto no esté vacío
                createList([itemText]);
                $('#new-item-text').val(''); // Limpiar el campo de texto después de añadir
            }
        });
    
        // Functionality to delete an item
        $('#list').on('click', '.delete-item', function() {
            $(this).closest('li').remove(); // Usar closest para asegurar que se elimina el li correcto
        });
    
        // Functionality to edit an item
        $('#list').on('click', '.edit-item', function() {
            const $li = $(this).closest('li'); // Usar closest para obtener el li correcto
            const currentText = $li.contents().filter(function() {
                return this.nodeType === 3; // Nodo de texto
            }).text().trim();
            
            const newText = prompt('Edit the item:', currentText);
            if (newText) {
                // Finds the direct text node and replaces it
                $li.contents().filter(function() {
                    return this.nodeType === 3; // Nodo de texto
                }).first().replaceWith(newText);
            }
        });
    });
    
}

window.onload = main();