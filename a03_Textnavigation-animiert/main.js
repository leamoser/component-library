let nav = document.querySelector('nav');

let openNav = document.querySelector('#openNav');
openNav.addEventListener('click', () => {
    //Stapelung
    openNav.nextElementSibling.style.zIndex = '1';
    openNav.style.zIndex = '0';
    //Reinverschieben
    openNav.nextElementSibling.style.transform = 'translateX(0px)';
    openNav.style.transform = 'translateX(-400px)';
    nav.style.transform = 'translateX(0px)';
});

let closeNav = document.querySelector('#closeNav');
closeNav.addEventListener('click', () => {
    //Stapelung
    closeNav.previousElementSibling.style.zIndex = '1';
    closeNav.style.zIndex = '0';
    //Reinverschieben
    closeNav.previousElementSibling.style.transform = 'translateX(0px)';
    closeNav.style.transform = 'translateX(-400px)';
    nav.style.transform = 'translateX(-400px)';
});