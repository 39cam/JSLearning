/* Primer ejercicio */
const primero = document.getElementById("titulo");
primero.innerText = "Estoy dominando el DOM";

/* Segundo ejercicio */
const segundo = document.getElementsByClassName("parrafo");
console.log(segundo.length);
for (let index = 0; index < segundo.length; index++) {
  segundo[index].innerText = "Elemento modificado";
}

/* Tercer ejercicio */
const tercero = document.getElementById("caja");
tercero.style.backgroundColor = "black";
tercero.style.color = "white";
tercero.style.padding = "20px";
tercero.style.borderRadius = "1rem";

/* Cuarto ejercicio */
const cuartoReferencia = document.getElementById("lista");
const tecnologias = ["HTML", "CSS", "JavaScript"];
tecnologias.forEach((tecnologia) => {
  const elemento = document.createElement("li");
  elemento.innerText = tecnologia;
  cuartoReferencia.appendChild(elemento);
});

/* Quinto ejercicio */
const quintoElemento = document.getElementById("borrar");
quintoElemento.remove();

/* Sexto ejercicio */
const sexto = document.getElementById("foto");
sexto.setAttribute("src", "imagen2.jpg");
sexto.setAttribute("title", "Imagen editada");

/* Séptimo ejercicio */
const septimo = document.getElementById("mensaje");
septimo.classList.add(
  "rojo",
  "yellow",
); /* Tanto la inserción de clases como la remoción de las mismas
me permite hacerlo de forma múltiple */
/* septimo.classList.remove("rojo", "yellow"); */

/* Octavo ejercicio */
const octavoViejo = document.getElementById("viejo");
const octavoNuevo = document.createElement("h2");
octavoNuevo.innerText = "Texto nuevo";
octavoViejo.replaceWith(octavoNuevo);

/* Noveno ejercicio */
const noveno = document.getElementById("lista3"); /* Lugar de referencia y con el que obtengo los elementos li */
const novenoInsertar = document.createElement("li"); /* Dato a ingresar */
novenoInsertar.innerText = "Dos"; /* Texto del elemento nuevo */
const novenoUltimo = noveno.children[1]; /* Este es el elemento 3, previamente indice 1 */
novenoUltimo.before(novenoInsertar); /* Y bajo este método le estoy diciendo que antes de este
deseo insertar el nuevo valor */
console.log(noveno.children); /* Debe arrojarme ahora una lista con 3 elementos (0,1,2)) */