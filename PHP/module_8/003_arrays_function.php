<?php
// Функции по работе с массивами дан уже знакомый вам массив авторов и книг

$library = [
    'authors' => [
        'john_makkormik@example.com' => [
            'name' => 'Джон Маккормик',
            'email' => 'john_makkormik@example.com',
            'birthYear' => 1972,
        ],
        'martin_robert@example.com' => [
            'name' => 'Мартин Роберт',
            'email' => 'martin_robert@example.com',
            'birthYear' => 1952,
        ],
        'martin_fauler@example.com' => [
            'name' => 'Мартин Фаулер',
            'email' => 'martin_fauler@example.com',
            'birthYear' => 1963,
        ],
    ],
    'books' => [
        [
            'title' => 'Чистый код: создание, анализ и рефакторинг',
            'author' => 'martin_robert@example.com',
            'year' => 2013,
        ],
        [
            'title' => 'Девять алгоритмов, которые изменили будущее',
            'author' => 'john_makkormik@example.com',
            'year' => 2011,
        ],
        [
            'title' => 'Идеальный программист',
            'author' => 'martin_robert@example.com',
            'year' => 2011,
        ],
        [
            'title' => 'Шаблоны корпоративных приложений',
            'author' => 'martin_fauler@example.com',
            'year' => 2002,
        ],
    ],
];


// 1. Используя подходящую встроенную функцию, выберите и выведите первого автора в библиотеке
$firstAuthor = array_shift($library['authors']);
var_dump($firstAuthor);

// 2. Используя подходящую встроенную функцию, выберите и выведите последнюю книгу
$lastBook = array_pop($library['books']);
var_dump($lastBook);

// 3. Используя подходящую встроенную функцию, получите массив содержащий список email всех авторов

$emails = [];

foreach ($library['authors'] as $key => $value) {

    $emails = array_keys($library['authors']);
}

var_dump($emails);

// 3. Используя подходящую встроенную функцию, определите, есть ли среди этих email 'martin_fauler@example.com'
$hasMartinFauler = false;

if (in_array("martin_fauler@example.com", $emails)) {

    $hasMartinFauler = true;
    var_dump('Есть в списке');
} else {

    var_dump('Нет в списке');
    $hasMartinFauler = false;
}

// 4. Используя подходящую встроенную функцию, определите, есть ли среди этих email 'vasya@example.com'
$hasVasyaPupkin = false;

if (in_array("vasya@example.com", $emails)) {

    $hasVasyaPupkin = true;
    var_dump('Есть в списке');
} else {

    var_dump('Нет в списке');
    $hasVasyaPupkin = false;
}

// 5. Используя подходящую встроенную функцию, верните обратно в библиотеку последнюю книгу (В задании в названии ошибка как я понимаю)

array_push($library['books'], $lastBook);
var_dump($library);

// 6. Используя подходящую встроенную функцию, добавьте в библиотеку на первую полку еще одну книгу Мартина Фаулера

$newBook = [
    'title' => 'Шаблоны корпоративных приложений Часть 2',
    'author' => 'martin_fauler@example.com',
    'year' => 2020,
];

array_unshift($library['books'], $newBook);
var_dump($library);

