/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const checkElem = function(elem) {
    const halal = ['object', 'number', 'string'];
    let typeElem = typeof elem;

    if (!(halal.some(element => typeElem === element)) && !Array.isArray(elem)) {
        throw new Error('Недопустимый тип для элемента');
    }
}

const checkLength = function(lengthArr) {
    if (typeof lengthArr !== 'number') {
        throw new Error('Размер массива должен быть задан числом');
    }
}

const createArray = function(element, lengthArr) {
    checkElem(element);
    checkLength(lengthArr);
    return new Array(lengthArr).fill(element);
    }

try {

    const result = createArray('x', 5);
    console.log(result); // [ x, x, x, x, x ]
} catch (err) {
        console.error(err.message);
    }

exports.createArray = createArray;
