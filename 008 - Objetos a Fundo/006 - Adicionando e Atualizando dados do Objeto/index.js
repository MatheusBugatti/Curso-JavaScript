let Tenis ={
    tamanho: 45,
    estoque: true,
};

Tenis.tamanho = 42;
Tenis.estoque = false;
//Tenis.preco = "R$ 42,00",
Tenis["preco"] = "R$ 45";

console.log(Tenis);
//acessar dados especificos.
console.log(Tenis["preco"]);