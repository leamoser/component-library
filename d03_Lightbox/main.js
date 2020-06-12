document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('body');
    let images = document.querySelectorAll('img');
    let lightbox = document.querySelector('section.lightbox');
    let button = document.querySelector('div.cross');

    //Bilder verlinken
    images.forEach((image) => {
        image.addEventListener('click', function () {
            lightbox = null;
            if (lightbox == null) {
                createLightbox(this);
                lightbox = document.querySelector('section.lightbox');
                lightboxBack(lightbox);
            }
        })
    })
    //Lightbox bedingt verlinken
    let lightboxBack = (lightbox) => {
        lightbox.addEventListener('click', function () {
            removeLightbox(lightbox);
        })
    }
    //Button-Event
    button.addEventListener('click', function () {
        removeLightbox(lightbox);
    })

    //Element erstellen
    let createLightbox = (image) => {
        //Elemente erstellen und anhängen
        let box = document.createElement('section');
        box.classList.add('lightbox');
        container.appendChild(box);
        let image_lb = document.createElement('img');
        image_lb.setAttribute('src', image.getAttribute('src'));
        box.appendChild(image_lb);
        let caption = document.createElement('p');
        caption.innerHTML = image.getAttribute('alt');
        box.appendChild(caption);
        //Back-Button einblenden
        button.classList.remove('gone');
    }
    //Element entfernen
    let removeLightbox = (lightbox) => {
        //Element löschen
        container.removeChild(lightbox);
        //Backbutton ausblenden
        button.classList.add('gone');
    }
}, false);