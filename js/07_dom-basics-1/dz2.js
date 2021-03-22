let input = document.createElement('input');
let h2 = document.createElement('h2');
let timer;
document.body.append(input);
document.body.append(h2);
document.getElementsByTagName("input")[0].onkeyup = function(){inputToH2()};

function inputToH2() {
    clearTimeout(timer);
    timer = setTimeout(function() {
    let inputValue = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("h2")[0].innerHTML = inputValue;
}, 300);
};

inputToH2();