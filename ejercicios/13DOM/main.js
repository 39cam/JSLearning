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

/* Decimo ejercicio */
const decimo = document.getElementById('final');
decimo.removeAttribute('id');
decimo.classList.add('card');
const elemento1 = document.createElement('h2');
elemento1.innerText = 'Producto';
const elemento2 = document.createElement('p');
elemento2.innerText = 'Precio: $20';
const elemento3 = document.createElement('button');
elemento3.innerText = 'Comprar';
decimo.append(elemento1, elemento2, elemento3);
/* Finalmente voy a agregar un elemento al comienzo y final de este nodo padre */
const elemento4 = document.createElement('p');
elemento4.innerText = 'Elemento insertado al principio';
const elemento5 = document.createElement('p');
elemento5.innerText = 'Elemento insertado al final';
decimo.prepend(elemento4);
decimo.append(elemento5);

/* Onceavo ejercicio */
const once = document.getElementById('once');
console.log(once.childNodes); /* Estoy retornando nodos (prácticamente todo lo que está dentro de la caja once) */ 
console.log(once.children); /* Estoy retornando elementos */

const finalfinal = document.getElementById('dosdos');
console.log(finalfinal.nextSibling); /* Retorna: Un salto de línea debido a que busca hermanos, no hijos,
y precisamente lo que va despúes del elemento de id 'dos' es un salto de línea que es contado antes del 
siguiente elemento con texto 'tres' */
console.log(finalfinal.nextElementSibling); /* Retorna:  */

/* Existe otra forma de buscar hermanos que es previousSibling y previousElementSibling
Obviamente teniedo que:

previousSibling está dado para nodos y (Cualquier tipo de contenido incluso no visible para el desarrollador que
esté al mismo nivel, ya que estamos hablando de hermanos)

previousElementSibling está dado para elementos (Etiquetas manejadas de HTML que estén al mismo nivel en la
estructura semántica) 
*/