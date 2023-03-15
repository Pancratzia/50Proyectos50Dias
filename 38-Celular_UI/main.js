'use strict';

const contenidos = document.querySelectorAll('.contenido');
const itemsDeLista = document.querySelectorAll('nav ul li');

itemsDeLista.forEach((item, i) => {
    item.addEventListener('click', () => {
        esconderContenidos();
        esconderItems();

        item.classList.add('activo');
        contenidos[i].classList.add('mostrar');
    })
})


function esconderContenidos() {
    contenidos.forEach((contenido) => {
        contenido.classList.remove('mostrar');
    })
}

function esconderItems() {
    itemsDeLista.forEach((item) => {
        item.classList.remove('activo');
    })
}