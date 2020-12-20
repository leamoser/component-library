document.addEventListener('DOMContentLoaded', function () {
    let imagecontainer = document.querySelector('.imagecontainer');
    let images_in_container = document.querySelectorAll('.imagecontainer>img');
    console.log(images_in_container)
    let arrow_right = document.querySelector('#arrowright')
    let arrow_left = document.querySelector('#arrowleft')

    /********************EVENTS********************/
    /********************EVENTS********************/
    /********************EVENTS********************/

    //Klick-Events
    arrow_left.addEventListener('click', () => {
        let direction_of_swipe = 'left';
        changingProcess(direction_of_swipe);
    })
    arrow_right.addEventListener('click', () => {
        let direction_of_swipe = 'right';
        changingProcess(direction_of_swipe);
    })
    //Key-Events
    document.onkeydown = function () {
        if (window.event.keyCode == 37) {
            let direction_of_swipe = 'left';
            changingProcess(direction_of_swipe);
        } else if (window.event.keyCode == 39) {
            let direction_of_swipe = 'right';
            changingProcess(direction_of_swipe);
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
        if (first > last) {
            let direction_of_swipe = 'right';
            changingProcess(direction_of_swipe);
        } else {
            let direction_of_swipe = 'left';
            changingProcess(direction_of_swipe);
        }
        //Clear after
        touch_positions = []
    })

    /********************FUNKTIONEN********************/
    /********************FUNKTIONEN********************/
    /********************FUNKTIONEN********************/
    let changingProcess = (direction_of_swipe) => {
        let active_image = getActivePosition();
        let new_active_image = getNewActiveImage(active_image, direction_of_swipe);
        removeUnusedImages(active_image, new_active_image);
    }
    let getActivePosition = () => {
        let active_image_id;
        for (let i = 0; i < images_in_container.length; i++) {
            if (images_in_container[i].classList.contains('active')) {
                active_image_id = i;
            }
        }
        return active_image_id;
    }
    let getNewActiveImage = (active_image, direction_of_swipe) => {
        let new_active_image;
        if (direction_of_swipe == 'right') {
            if (active_image + 1 < images_in_container.length) {
                new_active_image = active_image + 1;
            } else {
                new_active_image = 0;
            }
        } else {
            if (active_image == 0) {
                new_active_image = images_in_container.length - 1;
            } else {
                new_active_image = active_image - 1;
            }
        }
        return new_active_image;
    }
    let removeUnusedImages = (active_image, new_active_image) => {
        images
    }

    /*
    let deleteUnusedImage = (direction_of_swipe) => {
        if (direction_of_swipe == 'left') {
            imagecontainer.removeChild(images_in_container[2])
        } else {
            imagecontainer.removeChild(images_in_container[0])
        }
    }
    let resetClasses = (direction_of_swipe) => {
        if (direction_of_swipe == 'left') {
            images_in_container.forEach((image) => {
                image.classList.remove('moving_left')
            })
        } else {
            images_in_container.forEach((image) => {
                image.classList.remove('moving_right')
            })
        }
    }
    let changeImagesInDom = (direction_of_swipe) => {
        let active_src = images_in_container[1].getAttribute('src');
        let active_id;
        if (images_in_container.length >= 10) {
            active_id = active_src.slice(4, 6);
        } else {
            active_id = active_src.slice(4, 5);
        }
        console.log(active_id);
        if (direction_of_swipe == 'left') {
            //
        } else {
            //
        }
    }
    let moveImage = (direction_of_swipe) => {
        if (direction_of_swipe == 'left') {
            images_in_container.forEach((image) => {
                image.classList.add('moving_left');
            })
        } else {
            images_in_container.forEach((image) => {
                image.classList.add('moving_right');
            })
        }
    }
    */

}, false);