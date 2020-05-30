/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const check = function (par) {
    return (typeof par !== 'number' || !isFinite(par) || isNaN(par));//
}
const f = function (nam0, nam1, nam2) {//

    for ( i = 0; i < arguments.length; i++) {//arguments.length
        let par = arguments[i];
        if (check(par)) {
            throw new Error(`Не числовой аргумент ${i + 1}.`)
        };
    }
    return (nam0 - nam1) / nam2;
}
console.log(f(9, 3, 2)); // 3

exports.f = f;
