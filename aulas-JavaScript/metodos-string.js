/* Metodos string
O Objeto string também possui metodos uteis que vao nos auxiliar a manusear textos nos nossos softwares
*/

//length - comprimento ou quantidade de caracteres que uma string possui:
let icecream = "sorvete";

console.log(icecream.length);


//indexOf - indice do caracter que voce quer encontrar:
console.log(icecream[2]);

var frase = "Brasil ole ole ole";
console.log(frase.indexOf("ole"));


//slice - extrair um valor da string (como uma fatia que é cortada):
var ole = frase.slice(7, 10);
console.log(ole);


//replace - subtitui um valor por outro dentro da string:
var newFrase = frase.replace("ole", "é Pentacampeão!!!");
console.log(newFrase);


// Metodos que modificam uma string, mudando sua caracteristica

//to Lowercase - transformar todos os caracteres em minusculos
var frase3 = "Mostra Tua força Brasil"
console.log(frase3.toLowerCase());


//to Uppercase - transformar todos os caracteres em maiusculos
console.log(frase3.toUpperCase());


//Trim - normalmente utilizado em dados de formulario (aparar os espaços)

var nome2 = "          nicole          ";
var nomeTrim = nome2.trim();
console.log(nomeTrim);
console.log(nome2);


//Split - define p que estará separando os caracteres, mas transforma em array
console.log(frase3.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";
console.log(tags.split(","));


//lasIndexOf - Mostra a ultima palavra da string (contrario do index of)

var fraseLonga = "Vamos comer pizza hut hoje, eba eba eba";

console.log(fraseLonga.lastIndexOf("eba"))