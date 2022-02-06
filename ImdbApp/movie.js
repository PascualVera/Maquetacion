import { Professional } from "./professional";

export class Movie {
  //Atributos

  //Constructor
  constructor() {
    this.title;
    this.releaseYear;
    this.nationality;
    this.actors;
    this.genre;
    this.foto;
    this.director;
    this.writer;
    this.language;
    this.platform;
    this.mainCharacterName;
    this.producer;
    this.distributor;
    this.genre;
  }
  //Public metods
  getStringActors() {
    let actores = "";
    for (let i = 0; i < this.actors.length; i++) {
      if (i == this.actors.length - 1) {
        actores += this.actors[i].name + ".";
      } else {
        actores += this.actors[i].name + ", ";
      }
    }
    return actores;
  }
  printAll() {
    console.log(`Título: ${this.title}
Año de lanzamiento: ${this.releaseYear}
Actores: ${this.getStringActors()}
País: ${this.nationality}
Director: ${this.director.name}
Guionista: ${this.writer.name}
Idioma: ${this.language}
Plataforma: ${this.platform}
Universo Marvel: ${this.isMCU}
Protagonista: ${this.mainCharacterName}
Productor: ${this.producer.name}
Distribuidora: ${this.distributor}
Género: ${this.genre}`);
  }
}
