// ARRAY
// comentario
process.stdout.write("digite a primeira nota:\n");
let notas = [];
process.stdin.once('data', function (data) {
    let nota1 = parseInt(data.toString().trim())
    notas.push(nota1);
    process.stdout.write("digite a segunda nota\n:")
    process.stdin.once('data', function (data) {
        let nota2 = parseInt(data.toString().trim())
        notas.push(nota2);
        process.stdout.write("digite a terceira nota:\n")
        process.stdin.once('data', function (data) {
            let nota3 = parseInt(data.toString().trim())
            notas.push(nota3)
            let result = (notas[0] + notas[1] + notas[2]) / 3;
            console.log(notas)
            console.log("a media das 3 notas é: \n" + result)
            if (notas[0] > notas[1] && notas[0] > notas[2]){
                console.log('a maior nota é: \n' + notas[0])
            }else if (notas[1] > notas[0] && notas[1] > notas[2]){
                console.log('a maior nota é: \n' + notas[1])
            }else {
                console.log('a maior nota é: \n' + notas[2] )
            }
            process.exit()
        })
    })

})