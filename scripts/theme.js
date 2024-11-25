const navbarThemeButton = document.querySelector('.navbar-theme');
let isLightModeOn = false;

// THEME FUNCTION

function toggleTheme() {
    if (isLightModeOn === false) {
        navbarThemeButton.classList.add('navbar-theme-js');

        isLightModeOn = true;
        localStorage.setItem('spTheme', isLightModeOn);
    } else {
        navbarThemeButton.classList.remove('navbar-theme-js');
        
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
        
        isLightModeOn = true;
    };
};

checkTheLocalStorageForTheme();