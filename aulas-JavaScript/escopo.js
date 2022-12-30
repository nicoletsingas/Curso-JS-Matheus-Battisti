/* Escopo
No JS podemos ter varios escopos, o Global que é iniciado em toda a aplicação e os Locais que podem existir em várias instruções como as funções.
*/

// Escopo global
var x = 1;
var y = 3;

console.log(x, y)

// Escopo local (var)
function escopo(){
    var escopo = 2;

    console.log(escopo);

    console.log(x); //quando uma variavel (var) esta no escopo local, é possivel acessa-la dentro da função
}
escopo();


/* let e const + escopo
Utilizando let e const podemos criar escopo até em instruções como if.
Deixando código mais confiavel, separando cada bloco em um escopo.
*/

//let - pode ser alterado o valor da variavel ao decorrer do programa

let g = 5;
g = 12;
console.log(g);

if(true){
    let g = 20;

    console.log(g); 

    const s = 50;
    console.log("const " + s);
}

console.log(g);

//const - constante, não pode atribuir um novo valor a variavel

const s = 40;

console.log("const " + s);