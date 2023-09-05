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
const tiposGatos = ["Persa", "Siames", "Maine Coon", "Bengalí"],
  gatos = [
    `El persa es una raza de gato caracterizada por tener una cara ancha y plana y un gran abundante pelaje de variados colores. Son considerados comúnmente como gatos aristocráticos.`,
    "El siamés es una raza de gato. Dentro de dicha raza se distinguen dos variedades: por un lado el siamés moderno, y por otro el siamés tradicional o Thai.",
    "El Maine Coon es una gran raza de gato domesticado. Tiene una apariencia física distintiva y valiosas habilidades de caza. Es una de las razas naturales más antiguas de América del Norte. La raza se originó en el estado de Maine.",
    "El gato de Angora es una raza de gato doméstico, originaria de la región de Anatolia en Turquía y una de las más antiguas. Por extesión, el término angora ha sido aplicado para designar a cualquier gato de pelo largo, negro y lacio, sin importar su origen o raza.",
  ];

tiposGatos.forEach((el) => {
  const li = document.createElement("li");
  li.setAttribute("class", "descripcion");
  listaD.insertAdjacentElement("afterbegin", li);
  const a = document.createElement("a");
  a.setAttribute("href", "");
  a.textContent = el;
  a.setAttribute("class", "descripcion");
  li.insertAdjacentElement("afterbegin", a);
});

// const gato1 = document.createElement(h3)
// gato1.textContent(Bengali)
// gato1.className(titulo2)

tiposGatos.forEach((el) => {
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "titulo");
  h3.textContent = el;
  padre.insertAdjacentElement("beforeend", h3);
  const p1 = document.createElement("p");
  p1.textContent = gatos[2];
  padre.append(p1);
});

const h3 = document.querySelectorAll("h3");

const gato = function () {
  const image = document.createElement("img");
  padre.insertAdjacentElement("beforeend", image);
  image.setAttribute("class", "imagen-gato");
  image.setAttribute("src", "https://http.cat/images/200.jpg");
  image.setAttribute("alt", "Gato");
};

h3.forEach((h3) => h3.addEventListener("click", gato));
