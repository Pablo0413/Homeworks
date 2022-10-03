/* Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, 
який тепер можна редагувати. При натисканні Ctrl + S, 
замість textarea з'являється div з уже зміненим текстом. 
Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш. 
*/

let textInArea = "Расенган чи Чідорі, обирати тобі";

const redactArea = document.getElementById('redactarea');
const textArea = document.getElementById('textarea');


redactArea.textContent = textInArea;
textArea.value = textInArea;





document.addEventListener('keydown', function (ev) { 
    if (ev.code == 'KeyE' && ev.ctrlKey) { 
        /* Метод preventDefault() скасовує подію, якщо її можна скасувати, 
        тобто дія за замовчуванням, яка належить до події, не відбудеться.
        */
        ev.preventDefault(); 
        // ev.code обробка клавіш на основі їх фізичного положення 'KeyE' (мається на увазі E на клавіатурі)
        redactArea.classList.toggle('hidden');
        // classList.togle('hidden') ввімкнення та вимкнення 'hidden'
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

// let NarutoList = [
//     {
//         number: 1,
//         name: 'Naruto Uzumaki',
//     },
//     {
//         number: 1,
//         name: 'Naruto Uzumaki',
//     }
// ];

/*Створити HTML-сторінку з блоком тексту в рамці. 
Реалізувати можливість змінювати розмір блоку, 
якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
*/

const request = document.getElementById('resize');

const resizer = request.querySelectorAll('.block_resizer');

let x = 0;
let y = 0;

let w = 0;
let h = 0;

const mouseDownHandler = function (ev) {
    // поточне положення мишки
    x = ev.clientX;
    y = ev.clientY;

    // розрахунок розмірів елемента
    const styles = window.getComputedStyle(request);
    w = parseInt(styles.width);
    h = parseInt(styles.height);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (ev) {
    const ex = ev.clientX - x;
    const ey = ev.clientY - y;

    request.style.width = `${w + ex}px`;
    request.style.height = `${h + ey}px`;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// Ми можемо використовувати document.querySelectorAll("div").foreach()безпосередньо.

[].forEach.call(resizer, function (block_resizer) {
    block_resizer.addEventListener('mousedown', mouseDownHandler);
});
