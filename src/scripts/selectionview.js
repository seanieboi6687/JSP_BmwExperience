import m3Selection from "./m3selection"
import m5Selection from "./m5selection"

function selectionView() {
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
    m3.addEventListener('click', function () {
        if (!clicked) {
            clicked = true;
            selectionPage.appendChild(light3);
            playLightSound();
            fridayM3.play();
            friday3.pause();
            setTimeout(() => {
                const m3select = document.getElementById('m3selection')
                if (m3select.innerHTML === "") {
                    const content = document.createElement('div')
                    content.setAttribute('id', 'content3')
                    m3select.appendChild(content)
                    m3Selection();
                } else {
                    m3Selection();
                }
                selectionPage.innerHTML = ""
            }, 3000);
        }
    })

    const fridayM5 = new Audio('Assets/m5choice.mp3')
    m5.addEventListener('click', function () {
        if (!clicked) {
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
                selectionPage.innerHTML = ""
            }, 3000)
        }
    })
}

function playLightSound() {
    const audio = new Audio('Assets/switchsound.mp3')
    audio.play();
}

export default selectionView;