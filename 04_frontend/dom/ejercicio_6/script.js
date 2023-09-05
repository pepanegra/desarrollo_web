const url = "https://rickandmortyapi.com/api/character";
const body = document.querySelector(".personajes");
const d = document;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.results.forEach((personaje) => {
      const div = d.createElement("div");
      div.className = "personaje";
      body.append(div);
      div.classList.add("persona");
      const divimg = d.createElement("div");
      divimg.setAttribute("class", "divimg");
      div.append(divimg);
      const img = d.createElement("img");
      img.setAttribute("src", personaje.image);
      divimg.append(img);

      const divinformacion = d.createElement("div");
      divinformacion.className = "informacion";
      div.append(divinformacion);

      const divi = d.createElement("div");
      divi.setAttribute("class", "divi");
      divinformacion.append(divi);
      const divname = d.createElement("div");
      divname.setAttribute("class", "divname");
      divi.append(divname);
      const h2 = d.createElement("h2");
      h2.textContent = personaje.name;
      divname.append(h2);
      const p = d.createElement("p");
      p.textContent = personaje.status + "-" + personaje.species;
      divname.append(p);

      const divgenero = d.createElement("div");
      divgenero.setAttribute("class", "divgenero");
      divi.append(divgenero);
      const h5 = d.createElement("h2");
      h5.textContent = "Genero";
      divgenero.append(h5);
      const p1 = d.createElement("p");
      p1.textContent = personaje.gender;
      divgenero.append(p1);

      const divorigen = d.createElement("div");
      divorigen.setAttribute("class", "divorigen");
      divi.append(divorigen);
      const h4 = d.createElement("h2");
      h4.textContent = "Origen";
      divorigen.append(h4);
      const p3 = d.createElement("p");
      p3.textContent = personaje.origin.name;
      divorigen.append(p3);
    });
  });
