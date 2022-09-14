// Загальна функція для виведення невірно введених даних 
function incorrectInputData() {
    alert('Incorrect Data !!!!!')
}

// // min 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...).
let userAge = +prompt('Введіть ваш вік');

if (userAge && userAge >= 0) {
     switch (true) {
        case (userAge >= 0 && userAge <= 11 ):
            alert('Ваш вік відоповідає дитячому');
            break;
        case (userAge >=12 && userAge <= 17 ):
            alert('Ваш вік відоповідає підлітковому')
            break;
        case (userAge >=18 && userAge <= 59):
            alert('Ваш вік відоповідає дорослому')
            break;
        case (userAge >=60):
            alert('Ваш вік відоповідає Сашовому')
            break;
     }  
} else incorrectInputData();

// // min 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д)

let inputNumber = +prompt('Введіть число від 0 до 9')

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
} else incorrectInputData();

// // min 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstNumber = +prompt('Введіть перше число заданого діапазону');
let lastNumber = +prompt('Введіть останнє число заданого діапазону');

if (firstNumber && lastNumber) {
    summOfNumber = 0;

    for (i = firstNumber; i <= lastNumber; i++) {
        summOfNumber += i;
    }
    alert(`Сума заданого діапазону від ${firstNumber} до ${lastNumber} дорівнює ${summOfNumber} `);

} else incorrectInputData();

// // min 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const number1 = prompt('Введіть перше число');
const number2 = prompt('Введіть друге число');

for (let i = 1; i <= number1 && i <= number2; i++) {

    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    } 

} 

alert(`Найбільший спільний дільник чисел ${number1} та ${number2} дорівнює ${hcf}.`);

// min 5 Запитай у користувача число і виведи всі дільники цього числа.
const num = prompt('Введіь число: ');

console.log(`Всі дільники введеного числа ${num}, дорівнюють:`);

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        console.log(i);
    }
}

// Norma |||||||||||||||||||||||||||||||||||||||||||| 

// norma 1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let number = +prompt("Введіть п'ятирозрядне число");
if (number && number > 0 && number.toString().length === 5) {
    let reverseNumber = +number.toString().split('').reverse().join('');

    // в цьому випадку дізнався що спліт розділяє строку на масив

    (number === reverseNumber) ? alert('ВВедене число є паліндромом') : alert('Введене число не є паліндромом');
} else incorrectInputData();

// norma 2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:

let purchaseAmount = +prompt('Введіть суму покупки');

if (purchaseAmount && purchaseAmount > 0) {
    let percentOfDiscount = 0;

    if(purchaseAmount >=200 && purchaseAmount < 300) {
        percentOfDiscount = 3;
    }
    if(purchaseAmount >= 300 && purchaseAmount < 500) {
        percentOfDiscount = 5;
    }
    if(purchaseAmount >= 500) {
        percentOfDiscount = 7;
    }
    discount = purchaseAmount - purchaseAmount / 100 * percentOfDiscount;
    alert(`Сума до оплати ${discount}, знижка становить ${percentOfDiscount}%`);
} else incorrectInputData();

// norma 3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних


// norma 4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let userToChoose;

dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',  'Friday', 'Saturday', 'Sunday'];

i = 0;

do {
    userToChoose = confirm(dayOfWeek[i] + ', Do you want to see the next day?');
    i ++; 
    if (i > 6) i = 0;
} while (userToChoose)

// max 2
document.write("<center><table border='1px'>");
for (a = 1; a < 11; a++) {
  document.write("<tr style='height:40px'>");
  for (b = 1; b < 11; b++) {
    document.write("<td style='width:40px'><center><font size='4'>" + a * b + "</center></font></td>");
  }
  document.write("</tr>");
}
document.write("</table></center>");