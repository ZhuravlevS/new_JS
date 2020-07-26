'use strict';

import '../styles/index.scss';

import { tarifs } from './constants';

let payments = [];
let payment  = {};

const companies = document.getElementById('companies');
const meters    = document.getElementById('meters');

const dataList  = document.getElementsByClassName('data__wrapper')[0].getElementsByTagName('input');
let shabList  = '';
let checkBoxArr = [];
let shabCheckBox = `<p class="right__payments-field">
              <label>
                <input type="checkbox" checked>
                <span>{nameCheckBox}</span>
              </label>
            </p>`;

//     payment.id            = '';
//     payment.meterId       = '';
//     payment.current       = 0;
//     payment.previos       = 0;
//     payment.currentOnDate = 0;
//     payment.total         = 0;

const payClick= () => {

    let keepPay = [];
    let checkBoxs = document.getElementsByClassName('right__payments-field');

    for (let i = 0; i < checkBoxs.length; i++) {
       let tecCheckBox = checkBoxs[i];
        let atrCheckBox = tecCheckBox.querySelectorAll('[type="checkbox"]')[0];

        if (atrCheckBox.checked) {
            keepPay.push(tecCheckBox.getElementsByTagName('span')[0].innerHTML);
         }
    };

    for (let i = 0; i < payments.length; i++) {
        let tecId = payments[i].id;

        if (typeof keepPay.find(item => item === tecId) !== 'undefined') {
            console.log(`${tecId} платежа оплачено. Сумма ${payments[i].total}` );
        };

    };
};

const editListCheckBox = () => {

    let checkBoxs = document.getElementsByClassName('right__payments-field');

    for (let i = checkBoxs.length - 1; i >= 0; i--) {

        let tecCheckBox = checkBoxs[i];

        tecCheckBox.remove();
    };
};

const addItemSum = () => {

    let elemSum = document.getElementsByClassName('list__item-label')[0];
    let strRes = shabList.replace('{meterId}', payment.meterId).replace('{total}', payment.total);

    elemSum.insertAdjacentHTML('beforebegin', strRes);

    let elemTotalSum = document.getElementsByClassName('form__summary-list')[0].getElementsByClassName('list__item list__total')[0];
    let labelTotalSum = elemTotalSum.getElementsByClassName('price')[0].getElementsByTagName('b')[0];
    let sumTotalStr = labelTotalSum.innerHTML;
    let sumTotal = Number(sumTotalStr.replace(/\s/g, ''));

    sumTotal = sumTotal + payment.total;
    labelTotalSum.innerHTML = sumTotal;

};

const onclick = (e) =>{
    //console.log(e.target.checked);
};

const addCheckBox = () => {
    //
    let paymentId = payment.id;
    let checkBoxAll = document.getElementsByClassName('right__payments-field');

     for (let i = 0; i < checkBoxAll.length; i++) {

        let tecCheckBox = checkBoxAll[i];
        let idCheckBox  = tecCheckBox.getElementsByTagName('span')[0];
        let payName = idCheckBox.innerHTML.toLowerCase();

        if (paymentId === payName) {//payName.includes(payment.id)
            return; //Уже есть
        }
     };

    let strRes = shabCheckBox.replace('{nameCheckBox}', paymentId);
    const checkBoxes = document.getElementsByClassName('right__payments-fields')[0];

    checkBoxes.insertAdjacentHTML('beforebegin', strRes);
    checkBoxAll = document.getElementsByClassName('right__payments-field');
    for (let i = 0; i < checkBoxAll.length; i++) {
        let tecCheckBox = checkBoxAll[i];
        let idCheckBox = tecCheckBox.getElementsByTagName('span')[0];
        let payName = idCheckBox.innerHTML.toLowerCase();
        if (paymentId === payName) {
            tecCheckBox.onclick = onclick;
            };

    };

};

const setTextPayRow = (payRow) => {

    let itemList = payRow.getElementsByClassName('list__item-label')[0];

    itemList.innerHTML = '{meterId}';
    let sumTeg = payRow.getElementsByClassName('price')[0].getElementsByTagName('b')[0];

    sumTeg.innerHTML = '{total}';
    return payRow.outerHTML;

 };

const cleanElements = () => {

    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].type = 'text') {
            dataList[i].value = null;
        };
    };
};

const saveClick = () => {
    try {
        if (!payment.hasOwnProperty('id')) {
            throw new Error('Не определена услуга.');
        };
        if (!payment.hasOwnProperty('meterId')) {
            throw new Error('Не определен счетчик.');
        };
        if (!payment.hasOwnProperty('current') || !payment.hasOwnProperty('previos') || payment.current + payment.previos === 0) {
            throw new Error('Не установлены показания счетчика.');
        };
    } catch (err) {
        console.dir( err.message );
        return;
     };

    payment.total = Number(((payment.current - payment.previos) * tarifs[payment.id]).toFixed(2));
    payments.push(Object.assign({}, payment));

    addItemSum();

    overWrite();
    editCenterTitel();
    cleanElements();
    addCheckBox();
};

const cleanClick = () => {
    payments = [];
    payment = {};
    overWrite();
    editCenterTitel();
    cleanElements();
    editListCheckBox();
};

const editCenterTitel = () => {

    let paymentText = payment.hasOwnProperty('id') && String(payment.id) !== '' ? payment.id : '...';
    const centerTitles = document.getElementsByClassName('center')[0];
    let centerTitle = centerTitles.getElementsByTagName('h2')[0];

    centerTitle.innerHTML = paymentText.toUpperCase();
    centerTitle = centerTitles.getElementsByTagName('p')[0];
    centerTitle.innerHTML = 'Payment of ' + paymentText + ' supply';

};

const prepareDocuments = () => {

    const butWrapper = document.getElementsByClassName('button-wrapper')[0];
    let btnSave      = butWrapper.getElementsByClassName('btn')[0];
    let btnClean     = butWrapper.getElementsByClassName('btn-outline')[0];
    const sumList    = document.getElementsByClassName('form__summary-list')[0];
    const sumItem    = sumList.getElementsByClassName('list__item');

    const payList    = document.getElementsByClassName('right__payments-footer')[0];
    let btnPay       = payList.getElementsByClassName('btn')[0];

    btnSave.type     = 'button';
    btnSave.onclick  = saveClick;
    btnClean.type    = 'button';
    btnClean.onclick = cleanClick;
    btnPay.type      = 'button';
    btnPay.onclick   = payClick;

    editCenterTitel();
    cleanElements();
    shabList = setTextPayRow(sumItem[0].cloneNode(true));
    editListCheckBox();
};

const overWrite = () => {
    const elemsComp = companies.getElementsByClassName('left__company');

     for (let i = 0; i < elemsComp.length; i++) {
         elemsComp[i].style = "background-color: #ffffff;";
     };
};

companies.onclick = (event) => {

    const id = event.target.getAttribute('data-id');
    const element = document.querySelector(`[data-id=${id}]`);

    overWrite();
    element.style = "background-color: #ccc;";
    payment.id = id;

    editCenterTitel();

};

meters.onchange = (event) => {

    const { value } = event.target;

    payment.meterId = value;
    let memCurrent  = Number(document.getElementById('current').value);
    let memPrevious = Number(document.getElementById('previous').value);
    if (memCurrent < memPrevious) {
        // показания внесены наоборот
        [memCurrent, memPrevious] = [memPrevious, memCurrent];
    };
    payment.current       = memCurrent;
    payment.previos       = memPrevious;
    payment.currentOnDate = Number(document.getElementById('payment').value);
};

prepareDocuments();
