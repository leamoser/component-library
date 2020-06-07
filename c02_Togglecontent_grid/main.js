document.addEventListener('DOMContentLoaded', function () {
    //Code
    let target = document.querySelectorAll('.box');

    target.forEach((box) => {
        box.addEventListener('click', () => {
            let details = box.nextElementSibling;
            if (!details.classList.contains('show')) {
                details.classList.add('show');
            } else {
                details.classList.remove('show');
            }
        })
    })
}, false);