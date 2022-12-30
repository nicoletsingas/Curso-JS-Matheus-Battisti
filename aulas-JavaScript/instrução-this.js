/* Instrução this
Fora de escopos locais o this sempre se refere ao objeto global Window.
Em objetos o this vai se refeir a instância e pode acessar suas propriedades.
*/

this.alert("Olá"); //esta dentro do window
console.log(this);


let person3 = {
    nome2: "Nicole",
    idade2: 23,
    falar: function(){
        console.log("Olá, tudo bem?") //inserir um metodo no objeto como function
    },
    dizerNome: function(){
        console.log("O meu nome é " + this.nome2)
    },
    aniversario: function(){
        this.idade2 += 1; //acessar e atribuir valor
    }
};

person3.dizerNome();

console.log(person3.idade2);

person3.aniversario();

console.log(person3.idade2);