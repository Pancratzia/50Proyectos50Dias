'use strict';


const derecha = document.querySelector('.derecha');
const izquierda = document.querySelector('.izquierda');
const contenedor = document.querySelector('.contenedor');


izquierda.addEventListener('mouseenter', () => {
    contenedor.classList.add('hover-izq');
});
izquierda.addEventListener('mouseleave', () => {
    contenedor.classList.remove('hover-izq');
});

derecha.addEventListener('mouseenter', () => {
    contenedor.classList.add('hover-der');
});
derecha.addEventListener('mouseleave', () => {
    contenedor.classList.remove('hover-der');
})