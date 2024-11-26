let num1 = Number(prompt("Digite o primeiro valor: "));
let num2 = Number(prompt("Digite o segundo valor: "));

if (num1 > num2) {
    let aux = num1;
    num1 = num2;
    num2 = aux;
}

for(let i = num1 + 1; i < num2; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}