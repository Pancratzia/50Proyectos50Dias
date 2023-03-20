const codigos = document.querySelectorAll('.codigo')

codigos[0].focus()

codigos.forEach((codigo, idx) => {
    codigo.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codigos[idx].value = ''
            setTimeout(() => codigos[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codigos[idx - 1].focus(), 10)
        }
    })
})