<?php

// Напишите алгоритм, который подсчитает, 
// сколько в переменной содержится различных символов 
// (большие и маленькие считайте за разные)

$line = 'Student, hello!';
$answer = [];

foreach (str_split($line) as $counter) {
    $answer[$counter]++;
}

var_dump($answer);
