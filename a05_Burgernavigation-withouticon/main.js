let target = document.querySelector('.burger');
target.addEventListener('click', () => {
    if (target.classList.contains('animated')) {
        target.classList.remove('animated');
    } else {
        target.classList.add('animated');
    }
})