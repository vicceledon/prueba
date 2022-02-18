let nombre = require("./victor.js");
console.log(nombre);
let fs = require("fs");
let archivo = fs.readFileSync("personajes.JSON");
console.log(archivo);
