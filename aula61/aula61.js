/*Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). retoner true se a imagem estiver no modo paissagem */

// primeira forma 
function ePaissagem(largura, altura){
    return largura > altura;
}
console.log(ePaissagem(1920, 1080));

//segunda forma
const ePaissagem2 = (largura , altura) => largura > altura;
console.log(ePaissagem2(1920, 1080));