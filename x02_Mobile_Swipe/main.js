document.addEventListener('DOMContentLoaded', function () {
    let target = document.querySelector('#info');
    let touch_positions = [];
    window.addEventListener('touchmove', function (e) {
        let startval = e.changedTouches[0].pageX;
        touch_positions.push(startval);
        //console.log(e.changedTouches[0].pageX);
    })
    window.addEventListener('touchend', function () {
        let number_of_touches = touch_positions.length;
        let first = touch_positions[0];
        let last = touch_positions[number_of_touches - 1];
        console.log(first, last);
        if (first > last) {
            target.innerHTML = 'to the left'
        } else {
            target.innerHTML = 'to the right'
        }
        //Clear after
        touch_positions = []
    })
}, false);