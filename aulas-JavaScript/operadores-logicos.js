/* Operadores lógicos
Estes operadores realizam a comparação para que seja retornado true or false. Decidindo o fluxo da aplicação. São eles: AND &&  OR ||  NOT !
*/

//AND && - Todas as afirmações devem ser verdadeiras, caso contrario o resultado será falso.

let name = "Caio";
let age = 14;

if(name == "Caio" && age == 24){
    console.log("Caio pode entrar na aula de esgrima")
}else{
    console.log("Caio não cadastrado na aula")
}

// OR || Pelo menos uma das afirmações deve ser verdadeira, assim o resultado será verdadeiro mesmo que tenha uma afirmação falsa.

if(name == "Caio" || age > 15){
    console.log("Pode entrar na aula de esgrima")
} else{
    console.log("Não pode entrar na aula")
}

if((name == "Caio" || 30 > 20) && 10 == 10){
    console.log("testando 123")
}else{
    console.log("Não passou")
}

//NOT! O not é de negação, então é invertido o valor com !. Se for true vira false e vise versa.

if(!false){
    console.log("Passooou")
}

let cachorro = "july";

if(!(cachorro == "n")){ //ao inserir ! deve estar entre () 
    console.log("cachorro july")
}