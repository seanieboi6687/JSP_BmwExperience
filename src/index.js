import ptsView from "./scripts/ptsview"

function renderInitialView(){
    const preMain = document.getElementById('premain')
    const heading = document.createElement('h1')
    const warning = document.createElement('p')
    const muted = document.createElement('p')
    const unmuted = document.createElement('p')
    const background = document.createElement('img')
    const volumeclick = document.createElement('a')
    const volume = document.createElement('img')
    const enterButton = document.createElement('button')
    const aA = document.createElement('img')
   
    muted.textContent = "Muted"
    unmuted.textContent = "Unmuted"
    aA.src = 'Assets/aalogo.svg'
    background.src = 'Assets/prescreendrl.png'
    background.alt = 'volume page background'
    background.setAttribute('id', 'pre-main-drl')
    volume.src = 'Assets/unmute.png'
    volume.alt = 'volume icon'
    aA.setAttribute('class', 'aalogo')
    volume.setAttribute('id', 'volume-icon')
    preMain.setAttribute('class', 'pre-main')
    
    heading.setAttribute('class', 'head')
    enterButton.setAttribute('class', 'enter-button')
    muted.setAttribute('class', 'mute')
    unmuted.setAttribute('class', 'unmute')

    heading.textContent = 'Welcome to your BMW Ultimate Experience'
    warning.textContent = '⚠ Please take this time to adjust your volume before moving forward ⚠'
    enterButton.textContent = 'ENTER'

    preMain.appendChild(heading);
    preMain.appendChild(warning);
    preMain.appendChild(enterButton);
    preMain.appendChild(volumeclick);
    preMain.appendChild(unmuted);
    volumeclick.appendChild(volume);
    preMain.appendChild(background);
    preMain.appendChild(aA);
    

    let toggle = true;
    volumeclick.addEventListener("click", () => {
        toggle = !toggle;
        if (!toggle) {
            volume.src = ("Assets/mute.png")
            muted.textContent = "Muted"
            unmuted.textContent = ""
            preMain.appendChild(muted)
        } else {
            volume.src = ("Assets/unmute.png")
            muted.textContent = ""
            unmuted.textContent = "Unmuted"
            preMain.appendChild(unmuted)
        }
    });
    
    const friday1 = new Audio('Assets/intro.mp3')
    setTimeout(() => {
        friday1.play();
    }, 1000)

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
    renderInitialView();
});


