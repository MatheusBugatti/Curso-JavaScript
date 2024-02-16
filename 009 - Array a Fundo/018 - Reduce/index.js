
const pedidos = [
    {
      id: 420,
      nome: "Dener",
      alimento: "Sandubão de Bacon",
      bebida: "Suco Limão",
      preco: 46,
    },
    {
      id: 152,
      nome: "Naiady",
      alimento: "Sandubão Vegano",
      bebida: "Suco de Laranja",
      preco: 50,
    },
    { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva", preco: 580, },
    {
      id: 33,
      nome: "Isabel",
      alimento: "Sandubão de Picanha",
      bebida: "Refrigerante",
      preco: 150,
    },
    { id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante", preco: 190, },
  ];

  /*
    A ideia é ele ppegar todos os valores de uma Array e condensa-los em um só.
  */

    const balancete = pedidos.reduce( (total, elemento)  =>{
        return total + elemento.preco;
    }, 0)

    console.log(balancete);

