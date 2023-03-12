const imgs = document.getElementById('imgs')
const izquierdaBtn = document.getElementById('izquierda')
const derechaBtn = document.getElementById('derecha')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

derechaBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

izquierdaBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})