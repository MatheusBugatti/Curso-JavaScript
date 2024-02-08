/*
  Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

  multiplicador x número = resultado
  multiplicador x 0 = resultado
  multiplicador x 1 = resultado
  multiplicador x 2 = resultado
  multiplicador x 3 = resultado
  ...
  multiplicador x 10 = resultado

  Obs.: não podemos criar varios consoles.log(multiplicador x 3 = resultado)
*/

const multiplicador = 30;

//let i=0

//significa que vai de zero a 10 apenas
// ele add + 1 sobre o valor
for(let i = 0; i <= 10; i++){
    const calc = multiplicador * i;
    //o ${} é um template literal, assim ele vai entender que isso é uma variavel e não uma String.
    console.log(`${multiplicador} x ${i} = ${calc}`);
}