/*
  O strict mode elimina alguns erros silenciosos 
  que passariam batido do JavaScript e os faz emitir erros.
  
  Além disso, essa forma corrige alguns erros que tornam o JavaScript 
  difícil de ser otimizado, então algumas vezes os códigos no modo estrito 
  rodam mais otimizados e velozes do que os códigos no ‘modo normal’.

  link: https://www.geeksforgeeks.org/strict-mode-javascript/
*/

  // serve pra concertar erros que ficam escondidos dentro do java.
  "use strict";

(() =>{
  let teste = "teste";
  console.log(teste);
})();

