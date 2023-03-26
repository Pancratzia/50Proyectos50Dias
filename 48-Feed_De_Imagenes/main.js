const contenedor = document.querySelector('.contenedor')
const unsplashURL = 'https://source.unsplash.com/random/'
const columnas = 3

for(let i = 0; i < columnas * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getTamanno()}`
    contenedor.appendChild(img)
}

function getTamanno() {
    return `${getNumero()}x${getNumero()}`
}

function getNumero() {
    return Math.floor(Math.random() * 10) + 300
}