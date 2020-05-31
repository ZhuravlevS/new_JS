/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const check = function(arg0, arg1) {
    if (!Array.isArray(arg0)) {
        throw new Error('В качестве первого аргумента передан не массив');}

    if (typeof arg1 !== 'function') {
        throw new Error('В качестве второго аргумента передана не функция');}
};

const reduce = function(argArr, argFunc, INITIAL_ACCUMULATOR) {//

    try {check(argArr, argFunc);}
    catch(err) {
        console.log(err);
        return;
    };
    let init = argArr[0];
    let itog = 0;

    if (arguments.length === 3) {
        init = INITIAL_ACCUMULATOR;
        itog = init;
    }

    for (i = 0; i < argArr.length; i++) {
        argFunc(init, argArr[i] ,i, argArr);
        itog = itog + argArr[i];
      }
    return itog;
}

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
