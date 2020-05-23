/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
const word = 'pitter';
// const word = undefined;
// //const word = 'john';
// //const word = '';
function upperCaseFirst (str) {

    if (typeof str !== 'string' ) {
        throw 'Неправильный тип входного параметра';}

        else if (!str) {
            return '';
    }
    return str[0].toUpperCase() + str.slice(1);//
}

try {
    console.log(upperCaseFirst(word));
}
catch (exception) {
    console.error(exception);
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
