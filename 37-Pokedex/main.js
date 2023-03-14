'use strict';
const contenedor_pokedex = document.getElementById('contenedor-pokedex')
const contador = 150
const colores = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const tipos = Object.keys(colores)

const fetchPokemones = async () => {
    for(let i = 1; i <= contador; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    crearCartaPokemon(data)
}

const crearCartaPokemon = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const tipos_de_pokemones = pokemon.types.map(type => type.type.name)
    const type = tipos.find(type => tipos_de_pokemones.indexOf(type) > -1)
    const color = colores[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="contenedor-imagen">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="informacion">
        <span class="numero">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Tipo: <span>${type}</span> </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    contenedor_pokedex.appendChild(pokemonEl)
}

fetchPokemones()