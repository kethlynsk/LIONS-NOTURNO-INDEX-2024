const prompt = require("prompt-sync")({ sigint: true });

function aviso(){
    console.log("Vou fazer uma soma")
}

function soma(n1, n2){
    let res = n1 + n2
    // console.log("A soma é: ", res)
    return res
}


aviso()
let retorno = soma(8, 9)
console.log(retorno)