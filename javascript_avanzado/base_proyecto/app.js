//const axios = require('axios')
let allPokemons = [];

const obtenerPokemones = (limit) => {
  const arrayPokemones = [];
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  axios
    .get(URL)
    .then((response) => {
      let infoPokemones = response.data.results;
      //console.log(infoPokemones)
      infoPokemones.forEach((pokemon) => {
        axios
          .get(pokemon.url)
          .then((infoPokemon) => {
            //console.log(infoPokemon.data.types)

            let infoPokemonIndividual = {
              nombre: infoPokemon.data.name,
              tipos: infoPokemon.data.types.map((tipo) => tipo.type.name),
              urlImagen: infoPokemon.data.sprites.front_default,
            };

            //console.log(infoPokemonIndividual)
            arrayPokemones.push(infoPokemonIndividual);
          })
          .catch((error) => error);
      });
    })
    .catch((error) => console.log(error));

  //Ver como poder implementar el PromiseAll()

  setTimeout(() => {
    console.log(arrayPokemones);
    allPokemons = arrayPokemones;
    crearCards(allPokemons);
  }, 3000);
};

//obtenerPokemones(150) // tiempo de espera que js no respeta

let crearCards = (pokemones) => {
  let contenedorPokemones = document.getElementById("pokemon-container");
  pokemones.forEach((pokemon) => {
    let card = document.createElement("div");
    let titulo = document.createElement("p");
    let imagen = document.createElement("img");

    card.append(titulo, imagen);
    contenedorPokemones.append(card);

    titulo.innerText = pokemon.nombre;
    imagen.src = pokemon.urlImagen;

    card.setAttribute("class", "card");
  });
};
//console.log(allPokemons) // Nos aparece vacio porque aun la funcion obtenerpokemones no ha devuelto una respuesta
