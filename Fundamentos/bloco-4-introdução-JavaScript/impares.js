let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = [];


    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 1) {
            impares.push(numbers[i]);
        }
    }
    
console.log('Existem ', impares.length, 'números impares e eles são: ', impares);


// resultado: Existem  6 números impares e eles são:  [ 5, 9, 3, 19, 35, 27 ]