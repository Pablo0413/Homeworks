"use strict";

var cards = document.querySelectorAll('.flip_card_inner');
window.setInterval(function () {
  var index = Math.floor(Math.random() * cards.length - 1 + 1);
  cards[index].classList.add('is-active');
  setTimeout(function () {
    cards[index].classList.remove('is-active');
  }, 2000);
}, 2000);