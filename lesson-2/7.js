// Напишите код, который посчитает сумму всех парных элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4];

////////////////// Решение //////////////////
const array = [1, 2, 3, 4];
var itogo_chet  = 0;
//var chislo;

for (chislo of array) {
    if (chislo % 2 === 0) {
        itogo_chet = itogo_chet + chislo;
    }
}
console.log(itogo_chet);