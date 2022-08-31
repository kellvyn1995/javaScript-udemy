// tratamento de erros 
try {
    //È executado quando não a erros 
    //console.log(a); // erro
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (error) {
    // é executado quando há erros
    console.log('Deu erro');
}finally{
    //sempre
    console.log('FINALLY: eu sempre sou executado');
}

// função 
