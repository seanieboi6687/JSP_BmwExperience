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
    });

    function ptsView(container) {
        const ptsview = document.createElement('div'); // Corrected tag name to 'div'
        const video = document.createElement('video');
        ptsview.setAttribute('class', 'pts-to-start'); // Corrected class name
        video.setAttribute('class', 'background-vid');
        video.src = "Assets/introvideo.mp4";
        video.alt = "introduction video";

        video.playbackRate = 0.7
        video.autoplay = true;

        ptsview.appendChild(video);
        container.appendChild(ptsview); // Append ptsview to the container
    }
}


renderInitialView();
