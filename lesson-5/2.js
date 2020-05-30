/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const check = function (par) {
    return (typeof par !== 'number' || !isFinite(par) || isNaN(par));//
}

const f = function () {
    let sum = 0;
    for ( par of arguments) {
        if (check(par)) {return };
        sum = sum + par;
    }

    return sum;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
