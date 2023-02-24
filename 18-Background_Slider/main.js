
const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnizquierdo = document.getElementById('izquierda');
const btnderecho = document.getElementById('derecha');

let activo = 0;

btnderecho.addEventListener('click', () => {
  activo++

  if (activo > slides.length - 1) {
    activo = 0
  }

  setBgToBody()
  setactivo()
})

btnizquierdo.addEventListener('click', () => {
  activo--

  if (activo < 0) {
    activo = slides.length - 1
  }

  setBgToBody()
  setactivo()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activo].style.backgroundImage
}

function setactivo() {
  slides.forEach((slide) => slide.classList.remove('activo'))

  slides[activo].classList.add('activo')
}