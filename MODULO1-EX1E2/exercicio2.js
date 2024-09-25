const prompt = require("prompt-sync")();
let fatorial = 1;

let num = +prompt("Digite um número para calcularmos o fatorial")

function calcular(num){
if (isNaN(num) || num < 0) {
    console.log("Por favor digite um número inteiro")
} else {
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
}
    return fatorial
}
console.log(calcular(num))