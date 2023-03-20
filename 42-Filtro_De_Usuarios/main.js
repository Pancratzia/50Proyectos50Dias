'use strict';
const result = document.getElementById('result')
const filtro = document.getElementById('filtro')
const listado = []

obtenerDatos()

filtro.addEventListener('input', (e) => filtrarDatos(e.target.value))

async function obtenerDatos() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listado.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filtrarDatos(searchTerm) {
    listado.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('ocultar')
        } else {
            item.classList.add('ocultar')
        }
    })
}