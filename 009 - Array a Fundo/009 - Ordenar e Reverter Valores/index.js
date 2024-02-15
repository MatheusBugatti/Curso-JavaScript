//serve para string

// const stringArray = ["A", "B", "C", "F", "W"];

// .sort serve para ordenar as coisas
// console.log(stringArray.sort());
// tras pra frente
// console.log(stringArray.reverse());


/**
 * sort((a, b) => a - b)
 * se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
 * se retornar 0, a ordenação de "a" e "b" não mudará.
 * se retornar um valor positivo, o valor em "b" será ordenado antes de "a".
 **/

//serve para a numeros

const arrayNumber = [10, 20, 30, 4, 50, 1000, 36, 55, 1];

console.log(arrayNumber.sort((a , b) => a - b));
console.log(arrayNumber.sort((a , b) => b - a));
console.log(arrayNumber.sort((a , b) => a - b).reverse());

//objetos

const objArray = [
    {
      nome: "daniel Troquatte",
    },
    {
      nome: "Junior Troquatte",
    },
    {
      nome: "Percio Troquatte",
    },
    {
      nome: "joao Troquatte",
    },
    {
      nome: "Marico Troquatte",
    },
    {
      nome: "Matheus Troquatte",
    },
  ];

  console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse());