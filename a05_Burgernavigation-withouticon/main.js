//Vars
const burger_toggle = document.querySelector('#burger_toggle');

//Function
let initBurger = () => {
    burger_toggle.addEventListener('click', function() {
        this.classList.toggle('animated');
    })
}

//Init
initBurger();