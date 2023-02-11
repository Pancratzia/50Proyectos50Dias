const cajas = document.querySelectorAll(".caja");
window.addEventListener("scroll", revisarCajas);
revisarCajas();

function revisarCajas(){
    const triggerB = window.innerHeight / 5 * 4;

    cajas.forEach(caja => {
        const topCaja = caja.getBoundingClientRect().top;

        if(topCaja < triggerB){
            caja.classList.add("mostrar");
        }else{
            caja.classList.remove("mostrar");
        }
    })
}