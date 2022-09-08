function mostraHora() {
    let data = new Date()

    return data.toLocaleDateString('pt-BR', {hour12: false})
}

console.log(mostraHora())

setInterval(function(){ console.log(mostraHora())}, 1000) // mostra a hora a cada 1000 milesegundos



