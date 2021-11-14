<?php

$studentsCount = rand(1, 1000);

$end00 = $studentsCount % 100;
$end0 = $end00 % 10;

if ($end0 == 1 && $end00 != 11) {
    echo "На учебе $studentsCount студент";
} elseif (($end00 <= 4 && $end0 != 0) || ($end00 > 21 && ($end0 < 5 && $end0 != 0))) {
    echo "На учебе $studentsCount студента";
} else {
    echo "На учёбе $studentsCount студентов";
}

