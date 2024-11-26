function verificaImpar( num ) {
    return num % 2 != 0;
}

let numero = Number(prompt("Digite um número: "));

let retorno1 = verificaImpar(numero);
let retorno2 = verificaImpar(numero + 1);

console.log(retorno1);
console.log(retorno2);