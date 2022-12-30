/* DOM - Document Object Model
Interface de programação para HTML. Por meio dele temos metodos para acessar a arvore de elementos.
o DOM fornece uma copia do HTML, podemos manipular eventos pelo DOM para afetar HTML.
Sempre acessar o document. ao acessar DOM.
*/


//Tag
var titulo = document.getElementsByTagName('h1') [0]; //pegar elemento por nome de tag. [0] para acessar o primeiro elemento
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis);


//Id
var paragrafo = document.getElementById('paragrafo'); //elemento singular, somente 1 id por elemento
console.log(paragrafo);


//Class
var itensDaLista = document.getElementsByClassName('item'); //colection dos elementos especificado por classes
console.log(itensDaLista);



//Podemos acessar elementos baseados em regras de CSS com - querySelectorALL e querySelector

//querySelectorALL

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse); // seleciona todos

var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery); //selecionando os 4 ultimos da lista

var itensQuery2 = document.querySelectorAll('#lista li');
console.log(itensQuery2); //selecionando os 4 primeiros da lista


//querySelector
var primeiraLista = document.querySelector('ul');
console.log(primeiraLista); //seleciona um elemento, o primeiro que encontra



        //Alterar elementos com DOM

//Selecionar elemento
var title = document.querySelector("#title"); //alterar texto com a id title

//innerHTML
title.innerHTML = "Testando o texto alterado!!!"; 


//textContent - mais utilizado
var subtitle = document.querySelector(".subtitle");
subtitle.textContent = "Subtitulo alterado também !!!";



        //Criando elementos com DOM

var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é um novo paragrafo"); //criar uma nota de texto
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

//Inserindo no body do HTML
 var body = document.querySelector("body"); 
 body.appendChild(novoParagrafo);


 //Inserir em um container

 var container = document.getElementById("container");
 console.log(container);
 var element = document.createElement ("article");

 element.appendChild(document.createTextNode("Isto é um article")); 
 console.log(element);
 container.appendChild(element);