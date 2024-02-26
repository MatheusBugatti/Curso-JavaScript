"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const name = form.name.value;
    const password = form.password.value;

    const formData = new FormData(form);

    //verifica se tem
    console.log(formData.has("name"));
    console.log(formData.has("password"))
   
    //mostra resultado
    console.log(formData.get("name"));
    console.log(formData.get("password"))
    
    //deleta
    formData.delete("name")
    //verifica se tem
    console.log(formData.has("name"));



    // if(name && password){
    // console.log(name, password);
    // //submete os dados pro action
    // form.submit();
    // }
})