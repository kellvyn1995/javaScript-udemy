// chama a função antes de cria a função
// declaração de função (Funtion hoisting)
falaOI()
function falaOI() {
    console.log('Oie')
} 

// jogando a função na constante
// first-class objects (Objeto de primeira classe)
const souUmDado = function() {
    console.log('Sou um dado')
}
// executar a função dentro de outra função
function executaFuncao(funcao) {
    console.log('vou executa sua função abaixo.')
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
// 

const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
}
funcaoArrow();

// podemos utilizar a função como parametro  
