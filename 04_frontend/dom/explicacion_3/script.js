const abrir = document.querySelector("#abrir-ventana");
const cerrar = document.querySelector("#cerrar-ventana");
const imprimir = document.querySelector("#imprimir-ventana");

let ventana;

abrir.addEventListener("click", () => {
  ventana = open("https://fabian-gomez.vercel.app");
});
cerrar.addEventListener("click", () => {
  ventana.close();
});
imprimir.addEventListener("click", () => {
  alert("Imprimite la ventana");
  print();
});
