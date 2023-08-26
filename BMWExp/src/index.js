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
        ptsView();
    });

    function ptsView() {
        const ptsview = document.getElementById('pts');
        const video = document.createElement('video');
        const msg = document.createElement('h1')
        const ptsImg = document.createElement('img')
        const ptsButton = document.createElement('a')
        const ptsButton1 = document.createElement('img')
        msg.setAttribute('class', 'please-start')
        ptsButton1.src = 'Assets/ptsbutton.png'
        ptsview.setAttribute('class', 'pts-to-start');
        ptsButton1.setAttribute('class', 'ptsbutton')
        video.setAttribute('class', 'background-vid');
        video.src = "Assets/introvideo.mp4";
        video.alt = "introduction video";

        msg.textContent = 'Please push the button start your experience'

        video.playbackRate = 0.7
        video.autoplay = true;

        backgroundMusic();

        ptsview.appendChild(video);
        ptsview.appendChild(ptsButton);
        video.addEventListener('ended', function () {
            const anchor = document.createElement('a')
            ptsButton.appendChild(anchor)
            anchor.appendChild(ptsButton1);
            setTimeout(ptsButton.appendChild(msg), 3000);
        });

        ptsButton1.addEventListener('click', function () {
            const audio = new Audio('Assets/enginesound.mp3')
            audio.play();
            setTimeout(() => {
                fadeOutAudio(audio, 3);
                setTimeout(() => {
                    ptsview.innerHTML = '';
                    selectionView();
                }, 3000);
            }, 3000);
        });

        function selectionView(){
            const selectionPage = document.getElementById('selection')
            const heading = document.createElement('h1')
            const m3 = document.createElement('img')
            const m5 = document.createElement('img')
            const light1 = document.createElement('img')
            const light2 = document.createElement('img')
            selectionPage.setAttribute('id', 'selection')
            m3.src = 'Assets/m3logo.png'
            m3.alt = 'm3-logo'
            m3.setAttribute('id', 'm3logo')
            m5.src = 'Assets/m5logo.png'
            m5.alt = 'm5-logo'
            m5.setAttribute('id', 'm5logo')
            light1.src = 'Assets/ceilinglight.png'
            light1.setAttribute('id', 'light1')
            light2.src = 'Assets/ceilinglight.png'
            light2.setAttribute('id', 'light2')
            heading.setAttribute('class', 'head')

            heading.textContent = 'Please select your desired M model to view'

            selectionPage.appendChild(heading)
            selectionPage.appendChild(light1)
            selectionPage.appendChild(light2)
            selectionPage.appendChild(m3)
            selectionPage.appendChild(m5)

        }
    }

    function backgroundMusic() {
        const music = document.createElement('audio')
        music.setAttribute('id', 'music')
        music.setAttribute('loop', 'true')
        music.src = 'Assets/backgroundmusic.mp3'
        fadeInAudio(music, 5);
        music.play();
    }

    document.addEventListener('click', function () {
        playClickSound();
    });

    function playClickSound() {
        const audio = new Audio('Assets/click.mp3');
        audio.play();
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
}



renderInitialView();
