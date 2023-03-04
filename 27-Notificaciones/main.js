const btn = document.getElementById("btn");
const notificaciones = document.getElementById("notificaciones");

const integrantes =[
    "Irene",
    "Seulgi",
    "Wendy",
    "Joy",
    "Yeri"
]

btn.addEventListener("click", ()=> crearNotificacion());

function crearNotificacion(){
    const notificacion = document.createElement("div");
    notificacion.classList.add("notificacion");
    notificacion.innerText = MensajeRandom();
    notificaciones.appendChild(notificacion);

    setTimeout(()=> notificacion.remove(), 3000);
}

function MensajeRandom(){
    const random = Math.floor(Math.random() * integrantes.length);
    return integrantes[random];
}
    

