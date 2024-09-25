const prompt = require("prompt-sync")({ sigint: true });

let consulta = [];

while (true) {
    console.log(`
    //     O que você deseja fazer?
    //     1. Adicionar uma nova consulta
    //     2. Listar todas as consultas
    //     3. Atualizar consulta existente
    //     4. Cancelar consulta
    //     0. Sair
    //     `);

    let opcao = prompt("Escolha uma opção: ");

switch (opcao) {
    case 1:
        let consulta = {};
        consulta.paciente = prompt("Paciente: ");
        consulta.medico = prompt("Medico: ");
        consulta.data = prompt("Data: ");
        consulta.horario = prompt("Horário: ");

        console.log("Cadastrado com sucesso")
        break;
        case 2:
        
        break;
        case 3:
        
        break;
        case 4:
        
        break;
        case 0:
        
        break;

    default:
        console.log("Não entendi")
        break;
}}