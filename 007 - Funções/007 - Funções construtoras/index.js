// function Name(name, sobrenome) {
//     this.name = name;

//     this.sobreNome = () => {
//         const nomeCompleto  = `${this,name} ${sobrenome}`;
//         return this.nomeCompleto;
//     };
// }

// const matheus = new Name("Matheus" , "Bugatti");

// console.log(matheus.sobreNome());

function Calculadora(num1, num2) {
    this.soma = () => {
    return `${num1 + num2}`;     
    };

this.subtracao = () => {
    return `${num1 + num2}`;
    };    
}

const calculadora = new Calculadora();

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(1, 2));