/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

// Решение
const chack = function (par) {

    if (typeof par !== 'number' || !isFinite(par) || isNaN(par)) {
        throw new Error('Не числовой тип аргумента');
    }
    if (par < 1 ) {
        throw new Error('Аргумент меньше 1');
    }

}//

const getDivisors = function (par) {

    chack(par);
    let arr = new Array();
    for (i = 1; i <= par; i++) {
        arr.push(i);
    }

    let someDivisors = arr.filter(function(item){ return par % item === 0});
    return someDivisors;
}

getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;
