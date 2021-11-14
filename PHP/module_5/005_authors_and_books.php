<pre>
<?php

$library = [
    'authors' => [
        "john_makkormik@example.com" => [
            'name' => 'Джон Маккормик',
            'email' => 'john_makkormik@example.com',
            'birthDate' => 1950,
        ],
        "martin_robert@example.com" => [
            'name' => 'Мартин Роберт',
            'email' => 'martin_robert@example.com',
            'birthDate' => 1960,
        ],
        "pain_cory@example.com" => [
            'name' => 'Пайн Кори',
            'email' => 'pain_cory@example.com',
            'birthDate' => 1970,
        ],
    ],
    'books' => [
        [
            'title' => 'Чистый код: создание, анализ и рефакторинг',
            'author' => 'martin_robert@example.com',
            'publicDate' => 2010,
        ],
        [
            'title' => 'Девять алгоритмов, которые изменили будущее',
            'author' => 'john_makkormik@example.com',
            'publicDate' => 2014,
        ],
        [
            'title' => 'Идеальный программист',
            'author' => 'martin_robert@example.com',
            'publicDate' => 2011,
        ],
        [
            'title' => 'Живи, вкалывай, сдохни',
            'author' => 'pain_cory@example.com',
            'publicDate' => 2019,
        ],
    ],
];

foreach ($library['books'] as $key => $value) {
    echo 'Книга "' . $value['title'] . '", её написал ' . $library['authors'][$value['author']]['name'] . " " . $library['authors'][$value['author']]['birthDate'] . " (" . $library['authors'][$value['author']]['email'] . ") " . "\n";
}

var_dump($library);

?>
</pre>
