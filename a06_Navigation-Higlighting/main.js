document.addEventListener('DOMContentLoaded', function () {
    //Wichtige Variabeln holen
    let items_navigation = document.querySelectorAll('header>ul>li>a');
    let all_sections = document.querySelectorAll('section');
    let sections = [];
    all_sections.forEach((section) => {
        let create_section_object = {
            id: section.getAttribute('id'),
            positions: {
                start_position: section.offsetTop + 1,
                end_position: section.offsetTop + section.offsetHeight
            }
        }
        sections.push(create_section_object);
    })
    //Scroll-Reaktion auslösen
    window.onscroll = function () {
        changeActiveItem();
    }
    //Funktion
    let changeActiveItem = () => {
        sections.forEach((section) => {
            if (pageYOffset > section.positions.start_position - 20 && pageYOffset < section.positions.end_position - 20) {
                items_navigation.forEach((item) => {
                    let itemlink = item.getAttribute('href');
                    let sliced_itemlink = itemlink.slice(1, itemlink.length);
                    if (sliced_itemlink == section.id) {
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }
                })
            }
        })
    }
}, false);