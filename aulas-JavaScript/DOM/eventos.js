/*Eventos em JS - Por meio de JS podemos mapear algumas ações dos usuarios, que chamamos de eventos; Tais como, movimento do mouse, click, double click, carregamento da pagina...
*/

//Evento Onload - Ativado ao carregar a página; Podemos depois desse evento realizar alguma ação no nosso projeto.

/* window.onload = function() { 
    console.log("Carregou o DOM");
    var titlee = document.querySelector("#title");
    console.log(titlee);
};//onload carrega após o DOM, após os elementos da pagina estão completamente carregados

console.log("Carregou o JS"); */


//Evento click - Ativado quando o usuario clica em um elemento em que atrelamos um evento. Após a ação podemos fazer modificações e alterações no HTML/CSS

var btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click", function(){ //add evento de click
    console.log("Clicked"); //mensagem impressa
    console.log(this); //this > elemento
    this.style.color = "blue";
});

//click afetando outros elementos
var title = document.querySelector("#title");
title.addEventListener("click", function(){
    console.log("test");
    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
}); 


//double click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function() { //evento, callback
    console.log("click duplo");
});


/*Evento Mouseover - O mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento, ou quando o mouse sai do elemento (como o hover)
*/

//Mouseover
var title = document.querySelector("#title");
title.addEventListener("mouseover", function(){ //"evento", callback ()
    this.style.backgroundColor = "yellow";
});


//mouseout - imita o hover do css
title.addEventListener("mouseout", function(){ 
    this.style.backgroundColor = "white";
});

//afetar outro elemento com mouseover e mouseout
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#legenda"); //selecionar paragrafo
    legenda.classList.remove("hide"); //remover classe hide
});

subtitle.addEventListener("mouseout", function(){
    var legenda = document.querySelector("#legenda"); //selecionar paragrafo
    legenda.classList.add("hide"); //add classe hide
});


/*Evento Keydown - Ativado quando uma tecla é pressionada. Podemos também atrelas o evento Keyup para quando uma tecla volta a posição normal;
*/
//Keydown
document.addEventListener("keydown", function(event){ //evento == e
    if(event.key === "Enter"){
        console.log("Apertou Enter");
    }//event.key - chave do evento (qual tecla esta apertando)
});


//keyup 
document.addEventListener("keyup", function(e){ //(e) parametro evento
    if(event.key === "Enter"){
        console.log("Soltou o Enter"); //quando a tecla é solta, também é contado
    }
});