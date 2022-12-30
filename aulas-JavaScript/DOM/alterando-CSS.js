/* É muito comum alterar CSS com Java Script, as regras de CSS ficam de forma inline. Substituindo a maioria das outras regras criadas.
*/

//selecionar o elemento
var titulo = document.querySelector("#title");


//adiciona o estilo
titulo.style.color = "blue";


//background-color - adicionar a palavra junta,no lugar da separacar, inice com letra maiscula
titulo.style.backgroundColor = "gray";


//adicionar varios estilos
var  subtitulo = document.querySelector(".subtitle");
subtitulo.style.cssText = "color: red; background-color: darkgreen; font-size: 30px;"