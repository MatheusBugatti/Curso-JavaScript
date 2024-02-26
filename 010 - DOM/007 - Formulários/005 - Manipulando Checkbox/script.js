"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkdValues = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit.innerHTML = checkdValues;
});

form.checkbox.forEach((element) => {
    element.addEventListener("change", (event) => {
       hasChecked(event, element);
       change.innerHTML = checkdValues;
    })
}); 

const hasChecked = (event,element) => {
    const {target} = event;

    if(target.checked) {
      return checkdValues.push(element.value);
    }

    if(!target.checked){
        return checkdValues.map((checkdValue, index) =>{
        if (element.value === checkdValue){
            return checkdValues.splice(index, 1);
        }
        });
    }
};

