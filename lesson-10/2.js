/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение
const checkFunction = function(tecFunc, nomer) {
    if (typeof tecFunc !== 'function') {
        throw new Error(`Параметр N ${nomer} не является функцией.`);
    }
}

const checkResult = function (tecRes, funcNomer) {
    if (!tecRes || typeof tecRes !== 'number') {
        throw new Error(`Результат вполнения функции ${funcNomer} не является числом.`);
    }
}

const calculate = function (...params) {
   let resultat = 0;
   let nomer = 0;

   for (const tecFunc of params) {
        ++nomer;
        checkFunction(tecFunc, nomer);
        resultat = tecFunc(resultat);
        checkResult(resultat, nomer);
   }
   return resultat;
}

    try {
        const result = calculate(
            () => {
                return 7;
            },
            prevResult => {
                return prevResult + 4;
            },
            prevResult => {
                return prevResult * 5;
            },
        );
        console.log(result); // 55
} catch (err) {

    console.log(err.message);
}

exports.calculate = calculate;
