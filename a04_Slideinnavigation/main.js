document.querySelector('#toggle').addEventListener('click', () => {
    let more = document.querySelectorAll('.more')[0];
    let content = document.querySelectorAll('.content')[0];
    if (more.classList.length == 1) {
        more.classList.add('animated');
        content.classList.add('animated');
    } else {
        more.classList.remove('animated');
        content.classList.remove('animated');
    }
})