// min 1 Напиши всі можливі варіанти створення функцій.
function A() {}; // function declaration

let B = function() {}; // function expression

// Не знаю чи варто вказувати стрілкову функцію, але вкажу на всяк випадок

B = () => {};

// min 2 Створи функцію, яка буде виводити кількість переданих їй аргументів

// min 3 Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

// min 4 Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(number){
    if (number < 0) 
    return -1;
else if (number == 0) 
  return 1;
else {
  return (number * factorial(number - 1));
}
}

console.log(factorial(5));
console.log(factorial(6));