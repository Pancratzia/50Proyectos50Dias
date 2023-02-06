'use strict'

const paneles = document.querySelectorAll('.panel');


paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    paneles.forEach(panel => {
        panel.classList.remove('active');
    })
}