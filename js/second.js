alert('Готов проверить свои знания?');

var message = +prompt('Ведите пароль чтобы получить доступ:');
var password = 1317;
do {
    if (password == message){
        alert('Правильно!');
    } else if (password != message){
        alert('Неправильно!');
        var message = +prompt('Ведите пароль чтобы получить доступ:');
    }
} while (password != message);

function random(min,max) {
    let randomAnswer = Math.floor(Math.random() * (max + 1 - min) + min);
    return randomAnswer;
}

var minAmount = +prompt('Введите минимальное значение:');
var maxAmount = +prompt('Введите максимальное значение:');
alert('1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление, 5 - остаток от числа (мода).');
var sign = +prompt('Введите номер операции:');

for (let i = 0; i < maxAmount; i++) {
    let num1 = random(minAmount,maxAmount);
    let num2 = random(minAmount,maxAmount);
    if (sign == 1) {
         let primer = +prompt(num1 + ' + ' + num2 + ' = ' );
         let answer = (num1 + num2) == primer ? 'Молодец!' : 'Ошиблись, учите матешу.';
         alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + '. Ваш ответ ' + primer + '. Вы ' + answer);
     } else if (sign == 2) {
         let primer = +prompt(num1 + ' - ' + num2 + ' = ' );
         let answer = (num1 - num2) == primer ? 'Молодец!' : 'Ошиблись, учите матешу.';
         alert(num1 + ' - ' + num2 + ' = ' + (num1 - num2) + '. Ваш ответ ' + primer + '. Вы ' + answer);
     } else if (sign == 3){
        let primer = +prompt(num1 + ' * ' + num2 + ' = ' );
        let answer = (num1 * num2) == primer ? 'Молодец!' : 'Ошиблись, учите матешу.';
        alert(num1 + ' * ' + num2 + ' = ' + (num1 * num2) + '. Ваш ответ ' + primer + '. Вы ' + answer);
     } else if (sign == 4){
        let primer = +prompt(num1 + ' / ' + num2 + ' = ' );
        let answer = (num1 / num2) == primer ? 'Молодец!' : 'Ошиблись, учите матешу.';
        alert(num1 + ' / ' + num2 + ' = ' + (num1 / num2) + '. Ваш ответ ' + primer + '. Вы ' + answer);
     } else if (sign == 5){
        let primer = +prompt(num1 + ' % ' + num2 + ' = ' );
        let answer = (num1 % num2) == primer ? 'Молодец!' : 'Ошиблись, учите матешу.';
        alert(num1 + ' % ' + num2 + ' = ' + (num1 % num2) + '. Ваш ответ ' + primer + '. Вы ' + answer);
     } else if (sign > 5){
         alert('Ошибка, такая операция еще не добавлена...');
         alert('Операция сложения будет применена по умолчанию.');
         let primer = +prompt(num1 + ' + ' + num2 + ' = ' );
         let answer = (num1 + num2) == primer ? 'Молодец!' : 'Ошиблись, учите матешу.';
         alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + '. Ваш ответ ' + primer + '. Вы ' + answer);
     } 
}