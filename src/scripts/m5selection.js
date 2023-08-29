import selectionView from "./selectionview"

let m5data = ""
fetch('https://api.api-ninjas.com/v1/cars?limit=50&make=bmw&model=m5',
    {
        method: 'GET', headers: { 'X-Api-Key': 'Jil/7AwXZkQWT1pB2gd3ng==p505GX4x3Sd7ljwe' }
    }).then(response => {
        if (!response.ok) { throw new Error('response not okay') } return response.json()
    }).then(result => {
        m5data = result
    }).catch(error => { console.error('Error', error) })

function m5Selection() {
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

export default m5Selection;