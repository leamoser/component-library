let allToggles = document.querySelectorAll('.toggleTitle');
console.log(allToggles);
allToggles.forEach((singleToggle) => {
    singleToggle.addEventListener('click', () => {
        showMore(singleToggle);
    })
})

let showMore = (singleToggle) => {
    let status = singleToggle.getAttribute('data-status');
    if (status == 'closed') {
        singleToggle.nextElementSibling.classList.add('show');
        singleToggle.setAttribute('data-status', 'open');
    } else {
        singleToggle.nextElementSibling.classList.remove('show');
        singleToggle.setAttribute('data-status', 'closed');
    }
}
