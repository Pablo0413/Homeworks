"use strict";

// Minimum 1 
var firstNumber = parseFloat(prompt('Enter First Number'));
var secondNumber = parseFloat(prompt('Enter Second Number'));
alert("".concat((firstNumber + secondNumber).toFixed(1))); // Minimum 2

var stringNumber = "1";
var number = 2;
alert("Adding string to number ".concat(+stringNumber + +number)); // Minimum 3

var inputSize = +prompt('Enter the size of flash drive in GB');

if (inputSize && inputSize > 0) {
  var inputNumber = Math.trunc(inputSize * 1024 / 820);
  alert("".concat(inputNumber, " files with size up to 820 MB"));
} else {
  alert('Incorrect!');
} // Normalize 1


var availableCash = +prompt('Enter your available cash');
var priceOfChocolate = +prompt('Enter price of chocolate bar');
alert("You can buy ".concat(Math.trunc(availableCash / priceOfChocolate), " chocolate bar, your balance will contain ").concat(availableCash % priceOfChocolate)); // Normalize 2

var value = prompt('Enter a three-digit number ');
var reverseValue = Array.from(value).reverse(3).join('');
console.log(reverseValue); // maximum 2 

var sum = +prompt('Enter the amount of money');
var yearDeposit = 5;
var numberOfMonths = 2;
var amountOfMonthsinYear = 12;

if (sum && sum > 0) {
  var sumDeposit = (sum / 100 * yearDeposit / amountOfMonthsinYear * numberOfMonths).toFixed(1);
  alert('Sum of deposit money from 5% year deposit in two month ' + sumDeposit);
} else {
  alert('Incorrect!');
}