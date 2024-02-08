/*
  1 - Nome de função
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
*/

//FORMAS DE SETAR O NOME DA FUNÇÃO E DAR RETORNO  
//1 nome função e retorno
function nomeFunc(){
  return "Matheus Bugatti"
}

//2 nome função e retorno
const nomeFuncaoArrow = () => {
  return "Matheus Bugatti";
};
console.log(nomeFuncaoArrow());

//3 nome função e retorno
const nomeFuncaoArrowReturn = () => "Matheus Bugatti";
console.log(nomeFuncaoArrowReturn());

//4 nome função e retorno
const nomeFuncaoArrowHosting = () => {
  return "Matheus Bugatti";
}
console.log(nomeFuncaoArrowHosting());

//arguments
function nomeFuncaoArguments(){
  return arguments;
}
console.log(nomeFuncaoArguments("Matheus Bugatti"));

//contexto arrow functions, significa quue eles herdam o contexto local de onde foi declarado.
const lanches = {

  cardapio: [
    {nome : "x-SALSADA", preco: "R$25,00"},
    {nome : "x-BURGUER", preco: "R$30,00"},
  ],

  meuPedidoFunc: function (select) {
    return console.log(this.cardapio[select]);
  },


  meuPedidoArrowFunc: (select) => {
    this.cardapio = [
      {nome : "x-SALSADA", preco: "R$20,00"},
      {nome : "x-BURGUER", preco: "R$35,00"},
    ];

    return console.log(this.cardapio[select]);
  },
};
  lanches.meuPedidoFunc(0);
  lanches.meuPedidoArrowFunc(1);

  //cosntrutor  

  class newFunc{
    constructor(nome){
      this.nome = nome;
    }
  }

  const a = new newFunc("Matheus Bugatti")
  consol.log(a.nome);


