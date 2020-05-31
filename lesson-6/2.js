/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

const check = function(arg0, arg1) {
    if (!Array.isArray(arg0)) {
        throw new Error('В качестве первого аргумента передан не массив');}
    //console.log(typeof arg1);
    if (typeof arg1 !== 'function') {
        throw new Error('В качестве второго аргумента передана не функция');}
};

const filter = function(arrArg, funcArg) {

    const newArr = new Array();
    try {check(arrArg, funcArg);}
    catch(err) {console.log(err);
        return};

    for (i = 0; i < arrArg.length; i++) {
        funcArg(arrArg[i], i, arrArg);
        if (arrArg[i] ==='Добрый вечер!') {
            newArr.push(arrArg[i]);
        }
    }
    return newArr;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
