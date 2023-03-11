'use strict';

const toggles = document.querySelectorAll('.toggle');
const bueno = document.getElementById('bueno');
const bonito = document.getElementById('bonito');
const barato = document.getElementById('barato');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => truco(e.target));
})

function truco(seleccionado) {
   if(bueno.checked && bonito.checked && barato.checked){
       if(bueno===seleccionado){
        barato.checked = false;
       }

       if(bonito===seleccionado){
        bueno.checked = false;
       }

       if(barato===seleccionado){
        bonito.checked = false;
       }
   }
}