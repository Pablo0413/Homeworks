// Minimum 1 
let firstNumber = parseFloat(prompt('Enter First Number'));
let secondNumber = parseFloat(prompt('Enter Second Number'));
alert(`${(firstNumber + secondNumber).toFixed(1)}`);

// Minimum 2
let stringNumber = "1";
let number = 2;
alert(`Adding string to number ${+stringNumber + +number}`);

// Minimum 3
let inputSize = +prompt('Enter the size of flash drive in GB');

if (inputSize && inputSize > 0) {
    let inputNumber = Math.trunc(inputSize * 1024 / 820);
    alert(`${inputNumber} files with size up to 820 MB`);
} else {
    alert('Incorrect!');
}

// Normalize 1
let availableCash = +prompt('Enter your available cash');
let priceOfChocolate = +prompt('Enter price of chocolate bar');
alert(`You can buy ${Math.trunc(availableCash / priceOfChocolate)} chocolate bar, your balance will contain ${availableCash % priceOfChocolate}`);

// Normalize 2
let value = prompt('Enter a three-digit number ');
let reverseValue = Array.from(value).reverse(3).join('');

console.log(reverseValue)


// maximum 2 
let sum = +prompt('Enter the amount of money');

let yearDeposit = 5;
let numberOfMonths = 2;
let amountOfMonthsinYear = 12;

if (sum && sum > 0) {
    let sumDeposit = (sum / 100 * yearDeposit / amountOfMonthsinYear * numberOfMonths).toFixed(1);
    alert('Sum of deposit money from 5% year deposit in two month ' + sumDeposit);
} else {
    alert('Incorrect!');
}