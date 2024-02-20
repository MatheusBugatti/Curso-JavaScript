"use strict"

const container = document.querySelector(".container");
const paragrafo = container.querySelector(".paragrafo");


const newH2 = document.createElement("h2");
newH2.innerText = "Novo intermedio";


//insertBefore é igual a insira antes
container.insertBefore(newH2,paragrafo);