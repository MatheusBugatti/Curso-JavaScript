"use script"

const div = document.querySelector("div");


//adicionar valores a tag html
div.setAttribute("id", "Teste");
div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("class", `${div.getAttribute("class")} background-red`);

div.removeAttribute("id");
console.log(div);