/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение
let step = 0;

const check = (...params) => {
    for (const paramsKey in params) {
        let tecParam = params[paramsKey];

        if (typeof tecParam !== 'number' || !isFinite(tecParam) ) {
            throw new Error(`Параметр № ${Number(paramsKey) + 1} : ${tecParam} не число.`);
        }
    }
}

function postpone (start, end, delay) {
    let rightOrder = (start < end);

    check (start, end, delay);

    if (!rightOrder) {
        [end, start] = [start, end]
    };
    for (let i = start; i <= end ; i++) {
        step++;
        setTimeout(()=> {
            console.log(rightOrder ? i : end + 1 - i);
        }, delay * (step));
    };
}

try {
    postpone(1, 3, 1000);
// 1
// 2
// 3
    postpone(3, 1, 1000);
// 3
// 2
// 1
}catch (err) {
    console.log (err.message);
}

exports.postpone = postpone;
