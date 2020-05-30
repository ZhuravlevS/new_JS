/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение
const check = function (num) {
    return (typeof num !== 'number' || !isFinite(num) || isNaN(num));//
}

const f = function (num) {

    if (check(num)) {return };

    return num ** 3;

}
console.log (f(3));

console.log(f2(2)); // 8

exports.f = f;
