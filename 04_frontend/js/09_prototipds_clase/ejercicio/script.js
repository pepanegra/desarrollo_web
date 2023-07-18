class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `El vehiculo ${this.marca},  ${this.modelo}, del año ${this.año}`;
  }

  apagar() {
    return "Se apago el vehiculo";
  }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }

  obtenerDetalles() {
    return `El ${this.marca} ${this.modelo} del año ${this.año} tiene ${this.puertas} puertas`;
  }
}

const kia = new Automovil("Kia", "picanto", 2020, 5);

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }

  obtenerDetalles() {
    return `La moto ${this.marca} ${this.modelo} del año ${this.año} tiene un cilindrage de ${this.cilindrada} cc`;
  }
}

let moto = new Motocicleta("Yamaha", "MT-09", 2015, 900);

console.log(kia.obtenerDetalles());
