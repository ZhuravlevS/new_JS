/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

const check = function(argArr, argFunc) {
    if (!Array.isArray(argArr)) {
    throw new Error('В качестве первого аргумента передан не массив');}
    if (typeof  argFunc !== 'function') {
    throw new Error('В качестве второго аргумента передана не функция');}
}

const forEach = function(argArr, argFunc) {

    try {check(argArr, argFunc);}
    catch(err)
    {console.log(err);
    return;}

    for (let i = 0; i < argArr.length; i++) {
        if (argArr[i] !== undefined) {
            argFunc(argArr[i], i, argArr);
        }
    }
    return;
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
