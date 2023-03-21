'use strict';

const rango = document.getElementById('rango')

//Hacer que la la etiqueta al inicio esté en la mitad

rango.addEventListener('input', (e) => {
    const num = +e.target.value
    const etiqueta = e.target.nextElementSibling

    const ancho_rango = getComputedStyle(e.target).getPropertyValue('width')
    const etiqueta_ancho = getComputedStyle(etiqueta).getPropertyValue('width')

    const num_ancho = +ancho_rango.substring(0, ancho_rango.length - 2)
    const num_etiqueta_ancho = +etiqueta_ancho.substring(0, etiqueta_ancho.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = num * (num_ancho / max) - num_etiqueta_ancho / 2 + escala(num, min, max, 10, -10)

    etiqueta.style.left = `${left}px`
    etiqueta.innerHTML = num
})



const escala = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}