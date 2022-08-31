// for in
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i in frutas) {
 console.log(frutas[i])
}

const pessoa = {
    nome: 'Kellvyn',
    sobrenome: 'Otávio',
    idade: 30
};

const chave = 'nome';
console.log(pessoa[chave]);
// acessando as chaves
for (let chave in pessoa){  


    
    console.log(chave);
}
