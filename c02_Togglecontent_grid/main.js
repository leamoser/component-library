document.addEventListener('DOMContentLoaded', function () {
    //Vars
    const boxen = document.querySelectorAll('.box');
    const gridsize = getComputedStyle(document.documentElement).getPropertyValue('--bx-grid');
    const maincontainer = document.querySelector('main');

    //Code
    let createBox = (text) => {
        let box = document.createElement('div');
        box.classList.add('detailbox');
        let cont = document.createElement('p');
        cont.innerHTML = text;
        box.appendChild(cont);
        return box;
    }
    let cleanContainer = () => {
        document.querySelectorAll('.detailbox').forEach(box => {
            box.remove();
        })
    }
    let styleBox = (box, id) => {
        const gridposition = Math.floor(parseInt(id)/(parseInt(gridsize) + 0.1)) + 2
        box.style.gridColumn = '1/' + (parseInt(gridsize) + 1);
        box.style.gridRow = gridposition + '/' + gridposition;
        box.style.height = '100%';
    }
    let appendBox = (box, id) =>{
        styleBox(box, id)
        cleanContainer();
        maincontainer.appendChild(box);
    }
    let initBoxsizing = () => {
        boxen.forEach((box) => {
           box.addEventListener('click', function (){
               appendBox(createBox(this.dataset.content), this.dataset.id);
           })
        })
    }

    //Init
    initBoxsizing();
}, false);