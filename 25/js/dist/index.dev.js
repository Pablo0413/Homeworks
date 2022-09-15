"use strict";

// Загальна функція для виведення невірно введених даних 
function incorrectInputData() {
  alert('Incorrect Data !!!!!');
} // // min 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...).


var userAge = +prompt('Введіть ваш вік');

if (userAge && userAge >= 0) {
  switch (true) {
    case userAge >= 0 && userAge <= 11:
      alert('Ваш вік відоповідає дитячому');
      break;

    case userAge >= 12 && userAge <= 17:
      alert('Ваш вік відоповідає підлітковому');
      break;

    case userAge >= 18 && userAge <= 59:
      alert('Ваш вік відоповідає дорослому');
      break;

    case userAge >= 60:
      alert('Ваш вік відоповідає Сашовому');
      break;
  }
} else incorrectInputData(); // // min 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д)


var inputNumber = +prompt('Введіть число від 0 до 9');

if (inputNumber && inputNumber >= 0 && inputNumber <= 9) {
  switch (inputNumber) {
    // не можу зрозуміти чому коли вводиться число 0 не спрацьовує кейс
    case 0:
      alert(')');
      break;

    case 1:
      alert('!');
      break;

    case 2:
      alert('@');
      break;

    case 3:
      alert('#');
      break;

    case 4:
      alert('$');
      break;

    case 5:
      alert('%');
      break;

    case 6:
      alert('^');
      break;

    case 7:
      alert('&');
      break;

    case 8:
      alert('*');
      break;

    case 9:
      alert('(');
      break;

    default:
      incorrectInputData();
      break;
  }
} else incorrectInputData(); // // min 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.


var firstNumber = +prompt('Введіть перше число заданого діапазону');
var lastNumber = +prompt('Введіть останнє число заданого діапазону');

if (firstNumber && lastNumber) {
  summOfNumber = 0;

  for (i = firstNumber; i <= lastNumber; i++) {
    summOfNumber += i;
  }

  alert("\u0421\u0443\u043C\u0430 \u0437\u0430\u0434\u0430\u043D\u043E\u0433\u043E \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0432\u0456\u0434 ".concat(firstNumber, " \u0434\u043E ").concat(lastNumber, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(summOfNumber, " "));
} else incorrectInputData(); // // min 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.


var number1 = prompt('Введіть перше число');
var number2 = prompt('Введіть друге число');

for (var _i = 1; _i <= number1 && _i <= number2; _i++) {
  if (number1 % _i == 0 && number2 % _i == 0) {
    hcf = _i;
  }
}

alert("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0441\u0435\u043B ".concat(number1, " \u0442\u0430 ").concat(number2, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(hcf, ".")); // min 5 Запитай у користувача число і виведи всі дільники цього числа.

var num = prompt('Введіь число: ');
console.log("\u0412\u0441\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0432\u0432\u0435\u0434\u0435\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 ".concat(num, ", \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u044E\u0442\u044C:"));

for (var _i2 = 1; _i2 <= num; _i2++) {
  if (num % _i2 == 0) {
    console.log(_i2);
  }
} // Norma |||||||||||||||||||||||||||||||||||||||||||| 
// norma 1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


var number = +prompt("Введіть п'ятирозрядне число");

if (number && number > 0 && number.toString().length === 5) {
  var reverseNumber = +number.toString().split('').reverse().join(''); // в цьому випадку дізнався що спліт розділяє строку на масив
  // 

  number === reverseNumber ? alert('ВВедене число є паліндромом') : alert('Введене число не є паліндромом');
} else incorrectInputData(); // norma 2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:


var purchaseAmount = +prompt('Введіть суму покупки');

if (purchaseAmount && purchaseAmount > 0) {
  var percentOfDiscount = 0;

  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    percentOfDiscount = 3;
  }

  if (purchaseAmount >= 300 && purchaseAmount < 500) {
    percentOfDiscount = 5;
  }

  if (purchaseAmount >= 500) {
    percentOfDiscount = 7;
  }

  discount = purchaseAmount - purchaseAmount / 100 * percentOfDiscount;
  alert("\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 ".concat(discount, ", \u0437\u043D\u0438\u0436\u043A\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ").concat(percentOfDiscount, "%"));
} else incorrectInputData(); // norma 3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних
// norma 4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


var userToChoose;
dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
i = 0;

do {
  userToChoose = confirm(dayOfWeek[i] + ', Do you want to see the next day?'); // при натисканні ок наш цикл продовжується до того моменту коли ми не нажмемо cancel

  i++;
  if (i > 6) i = 0;
} while (userToChoose); // max 2


document.write("<center><table border='1px'>");

for (a = 1; a < 11; a++) {
  document.write("<tr style='height:40px'>");

  for (b = 1; b < 11; b++) {
    document.write("<td style='width:40px'><center><font size='4'>" + a * b + "</center></font></td>");
  }

  document.write("</tr>");
}

document.write("</table></center>");