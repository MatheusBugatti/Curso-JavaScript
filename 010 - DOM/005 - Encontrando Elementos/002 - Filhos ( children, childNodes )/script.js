"use strict";


const container = document.querySelector(".container");

//console.log(container.children); // HTMLColletion
//console.log(container.childNodes); // NodeList

const children = Array.from(container.children);
console.log(children);