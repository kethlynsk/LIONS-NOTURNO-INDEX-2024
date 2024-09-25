let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let notaMaior = 0
let notaMenor = notas[0]
let notasAcimaMedia = 0
let notasAbaixoMedia = 0

function maiorNota(notaMaior){
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > notaMaior) {
            notaMaior = notas[i]
        }
        }
        return notaMaior
    }
    console.log("Maior nota: ", maiorNota(notaMaior))


function menorNota(notaMenor){
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < notaMenor) {
            notaMenor = notas[i]
        }
        }
    return notaMenor
    }
    console.log("Menor nota: ", menorNota(notaMenor))

    function acima(notasAcimaMedia){
        for (let i = 0; i < notas.length; i++) {
        if(notas[i] > 6) {
        notasAcimaMedia++
    }}
    return notasAcimaMedia
}
console.log("Notas acima da média: ", acima(notasAcimaMedia))

function abaixo(notasAbaixoMedia){
    for (let i = 0; i < notas.length; i++) {
    if(notas[i] < 6) {
    notasAbaixoMedia++
}}
return notasAbaixoMedia
}

console.log("Notas abaixo da média: ", abaixo(notasAbaixoMedia))