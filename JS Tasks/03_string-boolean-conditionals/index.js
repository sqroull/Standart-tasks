// Задание 1

let password = '-1234';

if (password.length > 3 && (password.includes('_') || password.includes('-'))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
};

// Задание 2 

let name = 'АлеКсаНдр';
let surname = 'ЛисиЧКиН';
let name2 = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let surname2 = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

sub = (name2 === name) && (surname2 === surname) ? 
      console.log('Имя осталось без изменений') : 
      console.log('Имя было преобразовано: ' + name2 + ' ' + surname2);
    

