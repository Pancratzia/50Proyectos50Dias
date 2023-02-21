'use strict';

const vasos_s = document.querySelectorAll('.vaso-s');
const litros = document.getElementById('litros');
const porcentaje = document.getElementById('porcentaje');
const falta = document.getElementById('falta');

actualizarVaso();

vasos_s.forEach((vaso_s, i) => {
   vaso_s.addEventListener('click', () => llenarVasos(i));
});

function llenarVasos(i) {
   if(vasos_s[i].classList.contains('full') && !vasos_s[i].nextElementSibling.classList.contains('full')) {
      i--;
   }
   vasos_s.forEach((vaso_s, j) => {
       if(j<=i){
        vaso_s.classList.add('full');
       }
       else{
        vaso_s.classList.remove('full');
       }
   })

   actualizarVaso();
}

function actualizarVaso(){
    const vasos_llenos = document.querySelectorAll('.vaso-s.full').length;
    const total_vasos = vasos_s.length;

    if(vasos_llenos===0){
        porcentaje.style.visibility = 'hidden';
        porcentaje.style.height = 0;
    }else{
        porcentaje.style.visibility = 'visible';
        porcentaje.style.height = `${(vasos_llenos/total_vasos)*330}px`;
        porcentaje.innerText = `${(vasos_llenos/total_vasos)*100}%`;
    }

    if(vasos_llenos===total_vasos){
        falta.style.visibility = 'hidden';
        falta.style.height = 0;
    }else{
        falta.style.visibility = 'visible';
        litros.innerText = `${2-(250*vasos_llenos/1000)}L`;
    }

}