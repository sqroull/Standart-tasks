// Задание 1

let m = -10;
let n = -3;
let count = 42;

// Указыввем диапозон (пока не сдвигаем его), и создаём пустой массив.

let range = Math.abs(m - n);
let mass = [];

// Создаём цикл, добавляем в конец массива, генерируем число из диапозона и сдвигаем его от минимального значения, чтобы остаться в рамках чисел

for (let i = 0; i < count; ++i) {
    mass.unshift(Math.round(Math.random() * range + Math.min(n, m))) 
}

console.log(mass);

// Задание 2

let str = "Привет, мир!";
let strReversed = "";

// Перебираем символы с конца в начало

for (let i = str.length - 1; i >= 0; i--) {
    strReversed += str[i]; /* Прибавляем к строке значение ячеек массива */
}

console.log(`${strReversed}`);

// Задание 3 

let roadMines = [false, true, false, false, true, false, false, false, false, false];
let position = 0;
let life = 1;
let mine = false;

for (let mine of roadMines) {
    position += 1;
    console.log("Танк переместился на " + position);
        if (mine === true) {
            if (life !== 0) {
                console.log("Танк повреждён");
                life--
            } else {
                console.log("Танк уничтожен");
                break;
}}};

// Задание 4 

// Генерируем массив 1-31 и создаём массив с днями недели

let dates = [];
for (i = 1; i <= 31; i++) dates.push(i);
let day = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];

// Выводим для каждого из чисел строку ${число} января, ${день недели}

for (j = 1; j <= 31; j++){
    let date = dates[j-1]; /* Дату выбираем из массива */
    let today = day[j%7]; /* Индекс вычисляем с помощью остатка от деления. */
    console.log(`${date} января, ${today}`);
}
