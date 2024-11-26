const numeros = [2, 15, 3, 6, 10];

// filter() - filtra elementos que atendem a uma condição
const impares = numeros.filter( num => num % 2 !== 0 );
const maiores = numeros.filter( num => num > 5 );

// reduce() - reduz um conjunto de valores em um único valor
const soma = numeros.reduce( ( acumulador, num ) => acumulador /= num, 1 );


// map() - percorrer todos os elementos, realizando algum processamento e retornando um novo array (modificado)
const dobro = numeros.map( num => num * 2 );

// function ehPrimo(num) {
//     return num % 2 !== 0;
// }
console.log(impares);
console.log(maiores);
console.log(soma);
console.log(dobro);