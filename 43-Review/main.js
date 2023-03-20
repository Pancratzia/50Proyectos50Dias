const reviews = document.querySelectorAll('.review')
const reviewsContainer = document.querySelector('.contenedor-reviews')
const enviarBtn = document.querySelector('#enviar')
const panel = document.querySelector('#panel')
let reviewSeleccionada = 'Bueno'

reviewsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('review') && e.target.nextElementSibling) {
        removerActivo()
        e.target.parentNode.classList.add('activo')
        reviewSeleccionada = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('review') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removerActivo()
        e.target.parentNode.classList.add('activo')
        reviewSeleccionada = e.target.innerHTML
    }

})

enviarBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>¡Gracias!</strong>
        <br>
        <strong>Review: ${reviewSeleccionada}</strong>
        <p>Usaremos tu review para mejorar nuestros servicios</p>
    `
})

function removerActivo() {
    for(let i = 0; i < reviews.length; i++) {
        reviews[i].classList.remove('activo')
    }
}
