//Função que add tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-input").value; //.value = pegar o valor do input
    console.log(taskTitle);

    if(taskTitle){ //validação para nao inserir vazio

        //clonar template (li)
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true); // clonar o html em uma nova variavel 

        //add nome da task
        newTask.querySelector(".task-name").textContent = taskTitle;

        //remove as classes  desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //add envento de remover task
        const removeBTN = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this); //this se refere ao elemento, tarefa em si
        });

        //add evento concluir task
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this); //completar tarefa em especifico
        });

        //limpar o input
        document.querySelector("#task-input").value = "";
    }
}

//Função que remove task
function removeTask(task){
    task.parentNode.remove(true); //parentNode = acessar elemento pai
}

//Função que completar tarefa
function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done"); //toggle ver se o elemento tem a classe, se ñ tem ele coloca
}
    
//Evento de add tarefa btn
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e){
    e.preventDefault(); //ñ envia form, so espera ação do js
    addTask();
});