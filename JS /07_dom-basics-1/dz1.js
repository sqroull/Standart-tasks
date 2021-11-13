let input = document.querySelector('.input');
let button = document.querySelector('.button');
let div = document.querySelector('.counter-element');
let timer = '';

function onClick() {
    if (input.value > 0) {
        div.textContent = input.value;
        let timer = setInterval(function() {
            if (div.textContent === '0' ) {
                clearInterval(timer);
                return;
            };
            button.addEventListener("click", function() {
                clearInterval(timer);
                return;
            });
            div.textContent--;
        }, 1000);
    }
    input.value = '';
};

button.addEventListener('click', onClick);