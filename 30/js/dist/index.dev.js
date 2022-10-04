"use strict";

/* Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, 
який тепер можна редагувати. При натисканні Ctrl + S, 
замість textarea з'являється div з уже зміненим текстом. 
Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш. 
*/
var textInArea = "Расенган чи Чідорі, обирати тобі";
var redactArea = document.getElementById('redactarea');
var textArea = document.getElementById('textarea');
redactArea.textContent = textInArea;
textArea.value = textInArea;
document.addEventListener('keydown', function (ev) {
  if (ev.code == 'KeyE' && ev.ctrlKey) {
    /* Метод preventDefault() скасовує подію, якщо її можна скасувати, 
    тобто дія за замовчуванням, яка належить до події, не відбудеться.
    */
    ev.preventDefault(); // ev.code обробка клавіш на основі їх фізичного положення 'KeyE' (мається на увазі E на клавіатурі)

    redactArea.classList.toggle('hidden'); // classList.togle('hidden') ввімкнення та вимкнення 'hidden'

    textArea.classList.toggle('hidden');
  }
});
document.addEventListener('keydown', function (ev) {
  if (ev.code == 'KeyS' && ev.ctrlKey) {
    ev.preventDefault();
    textInArea = textArea.value;
    redactArea.textContent = textInArea;
    redactArea.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  }
});
/* Створити HTML-сторінку з великою таблицею. 
При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. 
Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
 */
// шкала любові якщо більше число, більша любов.
// не зміг реалізувати сортування, хотів би твоєї допомоги, запитаю у пятницю

var loveRating = [{
  name: 'Sasuke',
  rating: 15
}, {
  name: 'Naruto',
  rating: 22222222222
}, {
  name: 'Sakura',
  rating: 1
}, {
  name: 'Shikamaru',
  rating: 1111111
}, {
  name: 'Hinata',
  rating: 213123312123
}, {
  name: 'Boruto',
  rating: 0
}, {
  name: 'Jiraya',
  rating: 10000000000111
}, {
  name: 'Tsunade',
  rating: 2222222222222222
}];
var listTable = document.querySelector('.table');

function generateTable() {
  loveRating.forEach(function (el) {
    var div = document.createElement('div');
    div.classList.add('column');
    var nameString = document.createElement('span');
    var ratingNumber = document.createElement('span');
    nameString.textContent = el.name;
    ratingNumber.textContent = el.rating;
    div.append(nameString);
    div.append(ratingNumber);
    document.querySelector('.table').append(div);
  });
}

var sortColumn = document.querySelectorAll('.sorting_column');
sortColumn.forEach(function (el) {
  el.addEventListener('click', function (ev) {
    var targetItem = ev.target;
    var sortKey = targetItem.dataset.sort;
    console.log(targetItem);
  });
});
generateTable();
/*Створити HTML-сторінку з блоком тексту в рамці. 
Реалізувати можливість змінювати розмір блоку, 
якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
*/

var request = document.getElementById('resize');
var resizer = request.querySelectorAll('.block_resizer');
var x = 0;
var y = 0;
var w = 0;
var h = 0;

var mouseDownHandler = function mouseDownHandler(ev) {
  // поточне положення мишки
  x = ev.clientX;
  y = ev.clientY; // розрахунок розмірів елемента

  var styles = window.getComputedStyle(request);
  w = parseInt(styles.width);
  h = parseInt(styles.height);
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

var mouseMoveHandler = function mouseMoveHandler(ev) {
  var ex = ev.clientX - x;
  var ey = ev.clientY - y;
  request.style.width = "".concat(w + ex, "px");
  request.style.height = "".concat(h + ey, "px");
};

var mouseUpHandler = function mouseUpHandler() {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
}; // Ми можемо використовувати document.querySelectorAll("div").foreach()безпосередньо.


[].forEach.call(resizer, function (block_resizer) {
  block_resizer.addEventListener('mousedown', mouseDownHandler);
});