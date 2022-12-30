
/*Estruturas de repetição
Serve para repetir "n" vezes uma operação. 
As estruturar mais comuns são: while e for.


//While (enquanto) - estrutura mais simples do JS, a ideia é que se repita algo ate atingir tal condição:

 var x = 0;
var arr = ['cachorro', 'gato', 'passarinho', 'tartaruga'];
var a = 0;
var palavra = "nicole";
var n = 0;

while( x < 5){
    console.log("Testando repetição " + x)
    x++; //incrementador
}

while(a <= 3){
    console.log(arr[a]);
    a++; 
}

while(n <= 5){ 
    console.log(palavra[n]);
    n++;
}
*/

/*For
O for tem uma sintaxe mais complexa, a instrução fica toda em uma linha, proporcionando maior controle.


for(var i = 0; i <10; i++){
    console.log("repetindo for: " + i);
    }
    
    var arr = [1,2,3,4];
    
    for(var n = 0; n < arr.length; n++){
    console.log(arr[n]);
    } //length > comprimento (quantos elementos tem)
    
    for(var x = 5; x < 100; x*= 3){
        console.log(x);
        }

/* BREAK E CONTINUE
Com break podemos encerrar uma instrução
Com o continue podemos pular uma instrução
Utilizado em loops
*/

/*Break

for(let c = 10; c > 0; c--){
    console.log(c);
    
    if(c === 4) {
        break;
    }
}
console.log("Fez o break ");


//Continue

let h = 10;
while(h < 100){

    h += 10;
    if(h === 60){
        continue;
    }
    console.log(h)
}
*/