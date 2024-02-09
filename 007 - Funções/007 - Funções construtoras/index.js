// function Name(name, sobrenome) {
//     this.name = name;

//     this.sobreNome = () => {
//         const nomeCompleto  = `${this,name} ${sobrenome}`;
//         return this.nomeCompleto;
//     };
// }

// const matheus = new Name("Matheus" , "Bugatti");

// console.log(matheus.sobreNome());

// function Calculadora(num1, num2) {
//     this.soma = () => {
//     return `${num1 + num2}`;     
//     };

//     this.subtracao = () => {
//     return `${num1 + num2}`;
//     };    
// }

// const clculadoara = new Calculadora();

// console.log(calculadora.soma(1, 2));
// console.log(calculadora.subtracao(1, 2));



function calculadora2 (num1, num2, eSoma){
    if (eSoma == true) {
        return console.log(`Resultado da soma ${num1 + num2}`);
    } else {
        return console.log(`Resultado da subtracao ${num1 - num2}`);
    }

}
    const calculadora = new Calculadora();

    console.log(calculadora.soma(1, 2));
    console.log(calculadora.subtracao(1, 2));   