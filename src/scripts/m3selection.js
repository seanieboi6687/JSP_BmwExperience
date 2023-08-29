import selectionView from "./selectionview"

let m3data = ""
fetch('https://api.api-ninjas.com/v1/cars?limit=50&make=bmw&model=m3',
    {
        method: 'GET', headers: { 'X-Api-Key': 'Jil/7AwXZkQWT1pB2gd3ng==p505GX4x3Sd7ljwe' }
    }).then(response => {
        if (!response.ok) { throw new Error('response not okay') } return response.json()
    }).then(result => {
        m3data = result
    }).catch(error => { console.error('Error', error) })

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
    infotext9.textContent = `${m3data[32]['year']}`
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

export default m3Selection;