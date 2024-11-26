let v1 = Number(prompt("Digite um valor em reais (R$):"));
let v2 = v1 / 5.6;
// console.log("R$ " + v1.toFixed(2) + " equivalem a US$ " + v2.toFixed(2));
// Template Literals (Interpolação de Strings)
console.log(`R$ ${v1.toFixed(2)} equivalem a US$ ${v2.toFixed(2)}`);
