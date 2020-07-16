/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение
const check = (obj) => {
    if (typeof obj !== 'object' && !Array.isArray(obj)) {
        throw new Error(`Переданное значение ${obj} не объект.`)};
};

const getCustomers = (arrCostom, arrContry) => {

    if (!Array.isArray(arrCostom) || !Array.isArray(arrContry)) {
        throw new Error(`Параметр должен быть массивом массив.`)};
        arrContry.forEach((element) => {
        check(element);
        });
        const arrRez = [];

        arrCostom.forEach((customer) => {
            check(customer);

            const tecProm = new Promise((resolve, reject) => {
                let tecID = customer.id;
                let success = false;

                if ((typeof tecID !== 'undefined') && (typeof customer.verified !== 'undefined') && (customer.verified)) {
                    let elemFindID = arrContry.find(state => (state.id === tecID));

                    if (typeof elemFindID !== 'undefined') {
                        customer.country = elemFindID.country;
                        success = true;
                    };
                };
                if (success) {
                    resolve(customer);
                } else {
                    reject(`We don't have information about country for this customer: ${customer.name}`);
                };
            });
            arrRez.push(tecProm);
         });
    return Promise.allSettled(arrRez);
};

// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

try {
getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
}catch (err) {
    console.log(err.message);
}
