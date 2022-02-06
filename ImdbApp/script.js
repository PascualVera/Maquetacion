import { Movie } from "./movie";
import { IMDB } from "./imdb";

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
let platform = document.getElementById("plataform");

let boton = document.getElementById("boton");

let database = new IMDB();

boton.addEventListener("click", function () {
  let movie = new Movie();
  movie.title = nombre.value;
  movie.releaseYear = año.value;
  movie.nationality = pais.value;
  movie.foto = foto.value;
  movie.actors = actores.value;
  movie.director = director.value;
  movie.writer = escritor.value;
  movie.language = idioma.value;
  movie.mainCharacterName = prota.value;
  movie.producer = productor.value;
  movie.distributor = distribuidor.value;
  movie.genre = genero.value;
  movie.platform = platform.value;
  database.peliculas.push(movie);
});
