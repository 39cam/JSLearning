/* getElementById: Obtiene un único elemento*/
const titulo = document.getElementById('titulo');
console.log(titulo);


/* getElementsByClassName Puede obtener un listado de elementos (Un HTML collection)*/
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0]);
console.log(toppings[2].id);


/* getElementsByTagName: Elementos según una etiqueta HTML */
const items = document.getElementsByTagName('li');
console.log(items);
console.log(items.length);
console.log(items[3]);


/* Los siguientes elementos permiten hacer selecciones mucho más específicas */

/* .querySelector(): Me permite obtener elementos con base en coincidencias de nombre, bien sea una
clase, id, etc. (El primero que encuentre) */
const aceitunas = document.querySelector('#aceitunas');
console.log(aceitunas);

const primeroDeVarios = document.querySelector('.topping');
console.log(primeroDeVarios); /* En este caso está tomando el primer topping de todos los que hay, 
es decir, está tomando el topping de aceituna*/

/* El poder de querySelector está dado en la posibilidad de tomar un elemento según varios criterios,
por ejemplo */
const miElemento = document.querySelector('.topping.fondo-naranja') /* Esto me debe retornar el li de cebolla */
console.log(miElemento); /* Y efectivamente tengo dicho resultado, siendo cebolla el primero que cumple con 
estos criterios */

const miElemento2 = document.querySelector('ul li.fondo-naranja');
console.log(miElemento2); /* Este debe dar el mismo resultado, y efectivamente lo cumple */

const miElementoNoCafe = document.querySelector('ul li:not(.fondo-cafe)');
console.log(miElementoNoCafe); /* También debe ser cebolla */


/* .querySelectoraAll(): Obtiene todos los elementos con la coincidencia insertada por parámetro */
const miListaNaranja = document.querySelectorAll('ul li.fondo-naranja');

/* No se obtiene una HTMLCollection, se obtiene una lista de nodos...
Por lo que pueden cambiar ciertas cositas que podré ir viendo más adelante a medida que avance usando estos items
*/

console.log(miListaNaranja); /* El resultado deber ser la lista de cebolla como de champiñones */
console.log(miListaNaranja.length);

/* Una lista de nodos se considera un objeto en JS */
console.log(typeof miListaNaranja);

console.log(miListaNaranja[0]);
console.log(miListaNaranja[1]);


/* Modificar estilos y valores de módulos en HTML */

const primerTopping = document.querySelector('.topping');
console.log(primerTopping);

/* De esta manera estoy visualizando el estilo que tiene el primer topping (Aceitunas)
El elemento es de tipo CSSStyleDeclaration, se encuentran todos los posibles estilos que puedo aplicar
margin, padding, todo este tipo de elementos está aquí, la unica diferencia es que cada propiedad es
denominada con camel case, por ejemplo backgroundColor */
console.log(primerTopping.style);

/* Los cambios se realizan como declaración de variables, no como un parámetro */
primerTopping.style.backgroundColor = 'blue'; /* Cuando se realizan estas modificaciones, se inserta el estilo
directamente en línea, agregando las propiedades que se están asignando acá */

primerTopping.style.color = '#6dff00'; /* El color de la letra debe haber cambiado por este verde indicado */
primerTopping.style.textTransform = 'uppercase'; /* Se hace mayuscula */


/* Formas de obtener el texto de un nodo en HTML */
const listaDeToppings = document.getElementById('lista'); /* Obteniendo la lista (nodo padre de los nodos li) */

/* Texto plano */
console.log(listaDeToppings.innerText);

/* Texto incluyendo espacios que aplica el centrado, es decir, el texto + una tabulación que se aplicó con
text-align: center */
console.log(listaDeToppings.textContent);

/* Retorna la estructura HTML como cadena de caracteres */
console.log(listaDeToppings.innerHTML);


/* Formas de modificar el texto de un nodo en HTML */
const tituloCambio = document.getElementById('titulo');
console.log(tituloCambio);

tituloCambio.innerText = 'Toppings favoritos (Valor editado)'; /* Se modificó el valor del texto en el DOM con 
esta única línea */


/* Editar atributos (Ver, editar, eliminar y agregar) */
/* En este caso yo editaré la referencia del link */

const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href')); /* Obteniendo valor del atributo href */

enlace[0].setAttribute('href', 'http://youtube.com') /* Modificando el valor del atributo href */

enlace[0].removeAttribute('href'); /* Ya no debería tener atributo */

console.log(enlace[0].hasAttribute('href')); /* Me retorna un false, estoy validando que ya no cuente con el 
href */

enlace[0].setAttribute('href', 'http://github.com/camandul');
console.log(enlace[0].hasAttribute('href'));
/* Ahora si retorna verdadero tras haber insertado de nuevo un valor a mi atributo */

/* Todos estos cambios están siendo realizados en tiempo real en el DOM, si elimino el atributo href, entonces
el DOM actualizará la etiqueta a, dejandola sin href, lo mismo con la modificación y la asignación de atributos */


/* Clases */

const segundo = document.querySelectorAll('ul li')[1];
console.log(segundo); /* segundo */

console.log(segundo.classList); /* Con esta propiedad obtengo un arreglo de tipo (DOM Token list) que me trae el listado de clases que tiene
el elemento */

console.log(segundo.classList[0]); /* Obtengo la primera clase aplicada: topping */
console.log(segundo.classList[1]); /* Obtengo la segunda clase aplicada: fondo-naranja */

console.log(segundo.className); /* Con esta propiedad obtengo el valor general de clases que tiene aplicado el elemento 'topping fondo-naranja' */


console.log(segundo.classList.length); /* Tamaño del arreglo con las clases insertadas en un objeto, hasta ahora debe ser 2 */

/* Editar clases */

segundo.classList.add('texto-negro'); /* Se agregará esta clase y se aplicarían los efectos según la clase ingresada que tenga en mi archivo style.css */
console.log(segundo.classList.length); /* Ahora debe ser 3, ya que agregué esta otra clase */

/* Si hubiese aplicado este efecto a mi elemento de la lista 1 'aceitunas' no hubiese servido debido a que hay estilos insertados en línea
que predominan ante esta asignación de clases */

console.log(segundo.classList.contains('topping')) /* Valor verdadero debido a que esa clase topping si se 
encuentra dentro de la lista de clases que tiene el elemento 'segundo' de la lista ul */

/* Eliminar una clase del listado de clases */
segundo.classList.remove('texto-negro'); /* Lo que hace que ya se elimine */