"use strict";

// min 1 Напиши всі можливі варіанти створення функцій.
function A() {}

; // function declaration

var B = function B() {}; // function expression
// Не знаю чи варто вказувати стрілкову функцію, але вкажу на всяк випадок


B = function B() {}; // min 2 Створи функцію, яка буде виводити кількість переданих їй аргументів


function amount() {
  console.log(arguments.length);
}

amount('pavlo', 'andriy', 'sasha', 1, 5, 228, 322); // min 3 Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function callbackNum(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(callbackNum(2, 28)); // min 4 Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
console.log(factorial(6)); // min 5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function concatNumbers(a, b, c) {
  return +('' + a + b + c);
}

var concatResult = concatNumbers(1, 4, 9);
console.log(concatResult); // min 6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

var length = prompt('enter length');
var width = prompt('ented width');

function square(length, width) {
  return width ? length * width : length * length;
}

console.log(square(length, width)); // norm 1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNum(a) {
  var result = 0;

  for (var i = 1; i < a; i++) {
    if (a % i === 0) {
      result += i;
    }
  }

  return a === result ? 'Is perfect' : 'Is not perfect';
}

console.log(perfectNum(6)); // // norm 2 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

var firstNumber = prompt("First number of diapason");
var lastNumber = prompt("Enter last number of diapason");

for (var i = firstNumber; i <= lastNumber; i++) {
  console.log("Number ".concat(i, " ").concat(perfectNum(i)));
}