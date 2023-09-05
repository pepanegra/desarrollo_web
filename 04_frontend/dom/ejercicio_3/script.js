const btnEstudiante = document.querySelector("#btn");
const estudiantes = document.querySelector("#estudiante");

const contenido = estudiantes.value;
function valor() {
  if (estudiantes.value == 0) {
    alert("No puede agregar un usuario sin caracteres");
    return;
  }

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = estudiantes.value;

  const listaArray = Array.from(ul.children);
  const estudianteExiste = listaArray.some(
    (li) => li.textContent == estudiantes.value
  );

  if (estudianteExiste) {
    alert("Estudiante ya existe");
  } else {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = estudiantes.value;
    ul.insertAdjacentElement("beforeend", li);
  }
  estudiantes.value = "";
}

btnEstudiante.addEventListener("click", valor);
