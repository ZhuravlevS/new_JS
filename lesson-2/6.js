// Написать код который посчитает сумму всех элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4];

////////////////// Решение //////////////////
const array = [1, 2, 3, 4];
var itogo  = 0;
//var chislo;

for (chislo of array) {
    itogo = itogo + chislo;
}
console.log(itogo);
