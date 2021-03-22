<?php

function task17($n){
    $sum = 0;
    for ($i=0; $i<=$n; $i++) {
        if ($i%3 == 0 && $i%5 == 0 && $i/3 <> 0) {  
            $sum = $sum - 1;                       
            echo "На 5 без остатка = $i".'<br>';    
        } elseif ($i%5 == 0){
            $sum = $sum + $i;
        } elseif ($i%3 == 0 && $i/3 <> 0) {
            echo "На 3 без остатка = $i".'<br>';
    }
}  
    echo '$sum (Cумма чисел делящихся на 5)'." = $sum".'<br>';
    return $sum;
}
task17(30);

?>