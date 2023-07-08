// function persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// persona.saludar = function () {
//   return "Hola gente soy " + this.nombre;
// };

// const Lorena = new persona("Lorena", 16);
// const Jose = new persona("Jose", 20);

//clases con herencias
class animal {
  constructor(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }
  saludar() {
    return "hola soy " + this.nombre;
  }
}
