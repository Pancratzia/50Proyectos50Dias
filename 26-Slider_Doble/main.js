const contenedor = document.querySelector('.contenedor-slider')
const derecho = document.querySelector('.derecho')
const izquierdo = document.querySelector('.izquierdo')
const arriba = document.querySelector('.arriba')
const abajo = document.querySelector('.abajo')
const tamanno = derecho.querySelectorAll('div').length

let activo = 0

izquierdo.style.top = `-${(tamanno - 1) * 100}vh`

arriba.addEventListener('click', () => cambiarSlide('up'))
abajo.addEventListener('click', () => cambiarSlide('down'))

const cambiarSlide = (direction) => {
    const altura = contenedor.clientHeight
    if(direction === 'up') {
        activo++
        if(activo > tamanno - 1) {
            activo = 0
        }
    } else if(direction === 'down') {
        activo--
        if(activo < 0) {
            activo = tamanno - 1
        }
    }

    derecho.style.transform = `translateY(-${activo * altura}px)`
    izquierdo.style.transform = `translateY(${activo * altura}px)`
}