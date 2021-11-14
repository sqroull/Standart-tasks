<?php

// city- километр шоссе, на котором расположен центр города;
$city1 = rand(1, 1000);
$city2 = rand(1, 1000);
// city1Radius - радиус города, задается в км (наши города — это идеальный круг);
$city1Radius = rand(1, 200);
$city2Radius = rand(1, 200);

$carsQuantity = rand(1, 20);
$arrCars = [];

for ($i = 0; $i < $carsQuantity;) {
    // Чтобы номер авто начинался с 1
    $i++;
    $arrCars[$i] = rand(0, 1000);

    echo $arrCars[$i] . ' - Точка на шоссе. ';
    echo $i . ' - Номер авто. ';

    if ($arrCars[$i] <= ($city1 + $city1Radius) && $arrCars[$i] >= ($city1 - $city1Radius)) {
        echo "Машина $i едет по городу на $arrCars[$i] км со скоростью не более 70";
    } elseif ($arrCars[$i] <= ($city2 + $city2Radius) && $arrCars[$i] >= ($city2 - $city2Radius)) {
        echo "Машина $i едет по городу на $arrCars[$i] км со скоростью не более 70";
    } else {
        echo "Машина $i едет вне города на $arrCars[$i] км со скоростью не более 90";
    }

    echo '<br>';
}


// while ($carsQuantity > 0) {

//     ${"car$carsQuantity"} = rand(0, 1000);
//     echo ${"car$carsQuantity"} . ' - Точка на шоссе. ';
//     echo "$carsQuantity" . ' - Номер авто. ';

//     if (${"car$carsQuantity"} <= ($city1 + $city1Radius) && ${"car$carsQuantity"} >= ($city1 - $city1Radius)) {
//         echo "Машина $carsQuantity едет по городу на ${"car$carsQuantity"} км со скоростью не более 70";
//     } elseif (${"car$carsQuantity"} <= ($city2 + $city2Radius) && ${"car$carsQuantity"} >= ($city2 - $city2Radius)) {
//         echo "Машина $carsQuantity едет по городу на ${"car$carsQuantity"} км со скоростью не более 70";
//     } else {
//         echo "Машина $carsQuantity едет вне города на ${"car$carsQuantity"} км со скоростью не более 90";
//     }

//     echo '<br>';
//     $carsQuantity--;
// }
