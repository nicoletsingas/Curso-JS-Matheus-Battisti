/* Funções
Funções sao blocos de codigo reutilizaveis, assim evitamos a repetição da logica de um programa em diversas partes do codigo. A função precisa ser invocada (chamada) para ser executada
*/

function pimeiraFunção(){
    console.log("Hello World das funções");
}

pimeiraFunção(); //executando a função (invocando, chamando)

let nome = "Nicole";

function dizerNome(nome){
    console.log("Seu nome é " + nome);
}
dizerNome(nome);


function soma (a, b){
    var soma = a + b;
    return soma; // proporciona receber um valor de volta na função
}
var somaUm = soma(2, 5); // o a e b sao subtituidos pelos numeros 2, 5
console.log(somaUm); 

var somaDois = soma (5, 5); 
console.log(somaDois);