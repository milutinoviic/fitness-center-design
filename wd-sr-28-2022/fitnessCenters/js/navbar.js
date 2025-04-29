function kreirajNavigacioniMeni(){
    // Kreiranje navbar elementa
var navbar = document.createElement('nav');
navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', 'mainNavigation');

// Kreiranje avatarContainer elementa
var avatarContainer = document.createElement('div');
avatarContainer.classList.add('avatarContainer');

// Kreiranje img elementa
var img = document.createElement('img');
img.src = './images/gym-header-logo.png';

// Dodavanje img elementa u avatarContainer
avatarContainer.appendChild(img);

// Kreiranje collapse elementa
var collapse = document.createElement('div');
collapse.classList.add('collapse', 'navbar-collapse');
collapse.id = 'navbarNav';

// Kreiranje navbar-nav elementa
var navbarNav = document.createElement('ul');
navbarNav.classList.add('navbar-nav', 'justify-content-center');
navbarNav.style.paddingLeft = '50px';

// Kreiranje prvog nav-item elementa
var navItem1 = document.createElement('li');
navItem1.classList.add('nav-item', 'active');

// Kreiranje prvog a elementa
var a1 = document.createElement('a');
a1.classList.add('nav-link');
a1.href = 'index.html';
a1.textContent = 'FITNESS CENTRI';

// Dodavanje a elementa u nav-item element
navItem1.appendChild(a1);

// Kreiranje drugog nav-item elementa
var navItem2 = document.createElement('li');
navItem2.classList.add('nav-item', 'dropdown');

// Kreiranje drugog a elementa
var a2 = document.createElement('a');
a2.classList.add('nav-link', 'dropdown-toggle');
a2.href = '#';
a2.id = 'navbarDropdown';
a2.setAttribute('role', 'button');
a2.setAttribute('data-toggle', 'dropdown');
a2.setAttribute('aria-haspopup', 'true');
a2.setAttribute('aria-expanded', 'false');
a2.textContent = 'ADMINISTRATORSKA STRANICA';
navItem2.appendChild(a2);
// Kreiranje dropdown-menu elementa
var dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');

// Kreiranje prvog dropdown-item elementa
var dropdownItem1 = document.createElement('a');
dropdownItem1.classList.add('dropdown-item');
dropdownItem1.href = 'admin_korisnici.html';
dropdownItem1.textContent = 'KORISNICI';

// Dodavanje dropdown-item elementa u dropdown-menu element
dropdownMenu.appendChild(dropdownItem1);
// Kreiranje drugog dropdown-item elementa
var dropdownItem2 = document.createElement('a');
dropdownItem2.classList.add('dropdown-item');
dropdownItem2.href = 'admin_fitness_centri.html';
dropdownItem2.textContent = 'FITNESS CENTRI';
// Dodavanje dropdown-item elementa u dropdown-menu element
dropdownMenu.appendChild(dropdownItem2);
// Dodavanje dropdown-menu elementa u nav-item element
navItem2.appendChild(dropdownMenu);
// Dodavanje nav-item elementa u navbar-nav element
navbarNav.appendChild(navItem1);
navbarNav.appendChild(navItem2);
// Kreiranje drugog navbar-nav elementa
var navbarNav2 = document.createElement('ul');
navbarNav2.classList.add('navbar-nav');
navbarNav2.style.paddingLeft = '25%';
// Kreiranje prvog li elementa
var li1 = document.createElement('li');
// Kreiranje prvog button elementa
var button1 = document.createElement('button');
button1.classList.add('btn', 'btn-success');
button1.setAttribute('data-bs-toggle', 'modal');
button1.setAttribute('data-bs-target', '#prijavaModal');
button1.textContent = 'prijavi se';

// Dodavanje button elementa u li element
li1.appendChild(button1);
// Kreiranje drugog li elementa
var li2 = document.createElement('li');
// Kreiranje drugog button elementa
var button2 = document.createElement('button');
button2.classList.add('btn', 'btn-success');
button2.setAttribute('data-bs-toggle', 'modal');
button2.setAttribute('data-bs-target', '#registracijaModal');
button2.textContent = 'registruj se';
// Dodavanje button elementa u li element
li2.appendChild(button2);
// Dodavanje li elementa u navbar-nav element
navbarNav2.appendChild(li1);
navbarNav2.appendChild(li2);
// Dodavanje navbar-nav elementa u collapse element
collapse.appendChild(navbarNav);
collapse.appendChild(navbarNav2);
// Dodavanje avatarContainer i collapse elementa u navbar element
navbar.appendChild(avatarContainer);
navbar.appendChild(collapse);
// Dodavanje navbar elementa u DOM
document.getElementById("navBar").appendChild(navbar);

}

kreirajNavigacioniMeni();