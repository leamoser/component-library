document.addEventListener('DOMContentLoaded', function () {
    //BASICS
    //BASICS
    //BASICS
    let arrow_left = document.querySelector('.arrowleft')
    let arrow_right = document.querySelector('.arrowright')
    let contentboxen = document.querySelectorAll('.contentbox')
    console.log(contentboxen)
    //EVENTS
    //EVENTS
    //EVENTS
    arrow_left.addEventListener('click', () => {
        let direction = 'left';
        changeContent(contentboxen.length, direction);
    })
    arrow_right.addEventListener('click', () => {
        let direction = 'right';
        changeContent(contentboxen.length, direction);
    })
    //KEYEVENTS
    //KEYEVENTS
    //KEYEVENTS
    document.onkeydown = function () {
        if (window.event.keyCode == 37) {
            let direction = 'left';
            changeContent(contentboxen.length, direction);
        } else if (window.event.keyCode == 39) {
            let direction = 'right';
            changeContent(contentboxen.length, direction);
        }
    }
    //FUNCTIONS
    //FUNCTIONS
    //FUNCTIONS
    let changeContent = (number_of_contentboxes, direction_of_swipe) => {
        let visibles = [];
        for (let i = 0; i < contentboxen.length; i++) {
            if (contentboxen[i].classList.contains('visible')) {
                visibles.push(i);
            }
        }
        let new_image_id;
        let image_to_remove_id;
        if (direction_of_swipe == 'left') {
            new_image_id = goLeft(number_of_contentboxes, visibles)
            if (new_image_id == number_of_contentboxes) {
                image_to_remove_id = visibles[0];
            } else {
                image_to_remove_id = visibles[1]
            }
        } else {
            new_image_id = goRight(number_of_contentboxes, visibles)
            if (new_image_id == 1) {
                image_to_remove_id = visibles[1]
            } else {
                image_to_remove_id = visibles[0]
            }
        }
        contentboxen[new_image_id].classList.add('visible');
        contentboxen[image_to_remove_id].classList.remove('visible');
    }
    let goRight = (number_of_contentboxes, visibles) => {
        console.log(visibles);
        if (visibles[1] < number_of_contentboxes - 1) {
            return visibles[1] + 1;
        } else if (visibles[1] == number_of_contentboxes - 1 && visibles[0] == number_of_contentboxes - 2) {
            return 0;
        } else {
            return 1;
        }
    }
    let goLeft = (number_of_contentboxes, visibles) => {
        console.log(visibles);
        if (visibles[0] != 0 && visibles[1] != 0) {
            return visibles[0] - 1;
        } else if (visibles[0] == 0 && visibles[1] == 1) {
            return number_of_contentboxes - 1;
        } else {
            return 1;
        }
    }

}, false);

/*
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
*/