import selectionView from "./selectionview";

function ptsView() {
    const ptsview = document.getElementById('pts');
    const video = document.createElement('video');
    const msg = document.createElement('h1')
    const ptsButton = document.createElement('a')
    const ptsButton1 = document.createElement('img')
    const glow = document.createElement('img')
    glow.src = 'Assets/glow.png'
    glow.setAttribute('id', 'circleglow')
    msg.setAttribute('class', 'please-start')
    ptsButton1.src = 'Assets/ptsbutton.png'
    ptsview.setAttribute('class', 'pts-to-start');
    ptsButton1.setAttribute('class', 'ptsbutton')
    video.setAttribute('class', 'background-vid');
    video.src = "Assets/introvideo.mp4";
    video.alt = "introduction video";

    msg.textContent = 'Please click the button to start your journey'

    video.playbackRate = 0.7
    video.autoplay = true;

    ptsview.appendChild(video);
    ptsview.appendChild(ptsButton);

    const friday2 = new Audio('Assets/pts.mp3')

    // backgroundMusic();

    video.addEventListener('ended', function () {
        setTimeout(() => {
            friday2.play();
        }, 1000)
        const anchor = document.createElement('a')
        ptsButton.appendChild(anchor)
        anchor.appendChild(ptsButton1);
        setTimeout(ptsButton.appendChild(msg), 3000);
    });

    let clicked = false;
    ptsButton1.addEventListener('click', function () {
        if (!clicked) {
            clicked = true;
            ptsButton.appendChild(glow)
            glow.style.zIndex = '-1';
            const audio = new Audio('Assets/enginesound.mp3')
            audio.play();

            setTimeout(() => {
                fadeOutAudio(audio, 3);
                setTimeout(() => {
                    ptsview.innerHTML = '';
                    selectionView();
                }, 3000);
            }, 3000);
        }
    });
}

function fadeOutAudio(audioElement, durationInSeconds) {
    const fadeDuration = durationInSeconds * 1000;
    const fadeSteps = 50;

    const initialVolume = audioElement.volume;
    const volumeStep = initialVolume / fadeSteps;
    let currentStep = 0;

    const fadeOutInterval = setInterval(() => {
        if (currentStep >= fadeSteps) {
            clearInterval(fadeOutInterval);
            audioElement.pause();
        } else {
            currentStep++;
            audioElement.volume = initialVolume - currentStep * volumeStep;
        }
    }, fadeDuration / fadeSteps);
}

function backgroundMusic() {
    const music = document.createElement('audio')
    music.setAttribute('id', 'music')
    music.setAttribute('loop', 'true')
    music.src = 'Assets/backgroundmusic.mp3'
    fadeInAudio(music, 5);
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

export default ptsView;