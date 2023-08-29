let m3data = ""
fetch('https://api.api-ninjas.com/v1/cars?limit=50&make=bmw&model=m3',
    {
        method: 'GET', headers: { 'X-Api-Key': 'Jil/7AwXZkQWT1pB2gd3ng==p505GX4x3Sd7ljwe' }
    }).then(response => {
        if (!response.ok) { throw new Error('response not okay') } return response.json()
    }).then(result => {
        m3data = result
    }).catch(error => { console.error('Error', error) })

let m5data = ""
fetch('https://api.api-ninjas.com/v1/cars?limit=50&make=bmw&model=m5',
    {
        method: 'GET', headers: { 'X-Api-Key': 'Jil/7AwXZkQWT1pB2gd3ng==p505GX4x3Sd7ljwe' }
    }).then(response => {
        if (!response.ok) { throw new Error('response not okay') } return response.json()
    }).then(result => {
        m5data = result
    }).catch(error => { console.error('Error', error) })

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
            setTimeout(() => {
                const m3select = document.getElementById('m3selection')
                if (m3select.innerHTML === ""){
                    const content = document.createElement('div')
                    content.setAttribute('id', 'content3')
                    m3select.appendChild(content)
                    m3Selection();
                } else {
                    m3Selection();
                }
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
            setTimeout(() => {
                const m5select = document.getElementById('m5selection')
                if (m5select.innerHTML === "") {
                    const content = document.createElement('div')
                    content.setAttribute('id', 'content5')
                    m5select.appendChild(content)
                    m5Selection();
                } else {
                    m5Selection();
                }
                selectionPage.innerHTML = ""}, 3000)
        }
    })
}

function m3Selection() {
    const m3select = document.getElementById('m3selection')
    const content = document.getElementById('content3')
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
    const cars = document.createElement('div')
    const m32021 = document.createElement('img')
    const m32015 = document.createElement('img')
    const m32008 = document.createElement('img')
    const m31995 = document.createElement('img')
    const m31986 = document.createElement('img')
    const infobox1 = document.createElement('img')
    const infotext1 = document.createElement('p')
    const infobox2 = document.createElement('img')
    const infotext2 = document.createElement('p')
    const infobox3 = document.createElement('img')
    const infotext3 = document.createElement('p')
    const infobox4 = document.createElement('img')
    const infotext4 = document.createElement('p')
    const infobox5 = document.createElement('img')
    const infotext5 = document.createElement('p')
    const infobox6 = document.createElement('img')
    const infotext6 = document.createElement('p')
    const infobox7 = document.createElement('img')
    const infotext7 = document.createElement('p')
    const infobox8 = document.createElement('img')
    const infotext8 = document.createElement('p')
    const infobox9 = document.createElement('img')
    const infotext9 = document.createElement('p')
    const infobox10 = document.createElement('img')
    const infotext10 = document.createElement('p')
    const infobox11 = document.createElement('img')
    const infotext11 = document.createElement('p')
    const infobox12 = document.createElement('img')
    const infotext12 = document.createElement('p')
    const infobox13 = document.createElement('img')
    const infotext13 = document.createElement('p')
    const infobox14 = document.createElement('img')
    const infotext14 = document.createElement('p')
    const infobox15 = document.createElement('img')
    const infotext15 = document.createElement('p')
    const infobox16 = document.createElement('img')
    const infotext16 = document.createElement('p')
    const infobox17 = document.createElement('img')
    const infotext17 = document.createElement('p')
    const infobox18 = document.createElement('img')
    const infotext18 = document.createElement('p')
    const infobox19 = document.createElement('img')
    const infotext19 = document.createElement('p')
    const infobox20 = document.createElement('img')
    const infotext20 = document.createElement('p')
    
    const engine1 = document.createElement('img')
    const engine2 = document.createElement('img')
    const engine3 = document.createElement('img')
    const engine4 = document.createElement('img')
    const engine5 = document.createElement('img')
    const trans1 = document.createElement('img')
    const trans2 = document.createElement('img')
    const trans3 = document.createElement('img')
    const trans4 = document.createElement('img')
    const trans5 = document.createElement('img')
    const hp1 = document.createElement('img')
    const hp2 = document.createElement('img')
    const hp3 = document.createElement('img')
    const hp4 = document.createElement('img')
    const hp5 = document.createElement('img')
    const yr1 = document.createElement('img')
    const yr2 = document.createElement('img')
    const yr3 = document.createElement('img')
    const yr4 = document.createElement('img')
    const yr5 = document.createElement('img')
    engine1.setAttribute('class', 'engineimg1')
    engine2.setAttribute('class', 'engineimg2')
    engine3.setAttribute('class', 'engineimg3')
    engine4.setAttribute('class', 'engineimg4')
    engine5.setAttribute('class', 'engineimg5')
    trans1.setAttribute('class', 'transimg1')
    trans2.setAttribute('class', 'transimg2')
    trans3.setAttribute('class', 'transimg3')
    trans4.setAttribute('class', 'transimg4')
    trans5.setAttribute('class', 'transimg5')
    hp1.setAttribute('class', 'hpimg1')
    hp2.setAttribute('class', 'hpimg2')
    hp3.setAttribute('class', 'hpimg3')
    hp4.setAttribute('class', 'hpimg4')
    hp5.setAttribute('class', 'hpimg5')
    yr1.setAttribute('class', 'yrimg1')
    yr2.setAttribute('class', 'yrimg2')
    yr3.setAttribute('class', 'yrimg3')
    yr4.setAttribute('class', 'yrimg4')
    yr5.setAttribute('class', 'yrimg5')
    engine1.src = 'Assets/engine.png'
    engine2.src = 'Assets/engine.png'
    engine3.src = 'Assets/engine.png'
    engine4.src = 'Assets/engine.png'
    engine5.src = 'Assets/engine.png'
    trans1.src = 'Assets/transmission.png'
    trans2.src = 'Assets/transmission.png'
    trans3.src = 'Assets/transmission.png'
    trans4.src = 'Assets/transmission.png'
    trans5.src = 'Assets/transmission.png'
    hp1.src = 'Assets/hp.png'
    hp2.src = 'Assets/hp.png'
    hp3.src = 'Assets/hp.png'
    hp4.src = 'Assets/hp.png'
    hp5.src = 'Assets/hp.png'
    yr1.src = 'Assets/year.png'
    yr2.src = 'Assets/year.png'
    yr3.src = 'Assets/year.png'
    yr4.src = 'Assets/year.png'
    yr5.src = 'Assets/year.png'
    cars.appendChild(engine1)
    cars.appendChild(engine2)
    cars.appendChild(engine3)
    cars.appendChild(engine4)
    cars.appendChild(engine5)
    cars.appendChild(trans1)
    cars.appendChild(trans2)
    cars.appendChild(trans3)
    cars.appendChild(trans4)
    cars.appendChild(trans5)
    cars.appendChild(hp1)
    cars.appendChild(hp2)
    cars.appendChild(hp3)
    cars.appendChild(hp4)
    cars.appendChild(hp5)
    cars.appendChild(yr1)
    cars.appendChild(yr2)
    cars.appendChild(yr3)
    cars.appendChild(yr4)
    cars.appendChild(yr5)


    mperf.src = 'Assets/mperf.png'
    linkedin.src = 'Assets/linkedin.png'
    github.src = 'Assets/github.png'
    home.src = 'Assets/home.png'
    m32021.src = 'Assets/2021M3.png'
    m32015.src = 'Assets/2015M3.png'
    m32008.src = 'Assets/2008M3.png'
    m31995.src = 'Assets/1995M3.png'
    m31986.src = 'Assets/1986M3.png'
    infobox1.src = 'Assets/infobox1.png'
    infobox2.src = 'Assets/infobox1.png'
    infobox3.src = 'Assets/infobox1.png'
    infobox4.src = 'Assets/infobox1.png'
    infobox5.src = 'Assets/infobox1.png'
    infobox6.src = 'Assets/infobox1.png'
    infobox7.src = 'Assets/infobox1.png'
    infobox8.src = 'Assets/infobox1.png'
    infobox9.src = 'Assets/infobox1.png'
    infobox10.src = 'Assets/infobox1.png'
    infobox11.src = 'Assets/infobox1.png'
    infobox12.src = 'Assets/infobox1.png'
    infobox13.src = 'Assets/infobox1.png'
    infobox14.src = 'Assets/infobox1.png'
    infobox15.src = 'Assets/infobox1.png'
    infobox16.src = 'Assets/infobox1.png'
    infobox17.src = 'Assets/infobox1.png'
    infobox18.src = 'Assets/infobox1.png'
    infobox19.src = 'Assets/infobox1.png'
    infobox20.src = 'Assets/infobox1.png'

    infotext1.textContent = '2021'
    infotext2.textContent = 'S58 Twin-Turbo Inline 6'
    infotext3.textContent = '473 Horsepower'
    infotext4.textContent = '6Spd Manual/8Spd Auto'
    infotext5.textContent = '2015'
    infotext6.textContent = 'S55 Twin-Turbo Inline 6'
    infotext7.textContent = '425 Horsepower'
    infotext8.textContent = '6Spd Manual/8Spd Auto'
    infotext9.textContent =  `${m3data[32]['year']}`
    infotext10.textContent = `S65 V${m3data[32]['cylinders']}`
    infotext11.textContent = '414 Horsepower'
    infotext12.textContent = '6Spd Manual/7Spd Auto'
    infotext13.textContent = `${m3data[0]['year']}`
    infotext14.textContent = `S50 V${m3data[0]['cylinders']}`
    infotext15.textContent = '240 Horsepower'
    infotext16.textContent = '5Spd Manual'
    infotext17.textContent = '1986'
    infotext18.textContent = 'S14 Inline 4'
    infotext19.textContent = '200 Horsepower'
    infotext20.textContent = '5Spd Manual'

    content.setAttribute('class', 'contents')
    home.setAttribute('class', 'home')
    m3select.setAttribute('class', 'm3selected')
    m32021.setAttribute('class', 'M32021')
    m32015.setAttribute('class', 'M32015')
    m32008.setAttribute('class', 'M32008')
    m31995.setAttribute('class', 'M31995')
    m31986.setAttribute('class', 'M31986')
    aside.setAttribute('class', 'sidebar')
    menu.setAttribute('class', 'hamburger')
    check.setAttribute('type', 'checkbox')
    mperf.setAttribute('class', 'mperf')
    linkedin.setAttribute('class', 'linked')
    github.setAttribute('class', 'git')
    infobox1.setAttribute('class', 'infobox-1')
    infotext1.setAttribute('class', 'infotext-1')
    infobox2.setAttribute('class', 'infobox-2')
    infotext2.setAttribute('class', 'infotext-2')
    infobox3.setAttribute('class', 'infobox-3')
    infotext3.setAttribute('class', 'infotext-3')
    infobox4.setAttribute('class', 'infobox-4')
    infotext4.setAttribute('class', 'infotext-4')
    infobox5.setAttribute('class', 'infobox-5')
    infotext5.setAttribute('class', 'infotext-5')
    infobox6.setAttribute('class', 'infobox-6')
    infotext6.setAttribute('class', 'infotext-6')
    infobox7.setAttribute('class', 'infobox-7')
    infotext7.setAttribute('class', 'infotext-7')
    infobox8.setAttribute('class', 'infobox-8')
    infotext8.setAttribute('class', 'infotext-8')
    infobox9.setAttribute('class', 'infobox-9')
    infotext9.setAttribute('class', 'infotext-9')
    infobox10.setAttribute('class', 'infobox-10')
    infotext10.setAttribute('class', 'infotext-10')
    infobox11.setAttribute('class', 'infobox-11')
    infotext11.setAttribute('class', 'infotext-11')
    infobox12.setAttribute('class', 'infobox-12')
    infotext12.setAttribute('class', 'infotext-12')
    infobox13.setAttribute('class', 'infobox-13')
    infotext13.setAttribute('class', 'infotext-13')
    infobox14.setAttribute('class', 'infobox-14')
    infotext14.setAttribute('class', 'infotext-14')
    infobox15.setAttribute('class', 'infobox-15')
    infotext15.setAttribute('class', 'infotext-15')
    infobox16.setAttribute('class', 'infobox-16')
    infotext16.setAttribute('class', 'infotext-16')
    infobox17.setAttribute('class', 'infobox-17')
    infotext17.setAttribute('class', 'infotext-17')
    infobox18.setAttribute('class', 'infobox-18')
    infotext18.setAttribute('class', 'infotext-18')
    infobox19.setAttribute('class', 'infobox-19')
    infotext19.setAttribute('class', 'infotext-19')
    infobox20.setAttribute('class', 'infobox-20')
    infotext20.setAttribute('class', 'infotext-20')
    
    m3select.appendChild(menu)
    content.appendChild(cars)
    cars.appendChild(m32021)
    cars.appendChild(m32015)
    cars.appendChild(m32008)
    cars.appendChild(m31995)
    cars.appendChild(m31986)
    cars.appendChild(infobox1)
    cars.appendChild(infotext1)
    cars.appendChild(infobox2)
    cars.appendChild(infotext2)
    cars.appendChild(infobox3)
    cars.appendChild(infotext3)
    cars.appendChild(infobox4)
    cars.appendChild(infotext4)
    cars.appendChild(infobox5)
    cars.appendChild(infotext5)
    cars.appendChild(infobox6)
    cars.appendChild(infotext6)
    cars.appendChild(infobox7)
    cars.appendChild(infotext7)
    cars.appendChild(infobox8)
    cars.appendChild(infotext8)
    cars.appendChild(infobox9)
    cars.appendChild(infotext9)
    cars.appendChild(infobox10)
    cars.appendChild(infotext10)
    cars.appendChild(infobox11)
    cars.appendChild(infotext11)
    cars.appendChild(infobox12)
    cars.appendChild(infotext12)
    cars.appendChild(infobox13)
    cars.appendChild(infotext13)
    cars.appendChild(infobox14)
    cars.appendChild(infotext14)
    cars.appendChild(infobox15)
    cars.appendChild(infotext15)
    cars.appendChild(infobox16)
    cars.appendChild(infotext16)
    cars.appendChild(infobox17)
    cars.appendChild(infotext17)
    cars.appendChild(infobox18)
    cars.appendChild(infotext18)
    cars.appendChild(infobox19)
    cars.appendChild(infotext19)
    cars.appendChild(infobox20)
    cars.appendChild(infotext20)
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
    const content = document.getElementById('content5')
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
    const cars = document.createElement('div')
    const m52021 = document.createElement('img')
    const m52011 = document.createElement('img')
    const m52006 = document.createElement('img')
    const m51998 = document.createElement('img')
    const m51988 = document.createElement('img')
    const infobox1 = document.createElement('img')
    const infotext1 = document.createElement('p')
    const infobox2 = document.createElement('img')
    const infotext2 = document.createElement('p')
    const infobox3 = document.createElement('img')
    const infotext3 = document.createElement('p')
    const infobox4 = document.createElement('img')
    const infotext4 = document.createElement('p')
    const infobox5 = document.createElement('img')
    const infotext5 = document.createElement('p')
    const infobox6 = document.createElement('img')
    const infotext6 = document.createElement('p')
    const infobox7 = document.createElement('img')
    const infotext7 = document.createElement('p')
    const infobox8 = document.createElement('img')
    const infotext8 = document.createElement('p')
    const infobox9 = document.createElement('img')
    const infotext9 = document.createElement('p')
    const infobox10 = document.createElement('img')
    const infotext10 = document.createElement('p')
    const infobox11 = document.createElement('img')
    const infotext11 = document.createElement('p')
    const infobox12 = document.createElement('img')
    const infotext12 = document.createElement('p')
    const infobox13 = document.createElement('img')
    const infotext13 = document.createElement('p')
    const infobox14 = document.createElement('img')
    const infotext14 = document.createElement('p')
    const infobox15 = document.createElement('img')
    const infotext15 = document.createElement('p')
    const infobox16 = document.createElement('img')
    const infotext16 = document.createElement('p')
    const infobox17 = document.createElement('img')
    const infotext17 = document.createElement('p')
    const infobox18 = document.createElement('img')
    const infotext18 = document.createElement('p')
    const infobox19 = document.createElement('img')
    const infotext19 = document.createElement('p')
    const infobox20 = document.createElement('img')
    const infotext20 = document.createElement('p')

    const engine1 = document.createElement('img')
    const engine2 = document.createElement('img')
    const engine3 = document.createElement('img')
    const engine4 = document.createElement('img')
    const engine5 = document.createElement('img')
    const trans1 = document.createElement('img')
    const trans2 = document.createElement('img')
    const trans3 = document.createElement('img')
    const trans4 = document.createElement('img')
    const trans5 = document.createElement('img')
    const hp1 = document.createElement('img')
    const hp2 = document.createElement('img')
    const hp3 = document.createElement('img')
    const hp4 = document.createElement('img')
    const hp5 = document.createElement('img')
    const yr1 = document.createElement('img')
    const yr2 = document.createElement('img')
    const yr3 = document.createElement('img')
    const yr4 = document.createElement('img')
    const yr5 = document.createElement('img')
    engine1.setAttribute('class', 'engineimg51')
    engine2.setAttribute('class', 'engineimg52')
    engine3.setAttribute('class', 'engineimg53')
    engine4.setAttribute('class', 'engineimg54')
    engine5.setAttribute('class', 'engineimg55')
    trans1.setAttribute('class', 'transimg51')
    trans2.setAttribute('class', 'transimg52')
    trans3.setAttribute('class', 'transimg53')
    trans4.setAttribute('class', 'transimg54')
    trans5.setAttribute('class', 'transimg55')
    hp1.setAttribute('class', 'hpimg51')
    hp2.setAttribute('class', 'hpimg52')
    hp3.setAttribute('class', 'hpimg53')
    hp4.setAttribute('class', 'hpimg54')
    hp5.setAttribute('class', 'hpimg55')
    yr1.setAttribute('class', 'yrimg51')
    yr2.setAttribute('class', 'yrimg52')
    yr3.setAttribute('class', 'yrimg53')
    yr4.setAttribute('class', 'yrimg54')
    yr5.setAttribute('class', 'yrimg55')
    engine1.src = 'Assets/engine.png'
    engine2.src = 'Assets/engine.png'
    engine3.src = 'Assets/engine.png'
    engine4.src = 'Assets/engine.png'
    engine5.src = 'Assets/engine.png'
    trans1.src = 'Assets/transmission.png'
    trans2.src = 'Assets/transmission.png'
    trans3.src = 'Assets/transmission.png'
    trans4.src = 'Assets/transmission.png'
    trans5.src = 'Assets/transmission.png'
    hp1.src = 'Assets/hp.png'
    hp2.src = 'Assets/hp.png'
    hp3.src = 'Assets/hp.png'
    hp4.src = 'Assets/hp.png'
    hp5.src = 'Assets/hp.png'
    yr1.src = 'Assets/year.png'
    yr2.src = 'Assets/year.png'
    yr3.src = 'Assets/year.png'
    yr4.src = 'Assets/year.png'
    yr5.src = 'Assets/year.png'
    cars.appendChild(engine1)
    cars.appendChild(engine2)
    cars.appendChild(engine3)
    cars.appendChild(engine4)
    cars.appendChild(engine5)
    cars.appendChild(trans1)
    cars.appendChild(trans2)
    cars.appendChild(trans3)
    cars.appendChild(trans4)
    cars.appendChild(trans5)
    cars.appendChild(hp1)
    cars.appendChild(hp2)
    cars.appendChild(hp3)
    cars.appendChild(hp4)
    cars.appendChild(hp5)
    cars.appendChild(yr1)
    cars.appendChild(yr2)
    cars.appendChild(yr3)
    cars.appendChild(yr4)
    cars.appendChild(yr5)

    mperf.src = 'Assets/mperf.png'
    linkedin.src = 'Assets/linkedin.png'
    github.src = 'Assets/github.png'
    home.src = 'Assets/home.png'
    m52021.src = 'Assets/2021M5.png'
    m52011.src = 'Assets/2011M5.png'
    m52006.src = 'Assets/2006M5.png'
    m51998.src = 'Assets/1998M5.png'
    m51988.src = 'Assets/1988M5.png'
    infobox1.src = 'Assets/infobox1.png'
    infobox2.src = 'Assets/infobox1.png'
    infobox3.src = 'Assets/infobox1.png'
    infobox4.src = 'Assets/infobox1.png'
    infobox5.src = 'Assets/infobox1.png'
    infobox6.src = 'Assets/infobox1.png'
    infobox7.src = 'Assets/infobox1.png'
    infobox8.src = 'Assets/infobox1.png'
    infobox9.src = 'Assets/infobox1.png'
    infobox10.src = 'Assets/infobox1.png'
    infobox11.src = 'Assets/infobox1.png'
    infobox12.src = 'Assets/infobox1.png'
    infobox13.src = 'Assets/infobox1.png'
    infobox14.src = 'Assets/infobox1.png'
    infobox15.src = 'Assets/infobox1.png'
    infobox16.src = 'Assets/infobox1.png'
    infobox17.src = 'Assets/infobox1.png'
    infobox18.src = 'Assets/infobox1.png'
    infobox19.src = 'Assets/infobox1.png'
    infobox20.src = 'Assets/infobox1.png'

    infotext1.textContent = `${m5data[36]['year']}`
    infotext2.textContent = `S63 Twin-Turbo V${m5data[36]['cylinders']}`
    infotext3.textContent = '600 Horsepower'
    infotext4.textContent = '8Spd Auto'

    infotext5.textContent = `${m5data[13]['year']}`
    infotext6.textContent = `S63 Twin-Turbo V${m5data[13]['cylinders']}`
    infotext7.textContent = '560 Horsepower'
    infotext8.textContent = '7Spd Dual Clutch/6Spd Manual'

    infotext9.textContent = `${m5data[4]['year']}`
    infotext10.textContent = `S85 Twin-Turbo V${m5data[4]['cylinders']}`
    infotext11.textContent = '500 Horsepower'
    infotext12.textContent = '7Spd SMG-III/6Spd Manual'

    infotext13.textContent = '1998'
    infotext14.textContent = 'S62 V8'
    infotext15.textContent = '400 Horsepower'
    infotext16.textContent = '6Spd Manual'

    infotext17.textContent = '1988'
    infotext18.textContent = 'S38 Inline 6'
    infotext19.textContent = '286 Horsepower'
    infotext20.textContent = '5Spd Manual'

    content.setAttribute('class', 'contents')
    m52021.setAttribute('class', 'M52021')
    m52011.setAttribute('class', 'M52011')
    m52006.setAttribute('class', 'M52006')
    m51998.setAttribute('class', 'M51998')
    m51988.setAttribute('class', 'M51988')
    home.setAttribute('class', 'home')
    aside.setAttribute('class', 'sidebar')
    menu.setAttribute('class', 'hamburger')
    check.setAttribute('type', 'checkbox')
    mperf.setAttribute('class', 'mperf')
    linkedin.setAttribute('class', 'linked')
    github.setAttribute('class', 'git')
    infobox1.setAttribute('class', 'infobox-51')
    infotext1.setAttribute('class', 'infotext-51')
    infobox2.setAttribute('class', 'infobox-52')
    infotext2.setAttribute('class', 'infotext-52')
    infobox3.setAttribute('class', 'infobox-53')
    infotext3.setAttribute('class', 'infotext-53')
    infobox4.setAttribute('class', 'infobox-54')
    infotext4.setAttribute('class', 'infotext-54')
    infobox5.setAttribute('class', 'infobox-55')
    infotext5.setAttribute('class', 'infotext-55')
    infobox6.setAttribute('class', 'infobox-56')
    infotext6.setAttribute('class', 'infotext-56')
    infobox7.setAttribute('class', 'infobox-57')
    infotext7.setAttribute('class', 'infotext-57')
    infobox8.setAttribute('class', 'infobox-58')
    infotext8.setAttribute('class', 'infotext-58')
    infobox9.setAttribute('class', 'infobox-59')
    infotext9.setAttribute('class', 'infotext-59')
    infobox10.setAttribute('class', 'infobox-510')
    infotext10.setAttribute('class', 'infotext-510')
    infobox11.setAttribute('class', 'infobox-511')
    infotext11.setAttribute('class', 'infotext-511')
    infobox12.setAttribute('class', 'infobox-512')
    infotext12.setAttribute('class', 'infotext-512')
    infobox13.setAttribute('class', 'infobox-513')
    infotext13.setAttribute('class', 'infotext-513')
    infobox14.setAttribute('class', 'infobox-514')
    infotext14.setAttribute('class', 'infotext-514')
    infobox15.setAttribute('class', 'infobox-515')
    infotext15.setAttribute('class', 'infotext-515')
    infobox16.setAttribute('class', 'infobox-516')
    infotext16.setAttribute('class', 'infotext-516')
    infobox17.setAttribute('class', 'infobox-517')
    infotext17.setAttribute('class', 'infotext-517')
    infobox18.setAttribute('class', 'infobox-518')
    infotext18.setAttribute('class', 'infotext-518')
    infobox19.setAttribute('class', 'infobox-519')
    infotext19.setAttribute('class', 'infotext-519')
    infobox20.setAttribute('class', 'infobox-520')
    infotext20.setAttribute('class', 'infotext-520')

    content.appendChild(cars)
    cars.appendChild(m52021)
    cars.appendChild(m52011)
    cars.appendChild(m52006)
    cars.appendChild(m51998)
    cars.appendChild(m51988)
    cars.appendChild(infobox1)
    cars.appendChild(infotext1)
    cars.appendChild(infobox2)
    cars.appendChild(infotext2)
    cars.appendChild(infobox3)
    cars.appendChild(infotext3)
    cars.appendChild(infobox4)
    cars.appendChild(infotext4)
    cars.appendChild(infobox5)
    cars.appendChild(infotext5)
    cars.appendChild(infobox6)
    cars.appendChild(infotext6)
    cars.appendChild(infobox7)
    cars.appendChild(infotext7)
    cars.appendChild(infobox8)
    cars.appendChild(infotext8)
    cars.appendChild(infobox9)
    cars.appendChild(infotext9)
    cars.appendChild(infobox10)
    cars.appendChild(infotext10)
    cars.appendChild(infobox11)
    cars.appendChild(infotext11)
    cars.appendChild(infobox12)
    cars.appendChild(infotext12)
    cars.appendChild(infobox13)
    cars.appendChild(infotext13)
    cars.appendChild(infobox14)
    cars.appendChild(infotext14)
    cars.appendChild(infobox15)
    cars.appendChild(infotext15)
    cars.appendChild(infobox16)
    cars.appendChild(infotext16)
    cars.appendChild(infobox17)
    cars.appendChild(infotext17)
    cars.appendChild(infobox18)
    cars.appendChild(infotext18)
    cars.appendChild(infobox19)
    cars.appendChild(infotext19)
    cars.appendChild(infobox20)
    cars.appendChild(infotext20)
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

    home.addEventListener('mouseenter', function () {
        home.style.transition = 'transform 0.3s ease';
        home.style.transform = 'scale(1.2)';
    });

    home.addEventListener('mouseleave', function () {
        home.style.transition = 'transform 0.3s ease';
        home.style.transform = 'scale(1)';
    });

    home.addEventListener('click', function () {
        m5select.innerHTML = ""
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


