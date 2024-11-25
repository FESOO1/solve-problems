const spOutputThemselves = document.querySelector('.sp-output-themselves');


// DOWNLOADING CONTENT

async function uploadContentFromData() {
    const response = await fetch('../data/content.json');
    const contentData = await response.json();

    for (let i = 0; i < contentData.length; i++) {
        const spOutputItself = document.createElement('sp-output-itself');
        spOutputItself.classList.add('sp-output-itself');
        spOutputItself.innerHTML = `
            <div class="sp-output-itself-image-container">
                <img src="./assets/challenges/challenge-one.png" alt="challenge-one" class="sp-output-itself-image-itself">
            </div>
            <div class="sp-output-itself-info">
                <h3 class="sp-output-itself-info-challenge-name">Flip Card</h3>
                <p class="sp-output-itself-info-about-challenge">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus qui voluptatibus sequi maxime, dolore eaque atque nulla odio architecto totam eligendi id, eos ducimus magni praesentium ut nemo officiis suscipit?</p>
                <hr class="sp-output-itself-info-divider">
                <div class="sp-output-itself-info-languages">
                    <h4 class="sp-output-itself-info-language-itself sp-output-itself-info-language-html">HTML</h4>
                    <h4 class="sp-output-itself-info-language-itself sp-output-itself-info-language-css">CSS</h4>
                    <h4 class="sp-output-itself-info-language-itself sp-output-itself-info-language-javascript">JavaScript</h4>
                </div>
            </div>
        `;
    };
};

// INITIALIZING BUTTON

window.addEventListener('DOMContentLoaded', uploadContentFromData);