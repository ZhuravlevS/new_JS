/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает число от 1 до 7 в качестве аргумента.
 * Функция возвращает соответствующий день недели на русском языке в следующем формате:
 * 
 * 1 — Воскресенье
 * 2 — Понедельник
 * 3 — Вторник
 * 4 — Среда
 * 5 — Четверг
 * 6 — Пятница
 * 7 — Суббота
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента было предано число вне промежутка 1-7.
 */

// Решение
const check = function (par) {
    let mess = '';
    if (typeof par !== 'number' || !isFinite(par) || isNaN(par)) {
        mess = 'Не числовой тип аргумента';
    } else if (par < 1 || par > 7) {
        mess = 'Аргумент по-за допустими границами';
    }
    if (mess !== '') {
        throw new Error(mess);
    }
}//

const f = function(arg) {

    check(arg);

    switch (arg) {
        case 1:
            return 'Воскресенье';
        case 2:
            return 'Понедельник';
        case 3:
            return 'Вторник';
        case 4:
            return 'Среда';
        case 5:
            return 'Четверг';
        case 6:
            return 'Пятница';
        case 7:
            return 'Суббота';
   }
}

f(1); // Воскресенье
f(4); // Среда

exports.f = f;
