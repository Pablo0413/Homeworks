// Моя норма 1 сезон Атаки Титанів в день
let userName = prompt('Enter your name');
console.log('Hello, ' + userName)

// Моя норма 2 літри випитої кожного дня
let userAge = prompt('Enter your ')

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
    const circleSquare = Math.sqrt((Math.PI * circleRadiusConverted));
    alert(`Circle square equals to: ${circleSquare}`);
}
// Максимум 2
