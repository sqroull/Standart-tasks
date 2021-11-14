<?php

$values = [];

for ($i = 0; $i < 10; $i++) {
    $values[] = rand(0, 100);
}

echo implode(' ', $values) . '<br>';

$index = 0;
$min = $values[0];

foreach ($values as $i => $item) {
    if ($item < $min) {
        $min = $item;
        $index = $i;
    }
}

echo 'Минимальное значение в массиве: ' . $min . '<br>';
echo 'Позиция минимального значения в массиве: ' . $index;

