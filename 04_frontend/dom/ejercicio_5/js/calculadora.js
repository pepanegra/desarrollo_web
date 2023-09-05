const d = document;

export function calculadora() {
  const pantalla = d.querySelector(".pantalla");
  const botones = d.querySelectorAll(".btn-calculadora");
  const clear = d.querySelector("#c");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const valor = boton.textContent;
      if (boton.id === "c") {
        pantalla.textContent = "0";
        return;
      }

      if (boton.id === "borrar") {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        if (pantalla.textContent === "") {
          pantalla.textContent = "0";
        }
        return;
      }

      if (
        pantalla.textContent[0] === "/" ||
        pantalla.textContent[0] === "*" ||
        pantalla.textContent[0] === "+" ||
        pantalla.textContent[0] === "-" ||
        pantalla.textContent[0] === "."
      ) {
        pantalla.textContent = "0";
      }

      if (boton.id === "igual") {
        try {
          pantalla.textContent = eval(pantalla.textContent);
        } catch (error) {
          console.log();
        }

        return;
      }

      if (pantalla.textContent === "0") {
        pantalla.textContent = valor;
      } else {
        pantalla.textContent += valor;
      }
    });
  });
}
