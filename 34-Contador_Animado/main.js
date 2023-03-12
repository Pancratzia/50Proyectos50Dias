const numeros = document.querySelectorAll('.numeros span')
const contador = document.querySelector('.contador')
const mensajeFinal = document.querySelector('.final')
const repetir = document.querySelector('#repetir')

correrAnimacion()

function resetDOM() {
  contador.classList.remove('hide')
  mensajeFinal.classList.remove('show')

  numeros.forEach((num) => {
    num.classList.value = ''
  })

  numeros[0].classList.add('in')
}

function correrAnimacion() {
  numeros.forEach((num, idx) => {
    const nextToLast = numeros.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        contador.classList.add('hide')
        mensajeFinal.classList.add('show')
      }
    })
  })
}

repetir.addEventListener('click', () => {
  resetDOM()
  correrAnimacion()
})