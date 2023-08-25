function renderInitialView(){
    const preMain = document.getElementById('pre-main');
    const heading = document.createElement('h1')
    const warning = document.createElement('p')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    img1.src = 'Assets/prescreendrl.png'
    img1.alt = 'volume page background'
    img1.setAttribute('id', 'pre-main-drl')
    img2.src = 'Assets/volumeicon.png'
    img2.alt = 'volume icon'
    img2.setAttribute('id', 'volume-icon')
    heading.setAttribute('class', 'head')
    warning.setAttribute('cass', 'warning')

    heading.textContent = 'Welcome to your BMW Ultimate Experience'
    warning.textContent = 'Please take this time to adjust your volume before moving forward'
    preMain.appendChild(heading)
    preMain.appendChild(img1)
    heading.appendChild(warning)
    warning.appendChild(img2)

}

renderInitialView();