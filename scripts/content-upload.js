const spOutputThemselves = document.querySelector('.sp-output-themselves');
const spOutputThemselvesParagraph = document.querySelector('.sp-output-themselves-paragraph');

// INITIALIZING BUTTON

window.addEventListener('DOMContentLoaded', uploadContentFromData);

// REGEX

function removeWhiteSpace(whiteSpace) {
    const regex = /\s/g;
    return whiteSpace.replace(regex, '');
};

// DOWNLOADING CONTENT

async function uploadContentFromData() {
    const response = await fetch('../data/content.json');
    const contentData = await response.json();

    for (let i = 0; i < contentData.length; i++) {
        const spOutputItself = document.createElement('a');
        spOutputItself.classList.add('sp-output-itself');
        spOutputItself.classList.add(removeWhiteSpace(contentData[i].searchName));
        spOutputItself.href = contentData[i].HTMLLink;
        spOutputItself.innerHTML = `
            <div class="sp-output-itself-image-container">
                <img src="${contentData[i].image}" alt="challenge-one" class="sp-output-itself-image-itself">
            </div>
            <div class="sp-output-itself-info">
                <h3 class="sp-output-itself-info-challenge-name">${contentData[i].name}</h3>
                <p class="sp-output-itself-info-about-challenge">${contentData[i].shortDescription}</p>
                <hr class="sp-output-itself-info-divider">
                <div class="sp-output-itself-info-languages">
                    <h4 class="sp-output-itself-info-language-itself">${contentData[i].languages}</h4>
                </div>
            </div>
        `;

        spOutputThemselves.appendChild(spOutputItself);
        
        // SEARCH 

        searchInput.addEventListener('input', () => {
            if (spOutputItself.classList.contains(removeWhiteSpace(searchInput.value).toLowerCase())) {
                spOutputItself.classList.add('sp-output-itself-shown');
                spOutputItself.classList.remove('sp-output-itself-hidden');
            } else {
                spOutputItself.classList.remove('sp-output-itself-shown');
                spOutputItself.classList.add('sp-output-itself-hidden');
            };
            if (searchInput.value.length === 0) {
                spOutputItself.classList.remove('sp-output-itself-shown');
                spOutputItself.classList.remove('sp-output-itself-hidden');
            };
        });


        // LOCAL STORAGE

        spOutputItself.addEventListener('click', () => {
            localStorage.setItem('challengePicture', contentData[i].image);
            localStorage.setItem('challengeName', contentData[i].name);
            localStorage.setItem('challengeShortDescription', contentData[i].shortDescription);
            localStorage.setItem('challengeDetailedDescription', contentData[i].detailedDescription);
            localStorage.setItem('challengeDifficulty', contentData[i].difficulty);
            localStorage.setItem('challengeGitHub', contentData[i].GitHub);
            localStorage.setItem('challengeliveWebsite', contentData[i].liveWebsite);
        });
    };
};