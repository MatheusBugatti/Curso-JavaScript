/*
Obj: Tenis (propriedade "cardaço", "palmilha")
obj: Celular (propriedade) 
*/

console.log({
    tenis:[
     {
        preco: 150,
        disponivel: true,
        estoque: 150,
        cardaco: {
            cor: "rosa",
            tamanho: "G",
        },
        palmilha: {
            tamanho: "43",
            cor: "roxo",
        },
    },
    {
        preco: 30,
        disponivel: true,
        estoque: 20,
        cardaco: {
            cor: "preto",
            tamanho: "G",
        },
        palmilha: {
            tamanho: "41",
            cor: "azul",
        },
    },
    ],
});

console.log([
    {
        tenis:  {
            preco: 150,
            disponivel: true,
            estoque: 150,
            cardaco: {
                cor: "rosa",
                tamanho: "G",
            },
            palmilha: {
                tamanho: "43",
                cor: "roxo",
            },
        },
    },
    {
        celular: {
            marca: "iphone",

        },
    },
]);