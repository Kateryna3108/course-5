import $ from 'jquery';
import 'slick-carousel';

const menu = $('#menu');

menu.addClass('ttt');

menu.attr('title', 'fdghjfd');

console.log(menu.children());
console.log(menu.find('a').addClass('addClassForLink'));


$('a').css('color', 'red');
$(document.body).append('<div>Append</div>');

// document.querySelectorAll('a').forEach((item) => {
//     item.style.color = '#999';
// });

console.log($('#menu').hasClass('ttt'));

let isFixed = false;

$(window).on('scroll.beetroot', function () {
    if ($(this).scrollTop() > 300 && !isFixed) {
        console.log(111);
        $(document.body).css('padding-top', menu.outerHeight(true));

        menu.css({
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            'background-color': 'white',
        });
        isFixed = true;
    } else if ($(this).scrollTop() <= 300 && isFixed) {
        console.log(222);
        $(document.body).css('padding-top', '');
        menu.css(
            'position', 'static',
        );
        isFixed = false;
    }
});

$(window).off('.beetroot');

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,

});

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(event, slick, currentSlide, nextSlide);
});

setTimeout(function () {
    $('.slider').slick('slickGoTo', 2);
}, 5000)
