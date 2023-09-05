const alturaInput = document.querySelector("#altura");
const pesoInput = document.querySelector("#peso");
const resultado = "su indice de masa corporar es de";
const eP = document.querySelector("#parrafo");
const btn = document.querySelector("#boton");
const d = document;
export function calcular(e) {
  d.addEventListener("click", () => {
    e.preventDefault();
    const altura = alturaInput.value;
    const peso = pesoInput.value;
    const imc = peso / (altura * altura);

    const total = parseFloat(imc.toFixed(1));

    if (total < 18.5) {
      eP.textContent = `${resultado} ${total} estas muy consumido por el vicio y la paja deje eso.`;
    } else if (total >= 18.5 && total < 25) {
      eP.textContent = `${resultado} ${total} ta bien de peso siga haci.`;
    } else if (total >= 25 && total < 30) {
      eP.textContent = `${resultado} ${total} ta como gordo no.`;
    } else {
      eP.textContent = `${resultado} ${total} ta perfecto para la lechona el 31.`;
    }

    alturaInput = "";
    pesoInput = "";
  });
}

btn.addEventListener("click", calcular);

export function sumar(a, b) {
  console.log(a + b);
}
