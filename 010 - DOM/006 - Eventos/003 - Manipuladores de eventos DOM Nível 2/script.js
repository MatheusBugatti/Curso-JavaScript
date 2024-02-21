"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

debugger
//fica escutando os eventos que acontecem
btn.addEventListener('click', (event) => {
    document.querySelector("body").style.background = "blue";
    console.log(event);
})

btn.addEventListener('mouseover', () => {
    
    if(body.style.background == "white"){
        body.style.background = "red";
    } else{
        body.style.background = "white";
    }
})