const spOutputThemselves = document.querySelector('.sp-output-themselves');


// DOWNLOADING CONTENT

async function uploadContentFromData() {
    const response = await fetch('../data/content.json');
    const contentData = await response.json();

    console.log(contentData);
};

// INITIALIZING BUTTON

window.addEventListener('DOMContentLoaded', uploadContentFromData);