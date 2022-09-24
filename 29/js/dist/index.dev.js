"use strict";

// first task Створити сторінку, що показує нумерований список пісень:
var playList = [{
  author: 'Twenty One Pilots',
  song: 'Stressed Out',
  link: 'https://open.spotify.com/track/3CRDbSIZ4r5MsZ0YwxuEkn?si=b8f55dce19f2486b'
}, {
  author: 'jockii druce',
  song: 'боі стули пельку',
  link: 'https://open.spotify.com/track/5ZNmRNEc0i3o8sP9NKqsvQ?si=709a4016359e4bcd'
}, {
  author: 'The Neighbourhood',
  song: 'Prey',
  link: 'https://open.spotify.com/track/38kjFXYgPvtuXCPbHPMGte?si=7aebf4d6b03a4fb5'
}, {
  author: 'Måneskin',
  song: 'I WANNA BE YOUR SLAVE',
  link: 'https://open.spotify.com/track/4pt5fDVTg5GhEvEtlz9dKk?si=a194d066c8ae4fd4'
}, {
  author: 'Mr.Kitty',
  song: 'After Dark',
  link: 'https://open.spotify.com/track/0zCgWGmDF0aih5qexATyBn?si=fe7d720d83a44b76'
}, {
  author: 'SadSvit',
  song: 'Молодість',
  link: 'https://open.spotify.com/track/0wpkj8A7T1CjIul0XQtkqK?si=d3f5e880695942aa'
}, {
  author: 'AC/DC',
  song: 'Hells Bells',
  link: 'https://open.spotify.com/track/69QHm3pustz01CJRwdo20z?si=177088fe8c4a450b'
}, {
  author: 'SadSvit',
  song: 'Касета',
  link: 'https://open.spotify.com/track/4MQmxIxM5CXKjdq4IrCWhd?si=964ac2c488cf4ca1'
}, {
  author: 'Manu Chao',
  song: 'Me Gustas Tu',
  link: 'https://open.spotify.com/track/6b37xrsNCWYIUphFBazqD6?si=bebe1b3f86e0477a'
}];
var list = document.getElementById('music_list');
playList.forEach(function (list_item) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = list_item.author + " - " + list_item.song;
  a.setAttribute('href', list_item.link);
  a.setAttribute('target', '_blank');
  li.appendChild(a);
  list.appendChild(li);
});
/*second task 
Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
 На модальном вікні повинен бути текст і кнопка "Закрити". 
 Спочатку модальне вікно не відображається. 
 При кліку на кнопку "Відкрити" з'являється модальне вікно, 
 на кнопку "Закрити" — зникає.
*/

var modal = document.querySelector('.modal_window');

function switchModal() {
  modal.classList.toggle('open');
}
/* third Task
Створити HTML-сторінку зі світлофором і кнопкою, 
яка перемикає світлофор на наступний колір.
*/


var lights = document.querySelectorAll('.light');
var activeLight = 0;

function changeLightColor() {
  lights[activeLight].className = 'light';
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  var currentLight = lights[activeLight];
  currentLight.classList.add(currentLight.getAttribute('id'));
}