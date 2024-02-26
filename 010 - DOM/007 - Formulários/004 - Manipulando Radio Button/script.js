"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

form.addEventListener ("submit", (event) => {
  event.preventDefault();

  const radio = form.radio;
  console.log(radio.value);
  //submit.innerHTML = radio.value;

});


  form.radio.forEach((res) => {
    res.addEventListener("change", (event) => {
      const {target} = event;
      
      if(target.checked){
        console.log("checked");
      }
    });
  });


// radio.forEach(res => {
//   if(res.checked){
//     console.log(res);
//   }
// });
