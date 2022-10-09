"use strict";

$(function () {
  // our chart
  $('.chart').easyPieChart({
    barColor: '#FFD046',
    trackColor: '#b7bacd',
    scaleColor: '#6c13a7',
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 3,
    trackWidth: undefined,
    size: 83,
    rotate: 0,
    // in degrees
    animate: {
      duration: 1000,
      enabled: true
    },
    easing: function easing(x, t, b, c, d) {
      // easing function
      t = t / (d / 2);

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  });
}); // ICONS 

var stars = $('.star_icon');
var fillOfStars = $('.star_icon path');
stars.each(function (index) {
  $(this).mouseover(function () {
    for (var i = 0; i <= index; i++) {
      fillOfStars.eq(i).css("fill", "#ffdd3f");
    }
  });
  $(this).mouseout(function () {
    for (var i = 0; i <= index; i++) {
      fillOfStars.eq(i).css("fill", "#8D91A3");
    }
  });
  $(this).click(function () {
    for (var i = 0; i < 5; i++) {
      stars.eq(i).off('mouseover');
      stars.eq(i).off('mouseout');
    }

    for (var _i = 0; _i <= index; _i++) {
      stars.eq(_i).addClass('star_icon--active');
    }
  });
}); // TABS 

var tabs = $('.tab_item a');
var cards = $('.card');
tabs.each(function () {
  $(this).click(function (event) {
    event.preventDefault();
    var link = $(this).attr('href');
    cards.each(function () {
      var id = $(this).attr('id');

      if (link === '#' + id) {
        $(this).removeClass('hide').siblings().addClass('hide');
      }
    });
  });
});