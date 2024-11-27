const navbarThemeButton = document.querySelector('.navbar-theme');
const homeSpContainer = document.querySelector('.sp-container');
const navbarLogo = document.querySelector('.navbar-logo-itself');
const navbarItself = document.querySelector('nav');
const body = document.querySelector('body');
let isLightModeOn = false;

// THEME FUNCTION

function toggleTheme() {
    if (isLightModeOn === false) {
        navbarThemeButton.classList.add('navbar-theme-js');
        homeSpContainer.classList.add('sp-container-js');
        navbarLogo.src = '../assets/logo-dark.png';
        navbarItself.classList.add('navbar-js');
        body.classList.add('body-js');
        
        isLightModeOn = true;
        localStorage.setItem('spTheme', isLightModeOn);
    } else {
        navbarThemeButton.classList.remove('navbar-theme-js');
        homeSpContainer.classList.remove('sp-container-js');
        navbarLogo.src = '../assets/logo-light.png';
        navbarItself.classList.remove('navbar-js');
        body.classList.remove('body-js');
        
        isLightModeOn = false;
        localStorage.setItem('spTheme', isLightModeOn);
    };
};


// INTILIAZE BUTTON

navbarThemeButton.addEventListener('click', toggleTheme);

// LOCAL STORAGE

function checkTheLocalStorageForTheme() {
    const spTheme = localStorage.getItem('spTheme');

    if (spTheme === 'true') {
        navbarThemeButton.classList.add('navbar-theme-js');
        homeSpContainer.classList.add('sp-container-js');
        navbarLogo.src = '../assets/logo-dark.png';
        navbarItself.classList.add('navbar-js');
        body.classList.add('body-js');
        
        isLightModeOn = true;
    };
};

checkTheLocalStorageForTheme();