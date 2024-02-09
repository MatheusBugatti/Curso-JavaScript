//FUNCIONA QUANDO A VARIAVEL TEM O MESMO NOME!!

function Tenis(tamanho, estoque, preco){
    return{
        tamanho,
        estoque,
        preco,

    };
}
console.log(Tenis(50, true, "RS 25,00"));


//Funciona tambem setando as variaveis fora já com valores e puxando para dentro.
const tamanho = 35;
const estoque = true;
const preco = "R$35,00"

const Tenis2 = {
    tamanho,
    estoque,
    preco,
};
console.log(Tenis2);


//Setando atraves do get e puxando a informação.
const tenis3 = {
    getTamanho(){
        return 35; 
    },
};
console.log(tenis3.getTamanho());


function Lasanha(carne, molho, tempoNoForno){
    return{
        carne,
        molho,
        tempoNoForno,
    };
}
    console.log(Lasanha("250g", "Vermelho", "45Min"));

