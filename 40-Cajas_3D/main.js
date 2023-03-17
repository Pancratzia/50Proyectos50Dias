const cajas = document.getElementById('cajas');
const btn = document.getElementById('btn');

crearCajas();

btn.addEventListener('click', () => {
    cajas.classList.toggle('grande');
});


function crearCajas(){

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            const caja = document.createElement('div');
            caja.classList.add('caja');
            caja.style.backgroundPosition = `${-j*125}px ${-i*125}px`;
            cajas.appendChild(caja);
        }
    }
}

