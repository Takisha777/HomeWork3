//   2.Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     Найти сумму и количество положительных элементов.
//     Найти минимальный элемент массива и его порядковый номер.
//     Найти максимальный элемент массива и его порядковый номер.
//     Определить количество отрицательных элементов.
//     Найти количество нечетных положительных элементов.
//     Найти количество четных положительных элементов.
//     Найти сумму четных положительных элементов.
//     Найти сумму нечетных положительных элементов.
//     Найти произведение положительных элементов.
//     Найти наибольший среди элементов массива, остальные обнулить.

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
document.writeln(" Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] <br> <br>");

//     Найти сумму и количество положительных элементов.
let varSum = 0, qnt = 0, sumEven = 0, even = 0, zero = 0, multi = 1;
for (let i = 0; arr.length > i; i++) {
    if (arr [i] !== 0) {
        if (arr[i] > 0) {
            varSum += arr [i];
            qnt++;
            multi *= arr [i];
            if (arr [i] % 2 === 0) {
                even++;
                sumEven += arr [i];
            }
        }
    } else {
        zero++;
    }
}
document.writeln("Сумма положительных элементов " + varSum + " и их количество " + qnt + "<br>");

//     Найти минимальный элемент массива и его порядковый номер.
let minNum = 0, numPosition = 0;
for (let i = 0; arr.length > i; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i];
        numPosition = i+1;
    }
}
document.writeln("Минимальный элемент массива " + minNum + " и его порядковый номер " + numPosition + "<br>");

//     Найти максимальный элемент массива и его порядковый номер.
let maxNum = 0;
for (let i = 0; arr.length > i; i++) {
    if (arr[i] > maxNum) {
        maxNum = arr[i];
        numPosition = i+1;
    }
}
document.writeln("Максимальный элемент массива " + maxNum + " и его порядковый номер " + numPosition + "<br>");

//     Определить количество отрицательных элементов.

document.writeln("Количество отрицательных элементов " + (arr.length - qnt - zero) + "<br>");

//     Найти количество нечетных положительных элементов.
document.writeln("Количество нечетных положительных элементов " + (qnt - even) + "<br>");

//     Найти количество четных положительных элементов.
document.writeln("Количество четных положительных элементов " + even + "<br>");

//     Найти сумму четных положительных элементов.
document.writeln("Сумма четных положительных элементов " + sumEven + "<br>");

//     Найти сумму нечетных положительных элементов.
document.writeln("Сумма нечетных положительных элементов " + (varSum-sumEven) + "<br>");

//     Найти произведение положительных элементов.
document.writeln("Произведение положительных элементов " + multi + "<br>");

//     Найти наибольший среди элементов массива, остальные обнулить.
for (let i = 0; i < arr.length; i++) {
    if ( arr [i] < maxNum) {
        arr [i] = 0;
    }
}
document.writeln( arr.join(" | "));