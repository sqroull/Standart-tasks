// 1 Задание

let my = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Иван', surname: 'Петров' },
    { name: 'Глеб', surname: 'Петров' }
];

let your = [
    { name: 'Илья', surname: 'Товар' },
    { name: 'Олег', surname: 'Рука' },
    { name: 'Гена', surname: 'Петров' },
    { name: 'Дима', surname: 'Велосипед', age: '29' },
    { name: 'Олег', surname: 'Окунь' }
];

let arr = [];
let arrNew = [];

function getByName(arr, key, value) {
    for (j = 0; j < arr.length; j++) {
        if (arr[j][key] === value) {
            arrNew.push(arr[j]);
        }
    }
    return arrNew;     
};

// console.log(getByName(your, 'age', '29'));

let result = getByName(my, 'name', 'Иван');
console.log(result);
