"use strict";

// Моя норма 1 сезон Атаки Титанів в день
var userName = prompt('Enter your name');
alert("Hello, ".concat(userName)); // Моя норма 2 літри випитої води кожного дня

var currentYear = 2022;
var userYearBirth = prompt("Enter your Year of birth");

if (userYearBirth > 0) {
  alert("Your age is ".concat(currentYear - userYearBirth));
} else {
  alert('Incorrect!');
} // Моя норма 3 прочитані книги на три місяці


var sideLenght = prompt('Enter the length of the side of the square');

if (sideLenght > 0) {
  alert("Perimeter of the square is equal ".concat(+sideLenght * 4));
} else {
  alert("".concat(sideLenght, " is not a number"));
} // Максимум 1


var circleRadius = prompt('Please, insert circle radius here');
var circleRadiusConverted = parseFloat(circleRadius);

if (circleRadiusConverted > 0) {
  var circleSquare = Math.PI * Math.pow(circleRadiusConverted, 2);
  alert("Circle square equals to: ".concat(circleSquare.toFixed(2)));
} // Максимум 2


var distance = parseFloat(prompt("Enter distance between cities"));
var travelTime = parseFloat(prompt("Enter travel time"));

if (distance > 0 && travelTime > 0) {
  alert("Your speed ".concat(distance / travelTime, " km/h"));
} else {
  alert("Incorrect!");
} // Максимум 3 


var cashCount = parseFloat(prompt("How many dollars do you exchange in euros?"));
var exchangeRate = 1;

if (cashCount > 0) {
  alert("You will get ".concat(cashCount * exchangeRate, " euros"));
} else {
  alert('Incorrect!');
}