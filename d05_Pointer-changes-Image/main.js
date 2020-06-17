document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('div.cursor')
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX
        let y = e.clientY
        cursor.style.top = (y - 15) + 'px';
        cursor.style.left = (x - 15) + 'px';
    })
}, false);