const prompt = require("prompt-sync")();

let notas = []

let qnt = +prompt("Quantas notas deseja digitar?")

for(i = 0; i < qnt; i++){
let nota = +prompt("Digite uma nota: ")
notas.push(nota)
}

function mediaNotas(notas){
    let soma = 0
    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    } 
    return soma / qnt
}
console.log(notas, mediaNotas(notas))