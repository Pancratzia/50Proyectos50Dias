'use strict'
const progreso = document.getElementById('progreso');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circulos = document.querySelectorAll('.circulo');

let activo = 1;

next.addEventListener('click', () => {
    activo++;
    if (activo > circulos.length) {
        activo = circulos.length;
    }

    actualizar();
})

prev.addEventListener('click', () => {
    activo--;
    if (activo < 1) {
        activo = 1;
    }

    actualizar();
})


function actualizar(){
    circulos.forEach((c, i) => {
        if(i < activo){
            c.classList.add('activo');
        }else{
            c.classList.remove('activo');
        }
    })

    const activos = document.querySelectorAll('.activo');
    const porcentaje = ((activos.length -1) / (circulos.length-1)) * 100;
    progreso.style.width = `${porcentaje}%`;

    if(activo === 1){
        prev.disabled = true;
    }else if(activo === circulos.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}