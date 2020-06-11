/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const checkParameter = function(par, parNomer) {
    if (typeof par !== 'object' || par.toString() !== '[object Object]') {
        throw new Error(`Параметр № ${parNomer} не является объектом.`)
    }
}
const getFrom = function (item, variant) {
    return variant.find(element => (element[0] === item[0] && element[1] === item[1]));
}

const rewriteDescriptors = function (aim, resource, itemName) {
    let descripRes = Object.getOwnPropertyDescriptor(resource, itemName);

    Object.defineProperty(aim, itemName, {
        writable: descripRes.writable
    });
    Object.defineProperty(aim, itemName, {
       enumerable: descripRes.enumerable
    });
    Object.defineProperty(aim, itemName, {
       configurable: descripRes.configurable
    });

}

const shallowMerge = function(user, userData) {
    checkParameter(user, 1);
    checkParameter(userData, 2);
    const obj = Object.assign({}, user, userData);

    const itemsUser = Object.entries(user);
    const itemsUserData = Object.entries(userData);

    for (const item of Object.entries(obj)) {
        let itemFrom = getFrom(item, itemsUserData);

        if (itemFrom) {
            rewriteDescriptors(obj, userData, itemFrom[0]);
         }else {
            itemFrom = getFrom(item, itemsUser);
            rewriteDescriptors(obj, user, itemFrom[0]);
            }
    }
    return obj;
}

try {
    const result = shallowMerge(user, userData);

    console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
    console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
    console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false
} catch (err) {
    console.log(err.message);
}

exports.shallowMerge = shallowMerge;
