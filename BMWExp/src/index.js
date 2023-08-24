function renderInitialView(){
    const preMain = document.getElementById('pre-main');
    const heading = document.createElement('h1')
    const warning = document.createElement('p')
    const img = document.createElement('img')
    img.setAttribute('id', 'pre-main-drl')

    heading.textContent = 'Welcome to your BMW Ultimate Experience'
    warning.textContent = 'Please take this time to adjust your volume before moving forward'
    preMain.appendChild(heading)
    heading.appendChild(warning)
}

renderInitialView();