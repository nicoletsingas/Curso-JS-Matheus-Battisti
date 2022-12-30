/* Podemos inserir um elemento dentro de outro, por exemplo um paragrafo em uma div. Isso é considerado como "acrescentar um filho" em js
*/

//Criando elemento

var el = document.createElement("div"); 

el.classList = "div-criada2";

console.log(el);

//inserindo el dentro do html > div container > elemento filho
var container = document.querySelector("#container");

container.appendChild(el);

//insertBefor - insere antes

var el2 = document.createElement("div");

el2.classList = "insert-before";

var el3 = document.querySelector("#container .div-criada2"); //

console.log(el3);

container.insertBefore(el2, el3); //entre (): ser inserido, referencia
