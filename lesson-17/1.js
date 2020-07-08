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
const rezArr = [];

const check = (...params) => {
    for (const paramsKey in params) {
        let tecParam = params[paramsKey];

        if (typeof tecParam !== 'number' || !isFinite(tecParam) ) {
            throw new Error(`Параметр № ${Number(paramsKey) + 1} : ${tecParam} не число.`);
        }
    }
}

(function () {
    setTimeout(() => {
        getRezalt();
    }, 0);
}())

function getRezalt() {

    for (i = 0; i < rezArr.length; i++) {
        //console.log(rezArr[i]);
        let [num, delay] = rezArr[i];

        setTimeout(()=> {
           console.log(num);
        }, delay * (i + 1));
    }
}

function postpone (start, end, delay) {
    check (start, end, delay);
    let rightOrder = (start < end);

    if (!rightOrder) {[end, start] = [start, end]}
        for (let i = start; i <= end ; i++) {
            if (rightOrder) {
                rezArr.push([i, delay]);
            }else {
                rezArr.push([end + 1 - i, delay]);
            };
          }
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
