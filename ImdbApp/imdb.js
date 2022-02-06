import { readFileSync } from "fs";
import { Movie } from "./movie";
import { Professional } from "./professional";

export class IMDB {
  //Constructor

  constructor() {
    this.peliculas = [];
  }

  // Metodos

  escribirEnFicheroJSON(nombre) {
    const fs = require("fs");
    fs.writeFileSync(nombre, JSON.stringify(this.peliculas));
  }

  obtenerinstaciaIMDB(nombreFichero) {
    const fs = require("fs");
    //Lectura e instancia
    let tempBBDD = fs.readFileSync(nombreFichero, "utf-8");
    let object = JSON.parse(tempBBDD);
    let imdbBBDD = Object.setPrototypeOf(object, IMDB.prototype);

    for (let peliculas of imdbBBDD.peliculas) {
      peliculas = Object.setPrototypeOf(peliculas, Movie.prototype);
    }
    return imdbBBDD;
  }
}
