const sumar = (a, b) => {
  console.log(a + b);
  return;
};

const restar = function (c, d) {
  console.log(c - d);
};

function agregarnombre(arraicito, nombre) {
  arraicito.push(nombre);
  return arraicito;
}

let lista = ["hola"];

console.log(agregarnombre(lista, "mundo"));
