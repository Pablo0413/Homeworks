"use strict";

$(function () {
  $('.hero_slider').slick({
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: true,
    fade: true
  });
});
$(document).ready(function () {
  $('ul.nav_list > li').click(function (e) {
    $('ul.nav_list > li').removeClass('active');
    $(this).addClass('active');
  });
}); // news slider

$(function () {
  $('.news_wrapper').slick({
    prevArrow: '<button type="button"><img class="arrow-prev" src="./assets/img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button"><img class="arrow-next" src="./assets/img/next.svg" alt=""></button>',
    variableWidth: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true
  });
}); // map

var map = L.map('map').setView([48.61, 22.29], 12);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var circleIcon = L.icon({
  iconUrl: 'assets/img/Pin.png',
  iconSize: [109, 109],
  // size of the icon
  shadowSize: [50, 64],
  // size of the shadow
  iconAnchor: [58, 120],
  // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],
  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

});
L.marker([48.61, 22.29], {
  icon: circleIcon
}).addTo(map).bindPopup('Dattebayo').openPopup();