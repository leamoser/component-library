document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('.imagecontainer');
    container.addEventListener('mouseenter', function () {
        let imagetext = this.children[0].getAttribute('alt');
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        this.appendChild(overlay);
        let overlay_text = document.createElement('p');
        overlay_text.innerHTML = imagetext;
        overlay.appendChild(overlay_text);
        loadOverlaySlowly();
    })
    container.addEventListener('mouseleave', function () {
        this.children[1].classList.remove('loaded');
        removeOverlaySlowly();
    })
    let loadOverlaySlowly = () => {
        setTimeout(() => {
            container.children[1].classList.add('loaded');
        }, 50);
    }
    let removeOverlaySlowly = () => {
        setTimeout(() => {
            container.removeChild(container.children[1])
        }, 500);
    }
}, false);