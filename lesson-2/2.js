// Перепишите `if..else` с использованием нескольких операторов `?`. 
// Для читаемости — оформляйте код в несколько строк.

////////////////// Задание //////////////////
// var message;

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

////////////////// Решение //////////////////
var message;
let login = 'Pitter';

message =
    (login == 'Pitter') ? 'Hi' :
    (login == 'Owner') ? 'Hello' :
    (login == '') ?'unknown' : '';
console.log(message);
