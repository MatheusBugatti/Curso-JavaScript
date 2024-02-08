/*
  Uma closure ocorre normalmente quando uma função 
  é declarada dentro do corpo de outra, e a função interior 
  referencia variáveis locais da função exterior.
*/

function QualSeuNome(name) {
  const msg = `O seu nome é:`;

  function SeuName() {
    return `${msg} ${name}`;
  }

  return SeuName();
}

console.log(QualSeuNome("Dener"));

