// У вас есть массив с элементами в виде положительных чисел.
// Найдите сумму таких элементов массива.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
//const array = [2, -1, -3, 15, 0, 4];

////////////////// Решение //////////////////
const array = [2, -1, -3, 15, 0, 4];
var itogo_polozh  = 0;

for(var this_element of  array) {
    if(this_element > 0) {itogo_polozh = itogo_polozh + this_element;}
}
console.log(itogo_polozh);