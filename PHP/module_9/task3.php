<?php

// Создайте массив $numbers случайной длины от 3 до 20.
// Каждое значение — это случайное число от 0 до 10.

$numbers = [];
$size = rand(3, 20);

for ($i = 0; $i < $size; $i++) {
    $numbers[] = rand(0, 10);
}

echo implode(' ', $numbers) . '<br>';

// Посчитайте сумму его элементов, стоящих под нечётным индексом.

$sum = 0;

foreach ($numbers as $key => $value) {
    if ($key % 2 != 0) {
        $sum += $value;
    }
}

echo $sum;
