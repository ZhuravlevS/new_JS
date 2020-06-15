/**
 * Задача 4.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 *
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение
const checkFunction = function(tecFunc, nomer) {
    if (typeof tecFunc !== 'function') {
        throw new Error(`Параметр N ${nomer} не является функцией.`);
    }
}

const checkResult = function (tecRes, funcNomer) {
    if (!tecRes ) {
        throw new Error(`Результат вполнения функции ${funcNomer} пустой.`);
    }
}

const compose = function(...params) {

    return function (par) {
        let i = (params.length - 1);
        let result = '';

        for (i; i !== -1; i--) {
            const tecFunc = params[i];

            checkFunction(tecFunc, i);
            result = tecFunc(result);
            checkResult (result, i);
        };

        if (par) {
        result = par + result;
        }
        return result ;
    };
};//

//const compose = pol();
try {
    const result1 = compose(
        prevResult => prevResult + 'o',
        prevResult => prevResult + 'l',
        prevResult => prevResult + 'l',
        prevResult => prevResult + 'e',
    )('h');//;
    const result2 = compose(
        prevResult => prevResult + 'o',
        prevResult => prevResult + 'l',
        prevResult => prevResult + 'l',
        prevResult => prevResult + 'e',
        () => 'h',
    )();////;

    console.log(result1); // 'hello'
    console.log(result2); // 'hello'
} catch (err) {
    console.log(err.message);
}

exports.compose = compose;
