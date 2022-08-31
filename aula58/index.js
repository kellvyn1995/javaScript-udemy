function random(min,max) { //gera um numero aliatorio
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);


while (rand !== 10) { // quando encontra o 10 para
    rand = random(min, max);
    console.log(rand);
}
console.log('######## ');
// Do while, primeiro faz é depois checa
do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);