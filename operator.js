//1
//функцию myFunction, которая принимает два числовых аргумента a и b, 
//eсли а – четное число, функция выводит в консоль результат умножения а * b, иначе результат суммы а + b;


function myFunction(a, b) {
    if (a % 2 === 0) {
        return a * b
    } else {
        return a + b
    }
}
console.log(myFunction(2, 4))
console.log(myFunction(3, 7))


//2
//создать функцию findQuarter, которая принимает два числовых аргумента х и у (это координаты точки),
//функция выводит в консоль результат к какой четверти принадлежит точка с координатами х,у.

function findQuarter(x, y) {
    if (x == 0 || y == 0) {
        alert((x == 0 && y == 0) ? 'Центр координат' : 'ось ' + ((x == 0 ? 'Y' : 'X')));
        return 0;
    }

    let horizontal = (x > 0 ? [1, 2] : [3, 4]);
    let vertical = (y > 0 ? [1, 4] : [2, 3]);
    return horizontal.find(el => vertical.includes(el));
}

console.log('find quarter: -3,4:', findQuarter(-3, 4));
console.log('find quarter: 1,4:', findQuarter(1, 4));


//3
//создать функцию sumPositive, которая принимает массив чисел,
//функция выводит в консоль сумму всех положительных чисел массива.
function sumPositive(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result += array[i];
        }
    }
    return result;
    
}

console.log('sumPositive [-2, 4, -10, 8]:', sumPositive([-2, 4, -10, 8]));


//4
//создать функцию findMax, которая принимает три числовых аргумента a,b,c
//Функция рассчитывает что больше, сумма чисел, или их произведение и к наибольшему прибавляет число 3;
function findMax(a, b, c) {
    let plus = a + b + c;
    let multiply = a * b * c;
    let max = Math.max(plus, multiply)
    return max + 3;
}

console.log('findMax 1,2,1:',findMax(1, 2, 1))
console.log('findMax 3,5,3:',findMax(3, 5, 3))