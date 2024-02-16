"use strict";


//pega todos os elementos da classe com nome especifico
const p = document.getElementsByClassName("paragrafo");

console.log(p);

for(let element of p){
    console.log(element);
}