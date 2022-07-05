const prompt = require('prompt-sync')();

// let N = parseInt(gets());
// let jogador1, jogador2;
// for (let i = 0; i < N; i++) {
//     jogador1 = gets();
//     jogador2 = gets();
    		
// //TODO: Complete os espaços em branco com uma possível solução para o desafio

//     if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
//         print("Aniquilacao mutua");
//     else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")
//     	print("Ambos venceram");
//     else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA") print("Jogador 1 venceu");
//     else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") print("Jogador 2 venceu");
//     else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL") print("Jogador 1 venceu");
//     else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA") print("Jogador 2 venceu");
//     else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL") print("Jogador 1 venceu");
//     else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") print("Jogador 2 venceu");
//     else print("Sem ganhador");
// }

var s = gets().split(" ");
let A = parseInt(s[0]);
let B = parseInt(s[1]);
let C;

if(A >= B){
    C = A;
}
else {
    C = B;
}
print(C);

function gets() {
    let input = prompt();
    return input;
}

function print(output) {
    console.log(output);
}