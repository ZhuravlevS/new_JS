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
const check = function(argArr, argFunc) {
    if (!Array.isArray(argArr)) {
        throw new Error('В качестве первого аргумента передан не массив');}

    if (typeof argFunc !== 'function') {
        throw new Error('В качестве второго аргумента передана не функция');}
};

const reduce = function(argArr, argFunc, INITIAL_ACCUMULATOR) {//

    try {check(argArr, argFunc);}
    catch(err) {
        console.log(err);
        return;
    };
    let init = argArr[0];

    if (INITIAL_ACCUMULATOR !==  undefined) {
        init = INITIAL_ACCUMULATOR;
    }

    for (let i = 0; i < argArr.length; i++) {
        init =  argFunc(init, argArr[i] ,i, argArr);
        }
    return init;
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
