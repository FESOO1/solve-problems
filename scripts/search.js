const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchData = ['Flip Card','Todo List','Counter'];

// SEARCH FUNTION

function searchFunction(e) {
    e.preventDefault();

    searchData.filter(challenge => {
        challenge.includes(searchInput.value) ? console.log('Found') : console.log('Not Found');
    });  
};

// BUTTON INITIALIZE

searchButton.addEventListener('click', searchFunction);