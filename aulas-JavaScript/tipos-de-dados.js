console.log('Hello World!')

//Number - numero
let numero = 5;

console.log(numero);
console.log(typeof numero);

let float = 5.32;

console.log(float);
console.log(typeof float);

//String - caracter texto
let name = "Nicole";
let sobrenome = "Tsingas";
let nomeCompleto = name + " " + sobrenome; //concatenação +

console.log(name);
console.log(typeof name);
console.log(nomeCompleto);

//Boolean - v ou f
let verdadeiro = true;
let falso = false;

console.log(verdadeiro);
console.log(typeof verdadeiro);
console.log(falso);
console.log(typeof falso);

//Null - vazio
let nome = null;

console.log(nome);
nome = 'Nicole';
console.log(nome);

//Undefined - indefinido
let idade;
console.log(idade);

// Objetos
var pet = {
    cachorro: "July",
    anos: 3,
    raça: "Border Collie"
};
console.log(pet);
console.log(typeof pet);
console.log(pet.cachorro);

pet.ComeRação = true;
console.log(pet);

//Arrays
var arr = [10, 'notebook', true, {pet}];
console.log(arr);
console.log(arr[1])
console.log(typeof arr)