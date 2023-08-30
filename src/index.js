import ptsView from "./scripts/ptsview"

function renderInitialView(){
    const preMain = document.getElementById('premain')
    const heading = document.createElement('h1')
    const warning = document.createElement('p')
    const background = document.createElement('img')
    const enterButton = document.createElement('button')
    const aA = document.createElement('img')
   
    aA.src = 'Assets/aalogo.svg'
    background.src = 'Assets/prescreendrl.png'
    background.alt = 'volume page background'
    background.setAttribute('id', 'pre-main-drl')
    aA.setAttribute('class', 'aalogo')
    preMain.setAttribute('class', 'pre-main')
    
    heading.setAttribute('class', 'head')
    enterButton.setAttribute('class', 'enter-button')

    heading.textContent = 'Welcome to your BMW Ultimate Experience'
    warning.textContent = '⚠ Please take this time to adjust your volume before moving forward ⚠'
    enterButton.textContent = 'ENTER'

    preMain.appendChild(heading);
    preMain.appendChild(warning);
    preMain.appendChild(enterButton);
    preMain.appendChild(background);
    preMain.appendChild(aA);
    

    enterButton.addEventListener('click', function () {
        preMain.innerHTML = '';
        ptsView();
        friday1.pause();
    });
}

document.addEventListener('click', function () {
    playClickSound();
});

function playClickSound() {
    const audio = new Audio('Assets/click.mp3');
    audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
    const friday1 = new Audio('Assets/intro.mp3')
    setTimeout(() => {
        friday1.play();
    }, 1000)
    renderInitialView();
});


