const agregarBtn = document.getElementById('agregar')

const notas = JSON.parse(localStorage.getItem('notas'))

if(notas) {
    notas.forEach(nota => agregarNota(nota))
}

agregarBtn.addEventListener('click', () => agregarNota())

function agregarNota(text = '') {
    const nota = document.createElement('div')
    nota.classList.add('nota')

    nota.innerHTML = `
    <div class="tools">
        <button class="editar"><i class="fas fa-edit"></i></button>
        <button class="borrar"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editarBtn = nota.querySelector('.editar')
    const borrarBtn = nota.querySelector('.borrar')
    const main = nota.querySelector('.main')
    const textArea = nota.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)

    borrarBtn.addEventListener('click', () => {
        nota.remove()

        updateLS()
    })

    editarBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(nota)
}

function updateLS() {
    const notasText = document.querySelectorAll('textarea')

    const notas = []

    notasText.forEach(nota => notas.push(nota.value))

    localStorage.setItem('notas', JSON.stringify(notas))
}