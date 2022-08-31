/*escreva uma função que recebe um número e retorne a seguinte:*/
// Número é divissivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÂO é divissivel por 3 e 5 = Retorna o próprio número 
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com Números de 0 a 100
function FizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', FizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i))
}