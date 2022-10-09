$(function() {
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
        rotate: 0, // in degrees
        animate: {
          duration: 1000,
          enabled: true
    },
    easing: function (x, t, b, c, d) { // easing function
        t = t / (d/2);
        if (t < 1) {
          return c / 2 * t * t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
      }
  });   
  
});

// ICONS 

const stars = $('.star_icon');
const fillOfStars = $('.star_icon path')

stars.each(function (index) {
    $(this).mouseover(function () {
        for (let i = 0; i <= index; i++) {
            fillOfStars.eq(i).css("fill", "#ffdd3f");
        }        
    });
    $(this).mouseout(function () {
        for (let i = 0; i <= index; i++) {
            fillOfStars.eq(i).css("fill", "#8D91A3");
        }
    });

    $(this).click(function() {
        for (let i = 0; i < 5; i++) {
            stars.eq(i).off('mouseover');
            stars.eq(i).off('mouseout');
        }
        for (let i = 0; i <= index; i++) {
            stars.eq(i).addClass('star_icon--active');
        }
    });
});


// TABS 
const tabs = $('.tab_item a');
const cards = $('.card');

tabs.each(function() {
    $(this).click(function(event) {
        event.preventDefault();

        let link = $(this).attr('href');

        cards.each(function() {
            let id = $(this).attr('id');

            if (link === '#' + id) {
                $(this).removeClass('hide').siblings().addClass('hide');
            }
        });
    });
});