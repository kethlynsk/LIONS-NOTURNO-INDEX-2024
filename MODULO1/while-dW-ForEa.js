// inicia em 1 e vai até 6
let i = 0
while (i < 6) {
    i++;
    console.log(i);
    }

// inicia em 0 e vai até 5
let i1 = 0
while (i < 6) {
    console.log(i);
    i++;

    }

//  do while o teste é no final
// ve o numero, aumenta e depois ve se precisava aumentar

for (let i = 100; i <= 200; i++) {
    let result = i % 2
    if (result != 0){
        console.log(i)
    }
}



process.stdout.write("Escolha o número da tabuada. ")
process.stdin.once("data", function (data) {
    let num = data.toString().trim();
    for (let i = 0; i <= 10; i++){
        let conta = num * i
        console.log(i + " x " + num + " = " + conta)
    }
    process.exit();
    })


for (let i = 0; i <= 999; i++){
    let result = i % 2
        if (result != 0){
            let soma = result }
}



// .
// .
// .
// FOR.EACH

let horas = new Array(12).fill(null)
let contador = 0

horas.forEach(() =>  {
    console.log('bom dia')
    contador ++
})

console.log(contador)