/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
const string = 'А вы думаете, нам царям легко?';
let maxLength = 25;

function truncate (string, maxLength) {

    if (typeof string !== 'string' || typeof maxLength !== 'number'
         || isNaN(maxLength)
         || !isFinite(maxLength))
    {
        throw 'Неправильный тип входного параметра';
    }

    if (string.length >= maxLength) {
        return string.slice(0, maxLength - 3) + '...';
    } else {
        return string;
    }
}
console.log(!isFinite(maxLength));
try {
    console.log(truncate(string, maxLength));
}
catch (exception) {
    console.error(exception);
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
