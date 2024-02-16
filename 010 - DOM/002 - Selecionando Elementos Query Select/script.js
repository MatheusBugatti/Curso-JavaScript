"use strict"

const h1 = document.querySelector("h1"); //TAG HTML
const classP = document.querySelector(".paragrafo strong"); //pegar classe.
const idP = document.querySelector("#paragrafo"); //pegar id#


console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;
const title = document.querySelector("title");


//Colocando um timer no TITULO
setInterval(() => {
    title.innerText = timer;
    timer++;
}, 1000);