const nav = document.querySelector(".nav");
window.addEventListener("scroll", arreglarNav);

function arreglarNav() {
    if (window.scrollY > nav.offsetHeight +150) { 
        nav.classList.add("activo");
    } else {
        nav.classList.remove("activo");
    }
}