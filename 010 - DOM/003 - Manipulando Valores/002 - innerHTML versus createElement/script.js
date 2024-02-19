"use strict";

/**
    innerHtml => Retorna o texto, COM inofrmações e COM elementos  
    createElement => Cria um elemento html
    
 */

    const div = document.querySelector("div");

    //console.log(1, div);

    // div.innerHTML += "<strong>Esse é meu texto alterado</strong>"

    // console.log(2, div);

    const elementUl = document.createElement("ul");
        console.log(elementUl);

    [1,2,3].forEach((element) => {
        const elementLi = document.createElement("li");
        elementLi.innerText = element;
        elementUl.appendChild(elementLi);
    });
    
    div.appendChild(elementUl);


