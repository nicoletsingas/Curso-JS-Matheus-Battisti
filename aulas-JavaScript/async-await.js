/* Async e Await - As funções assincronas funcionam como promises, porém com uma sintaxe mais simplres; Precisamos declarar a função com a palavra async. E Quando precisamos aguardar algo a instrução precisa de await.
- tentar usar o await sem o async gera erro-
*/

//sintaxe
/*function primeiraFuncao(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("Esperou isso aqui!"); //ação a ser feita após esperar
            resolve();
        }, 1000) //tempo a esperar
    })
}

async function segundaFuncao(){
    console.log("Iniciou");
    await primeiraFuncao(); //await - algo seja esperado
    console.log("Terminou");
}
segundaFuncao(); */


//prático

function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json()) //transofrma o texto em json
    .catch(err => console.log(err)) //mostrar eventuais erros
}
async function showUserName(id){
    const user = await getUser(id)
    console.log(`O nome do usuario é: ${user.data.first_name}`)
}
showUserName(4)