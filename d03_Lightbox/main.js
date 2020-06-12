document.addEventListener('DOMContentLoaded', function () {
    let image = document.querySelector('section');
    image.addEventListener('click', function () {
        if (this.classList.contains('lightbox')) {
            this.classList.remove('lightbox');
        } else {
            this.classList.add('lightbox');
        }
    })
}, false);