const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas:[{nome: "Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n:5,
    link: { a:"a", b:{c: "C"} },
};


//hasOwnProperty | propertyName is Tenis    
//Forma de identificar o que tem dentro de um obj
if(Tenis.hasOwnProperty("tamanho")) {
    console.log("Existe tamanho");
} else {
    console.log("Não existe tamanho");
}

//Outra forma de validar dados dentro d eum obj
console.log("tamanho" in Tenis );