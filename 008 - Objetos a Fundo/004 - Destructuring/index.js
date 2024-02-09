const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas:[{nome: "Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n:5,
    link: { a:"a", b:{c: "C"} },
};

// const {tamanho, estoque, marcas = "Não possui Marca"} = Tenis;
// console.log(tamanho, estoque, marcas);

// Alterar o nome de uma informação apra não ir ao usuario
// const{ secret: randomNunbem, n: avalicaceos} = Tenis;
// console.log(randomNunbem, avalicaceos);

//puxar uma informação especifica dentro do objeto.
const {
    link:{
     b: {c},
},
} = Tenis;
//console.log(a);

//O codgio a baixo realiza a mesam função
console.log(Tenis.b.c());