'use strict';

const horaE = document.querySelector('.hora');
const minutoE = document.querySelector('.minuto');
const segundoE = document.querySelector('.segundo');
const tiempoE = document.querySelector('.tiempo');
const fechaE = document.querySelector('.fecha');
const toggleE = document.querySelector('.toggle');


const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];



toggleE.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Modo Oscuro';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Modo Claro';
    }
});

function setTiempo(){
    const tiempo = new Date();
    const mes = tiempo.getMonth();
    const dia = tiempo.getDay();
    const diaFecha = tiempo.getDate();
    const hora = tiempo.getHours();
    const horaParaReloj = hora % 12;
    const minuto = tiempo.getMinutes();
    const segundo = tiempo.getSeconds();
    const ampm = hora>=12?'PM':'AM';
    horaE.style.transform = `translate(-50%, -100%) rotate(${scale(horaParaReloj, 0, 11, 0, 360)}deg)`;
    minutoE.style.transform = `translate(-50%, -100%) rotate(${scale(minuto, 0, 59, 0, 360)}deg)`;
    segundoE.style.transform = `translate(-50%, -100%) rotate(${scale(segundo, 0, 59, 0, 360)}deg)`;

    tiempoE.innerHTML = `${horaParaReloj}:${minuto < 10 ? `0${minutos}` : minuto} ${ampm}`;

    fechaE.innerHTML =`${dias[dia]},${meses[mes]} <span class="numero"> ${diaFecha}</span>`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTiempo, 1000);

