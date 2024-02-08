/*
  O que é uma função?
  É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

/* Functions declaration, 
voce pode dar o nome que quiser, de acordo com a logica que vai ser usada,
*/
function isValidDeclaretion() {
  const soma = 1 + 2;
  if (soma === 3){
    return true;
  }
  return false;
}
console.log(isValidDeclaretion());  


// Functions expression

const isValidEspression = function(){
  return false;
};

//Arrow Functions sempre declarar com um const
const IsvalidArrow = () => {
  const multiplicacao = 2*2;
  return multiplicacao;
};

console.log(IsvalidArrow());