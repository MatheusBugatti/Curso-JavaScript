let Tenis ={
    tamanho: 45,
    estoque: true,
};

let link = { a:"a", b:{c: "C"} };

//como clonar um obj

let clone1 = Tenis;
console.log(clone1);

//obj.assing diz que vai juntar os obj em um só
let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1);

//outra forma usando destructer
//let mesclar2 = Object.assign(...Tenis, ...link);
//console.log(mesclar2);

