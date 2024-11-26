const navbarMenuButton = document.querySelector('.navbar-menu');
const navbarMenuLinks = document.querySelector('.navbar-dropdown-links');

// NAVBAR MENU TOGGLE FUNCTION

function navbarMenuToggleFunction() {
    navbarMenuButton.classList.toggle('navbar-menu-js');
    navbarMenuLinks.classList.toggle('navbar-dropdown-links-js');
};


// INITIALIZE NAVBAR MENU BUTTON

navbarMenuButton.addEventListener('click', navbarMenuToggleFunction);