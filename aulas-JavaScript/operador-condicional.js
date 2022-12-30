/* Operadores condicionais
    Intruções que podem determinar o fluxo de uma aplicação.
    Amplamentes utilizados, deixam os softwares dinamicos.
    if, else, else if. obs: 0 é considerado false e 1 é considerado true pelo JS.

*/
let yearsOld = 18;

if(yearsOld >= 18) { //condição
    console.log("Pode tirar carta de motorista") // bloco de codigo
}else{
    console.log("A idade minima para tirar carta é 18")
}


/* Operadores de comparação
 São comumente utilizados para verificação nas estruturas de condição. Temos os seguintes operadores: ==, !=, >=, <=, >, <.
*/

let namae = "Nicole"; // = atribuição

if(namae == "Nicole") { // == comparando igual
    console.log("Seu nome é Nicole")
}

if(20 > 10){
    console.log("Passou")
}

if(10 < 20){
    console.log("Passou2")
}

/* Comparação de tipo de valor 
Dois operadores de comparação existem no JavaScript:
=== e !== (exatamente igual, inclusive tipo de dado)
*/

let numberr = 5

if(numberr === 5 )[
    console.log("O numero é 5")
]

if(numberr !== 5 )[
    console.log("Não é o numero 5 do tipo number")
]
