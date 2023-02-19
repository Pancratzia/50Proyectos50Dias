'use strict';

const desplegable = document.getElementById('desplegable');
const nav = document.getElementById('nav');

desplegable.addEventListener('click', () => {
    nav.classList.toggle('activo');
})