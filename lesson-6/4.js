/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
const check = function(arg0, arg1) {
    if (!Array.isArray(arg0)) {
        throw new Error('В качестве первого аргумента передан не массив');}

    if (typeof arg1 !== 'function') {
        throw new Error('В качестве второго аргумента передана не функция');}
};

const some = function(argArr, argFunc) {

    try {check(argArr, argFunc);}
    catch(err) {console.log(err);
        return};
    if (argArr.length === 0) {return false;}

    for (i = 0; i < argArr.length; i++) {
        argFunc(argArr[i], i, argArr);
        if (typeof argArr[i] === 'string') {
            return true;
        }
    }
    return false;
}

const result = some(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'string';
});

console.log(result); // true

exports.some = some;
