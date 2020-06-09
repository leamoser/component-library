document.addEventListener('DOMContentLoaded', function () {
    let arrowright = document.querySelector('#arrowright');
    let arrowleft = document.querySelector('#arrowleft');
    let body_container = document.querySelector('body');
    let direction_of_swipe;
    //Click-Events richtig zuweisen
    arrowright.addEventListener('click', () => {
        direction_of_swipe = 'right';
        swipeThatShit(direction_of_swipe);
    })
    arrowleft.addEventListener('click', () => {
        direction_of_swipe = 'left';
        swipeThatShit(direction_of_swipe);
    })
    //Key-Events richtig zuweisen
    document.onkeydown = function () {
        if (body_container.classList.contains('leftgone')) {
            if (window.event.keyCode == 39) {
                direction_of_swipe = 'right';
                swipeThatShit(direction_of_swipe);
            }
        } else if (body_container.classList.contains('rightgone')) {
            if (window.event.keyCode == 37) {
                direction_of_swipe = 'left';
                swipeThatShit(direction_of_swipe);
            }
        } else {
            if (window.event.keyCode == 39) {
                direction_of_swipe = 'right';
                swipeThatShit(direction_of_swipe);
            } else if (window.event.keyCode == 37) {
                direction_of_swipe = 'left';
                swipeThatShit(direction_of_swipe);
            }
        }
    }
    //Function
    let swipeThatShit = (direction_of_swipe) => {
        let all_elements = document.querySelectorAll('.contentbox')
        let count_of_elements = all_elements.length;
        let all_visible_elements = [];
        for (let i = 0; i < count_of_elements; i++) {
            if (all_elements[i].classList.contains('visible')) {
                all_visible_elements.push(i);
            }
        }
        let count_of_all_visible_elements = all_visible_elements.length;
        let new_element_id;
        if (direction_of_swipe == 'right') {
            new_element_id = swipeRight(all_visible_elements, count_of_all_visible_elements);
            all_visible_elements.push(new_element_id)
            all_visible_elements.shift()
        } else if (direction_of_swipe == 'left') {
            new_element_id = swipeLeft(all_visible_elements);
            all_visible_elements.unshift(new_element_id)
            all_visible_elements.pop()
        }
        //Classen verändern
        all_elements.forEach((item) => {
            item.classList.remove('visible');
        })
        all_visible_elements.forEach((item) => {
            all_elements[item].classList.add('visible');
        })
        //Pfeile tauschen
        if (all_visible_elements[count_of_all_visible_elements - 1] < count_of_elements - 1 && all_visible_elements[0] != 0) {
            body_container.classList.remove('leftgone')
            body_container.classList.remove('rightgone')
        } else if (all_visible_elements[0] == 0) {
            body_container.classList.add('leftgone')
        } else {
            body_container.classList.add('rightgone')
        }
    }
    let swipeRight = (all_visible_elements, count_of_all_visible_elements) => {
        return all_visible_elements[count_of_all_visible_elements - 1] + 1
    }
    let swipeLeft = (all_visible_elements) => {
        return all_visible_elements[0] - 1
    }


}, false);