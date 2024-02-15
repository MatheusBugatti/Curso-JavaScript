const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
    {
        nome: "Matheus",
        SobreNome: "Bugatti"
    },
    {
        nome: "May",
        SobreNome: "Bugatti"
    },
    {
        nome: "Joao",
        SobreNome: "Bugatti"
    }
];

//for ([inicialização]; [condição]; [expressão final])

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

    
// for of

for(let item of myArrayObj){
    console.log(item.nome, item.SobreNome);
}

const obj = {nome: "Matheus", sobreNome: "Bugatti"};
 
for (let item in obj){
    console.log(item);

}
    
