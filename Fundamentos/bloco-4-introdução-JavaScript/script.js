let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let maior = 0;


for (let index = 0; index < numbers.length; index++){
    sum += numbers[index];
    if(numbers[index] > maior){
        maior = numbers[index];
    }
}

let media = sum / numbers.length;
console.log('A média aritimética é ', media);

if (media > 20) {
    console.log('O valor maior que 20');
}else{
    console.log('O valor menor que 20');
}
console.log('O maior numero é', maior);




