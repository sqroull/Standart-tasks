// Задание 1.

let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;

// Вычесляем расстояние между точками с помощью абсолютных значений

let distanceX = Math.abs(x1 - x2); 
let distanceY = Math.abs(y1 - y2);

// Перемножаем расстояние, чтобы получить площадь

console.log(distanceX * distanceY);

// Задание 2.

let a = 13.890123;
let b = 2.890564;
let n = 3;

// Преобразуем числа в целые с n дробных цифр и округляем вниз

let aNormalized = Math.floor(
    a % 1 * Math.pow(10, n)
);

let bNormalized = Math.floor(
    b % 1 * Math.pow(10, n)
);

// Выводим числа и сравнения

// console.log(aNormalized);
// console.log(bNormalized);

if (aNormalized === bNormalized){
    console.log('Числа равны, ' + aNormalized + ' = ' + bNormalized);
} else if (aNormalized > bNormalized) {
    console.log('Дробная часть первого числа больше, ' + aNormalized + ' > ' + bNormalized);
} else {
    console.log('Дробная часть второго числа больше, ' + aNormalized + ' < ' + bNormalized);
}



// Задание 3.
// Указываем диапозон. Минимальное значение берём в переменную, чтобы далее запись была проще

let n = -3;
let m = -5;
let range = Math.abs(m - n);

// Выбираем случайное число из диапозона

let numberInRange = Math.round(Math.random() * range);

// Создаём условие, чтобы отбиралось только нечётное число, включая границы диапозона

if ((Math.min(n, m) + numberInRange) % 2 == 0){
    if ((Math.min(n, m) + numberInRange) == Math.max(n, m)){
        --numberInRange;
    }
    else {
        ++numberInRange;
    }
};

// Добавляем к минимальному значению полученное число, чтобы оставить его в диапозоне

console.log(Math.min(n, m) + numberInRange);