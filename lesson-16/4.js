/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
 const firstCharToUC = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const check = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Параметр функции должен быть строкой');
    }
}

 class Stringer {

    constructor () {
    }

    reverse (express) {
         check(express);
         let arrIn = express.split('');
         let arrOut = arrIn.reverse();

         return arrOut.join('');
    };

     uppercaseFirst(express) {
         check(express);
         return firstCharToUC(express);
     };
     uppercaseAll(express) {
         check(express);
         let arrOut  = express.split(' ').map(function bc(currentValue){
             return firstCharToUC(currentValue);
         });
         return arrOut.join(' ');
     };
}

const stringer = new Stringer();
try {
    console.log(stringer.reverse('good morning!')); // !gninrom doog
    console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
    console.log(stringer.uppercaseAll('good morning!')); // Good Morning!
}catch (err) {
    console.log(err.message);
}

exports.Stringer = Stringer;