const d = document;
let relojTiempo;
const h = d.querySelector(".hora");

export function reloj() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".btn-activar")) {
      relojTiempo = setInterval(() => {
        let relojH = new Date().toLocaleTimeString();
        h.textContent = relojH;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(".btn-pausar")) {
      clearInterval(relojTiempo);
      d.querySelector(".btn-activar").disabled = false;
      h.textContent = "";
    }
  });
}
