'use strict';

const password = document.getElementById('password');
const fondo = document.getElementById('fondo');

password.addEventListener('input', (e) => {
   const input = e.target.value;
    const largo = input.length;
    const blur = 20 - largo*2;

    fondo.style.filter = `blur(${blur}px)`;
});