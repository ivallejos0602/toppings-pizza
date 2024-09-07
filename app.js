
const contenedor = document.getElementById('titulo');

//Seleccionamos elementos por clase
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0]);

// seleccionamos elementos por tipo de elemento html
const misToppings = document.getElementsByTagName('li');
console.log("1:23--> ");
console.log(misToppings);

//Seleccionamos elementos por clase
const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
console.log("filtrando por clase fondo-marron");
console.log(toppingsFondoMarron);

//Seleccionamos elementos por clase, elegimos el primero
let primerToppingNaranja = document.querySelector('.topping.fondo-naranja');
console.log("1:29");
console.log(primerToppingNaranja);

// otra manera de hacer lo anterior usando querySelector

//elegimos el primer elemento ul, que tenga un elemento li y la clae fondo-naranja
primerToppingNaranja = document.querySelector('ul li.fondo-naranja');
console.log(primerToppingNaranja);

// elegiremos los elementos de una lista que no tenga fondo naranja
// Si queremos elegir solo el primer elemento, usamos el metodo querySelector

const primerToppingNoNaranja = document.querySelectorAll('ul li:not(.fondo-naranja)');
console.log("1:31");
console.log(primerToppingNoNaranja);

// cambiaremos un estilo dinamicamente con JavaScript

//recordar que con querySelector tomamos el primer elemento
let primerTopping = document.querySelector('.topping.fondo-marron');

console.log(primerTopping);

// 1:39 hs

/*
cambia el estilo del primer topping

primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
  // setea en mayusculas el texto
 primerTopping.style.textTransform = 'uppercase';
 */

 // modificar el texto de los distintos elementos de una lista
 
 // 1:44 hs
 console.log('1.44hs');
let listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings);
console.log('InnerText');
 console.log(listaDeToppings.innerText);
 console.log('textContent: respeta los espacio de caracteres de blanco que tiene de identado');
 // preserva espacio de identacion antes de texto
 console.log(listaDeToppings.textContent);
 console.log('innerHTML');
 console.log(listaDeToppings.innerHTML);

 // Cambiaremos el titulo

 const titulo = document.getElementById('titulo');

 console.log(titulo);

 titulo.innerText = 'Mis Topping Favoritos';

 // modificar los atributos de un elemento
console.log("1:50 hs");

/*
  para ejecutar este codigo hay que agregar un elemento : a

 const enlaces = document.getElementsByTagName('a');
 console.log(enlaces); // esto seria una coleccion
 console.log(enlaces[0].getAttribute('href'));
 console.log(enlaces[0].setAttribute('href','https://www.freecodecamp.org'));
*/

 //console.log(enlaces[0].removeAttribute('href'));

// Clases
  console.log("1:54 hs");
  primerTopping = document.querySelector('.topping');
  console.log(primerTopping);

  // se ven 2 elementos
  //con classlist obtenemos una lista con las clases de un elemento
  console.log(primerTopping.classList);

// agregamos una clase dinamicamente
//primerTopping.classList.add('texto-verde');

// se ven 3 elementos
console.log(primerTopping.classList);

// consultar si la lista contiene una clase
console.log(primerTopping.classList.contains('fondo-marron'));

// eliminar una clase de un elemento
// el item de aceitunas en la lista se ve distinto porque aca se elimina la clase del estilo "topping"

// con la sig. sentencia elimino la clase topping del elemento
//console.log(primerTopping.classList.remove('topping'));
console.log(primerTopping.classList);

// agregar una clase

console.log("2:01");  // Crear un Elemento

  listaDeToppings = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');

toppingNuevo.classList.add('topping','fondo-marron');

listaDeToppings.append(toppingNuevo);

toppingNuevo.innerText = "4 quesos";

//listaDeToppings.add(toppingNuevo);

// borra el reciente elem. agregado
// toppingNuevo.remove();

// borra todos los elem. de la lista de toppings
//listaDeToppings.remove();

// obtener todos los hijos de un elem. html

console.log("2:11 hs");
 listaDeToppings = document.getElementById('lista-toppings');
  console.log("lista de hijos :");
 console.log(listaDeToppings.children);

 // obtenemos elementos hermanos

 console.log(listaDeToppings.nextElementSibling); // dá null porque no tiene ningun hermano
 console.log(listaDeToppings.previousElementSibling); // el hno que tiene es titulo

 /*
      RECORDAR :
       parentElement
       parentNode
       children
       firstChild
       firstElementChild
       lastChild
       lastElementChild
       nextSibling
       nextElementSibling
       previousElementSibling
       previousSibling       
 
 */
console.log("Event Listener 2:27 hs");

const toppings2 = document.getElementsByClassName('topping');

console.log("ToPpinGs : ");
console.log(toppings2);

console.log("imprimiendo los toppings...");

for (const topping of toppings2){
  topping.addEventListener('click',(e) => {
    console.log(e.target.innerText);
  });
}






