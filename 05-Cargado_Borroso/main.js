'use strict'

const textoCarga = document.querySelector('.texto-carga');
const bg =  document.querySelector('.bg');

let carga = 0;


let intervalo = setInterval(efectoBorroso, 30);

function efectoBorroso(){
    carga++;
    if(carga>100){
        limpiarIntervalo(intervalo);
    }

    textoCarga.innerHTML = `${carga}%`;

    textoCarga.style.opacity = scale(carga, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(carga, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}