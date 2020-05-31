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

const check = function(arg0, arg1) {
    if (!Array.isArray(arg0)) {
    throw new Error('В качестве первого аргумента передан не массив');}
    if (typeof  arg1 !== 'function') {
    throw new Error('В качестве второго аргумента передана не функция');}
};

const forEach = function(arg0, arg1) {

    try {check(arg0, arg1);}
    catch(err) {console.log(err);
    return};

    arg0.map(function func(item, index, arrRef){
            if (item !== undefined) {
                arg1(item, index, arrRef);
            }
        });
    return;
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
