document.addEventListener('DOMContentLoaded', function () {
    let image = document.querySelector('img');
    let startX;
    let startY;

    image.addEventListener('dragstart', function (e) {
        startX = e.clientX;
        startY = e.clientY;
    })
    let movementX;
    let movementY;
    let i = false;
    image.addEventListener('drag', function (e) {
        movementX = e.clientX - startX;
        movementY = e.clientY - startY;
        console.log(movementX)
        let posX = getPositionValue(image.style.left);
        let posY = getPositionValue(image.style.top);
        if (i == false) {
            image.style.left = (posX + movementX) + 'px';
            image.style.top = (posY - movementY) + 'px';
            i = true;
            console.log('first')
        } else {
            image.style.left = movementX + 'px';
            image.style.top = movementY + 'px';
        }
    })

    image.addEventListener('dragend', function (e) {
        console.log('lea')
        i = false
    })

    let getOriginPosition = () => {
        //Code
    }
    let setNewPosition = () => {
        //Code
    }
    let getPositionValue = (value) => {
        let length = value.length;
        let rawval = value.substr(0, length - 2);
        return parseInt(rawval);
    }
}, false);