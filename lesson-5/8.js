/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

const chack = function (arr) {

    if (!Array.isArray(arr)) {
        throw new Error('Аргумент не является массивом');
    }
    if (arr.length === 0) {
        throw new Error('Массив пустой');
    }

}//

const f = function(arr) {
    chack(arr);
    let newArr = arr.map(function func(item){ console.log(item)});

    return;

}

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;
