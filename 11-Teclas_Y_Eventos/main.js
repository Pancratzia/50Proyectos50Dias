'use strict'

const div = document.getElementById('insertar')

window.addEventListener('keydown', (e) => {
    div.innerHTML = `<div class="tecla">
    ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>

    <div class="tecla">
    ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="tecla">
        ${e.code}
        <small>event.code</small>
    </div>`
})