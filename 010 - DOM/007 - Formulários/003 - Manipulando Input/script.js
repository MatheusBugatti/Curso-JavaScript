"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("input", (event) =>{
    event.preventDefault();

    const name = form.name.value;

    const newDivElement = document.createElement("div");
    newDivElement.innerText = name.toUpperCase();

    //remove o objeto que está antes
    form.nextElementSibling.remove();
    form.after(newDivElement);

});