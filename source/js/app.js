const map = require('./map');
const Parallax = require('./parallax');
const Preloader = require('./preloader');

$(document).ready(() => {
    if ($('.contacts')) {
        map();
    }
});

$(document).ready(() => {
    $('.button__link').on('click', (e) => {
        e.preventDefault();
        $('.flip-container').toggleClass('flip-container__active');
    });
});

$(document).ready(() => {
    $('.hamburger').on('click', () => {
        $('.navigation__full, .navigation__full__active').toggleClass('navigation__full navigation__full__active');
        $('.hamburger').toggleClass('hamburger__active');
    });
});

$(document).ready(() => {
    $('.arrow').on('click', function () {
        if ($(this).hasClass('arrow__down')) {
            $('html, body').animate({
                scrollTop: $(window).height(),
            }, 500);
        } else if ($(this).hasClass('arrow__up')) {
            $('html, body').animate({
                scrollTop: 0,
            }, 500);
        }
    });
});

Parallax.mouseParallax();
Parallax.scrollParallax();
Preloader();
