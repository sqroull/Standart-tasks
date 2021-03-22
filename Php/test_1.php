<?php

$data = array(
        'books' => [],
        'writers' => []
    );

function newBook($title, $writerId, $year){
    global $data;
        $data['books'][] = array('title' => $title, 'writer' => &$data['writers'][$writerId], 'year' => $year);
};

function newWriter($name, $email, $birth){
    global $data;
        $data['writers'][] = array('name' => $name, 'email' => $email, 'birth' => $birth);
};

// Библиотека
    
    newWriter('Н.В. Гоголь', '<a href="#">nikolay@gogol.ru</a>', '1809');  // $writerId = 0
    newWriter('А.С. Пушкин', '<a href="#">alexandr@pushkin.ru</a>', '1799'); // $writerId = 1 
    newWriter('А. Кристи', '<a href="#">agatha@christie.com</a>', '1890'); // $writerId = 2
    
    newBook('Мертвые души', 0, 1841);
    newBook('Вий', 0, 1834);
    newBook('Пиковая дама', 1, 1833);
    newBook('Смерть на Ниле', 2, 1937);
    newBook('Таинственный противник', 2, 1922);

// Вывод

echo '=== Книги ==='.'<br>';
    foreach($data['books'] as $book){
        echo $book['title'].' - '.$book['writer']['name'].' - '.$book['year'].'<br>';
}

echo '<br>'.'=== Авторы ==='.'<br>';
    foreach($data['writers'] as $writers){
        echo $writers['name'].' - '.$writers['email'].' - '.$writers['birth'].'<br>';
}

?>