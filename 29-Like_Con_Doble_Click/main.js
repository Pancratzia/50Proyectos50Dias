'use strict';

const imagen = document.querySelector('.imagen');
const veces = document.querySelector('#veces');

let click = 0;
let vecesClick = 0;

imagen.addEventListener('click', (e) => {
    if(click===0){
        click = new Date().getTime();
    }else{
        if(new Date().getTime() - click < 800){
            crearCorazon(e);
            click = 0;
        }else{
            click = new Date().getTime();
        }
    }
});

function crearCorazon(e){
    const corazon = document.createElement('i');
    corazon.classList.add('fas');
    corazon.classList.add('fa-heart');
    
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xDentro = x - leftOffset;
    const yDentro = y - topOffset;

    corazon.style.left = xDentro + 'px';
    corazon.style.top = yDentro + 'px';

    imagen.appendChild(corazon);
    veces.innerHTML = ++vecesClick;

    setTimeout(() => {
        corazon.remove();
    },1000);
}
