document.addEventListener('DOMContentLoaded', function () {
    //BASICS
    //BASICS
    //BASICS
    let arrow_left = document.querySelector('.arrowleft')
    let arrow_right = document.querySelector('.arrowright')
    let contentboxen = document.querySelectorAll('.contentbox')
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
        let active_slide;
        for (let i = 0; i < contentboxen.length; i++) {
            if (contentboxen[i].classList.contains('visible')) {
                active_slide = i;
                contentboxen[i].classList.remove('visible');
            }
        }
        let new_slide_id;
        if (direction_of_swipe == 'right') {
            let new_slide_id = goRight(number_of_contentboxes, active_slide);
            contentboxen[new_slide_id].classList.add('visible');
        } else {
            let new_slide_id = goLeft(number_of_contentboxes, active_slide);
            contentboxen[new_slide_id].classList.add('visible');
        }
    }
    let goRight = (number_of_contentboxes, active_slide) => {
        if (active_slide < number_of_contentboxes - 1) {
            return active_slide + 1;
        } else {
            return 0;
        }
    }
    let goLeft = (number_of_contentboxes, active_slide) => {
        if (active_slide != 0) {
            return active_slide - 1;
        } else {
            return number_of_contentboxes - 1;
        }
    }
}, false);