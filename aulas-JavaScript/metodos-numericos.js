/* Metodos numericos
O objeto number pai dos numeros contém metodos muito uteis para trabalhar com numeros em JS.
A maioria dos tipos de dado também tem um objeto pai como String, Objetct, Array.
*/

//parseFloat - transofrma um valor em float (com ponto flutuante)

console.log(parseFloat('14.678')); //transforma string em number c ponto flutuante
console.log(Number.parseFloat("14.678")); //mesma coisa ''


//parseInt - tranforma um tipo de dado em numero inteiro

console.log(parseInt('12.69')); //no caso float tornou-se inteiro
console.log(parseInt('10'));

//toFixed - fixa o numero de casas decimais exemplo: 12.89 > 12.8 (vc escolhe a quantidade de casas que deve ser fixada)

console.log(12.54.toFixed(1));


//isNaN - Confere se não é um numero (NotANumber) resultando em tru or false. Também converte em number se for um numero em string:

console.log(isNaN("15"));
console.log(isNaN("teste123"));
console.log(isNaN(20));

//MAX_VALUE e MIN_VALUE - propriedades do number maximos  e minimos que o JS aceita, acima disso o js trata como infinity e abaixo menos infinity

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(1.8976931348623157e+308); //Infinity