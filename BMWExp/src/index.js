function renderInitialView(){
    const preMain = document.getElementById('pre-main');
    const heading = document.createElement('h1')
    const warning = document.createElement('p')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const slider = document.createElement('div')
    const volume = document.createElement('input')
    const enterButton = document.createElement('button')

    img1.src = 'Assets/prescreendrl.png'
    img1.alt = 'volume page background'
    img1.setAttribute('id', 'pre-main-drl')
    img2.src = 'Assets/volumeicon.png'
    img2.alt = 'volume icon'
    img2.setAttribute('id', 'volume-icon')
    preMain.setAttribute('class', 'pre-main')
    heading.setAttribute('class', 'head')
    enterButton.setAttribute('class', 'enter-button')
    volume.setAttribute('type', 'range')
    volume.setAttribute('min', '0')
    volume.setAttribute('max', '100')
    volume.setAttribute('value', '50')
    volume.setAttribute('class', 'slider')

    heading.textContent = 'Welcome to your BMW Ultimate Experience'
    warning.textContent = '⚠ Please take this time to adjust your volume before moving forward ⚠'
    enterButton.textContent = 'ENTER'
    preMain.appendChild(heading)
    preMain.appendChild(enterButton)
    preMain.appendChild(slider)
    slider.appendChild(volume)
    preMain.appendChild(img1)
    heading.appendChild(warning)
    warning.appendChild(img2)

    enterButton.addEventListener('click', function () {
        preMain.innerHTML = '';
        ptsView(preMain);
        const audio = new Audio('Assets/backgroundmusic.mp3');
        fadeInAudio(audio, 5);
        audio.play();
    });

    function ptsView(container) {
        const ptsview = document.getElementById('pts');
        const video = document.createElement('video');
        const ptsImg = document.createElement('img')
        const ptsButton = document.createElement('a')
        ptsview.setAttribute('class', 'pts-to-start');
        video.setAttribute('class', 'background-vid');
        video.src = "Assets/introvideo.mp4";
        video.alt = "introduction video";

        video.playbackRate = 0.7
        video.autoplay = true;

        ptsview.appendChild(video);
        container.appendChild(ptsview);
    }
}

document.addEventListener('click', function () {
    playClickSound();
});

function playClickSound() {
    const audio = new Audio('Assets/click.mp3'); 
    audio.play();
}

function backgroundMusic() {
    const music = document.createElement('music')
    music.setAttribute('id', 'music')
    music.setAttribute('loop', 'true')
    music.src = 'Assets/backgroundmusic.mp3'
    music.play();
}

function fadeInAudio(audio, duration) {
    const fadeDuration = duration * 1000;
    const fadeSteps = 50;
    const initialVolume = 0;

    audio.volume = initialVolume;

    const volumeStep = 1 / fadeSteps;
    let currentStep = 0;

    const fadeInInterval = setInterval(() => {
        if (currentStep >= fadeSteps) {
            clearInterval(fadeInInterval);
        } else {
            currentStep++;
            audio.volume = currentStep * volumeStep;
        }
    }, fadeDuration / fadeSteps);
}

renderInitialView();
