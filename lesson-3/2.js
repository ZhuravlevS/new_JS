/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
//const source = 31458; //
const source = 'Way_To_Make_Easy_Money@gmail.com';
const example = 'EASY';
//const example = 'Hardly';

function checkSpam (source, example) {
    if (typeof source !== 'string' || typeof example !== 'string') {

        throw 'Неправильный тип входного параметра';
    }
    return (source.toLowerCase()).indexOf(example.toLowerCase()) >= 0;//
}

try {
    console.log(checkSpam(source, example) ? 'Спам' : 'Письмо');
}
catch (except) {
    console.error(except);
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
