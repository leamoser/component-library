document.addEventListener('DOMContentLoaded', function () {
    //Trigger Scoll Reaction
    window.onscroll = function () {
        showSections()
    }
    //Important Stuff
    let all_sections = document.querySelectorAll('section')
    //Function
    let showSections = () => {
        all_sections.forEach((section) => {
            if (section.offsetTop <= pageYOffset + (window.innerHeight / 2)) {
                section.classList.remove('verschoben')
            }
        })
    }
}, false);