/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение
const check = function(argArr, argFunc) {
    if (!Array.isArray(argArr)) {
        throw new Error('В качестве первого аргумента передан не массив');}

    if (typeof argFunc !== 'function') {
        throw new Error('В качестве второго аргумента передана не функция');}
};

const every = function(argArr, argFunc) {

    try {check(argArr, argFunc);}
    catch(err) {console.log(err);
        return};
    if (argArr.length === 0) {return false;}

    for (let i = 0; i < argArr.length; i++) {
        if (!argFunc(argArr[i], i, argArr)) {
            return false;
        }
      }
    return true;
}

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;
