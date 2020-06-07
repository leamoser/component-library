document.addEventListener('DOMContentLoaded', function () {
    let kreise = document.querySelectorAll('circle');
    let container = document.querySelector('.map');
    kreise.forEach((kreis) => {
        kreis.addEventListener('mouseover', () => {
            kreis.classList.add('active');
            addTooltip(kreis);
        })
        kreis.addEventListener('mouseout', () => {
            kreis.classList.remove('active');
            removeTooltip();
        })
    })
    let addTooltip = (kreis) => {
        //Inhalt holen
        let content = kreis.getAttribute('data-content');
        //Element erstellen, Inhalt zuweisen, Class zuweisen und anhängen
        let element = document.createElement('div');
        element.classList.add('tooltip');
        element.innerHTML = content;
        container.appendChild(element);
        //Element Positionieren
        element.style.left = (event.clientX + 20) + 'px';
        element.style.top = (event.clientY + 20) + 'px';
    }
    let removeTooltip = () => {
        container.removeChild(container.lastChild);
    }
}, false);