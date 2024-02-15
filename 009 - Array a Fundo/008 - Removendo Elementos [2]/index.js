/*
    slice = pega os dados dentro de um range sem quebrar o array
    splice = remove os dados do array dentro de um range

*/

let arr = [
    { nome: "Dener", tel: "(41) 99999 9999" },
    { nome: "Mozao", tel: "(44) 99999 9999" },
    { nome: "Amigo 1", tel: "(19) 99999 9999" },
    { nome: "Amigo 2", tel: "(52) 99999 9999" },
    { nome: "Amigo 3", tel: "(17) 99999 9999" },
  ];

  console.table(arr);
  arr.splice(0, 3);

//   const newArray = arr.slice(0, 3);
//   console.table(newArray);

console.table(arr);
  