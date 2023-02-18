'use strict'

const opcionesEl = document.getElementById('opciones');
const textarea = document.getElementById('textarea');

textarea.focus();
opcionesEl.innerHTML='';
textarea.value = '';


textarea.addEventListener('keyup', (e) => {
    crearOpciones(e.target.value);
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        },10);
        SeleccionarRandom();
    }
});

function crearOpciones(entrada){
    const opciones = entrada.split(',').filter(opcion => opcion.trim() !== '').map(opcion => opcion.trim());
    opcionesEl.innerHTML='';
    opciones.forEach(opcion => {
        const opcionEl = document.createElement('span');
        opcionEl.classList.add('opcion');
        opcionEl.innerText = opcion;
        opcionesEl.appendChild(opcionEl);
    })
}

function SeleccionarRandom(){

    const repeticiones = 30;
    const intervalo = setInterval(() => {
        const opcionRandom = elegirOpcionRandom();

        elegirOpcion(opcionRandom);
        setTimeout(() => {
            deseleccionarOpcion(opcionRandom);
        },100)
    },100);

    setTimeout(() => {
        clearInterval(intervalo);

        setTimeout(() => {
            const opcionRandom = elegirOpcionRandom();
            elegirOpcion(opcionRandom);
            
        },100);
    }, repeticiones * 100);
}

function elegirOpcionRandom(){
    const opciones = document.querySelectorAll('.opcion');
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function elegirOpcion(opcion){
    opcion.classList.add('elegida');
}
function deseleccionarOpcion(opcion){
    opcion.classList.remove('elegida');
}