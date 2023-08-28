function renderInitialView(){
    const preMain = document.getElementById('pre-main');
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
    preMain.appendChild(heading)
    preMain.appendChild(enterButton)
    preMain.appendChild(volumeclick)
    preMain.appendChild(unmuted)
    volumeclick.appendChild(volume)
    preMain.appendChild(background)
    preMain.appendChild(aA)
    heading.appendChild(warning)

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

    backgroundMusic();

    ptsview.appendChild(video);
    ptsview.appendChild(ptsButton);
    
    const friday2 = new Audio('Assets/pts.mp3')

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
        if (!clicked){
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

function selectionView(){
    const selectionPage = document.getElementById('selection')
    const heading = document.createElement('h1')
    const m3 = document.createElement('img')
    const m5 = document.createElement('img')
    const light3 = document.createElement('img')
    const light5 = document.createElement('img')
    const selection3 = document.createElement('a')
    const selection5 = document.createElement('a')
    selectionPage.setAttribute('id', 'selection')
    m3.src = 'Assets/m3logo.png'
    m3.alt = 'm3-logo'
    m3.setAttribute('id', 'm3logo')
    m5.src = 'Assets/m5logo.png'
    m5.alt = 'm5-logo'
    m5.setAttribute('id', 'm5logo')
    light3.src = 'Assets/ceilinglight.png'
    light3.setAttribute('id', 'light3')
    light5.src = 'Assets/ceilinglight.png'
    light5.setAttribute('id', 'light5')
    heading.setAttribute('class', 'head')

    heading.textContent = 'Please select your desired M model to view'

    selectionPage.appendChild(heading)
    selectionPage.appendChild(m3)
    selectionPage.appendChild(m5)

    const friday3 = new Audio('Assets/selection.mp3')
    setTimeout(() => {
        friday3.play()
    }, 1000)

    m3.addEventListener('mouseenter', function () {
        m3.style.transition = 'transform 0.3s ease';
        m3.style.transform = 'scale(1.1)';
        m5.style.transform = 'scale(0.9)';
    });
    m3.addEventListener('mouseleave', function () {
        m3.style.transition = 'transform 0.3s ease';
        m3.style.transform = 'scale(1)';
        m5.style.transform = 'scale(1)';
    });
    m5.addEventListener('mouseenter', function () {
        m5.style.transition = 'transform 0.3s ease';
        m5.style.transform = 'scale(1.1)';
        m3.style.transform = 'scale(0.9)';
    });
    m5.addEventListener('mouseleave', function () {
        m5.style.transition = 'transform 0.3s ease';
        m5.style.transform = 'scale(1)';
        m3.style.transform = 'scale(1)';
    });

    let clicked = false;
    const fridayM3 = new Audio('Assets/m3choice.mp3')
    m3.addEventListener('click', function(){
        if (!clicked){
            clicked = true;
            selectionPage.appendChild(light3);
            playLightSound();
            fridayM3.play();
            friday3.pause();
            m5.style.opacity = 0.5;
            setTimeout(() => {
                m3Selection();
                selectionPage.innerHTML = ""}, 3000);
            }
    })

    const fridayM5 = new Audio('Assets/m5choice.mp3')
    m5.addEventListener('click', function () {
        if (!clicked){
            clicked = true;
            selectionPage.appendChild(light5);
            playLightSound();
            fridayM5.play();
            friday3.pause();
            m3.style.opacity = 0.5;
            setTimeout(() => {
                m5Selection();
                selectionPage.innerHTML = ""
            }, 3000)
        }
    })
}

function m3Selection() {
    const m3select = document.getElementById('m3selection')
    const content = document.getElementById('content')
    const menu = document.createElement('label')
    const check = document.createElement('input')
    const aside = document.createElement('aside')
    const nav = document.createElement('nav')
    const home = document.createElement('img')
    const linkediv = document.createElement('div')
    const linkedin = document.createElement('img')
    const gitdiv = document.createElement('div')
    const github = document.createElement('img')
    const mperf = document.createElement('img')
    const m32021 = document.createElement('img')

    mperf.src = 'Assets/mperf.png'
    linkedin.src = 'Assets/linkedin.png'
    github.src = 'Assets/github.png'
    home.src = 'Assets/home.png'
    m32021.src = 'Assets/2021M3.png'

    home.setAttribute('class', 'home')
    m3select.setAttribute('class', 'm3selected')
    m32021.setAttribute('class', "M32021")
    aside.setAttribute('class', 'sidebar')
    menu.setAttribute('class', 'hamburger')
    check.setAttribute('type', 'checkbox')
    mperf.setAttribute('class', 'mperf')
    linkedin.setAttribute('class', 'linked')
    github.setAttribute('class', 'git')

    m3select.appendChild(menu)
    content.appendChild(m32021)
    m3select.appendChild(aside)
    menu.appendChild(check)
    aside.appendChild(nav)
    nav.appendChild(home)
    nav.appendChild(linkediv)
    nav.appendChild(gitdiv)
    nav.appendChild(mperf)
    linkediv.appendChild(linkedin)
    gitdiv.appendChild(github)


    home.addEventListener('mouseenter', function () {
        home.style.transition = 'transform 0.3s ease';
        home.style.transform = 'scale(1.2)';
    });

    home.addEventListener('mouseleave', function () {
        home.style.transition = 'transform 0.3s ease';
        home.style.transform = 'scale(1)';
    });

    home.addEventListener('click', function(){
        m3select.innerHTML = ""
        selectionView();
    })

    github.addEventListener('mouseenter', function () {
        github.style.transition = 'transform 0.3s ease';
        github.style.transform = 'scale(1.2)';
    });

    github.addEventListener('mouseleave', function () {
        github.style.transition = 'transform 0.3s ease';
        github.style.transform = 'scale(1)';
    });

    github.addEventListener('click', function(){
        window.open('https://github.com/seanieboi6687', '_blank')
    })

    linkedin.addEventListener('mouseenter', function () {
        linkedin.style.transition = 'transform 0.3s ease';
        linkedin.style.transform = 'scale(1.2)';
    });

    linkedin.addEventListener('mouseleave', function () {
        linkedin.style.transition = 'transform 0.3s ease';
        linkedin.style.transform = 'scale(1)';
    });

    linkedin.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/sean-jeun-33445615b/', '_blank')
    })
}

function m5Selection(){
    const m5select = document.getElementById('m5selection')
    const menu = document.createElement('label')
    const check = document.createElement('input')
    const aside = document.createElement('aside')
    const nav = document.createElement('nav')
    const home = document.createElement('img')
    const linkediv = document.createElement('div')
    const linkedin = document.createElement('img')
    const gitdiv = document.createElement('div')
    const github = document.createElement('img')
    const mperf = document.createElement('img')

    mperf.src = 'Assets/mperf.png'
    linkedin.src = 'Assets/linkedin.png'
    github.src = 'Assets/github.png'
    home.src = 'Assets/home.png'

    home.setAttribute('class', 'home')
    aside.setAttribute('class', 'sidebar')
    menu.setAttribute('class', 'hamburger')
    check.setAttribute('type', 'checkbox')
    mperf.setAttribute('class', 'mperf')
    linkedin.setAttribute('class', 'linked')
    github.setAttribute('class', 'git')

    m5select.appendChild(menu)
    menu.appendChild(check)
    m5select.appendChild(aside)
    aside.appendChild(nav)
    nav.appendChild(home)
    nav.appendChild(linkediv)
    nav.appendChild(gitdiv)
    nav.appendChild(mperf)
    linkediv.appendChild(linkedin)
    gitdiv.appendChild(github)

    home.addEventListener('click', function () {
        m5select.innerHTML = ""
        selectionView();
    })

    home.addEventListener('mouseenter', function () {
        home.style.transition = 'transform 0.3s ease';
        home.style.transform = 'scale(1.2)';
    });

    home.addEventListener('mouseleave', function () {
        home.style.transition = 'transform 0.3s ease';
        home.style.transform = 'scale(1)';
    });

    home.addEventListener('click', function () {
        m3select.innerHTML = ""
        selectionView();
    })

    github.addEventListener('mouseenter', function () {
        github.style.transition = 'transform 0.3s ease';
        github.style.transform = 'scale(1.2)';
    });

    github.addEventListener('mouseleave', function () {
        github.style.transition = 'transform 0.3s ease';
        github.style.transform = 'scale(1)';
    });

    github.addEventListener('click', function () {
        window.open('https://github.com/seanieboi6687', '_blank')
    })

    linkedin.addEventListener('mouseenter', function () {
        linkedin.style.transition = 'transform 0.3s ease';
        linkedin.style.transform = 'scale(1.2)';
    });

    linkedin.addEventListener('mouseleave', function () {
        linkedin.style.transition = 'transform 0.3s ease';
        linkedin.style.transform = 'scale(1)';
    });

    linkedin.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/sean-jeun-33445615b/', '_blank')
    })
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

function playLightSound() {
    const audio = new Audio('Assets/switchsound.mp3')
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

renderInitialView();


