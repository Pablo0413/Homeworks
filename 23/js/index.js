// Моя норма 1 сезон Атаки Титанів в день
let userName = prompt('Enter your name');
alert(`Hello, ${userName}`)

// Моя норма 2 літри випитої води кожного дня
const currentYear = 2022;
let userYearBirth = prompt(`Enter your Year of birth`);

if (userYearBirth > 0) {
    alert(`Your age is ${currentYear - userYearBirth}`);
}
else {
    alert('Incorrect!');
}

// Моя норма 3 прочитані книги на три місяці
let sideLenght = prompt('Enter the length of the side of the square')

if(sideLenght > 0) {
    alert(`Perimeter of the square is equal ${+sideLenght * 4}`);
} else {
    alert(`${sideLenght} is not a number`)
}

// Максимум 1
let circleRadius = prompt('Please, insert circle radius here');
let circleRadiusConverted = parseFloat(circleRadius);

if(circleRadiusConverted > 0) {
    const circleSquare = (Math.PI * (circleRadiusConverted**2));
    alert(`Circle square equals to: ${circleSquare.toFixed(2)}`);
}

// Максимум 2
let distance = parseFloat (prompt(`Enter distance between cities`));
let travelTime = parseFloat (prompt(`Enter travel time`));

if (distance > 0 && travelTime > 0) {
    alert(`Your speed ${distance / travelTime} km/h`);
}
else {
    alert (`Incorrect!`);
}

// Максимум 3 
let cashCount = parseFloat(prompt(`How many dollars do you exchange in euros?`));
const exchangeRate = 1

if (cashCount > 0) {
    alert (`You will get ${cashCount * exchangeRate} euros`);
}
else {
    alert('Incorrect!');
}