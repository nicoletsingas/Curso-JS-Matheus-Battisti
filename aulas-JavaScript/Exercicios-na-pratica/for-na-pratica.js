// Criando uma lista ul com JS utilizando for

var list = ["laranja", "maça", "morango", "bana", "pessego"];
var UlList = document.createElement('ul');
var body = document.getElementsByTagName('body');

console.log(body[0]);

body[0].appendChild(UlList); //

var BodyList = document.getElementsByTagName('ul');
console.log(BodyList[0]);

for (var i = 0; i < list.length; i++) { //passando por todos os itens da lista
    var liFor = document.createElement('li');
    var textLi = document.createTextNode(list[i]);
    liFor.appendChild(textLi); //add itens dento da tag li
    BodyList[0].appendChild(liFor); // add os li dentro da ul (no HTML)

}