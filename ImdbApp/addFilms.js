import { Movie } from "./movie.js";
import { IMDB } from "./imdb.js";

//Variables
let nombre = document.getElementById("nombre");
let año = document.getElementById("año");
let pais = document.getElementById("pais");
let foto = document.getElementById("foto");
let actores = document.getElementById("actores");
let director = document.getElementById("director");
let escritor = document.getElementById("escritor");
let idioma = document.getElementById("lenguaje");
let prota = document.getElementById("protagonista");
let productor = document.getElementById("productor");
let distribuidor = document.getElementById("distribuidor");
let genero = document.getElementById("genero");
let platform = document.getElementById("platform");
let boton = document.getElementById("boton");

let filmData = document.getElementById("film_database");
let filmItem = document.getElementById("film_items");
let database = new IMDB();
boton.addEventListener("click", function () {
  database.peliculas.push(
    new Movie(
      nombre.value,
      año.value,
      pais.value,
      foto.value,
      genero.value,
      director.value,
      escritor.value,
      idioma.value,
      platform.value,
      prota.value,
      productor.value,
      distribuidor.value
    )
  );

  for (let i = 0; i < database.peliculas.length; i++) {
    filmData.innerHTML += `<div class="film_items index${i}"></div>`;
    for (const att in database.peliculas[i]) {
      document.getElementsByClassName(
        `index${i}`
      ).innerHTML += `<span> ${att}: ${database.peliculas[i][att]}</span>`;
    }
  }
});
