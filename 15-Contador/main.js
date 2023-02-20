'use strict';

const contadores = document.querySelectorAll('.contador');
contadores.forEach(contador => {
   contador.innerHTML = '0';

   const actualizarContador = () => {
       const target = +contador.getAttribute('data-target');
       const c = +contador.innerText;

       const incremento = target / 100;

       if(c<target){
           contador.innerText = `${Math.ceil(c + incremento)}`;
           setTimeout(actualizarContador, 1);
       }else{
           contador.innerText = target;
       }
   }

   actualizarContador();
});