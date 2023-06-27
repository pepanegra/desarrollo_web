/*function sumar(a, b) {
    return a + b;
  }
  
  function mostrarEnPantalla(a, b) {
    let nunmer1 = parseFloat(prompt("cual es el primer numero?"));
    let number2 = parseFloat(prompt("cual es el primer numero?"));
    let resultado5 = sumar(nunmer1, number2);
    ;
  
    document.write("La suma es: " + resultado);
    document.write("<br>Finalizo la aplicacion");
  }
  
  mostrarEnPantalla();*/

function sumar(a, b) {
  return (a * b) / 2;
}

function mostrarEnPantalla(a, b) {
  let base = parseFloat(prompt("cual es la base de el triangulo?"));
  let altura = parseFloat(prompt("cual es la altura del triangulo10?"));
  let resultado = sumar(base, altura);

  document.write("La area es: " + resultado + "cm29");
  document.write("<br>Finalizo la aplicacion");
}

mostrarEnPantalla();
