const objs = [
    {
        nome: "Nicole",
        idade: 23,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "Desenvolvedora",
            empresa: "Empresa X"
        },
        hobbies: ["Jogar", "Ler", "Dançar"]
    },
    {
        nome: "Caio",
        idade: 24,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: ["Jogar", "Desenhar"]
    },
]

//JSON - Converter objeto para JSON
const jsonData = JSON.stringify(objs) //stringify converter em texto de JSON valido
console.log(jsonData)

//Converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);
