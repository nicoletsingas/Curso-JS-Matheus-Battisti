/* Callback function - A função callback é um recurso que permite executar uma função depois de uma determinada ação. Conceito fundamental para entender a parte assíncrona do JS.
*/

// Callback sincrona:
function exibir (num){
    console.log("A operação resultou em: " + num);
}


function soma (a, b, callback){
    var operation = a + b;
    callback(operation);
}

function multiplicacao (a, b, cb) { //cb === callback
    var operation = a * b;
    cb(operation);
}

soma(2, 2, exibir);
multiplicacao(4, 4, exibir);


/* Callback assíncrona - setTimeout e setInterval
Podemos com estas funções criar ações o software que executam depois de um tempo ou de empos em tempos; Um dos argumentos destas funções é uma callback function
*/

//setTimeout:
console.log("Antes do setTimeout");

setTimeout(function() {
    console.log("Testando o setTimeout");
}, 3000); //setTimeout trabalha com milisegundos, para ser 1 segundo deve colocar como 1000 (mil).

console.log("Depois do setTimeout");

//setInterval:
setInterval(function() {
    console.log("Testando o setInterval");
}, 2000); //executa a função a cada 2 segundos ate que mande parar


/* clearTimeout e clearInterval - Podemos por um fim em setTimeout ou setInterval por meio destes dois metodos, assim após determinada condição, os timers não serão mais executados.
*/


//clearTimeout:
var julili = 0;

var myTimer = setTimeout(function() {
    console.log("julili é 0");
}, 5000); // setTimeout deve ser transformado em uma variavel e criar uma condição para limpar o timeout.

julili = 10;

if(julili > 0){
    clearTimeout(myTimer);
    console.log("julili agora é 10");
}


//clearInterval:
var myInterval = setInterval(function() {
    console.log("Imprimindo Interval");
}, 500); //set Interval deve ser transformado em uma variavel e atribuir a variavel um setTimeout com clearInterval, iformando após quanto tempo o Intervalo vai parar.

setTimeout(function() {
    console.log("Fim da impressão do Interval");
    clearInterval(myInterval);
}, 1500); 