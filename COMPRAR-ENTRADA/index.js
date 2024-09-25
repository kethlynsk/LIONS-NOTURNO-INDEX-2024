let resposta
console.log("Toca algum instrumento?")
process.stdin.on("data", function (data){
    let eUsuario = data.toString().trim().toLowerCase()
    if(!resposta){
        resposta = eUsuario
        if(resposta == "s" || resposta == "sim"){
            console.log("Qual  instrumento?")
        }else if (resposta == "n" || resposta == "não" || resposta == "nao"){
            console.log("Que pena!")
            process.exit()
        }else {
            resposta = undefined
            console.log("Não entendi!")
        }
    } else {
        if(eUsuario == "violão"){
            console.log("digirigdum")
        } else if (eUsuario == "guitarra"){
            console.log("trevoso")
        } else if (eUsuario == "bateria"){
            console.log("bater tambor")
        } else{
            console.log("instrumento esquisito")
        }
    }
})