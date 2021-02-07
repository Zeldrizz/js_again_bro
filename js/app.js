

var name = prompt('Введите свое имя:');
var birthyear = +prompt('Введите свой год рождения:');
var currentyear = +prompt('Укажите текущий год:');
currentyear = !isNaN(currentyear) ? currentyear : 2021;

function form(string,num1,num2) {
    let info = 'Имя ' + string + ', год рождения ' + num2 + ', нынешний год ' + num1;
    alert(info);
    let age = num1 - num2;
    let message = 'Вас зовут ' + string + ' вам ' + age + ' лет';
    return message;
}
alert(form(name,currentyear, birthyear));