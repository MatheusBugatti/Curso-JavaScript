"use strict";


const link = document.querySelector("a");


//prevenindo evento de acontecer

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Evento prevenido");
});