<?php
// Исправьте типовые ошибки

error_reporting(E_ALL);
ini_set('display_errors', true);

// 1. Использование констант вместо строк
define('TODAY_IS_MONDAY', false);

// 2. Указание констант вместо ключей в ассоциативных массивах 
$data  = [
    'FIRST_KEY' => 1,
];
echo $data['FIRST_KEY'];

// 3. Использование переменных, которые еще не объявлены
$x = 3;
$a = 0;
if ($x > 2) {
    $a = 0;
}
echo $a;

// 4. Переопределение значений в суперглобальных переменных
// if ($x > 2) {
//    $_GET['show_info'] = 'y';
// }

if ((isset($_GET['show_info']) && $_GET['show_info'] == 'y') || $x > 2) {
    echo "done";
}

// 5. Попытка обрамить условием большую часть html кода, чем это нужно
?>
<div class="some-div-class">
    <a href="#" class="some-a-class"><?= $x > 2 ? 'На главную' : 'О компании'; ?></a>
</div>
<?php

// 6. Вывод тегов оператором echo
if ($x > 2) {
    ?> <p><?= 'Hello World'; ?></p> <?php
}

// 7. Ошибки, связанные с применением bool
$value = (bool) rand(0, 1);
if ($value) {
    echo '>';
}

// 8. Ошибки, связанные с применением bool
// if ($x > 2) {
//     $result = true;
// } else {
//     $result = false;
// }
$result = $x > 2;

// 9 Занесение в переменную одного типа значения другого типа
$a = true;
if ($x > 2) {
    $a = false;
} else {
    $a = true;
}
