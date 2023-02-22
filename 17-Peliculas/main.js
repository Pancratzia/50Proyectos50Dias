'use strict';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e001e6a9b65e56eb8f19aaf46de5d8d7&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?&api_key=e001e6a9b65e56eb8f19aaf46de5d8d7&query="';
const SEARCH_URL2 = 'https://api.themoviedb.org/3/search/movie?&api_key=e001e6a9b65e56eb8f19aaf46de5d8d7&query="a"';

const formulario = document.getElementById('formulario');
const busqueda = document.getElementById('busqueda');
const main = document.getElementById('main');

getPeliculas(SEARCH_URL2);

async function getPeliculas(url) {
    const res = await fetch(url);
    const data = await res.json();

    mostrarPeliculas(data.results);
}

function mostrarPeliculas(peliculas) {
    main.innerHTML = '';

    peliculas.forEach((pelicula) => {
        const { title, poster_path, vote_average, overview } = pelicula;
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula');

        //vote average format 1 decimal
        const voteAverage = vote_average.toFixed(1);
        peliculaDiv.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">">

            <div class="info-pelicula">
                <h3>"${title}"</h3>
                <span class="${getColorReview(voteAverage)}">${voteAverage}</span>
            </div>
            <div class="resenna">
                <h3>Reseña</h3>
                ${overview}
            </div>`;
            main.appendChild(peliculaDiv);
    });


}

function getColorReview(puntuacion){
    if(puntuacion >= 8){
        return 'verde';
    }else if(puntuacion >= 5){
        return 'naranja';
    }else{
        return 'rojo';
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const termino_busqueda = busqueda.value;

    if(termino_busqueda && termino_busqueda!==''){
        getPeliculas(SEARCH_URL + termino_busqueda);
        busqueda.value = '';
    }else{
        window.location.reload();
    }
})