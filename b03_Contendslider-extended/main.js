document.addEventListener('DOMContentLoaded', function () {
    let arrow = document.querySelector('#arrowright');
    //Click-Event
    arrow.addEventListener('click', () => {
        swipeThatShit();
    })
    //Key-Event
    document.onkeydown = function () {
        if (window.event.keyCode == 39) {
            swipeThatShit();
        }
    }
    //Function
    let swipeThatShit = () => {
        //RElevante Werte holen
        let all_elements = document.querySelectorAll('.contentbox')
        let count_of_elements = all_elements.length;
        let all_visible_elements = [];
        for (let i = 0; i < count_of_elements; i++) {
            if (all_elements[i].classList.contains('visible')) {
                all_visible_elements.push(i);
            }
        }
        //Werte verschieben
        let new_element = all_visible_elements[2] + 1
        all_visible_elements.push(new_element)
        all_visible_elements.shift()
    }

}, false);