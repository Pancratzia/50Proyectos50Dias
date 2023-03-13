'use strict';

const contenedor  = document.getElementById('contenedor');
const colores = ['#FF0000', '#FFa500', '#ffff00', '#008000', '#0000FF', '#4B0082', '#ee82ee','#FFFFFF'];
const CUADROS = 600;

for (let i = 0; i < CUADROS; i++) {
    const cuadro = document.createElement('div');
    cuadro.classList.add('cuadro');
    cuadro.addEventListener('mouseover', () => {
        setColor(cuadro);
    })
    cuadro.addEventListener('mouseout', () => {
        removerColor(cuadro);
    })
    contenedor.appendChild(cuadro);
}

function setColor(cuadro) {
    const color = colorRandom();
    cuadro.style.backgroundColor = color;
    cuadro.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removerColor(cuadro) {
    cuadro.style.backgroundColor = '#1d1d1d';
    cuadro.style.boxShadow = `0 0 2px #000`;

}

function colorRandom() {
    return colores[Math.floor(Math.random() * colores.length)];
}