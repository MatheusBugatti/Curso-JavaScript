let Tenis ={
    tamanho: 45,
    estoque: true,
};

//Deletando propriedade do obj
delete Tenis.estoque;

console.log(Tenis);

Tenis.estoque = true;

console.log(Tenis);