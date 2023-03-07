'use strict';

const TextoEL = document.getElementById('texto');
const velocidadEL = document.getElementById('velocidad');
const texto = "Pancratzia Automática...";
let i = 1;
let velocidad = 300/velocidadEL.value;

escribirTexto();

function escribirTexto() {
    TextoEL.innerText = texto.slice(0, i);
    i++;

    if (i > texto.length) {
        i = 1;
    }

    setTimeout(escribirTexto, velocidad);
}

velocidadEL.addEventListener('input', (e) => {
    velocidad = 300/e.target.value;
});