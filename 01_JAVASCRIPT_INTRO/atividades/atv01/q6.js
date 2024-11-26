let n1 = Number(prompt("Informe sua nota na N1: "));
let n2 = Number(prompt("Informe sua nota na N2: "));

let mediaFinal = (n1 * 2 + n2 * 3) / 5;
let situacao = "APROVADO";

if (mediaFinal < 6) {
    situacao = "REPROVADO";
}

console.log(`A sua média final foi ${mediaFinal}. Sua situação é ${situacao}.`);


