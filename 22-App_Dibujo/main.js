'use strict';
const canvas = document.getElementById('canvas');
const mas = document.getElementById('mas');
const menos = document.getElementById('menos');
const tammano_elemento = document.getElementById('tamanno');
const color_elemento = document.getElementById('color');
const limpiar_elemento = document.getElementById('limpiar');

const ctx = canvas.getContext('2d');

let tamanno = 10
let presionado = false
color_elemento.value = 'black'
let color = color_elemento.value
let x
let y

canvas.addEventListener('mousedown', (e) => {
    presionado = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    presionado = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(presionado) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, tamanno, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = tamanno * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    tammano_elemento.innerText = tamanno
}

mas.addEventListener('click', () => {
    tamanno += 5

    if(tamanno > 50) {
        tamanno = 50
    }

    updateSizeOnScreen()
})

menos.addEventListener('click', () => {
    tamanno -= 5

    if(tamanno < 5) {
        tamanno = 5
    }

    updateSizeOnScreen()
})

color_elemento.addEventListener('change', (e) => color = e.target.value)

limpiar_elemento.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))