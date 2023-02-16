'use strict'

const chiste_div = document.getElementById('chiste');
const chiste_btn = document.getElementById('btn_chiste');

generarChiste();
chiste_btn.addEventListener('click', generarChiste);


async function generarChiste() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    chiste_div.innerHTML = data.joke;
}