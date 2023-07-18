// creando el padre
const padre = document.querySelector("#app");

// creando el h1
const titulo = document.createElement("h1");
titulo.textContent = "Los Gatos";
padre.insertAdjacentElement("afterbegin", titulo);
titulo.setAttribute("class", "titulo");

// parrafo
const parrafo = document.createElement("p");
parrafo.textContent = `Los gatos son animales domésticos que se caracterizan por su elegancia,
agilidad y carácter independiente. Son mascotas muy populares en todo el
mundo.`;
padre.insertAdjacentElement("beforeend", parrafo);
parrafo.setAttribute("class", "descripcion");

// imagen
const imagen = document.createElement("img");
padre.insertAdjacentElement("beforeend", imagen);
imagen.setAttribute("class", "imagen-gato");
imagen.setAttribute("src", "https://http.cat/images/200.jpg");
imagen.setAttribute("alt", "Gato");

// creando el h2
const titulo2 = document.createElement("h2");
titulo2.textContent = "Razas de Gatos";
padre.insertAdjacentElement("beforeend", titulo2);
titulo2.setAttribute("class", "titulo");

// creando el ul
const listaD = document.createElement("ul");
padre.insertAdjacentElement("beforeend", listaD);
listaD.setAttribute("class", "razas-gatos");

// creando los li
const tiposGatos = ["Persa", "Siames", "Maine Coon", "Bengalí"];

tiposGatos.forEach((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  li.setAttribute("class", "descripcion");
  listaD.insertAdjacentElement("afterbegin", li);
});
