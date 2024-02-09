/*
  Objeto: Tenis (Propriedade) "cadarço", "palmilha"
  Objeto: Celular (Propriedade)
  Objeto: Drone (Propriedade)

  Propriedades / Atributos / Funcionalidades
*/

let Tenis = {
    tipo: "Tenis de Corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            altura: 40,
            profundidade: 15,
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "Puma"],
    marcaArayObj: [
        {
            nome:"Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Puma",
        },

    ],

    getMarcaArrayValores: function (param) {
        return this.marcaArrayObj[param];
    },
    getMarcaArrayObj: function(param){
        return this.marcaArrayObj[param].nome;
    },
};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);