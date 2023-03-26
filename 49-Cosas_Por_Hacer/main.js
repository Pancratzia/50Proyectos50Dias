const form = document.getElementById('form')
const input = document.getElementById('input')
const porHacerUL = document.getElementById('porHacer')

const porHacer = JSON.parse(localStorage.getItem('porHacer'))

if(porHacer) {
    porHacer.forEach(tarea => agregartarea(tarea))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    agregartarea()
})

function agregartarea(tarea) {
    let tareaText = input.value

    if(tarea) {
        tareaText = tarea.text
    }

    if(tareaText) {
        const tareaEl = document.createElement('li')
        if(tarea && tarea.completed) {
            tareaEl.classList.add('completed')
        }

        tareaEl.innerText = tareaText

        tareaEl.addEventListener('click', () => {
            tareaEl.classList.toggle('completed')
            actualizar()
        }) 

        tareaEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            tareaEl.remove()
            actualizar()
        }) 

        porHacerUL.appendChild(tareaEl)

        input.value = ''

        actualizar()
    }
}

function actualizar() {
    porHacerEl = document.querySelectorAll('li')

    const porHacer = []

    porHacerEl.forEach(tareaEl => {
        porHacer.push({
            text: tareaEl.innerText,
            completed: tareaEl.classList.contains('completed')
        })
    })

    localStorage.setItem('porHacer', JSON.stringify(porHacer))
}