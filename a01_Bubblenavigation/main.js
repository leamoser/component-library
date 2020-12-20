document.addEventListener('DOMContentLoaded', function () {
    let navcontainer = document.querySelector('.nav ul');
    let sections = document.querySelectorAll('main section');
    //Initialisieren
    let getSectionsPositions = () => {
        let heights = [];
        sections.forEach((section) => {
            heights.push(section.offsetTop);
        })
        heights.push(document.documentElement.scrollHeight);
        return heights;
    }
    let heights = getSectionsPositions();
    //Scrollen als Event
    window.onscroll = function () {
        console.log(pageYOffset);
        changeNavi(window.pageYOffset, heights.length);
    }
    //Sections holen
    let changeNavi = (offset, numberofsections) => {
        let plus = window.innerHeight / 2;
        for (let i = 0; i < (numberofsections - 1); i++) {
            if (offset + plus > heights[i] && offset + plus < heights[i + 1]) {
                navcontainer.children[i].children[0].classList.add('active');
                //console.log()
                /*for (let x = 0; x < navcontainer.children.length; x++) {
                    navcontainer.children[x].children[0].classList.add('active');
                }*/
            } else {
                navcontainer.children[i].children[0].classList.remove('active');
            }
        }
        //console.log(heights);
        //console.log(offset);
    }
}, false);