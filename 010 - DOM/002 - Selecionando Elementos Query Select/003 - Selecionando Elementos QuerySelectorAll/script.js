"use strict";


const p = document.querySelectorAll("p");

p.forEach((element, index) =>{
    
element.style.color = "#FFF";
element.style.padding = "20px";

    if(index === 0){
        element.style.background = "Blue";
}

    if(index === 1) {
        element.style.background = "Red"
}
});


