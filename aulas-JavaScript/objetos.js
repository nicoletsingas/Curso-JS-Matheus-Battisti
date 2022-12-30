/*Objetos
Podemos criar objetos com propriedades e métodos para auxiliar nos nossos programas.
*/

let person2 = {
    nome2: "Nicole",
    idade2: 23,
    falar: function(){
        console.log("Olá, tudo bem?") //inserir um metodo no objeto como function
    },
    soma3: function(c, d){
        return c + d;
    }
};
console.log(person2.nome2);
person2.falar();
var summ = person2.soma3(2, 2);
console.log(summ);