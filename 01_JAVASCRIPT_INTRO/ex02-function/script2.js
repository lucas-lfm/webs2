const calcularDesconto = function(valor, taxaDesconto = 10) {
    let valorComDesconto = valor - valor * (taxaDesconto / 100);
    
    return valorComDesconto;
}

let valorInicial = Number(prompt("Informe o valor inicial: "));
let desconto = Number(prompt("Informe o desconto a ser aplicado: "));

let valorFinal = calcularDesconto(valorInicial, desconto);

console.log("O valor final com desconto é R$ " + valorFinal);