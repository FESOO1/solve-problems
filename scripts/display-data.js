const challengeNameText = document.querySelector('.challenge-header-itself');
const challengeShortDescriptionText = document.querySelector('.challenge-header-paragraph');
const challengeDetailedDescriptionText = document.querySelector('.challenge-detailed-info-paragraph');
const challengeDifficultyText = document.getElementById('challengeDifficultyText');
const challengeGithubLink = document.getElementById('githubLink');
const challengeLiveLink = document.getElementById('liveLink');
const challengeImageItself = document.querySelector('.challenge-image-itself');
const challengeNameInTitle = document.querySelector('.challenge-name-in-title');


// ACCESSING THE DATA FROM LOCAL STORAGE

function getDataFromLocalStorage() {
    const challengePicture = localStorage.getItem('challengePicture');
    const challengeName = localStorage.getItem('challengeName');
    const challengeShortDescription = localStorage.getItem('challengeShortDescription');
    const challengeDetailedDescription = localStorage.getItem('challengeDetailedDescription');
    const challengeDifficulty = localStorage.getItem('challengeDifficulty');
    const challengeGitHub = localStorage.getItem('challengeGitHub');
    const challengeliveWebsite = localStorage.getItem('challengeliveWebsite');

    if (challengePicture) {
        challengeImageItself.src = challengePicture;
        challengeNameText.textContent = challengeName;
        challengeNameInTitle.textContent = challengeName.toUpperCase();
        challengeShortDescriptionText.textContent = challengeShortDescription;
        challengeDetailedDescriptionText.textContent = challengeDetailedDescription;
        challengeDifficultyText.textContent = challengeDifficulty;
        challengeGithubLink.href = challengeGitHub;
        challengeLiveLink.href = challengeliveWebsite;
    };
};


getDataFromLocalStorage();