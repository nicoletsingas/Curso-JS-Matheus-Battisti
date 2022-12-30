/* Propriedades de document - O objeto document nao tem somente metodos, podemos retirar varias informações importantes de suas propriedades também
*/

//propriedades document

console.log(document.body);
console.log(document.head);
console.log(document.links[0]); //acessando propeidade do link nº 0
document.links[0].textContent = "Instagram"; //trocando propriedade do link

console.log(document.URL); //acessar a URL do site
console.log(document.title); //acessa o titulo do site
document.title = "Aula 42"; //alterando titulo do site