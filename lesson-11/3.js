/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
const createFibonacciGenerator = function () {
    let prev = 0;
    let curr = 0;

    const count = {
        print: function () {
            let help = 0;

            switch (prev + curr) {
                case 0:
                    prev = 0;
                    curr = 1;
                    break;
                case 1:
                    prev = 1;
                    curr = 1;
                    break;
                default:
                    help = curr;
                    curr = curr + prev;
                    prev = help;
            }
            return curr;
        },
        reset: function () {
            prev = 0;
            curr = 0;
        }

    }
    return count;
 }


const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
