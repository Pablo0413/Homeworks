"use strict";

// Моя норма 1 сезон Атаки Титанів в день
var userName = prompt('Enter your name');
console.log('Hello, ' + userName); // Моя норма 2 літри випитої кожного дня

var userAge = prompt('Enter your '); // Моя норма 3 прочитані книги на три місяці

var sideLenght = prompt('Enter the length of the side of the square');

if (sideLenght > 0) {
  alert("Perimeter of the square is equal ".concat(+sideLenght * 4));
} else {
  alert("".concat(sideLenght, " is not a number"));
} // Максимум 1


var circleRadius = prompt('Please, insert circle radius here');
var circleRadiusConverted = parseFloat(circleRadius);

if (circleRadiusConverted > 0) {
  var circleSquare = Math.sqrt(Math.PI * circleRadiusConverted);
  alert("Circle square equals to: ".concat(circleSquare));
} // Максимум 2