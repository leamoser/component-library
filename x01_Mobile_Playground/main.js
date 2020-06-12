document.addEventListener('DOMContentLoaded', function () {
    let output = document.querySelector('#output');
    window.addEventListener('touchstart', function (e) {
        let x = e.changedTouches[0].pageX;
        let y = e.changedTouches[0].pageY;
        output.innerHTML = `X: ${x.toFixed(0)} | Y: ${y.toFixed(0)}`;
    }, false);
}, false);