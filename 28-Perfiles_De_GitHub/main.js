const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const busqueda = document.getElementById('busqueda');
const main = document.getElementById('main');

async function getUsuario(usuario) {

    try {
        const { data } = await axios.get(APIURL + usuario)
        crearCartaDeUsuario(data);

    } catch (error) {
        if (error.response.status === 404) {
            crearCartaDeError('No existe un perfil de GitHub con ese nombre de usuario...');
        }

        

    }
}

async function getRepositorios(usuario) {
    try {
        const { data } = await axios.get(APIURL + usuario + '/repos');
        agregarRepositoriosDelUsuario(data);

    } catch (error) {
        if (error.response.status === 404) {
            crearCartaDeError('Hubo un problema encontrando los repositorios de este usuario...');
        }
    }
}


function crearCartaDeError(mensaje) {
    const htmlCarta = `<div class="carta">
        <h1>${mensaje}</h1>
    </div>`;

    main.innerHTML = htmlCarta;
}

function agregarRepositoriosDelUsuario(repositorios) {
    const repositoriosEl = document.getElementById('repositorios');
    repositorios

        .forEach(repo => {
            const repositorio = document.createElement('a');
            repositorio.classList.add('repositorio');
            repositorio.href = repo.html_url;
            repositorio.target = '_blank';
            repositorio.innerText = repo.name;
            repositoriosEl.appendChild(repositorio);
        });
}

function crearCartaDeUsuario(usuario) {
    const bio = "Este usuario no tiene una biografía disponible";

    if(usuario.bio!=null) {bio = usuario.bio}

    const htmlCarta = `<div class="carta">
    <div>
      <img src="${usuario.avatar_url}" alt="${usuario.name}" class="avatar">
    </div>
    <div class="info-usuario">
      <h2>${usuario.name}</h2>
      <p>${bio}</p>
    
      <ul>
        <li>${usuario.followers}<strong>Seguidores</strong></li>
        <li>${usuario.following}<strong>Seguidos</strong></li>
        <li>${usuario.public_repos}<strong>Repositorios</strong></li>
      </ul>

      <div id="repositorios">
      </div>
    
    </div>
  </div>`;
    main.innerHTML = htmlCarta;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = busqueda.value;
    if (usuario) {
        getUsuario(usuario);
        getRepositorios(usuario);
        busqueda.value = '';
    }
})