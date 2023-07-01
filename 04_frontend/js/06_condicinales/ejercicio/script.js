// function tryhard(numero) {
//   if (numero % 3 == 0 && numero % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (numero % 3 == 0) {
//     console.log("Fizz");
//   } else if (numero % 5 == 0) {
//     console.log("Buzz");
//   } else if (numero % 3 > 0 && numero % 5 > 0) {
//     console.log("El numero que ha ingresado no es multiplo del 3 ni del 5");
//   }
// }

// tryhard(false);

// function par(Number) {
//   if (Number % 2 == 0) {
//     console.log("El numero es par");
//   } else if (Number % 2 > 0) {
//     console.log("El numero es impar");
//   }
// }

// par(8);
// par(57);

let w = prompt("Ingrese su peso");
let h = prompt("Ingresa tu altura");
let imt = w / h ** 2;
if (imt < 18.5) {
  console.log("Underweight");
} else if (imt >= 18.5 && imt < 25) {
  console.log("Normal");
} else if (imt >= 25 && imt < 30) {
  console.log("Overweight");
} else {
  console.log("Obesity");
}
