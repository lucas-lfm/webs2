let numeros = [2, 5, 10, 13, 22, 33, 47];
// resultado => 67
let somaPrimos = 0;

for(let num of numeros) {

    if (num == 2) {
        somaPrimos += num;
        continue;
    }

    for(let j = num - 1; j > 1; j--){
        if (num % j == 0) {
            break;
        }

        if(j == 2) {
            somaPrimos += num;
        }
    }
}

console.log(somaPrimos);