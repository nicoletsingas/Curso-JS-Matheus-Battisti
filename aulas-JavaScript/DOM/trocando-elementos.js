/* Podemos também trocar elementos no DOM, substituir uma tag por outra
*/

//primeiro é necessario criar um elemento
var elemento = document.createElement("h3");
elemento.classList = "classe01";
var elTexto = document.createTextNode("Este é um h3!!!")
elemento.appendChild(elTexto);
console.log(elemento);

//selecionar o elemento que quer trocar e seu respectivo "pai"
var title2 = document.querySelector(".subtitle");
console.log(title2);
var father = title2.parentNode; //propriedade que seleciona o pai do title2


// trocando os elementos
father.replaceChild(elemento, title2); //entre () quem entra, quem sai




/*Alterando atributos, podemos alterar os atributos via JS e DOM.
Exemplo: alterar o atributo alt de uma imagem ou src de uma imagem.
*/

var titulo1 = document.querySelector("#title");
titulo1.setAttribute("class", "criando-class1"); //alterando o h1 inserindo uma classe, entre () atributo e valor

console.log(titulo1); 

var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled"); //entre () atributo e valor


//remover atributo

var list = document.querySelector("#lista");
list.removeAttribute("id");