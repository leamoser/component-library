let nav = document.querySelector('nav');
console.log(nav);

let closedNav = document.querySelector('#closed');
closedNav.addEventListener('click', () => {
    closedNav.nextElementSibling.style.display = 'block';
    closedNav.style.display = 'none';
    nav.style.display = 'block';
});

let openNav = document.querySelector('#open');
openNav.addEventListener('click', () => {
    openNav.previousElementSibling.style.display = 'block';
    openNav.style.display = 'none';
    nav.style.display = 'none';
});