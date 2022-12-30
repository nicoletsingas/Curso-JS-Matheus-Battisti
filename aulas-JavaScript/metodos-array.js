/* Arrays também possuem metodos, facilitando a nossa vida para adicionar e remover elementos, resgatar apenas uma parte do array etc.
*/

//length - contar quantos elementos tem dentro do array

var arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr2.length);


//push - adicionar novos elementos ao fim do array
arr2.push(11);
arr2.push('Doze');
console.log(arr2);


//pop - remove elementos ao fim do array

arr2.pop();
console.log(arr2);


//unshift - adicionar novos elementos no começo do array

arr2.unshift(0);
console.log(arr2);


//shift - Remove os elementos do começo do array 

arr2.shift();
console.log(arr2);


//Acessar ultimo elemento do array com length 

console.log(arr2[arr2.length - 1]); 


//isArray - verifica se é um array com que estamos trabalhando

console.log(Array.isArray(34)); //falso

console.log(Array.isArray(arr2)); //true


/*Também é possivel resgatar um conjunto de elementos com os metodos. Identificar o indice de um elemento especifico e mutio mais;
*/

//Splice - adicionar ou remover um elemento no meio do array

var arr3 = [1,2,3,5,6,7,8];

arr3.splice(3, 0, 4); //indice, excluir elemento, adicionar elemento

console.log(arr3);

arr3.splice(7, 1); // indice, quantos elementos excluir
console.log(arr3);


//indexOf - encontra o indice do elemento

console.log(arr3.indexOf(4));


//Join - transfroma array em string

var arr4 = ["agora", "vem o", "Hexa!!!"];
console.log(arr4.join(" "));


//Reverse - inverte as posições dos elementos de um array
console.log(arr4.reverse());