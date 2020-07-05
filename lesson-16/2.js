/**
 * Задача 2.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Сделайте все свойства приватными, а для чтения каждого из них создайте соответствующие методы:
 *
 * - getName — возвращает конкатенацию приватных свойств firstName и lastName;
 * - getRate — возвращает значение приватного свойства rate
 * - getDays — возвращает значение приватного свойства days
 * - getSalary — возвращает зарплату
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */
//Решение

const check = (num) => {
    return (typeof num !== 'number') ||  !isFinite(num);
}

class Worker{
    #firstName;
    #lastName;
    #rate;
    #days;

        constructor (firstName, lastName, rate, days) {
            this.#firstName = firstName;
            this.#lastName = lastName;
            this.#rate = rate;
            this.#days = days;
            };

    getSalary() {
          if (check(this.#rate) || check(this.#days)) {
                throw new Error ('Параметр для вычисления не число');
            }
        return this.#rate * this.#days};
    getName() {
        return this.#firstName + ' ' + this.#lastName;
    };
    getRate(){
        return this.#rate;
    };
    getDays() {
        return this.#days;
    };
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
try {
    console.log(worker.getSalary()); // 10 * 31 = 310
} catch (err) {
    console.log(err);
}

exports.Worker = Worker;