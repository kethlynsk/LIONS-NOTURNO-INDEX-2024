const prompt = require("prompt-sync")({ sigint: true });

let base = +prompt("Escolha o numero da base: ")
let expoente = +prompt("Escolha o expoente: ")

let soma = 0
let baseAux = base

for(let i = 0; i < expoente; i ++){
    for(let j = 0; j < base; j++){
    soma+=baseAux
}
}


console.log(soma)