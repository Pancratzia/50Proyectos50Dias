'use strict'

const desplegables = document.querySelectorAll('.desplegable-faq');
desplegables.forEach(desplegable => {
    desplegable.addEventListener('click', () => {
        desplegable.parentNode.classList.toggle('activo');
    })
})