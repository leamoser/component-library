document.addEventListener('DOMContentLoaded', function () {
    let arrow_left = document.querySelector('div.arrowleft');
    let arrow_right = document.querySelector('div.arrowright');
    let images = document.querySelectorAll('section.slider>img');

    //Klick-Events
    arrow_right.addEventListener('click', () => {
        let direction = 'right';
        changeImage(images.length, direction);
    })
    arrow_left.addEventListener('click', () => {
        let direction = 'left';
        changeImage(images.length, direction);
    })
    //Key-Events
    document.onkeydown = function () {
        if (window.event.keyCode == 37) {
            let direction = 'left';
            changeImage(images.length, direction);
        } else if (window.event.keyCode == 39) {
            let direction = 'right';
            changeImage(images.length, direction);
        }
    }
    //Touch-Events
    let touch_positions = [];
    window.addEventListener('touchmove', function (e) {
        let startval = e.changedTouches[0].pageX;
        touch_positions.push(startval);
    })
    window.addEventListener('touchend', function () {
        let number_of_touches = touch_positions.length;
        let first = touch_positions[0];
        let last = touch_positions[number_of_touches - 1];
        console.log(first, last)
        if (first > last) {
            let direction = 'left';
            changeImage(images.length, direction);
        } else {
            let direction = 'right';
            changeImage(images.length, direction);
        }
        //Clear after
        touch_positions = []
    })


    let changeImage = (number_of_images, direction_of_swipe) => {
        //Aktuelle Position des AKtiven Bildes rausfinden
        let position_of_active = 0;
        let position_found = false;
        while (position_found == false) {
            if (!images[position_of_active].classList.contains('active')) {
                position_of_active++;
            } else {
                position_found = true;
            }
        }
        //Je nach richtung andere Bedingung
        let new_image_id;
        if (direction_of_swipe == 'left') {
            new_image_id = goLeft(number_of_images, position_of_active);
        } else {
            new_image_id = goRight(number_of_images, position_of_active);
        }
        //Bild wechseln
        images.forEach((image) => {
            image.classList.remove('active');
        })
        images[new_image_id].classList.add('active');
    }
    let goLeft = (number_of_images, position_of_active) => {
        if (position_of_active > 0) {
            return position_of_active - 1;
        } else {
            return number_of_images - 1;
        }
    }
    let goRight = (number_of_images, position_of_active) => {
        if (position_of_active < (number_of_images - 1)) {
            return position_of_active + 1;
        } else {
            return 0;
        }
    }
}, false);