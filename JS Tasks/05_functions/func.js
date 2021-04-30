// Задание 1
    
let arr1 = [
    '123@mail.ru',
    'qwerty@bk.ru',
    'invest@gmail.com',
    'rwheoi@yandex.ru',
    'sdfpsf@mail.ru',
    'example@net.ru',
    'dsadg@ru.ru'
];
let arr2 = [
    'sdfpsf@mail.ru',
    '33333@ru.ru',
    'ds213g@ru.ru',
    'dsadg@ru.ru'
];
let blockEmail = [];
let applyEmail = [];

function checkEmail(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i].includes(arr2[j])) {
                blockEmail.push(arr2[j]);
                break;
            } 
        } if (arr1[i] !== arr2[j]) {
                applyEmail.push(arr1[i]);
        } 
    }
    console.log(`Обнаружены в чёрном списке: ${blockEmail}`);
    console.log(`Валидные адреса: ${applyEmail}`);
};

checkEmail(arr1, arr2);

export default {checkEmail()}

// Задание 2

let summa = 53000;
let amount = 14;
let promo = null;
let discount = 0;

function countPrice(summa, amount, promo) {
    if (promo === "ДАРИМ300") {
        if (summa > 300) {
            summa = summa - 300; 
        }
        else {
            summa = 0;
        }
    }
    if (amount >= 10) {
        summa = summa / 100 * 95;
    }
    if (summa > 50000) {
        discount = (summa - 50000) / 100 * 20 // 200
        summa = summa - discount;
    }
    if (summa >= 20000 && promo == "СКИДКА15") {
        summa = summa / 100 * 85
    }
    return summa;
    // console.log(summa);
};

countPrice(summa, amount, promo);

export default {countPrice()}