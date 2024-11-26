const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchData = ['Flip Card','Todo List','Counter'];

// SEARCH FUNTION

function searchFunction(e) {
    e.preventDefault();

    searchData.filter(data => {
        if (data.includes(searchInput.value)) {
            console.log('Found');
        } else {
            console.log('Not Found');
        };
    });
};

// BUTTON INITIALIZE

/* searchButton.addEventListener('click', searchFunction); */