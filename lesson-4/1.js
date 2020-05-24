/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

//const person = {};

// Решение
const person = {

    get salary() {
        const today = new Date();
        //const today = new Date(2020, 5, 6);
        const endMonth = new Date(today.getFullYear(), today.getMonth() + 1 , 1, 0, 0, 0);
        return (endMonth - today) / (24 * 60 * 60 * 1000) > 20 ? `good salary` : `bad salary`;

    }
};

console.log(person.salary);
// Сейчас конец мая, до конца осталось меньше 20 дней, должна вернуть `bad salary` а не `good salary`

person.salary; // good salary

exports.person = person;
