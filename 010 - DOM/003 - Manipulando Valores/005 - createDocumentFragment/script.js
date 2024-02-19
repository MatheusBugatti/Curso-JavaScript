"use strict"

/*
    dom [principal]
    fragmentDom [secundario fora do dom principal]
*/

const ul = document.querySelector("ul");

//criando um fragmento do documento
const fragment = document.createDocumentFragment();
//array de lanches
const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];
//acessar os dados 
lanches.forEach((element) => {
    
    const li = document.createElement("li");
    li.textContent = element;
    fragment.append(li);

});

console.log(fragment);
ul.append(fragment);
