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
    },
    {
        nome: "Joao1",
        SobreNome: "Bugatti"
    },
    {
        nome: "Joao2",
        SobreNome: "Bugatti"
    }
];

for(let item of myArrayObj){
    if(item.nome === "May") {
    console.log("O mozão esta te esperando na porta");
    continue; 
    }

    if(item.nome === "Joao1"){
        console.log("Enviar um SMS para ele ");
        break;
    }
    console.log(item);
}