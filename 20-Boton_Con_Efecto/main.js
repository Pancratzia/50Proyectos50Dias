'use strict';

const botones = document.querySelectorAll('.efecto');

botones.forEach(boton => {
    boton.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const btnArriba = e.target.offsetTop;
        const btnIzquierda = e.target.offsetLeft;

        const xAdentro = x - btnIzquierda;
        const yAdentro = y - btnArriba;

        const circulo = document.createElement('span');
        circulo.classList.add('circulo');
        circulo.style.top = yAdentro + 'px';
        circulo.style.left = xAdentro + 'px';

        this.appendChild(circulo);
        setTimeout(() =>  circulo.remove(),500);
    });
})