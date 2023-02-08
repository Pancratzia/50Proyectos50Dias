const abrir = document.getElementById("abrir");

const cerrar = document.getElementById("cerrar");

const contenedor = document.querySelector(".contenedor");

abrir.addEventListener("click", () => {
    contenedor.classList.add("mostrar-nav");
})

cerrar.addEventListener("click", () => {
    contenedor.classList.remove("mostrar-nav");
})